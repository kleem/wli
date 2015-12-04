import wli

import MySQLdb
import MySQLdb.cursors

# import pymongo
# mongo = pymongo.Connection()

db = MySQLdb.connect(
    host='sma',
    #port=33060,
    user='wli',
    passwd='twittersfera_wli',
    db='twittersfera',
    cursorclass=MySQLdb.cursors.DictCursor,
    use_unicode=True,
    charset='utf8')
    
with db:
    #print 'Retrieving users...'
    users_c = db.cursor()
    users_c.execute("SELECT id FROM users LIMIT 1000000")

    # print 'Dropping MongoDB collection...'
    # mongo.wli.twittersfera.drop() #!!!

    #print 'Deleting old records from rules_users...'
    rules_users_empty_c = db.cursor()
    rules_users_empty_c.execute("DELETE FROM `rules_users` WHERE rule_id=6")

    #print 'Iterating users...'
    for i in xrange(int(users_c.rowcount)):
        try:
            user = users_c.fetchone()
            
            #print "Retrieving tweets for user %d..." % user['id']
            tweets_c = db.cursor()
            tweets_c.execute("SELECT id, user_id, text FROM tweets WHERE user_id=%d" % user['id'])
            
            tweets = tweets_c.fetchall()
            
            n_tweets = len(tweets)
            n_ita = 0
            
            # if a user has less than 3 tweets, no record is inserted
            if n_tweets >= 3:
                #print 'Running CLD on %d tweets...' % n_tweets
                for i, tweet in enumerate(tweets):
                    wli_result = wli.identify(tweet['text'].encode('utf-8'))
                    # print tweet['text'].encode('utf-8')
                    
                    # mongo.wli.twittersfera.save({
                        # 'id': tweet['id'],
                        # 'user_id': tweet['user_id'],
                        # 'text': tweet['text'],
                        # 'wli': wli_result
                    # })
                    
                    if wli_result['chromium_cld']['status'] != 'ok':
                        #print wli_result['chromium_cld']
                        continue
                    
                    if wli_result['chromium_cld']['best'] == 'ita':
                        n_ita += 1
                    
                    #print '%d (%d) ita: %d/%d\r' % (user['id'], i+1, n_ita, n_tweets),
                    
                #print # if a user has no tweets, this leaves a blank line
                
                #print 'Storing results...'
                rules_users_c = db.cursor()
                rules_users_c.execute("INSERT INTO rules_users SET user_id=%d, rule_id=%d, value=%f" % (user['id'], 6, float(n_ita)/n_tweets))
                
                #print
                
                db.commit()
        except:
            print 'error', user['id']
