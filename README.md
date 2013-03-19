WLI
===

Web Language Identifier - try it at http://wafi.iit.cnr.it/multilingualweb/wli/ (please forgive the ugliness of the UI!)

# Usage
Service URL template: `http://wafi.iit.cnr.it/multilingualweb/wli/api/<command>/<parameters>`

Commands:
- GET `retrieve/<url>` to retrieve a web page (HTTP only)
- POST `identify` to run all language identifiers against the text given as the request's body
- GET `retrieve+identify/<url>` to do both in one step, i.e. run all language identifiers against the page at the given URL (HTTP only)

Response example:
```js
{
  "identifier_a": {
    "status": "ok",
    "data": ...,
    "result": {
      "eng": 0.16,
      "ita": 0.52
    },
    "best": "ita"
  },
  "identifier_b": {
    "status": "ok",
    "data": ...,
    "result": {"und": 1},
    "best": "und"
  },
  "identifier_c": {
    "status": "exception",
    ...
  }
}
```

For each identifier, a status code (either `ok` or `exception`) is returned. If the status is `ok`, the best guess
is returned in `best`. `result` provides detailed information, such as confidence scores and other languages that were
considered relevant by the identifier. `data` provides the identifier's original data, unmodified by WLI.

WLI uses [ISO 639-3](http://en.wikipedia.org/wiki/ISO_639-3) language codes only, with the aforementioned exception of original `data`.

# Language Identifiers
- Chromium Compact Language Detector (Google, C++)
- Lingua::Identify (Perl)
- langid.py
- HTML First Lang (a naive identifier that uses the first occurrence of the `lang` attribute to tell the language of the page)

# Planned Identifiers
(not included)
- YALI: http://ufal.mff.cuni.cz/~majlis/yali/
- Language detection library for Java: https://code.google.com/p/language-detection/
- Text_LanguageDetect (PHP): http://pear.php.net/package/Text_LanguageDetect

# Dependencies
(for running the server)
- Python with Bottle framework
- MongoDB & PyMongo
