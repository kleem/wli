import urllib2

def retrieve_page(url):
    ''' Dereference the given URL and returns the retrieved page. '''
    opener = urllib2.build_opener()
    opener.addheaders = [('User-agent', 'Mozilla/5.0')]
    return opener.open(url).read()

import identifiers

def identify(page):
    ''' Run all the available language identifiers on the given page, then returns a structure representing the results and/or possible errors. '''
    result = {}
    
    for identifier in identifiers.ALL:
        try:
            result[identifier.__name__] = identifier(page)
            result[identifier.__name__]['status'] = 'ok'
        except Exception as e:
            result[identifier.__name__] = {
                'status': 'exception',
                e.__class__.__name__: e.args
            }
            
    return result
    