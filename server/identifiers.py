import pymongo

# customize the following line in order to connect to your own instance of MongoDB
mongo = pymongo.Connection('opendata')

def isoify(code):
    ''' Map a language code to ISO 639-3, 'unknown' or 'nomap'. 'nomap' means that the code is not mappable to ISO. '''
    if code in ('xxx','XX','un','ut'): # (found in CLD)
        return 'und' # ISO 639-3 identifier for 'unknown': http://www-01.sil.org/iso639-3/codes.asp?order=lang_type&letter=s
        
    # strip regional codes
    code = code.split('-')[0]
    
    # use Limbu ISO 639-3 code (found in CLD)
    if code == 'sit':
        code = 'lif'
        
    # codes should be 2 or 3 characters long
    if len(code) not in (2,3):
        return 'mis' # ISO 639-3 identifier for 'uncoded languages': http://www-01.sil.org/iso639-3/codes.asp?order=lang_type&letter=s
        
    if len(code) == 2:
        iso_code = mongo.wli.codes.find_one({'part1': code})['id']
    else: # if len(code) == 3
        iso_code = mongo.wli.codes.find_one({'id': code})['id']
        
    if iso_code is None:
        return 'mis' # ISO 639-3 identifier for 'uncoded languages': http://www-01.sil.org/iso639-3/codes.asp?order=lang_type&letter=s
    
    return iso_code

def isoify(code):
    return code

# BEGIN identifiers

# Chromium Compact Language Detector
import cld

def chromium_cld(page):
    ''' Run the Chromium Compact Language Detector on the given page. '''
    # Python binding to C++
    data = cld.detect(page)
    
    if data[4] == []: # this could happen when CLD returns 'unknown'
        result = {'und': 1}
    else:
        result = dict([(isoify(l[1]), l[2]/100.0) for l in data[4]])
    
    return {
        'data': data,
        'result': result,
        'best': isoify(data[1])
    }
    
# Lingua::Identify
import subprocess

def lingua_identify(page):
    ''' Run Lingua::Identify on the given page. '''
    # Perl wrapper
    pipe = subprocess.Popen(["perl","/home/wafi/servers/wli/lingua_identify.pl"], stdin=subprocess.PIPE, stdout=subprocess.PIPE) # FIXME absolute path
    out = pipe.communicate(input=page)[0]
    data = eval(out)
    return {
        'data': data,
        'result': dict([(isoify(l[0]), l[1]) for l in data['languages'].items()]), # UNORDERED
        #'result': [(isoify(l[0]), l[1]) for l in sorted(data['languages'].items(), key=lambda x: x[1], reverse=True)], # ORDERED
        'best': isoify(data['best'].keys()[0])
    }
    
# HTML first lang tag
import re
LANG_RE = re.compile('lang=[\'"]([a-zA-Z\\-]+)[\'"]', re.IGNORECASE)

def html_first_lang(page):
    ''' Run a very simplistic language identifier, that search for the first occurrence of the HTML lang attribute in the given page and returns its content. '''
    match = LANG_RE.search(page)
    
    if match is None:
        return {
            'data': {'lang': 'unknown'},
            'result': {'und': 1}, # ISO 639-3 identifier for 'unknown': http://www-01.sil.org/iso639-3/codes.asp?order=lang_type&letter=s
            'best': 'und'
        }
    
    lang = match.group(1).lower()
    return {
        'data': {'lang': lang},
        'result': {isoify(lang): 1},
        'best': isoify(lang)
    }
    
# langid.py
import langid as langid_lib

def langid(page):
    ''' Run langid.py (https://github.com/saffsd/langid.py) on the given page. '''
    data = langid_lib.classify(page)
    return {
        'data': data,
        'result': {isoify(data[0]): data[1]},
        'best': isoify(data[0])
    }

# END identifiers

ALL = [chromium_cld] #ATTENZIONE!!! Solo cld e' attivo!!!

       # lingua_identify,
       # html_first_lang,
       # langid]
       
