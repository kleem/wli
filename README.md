WLI
===

Web Language Identifier

# Usage
Service URL template: `http://wafi.iit.cnr.it/multilingualweb/wli/api/<command>/<parameters>`

Commands:
- GET `retrieve/<url>` to retrieve a web page (HTTP only)
- POST `identify` to run all language identifiers against the text given as the request's body
- GET `retrieve+identify/<url>` to do both in one step, i.e. run all language identifiers against the page at the given URL (HTTP only)

# Dependencies
- Python with Bottle framework
- MongoDB & PyMongo

# Language Identifiers
- Chromium Compact Language Detector (Google, C++)
- Lingua::Identify (Perl)
- langid.py
- HTML First Lang (a naive identifier that uses the first occurrence of the `lang` attribute to tell the language of the page)

# Planned Identifiers (not included)
- YALI
- Language detection library for Java: https://code.google.com/p/language-detection/
