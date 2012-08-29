from bottle import get, post, request, abort, view
import json

import wli

import pymongo

# BEGIN BSON/JSON adaptation layer
from pymongo import json_util
def xjson_dumps(d):
    return json.dumps(d, default=json_util.default)
def xjson_loads(s):
    return json.loads(s, object_hook=json_util.object_hook)
# END

# customize the following line in order to connect to your own instance of MongoDB
mongo = pymongo.Connection('opendata')

@get('/retrieve/<url:path>')
def retrieve_page(url):
    ''' Tell WLI to download the page at the given URL (HTTP only) and to return it to the client. '''
    return wli.retrieve_page('http://'+url)

@post('/identify')
def identify():
    ''' Run WLI's identifiers against the text provided within the request's body (either HTML or plain text), then return the results to the client. '''
    page = request.body.read()
    return json.dumps(wli.identify(page))
    
@get('/retrieve+identify/<url:path>')
def retrieve_page_and_identify(url):
    ''' Tell WLI to download the page at the given URL (HTTP only) and to run WLI's identifiers against it, then return the results to the client. '''
    return json.dumps(wli.identify(wli.retrieve_page('http://'+url)))
    
@get('/language/<code>')
def get_language(code):
    ''' Get information about a laguage given its ISO 639-3 code. '''
    language = mongo.wli.codes.find_one({'id': code}, {'_id': 0})
    if not language:
        abort(404, 'No language with ISO 639-3 code %s' % code)
    return xjson_dumps(language)
    