from bottle import get, post, request, response, abort, view, hook
import json

import wli
from language_codes import iso639_3_index

@hook('after_request')
def enable_cors():
    ''' Enable Cross-Origin Resource Sharing '''
    response.headers['Access-Control-Allow-Origin'] = '*'

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
    ''' Get information about a language given its ISO 639-3 code. '''
    language = iso639_3_index['code']
    if not language:
        abort(404, 'No language with ISO 639-3 code %s' % code)
    return json.dumps(language)
    