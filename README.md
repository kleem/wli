WLI
===

Web Language Identifier

# Usage
Base URL: `http://wafi.iit.cnr.it/multilingualweb/wli/api/<command>/<parameters>`

Commands:
- GET `retrieve/<url>` to retrieve a web page (HTTP only)
- POST `identify` to run all language identifiers against the text given as the request's body
- GET `retrieve+identify/<url>` to do both in one step, i.e. run all language identifiers against the page at the given URL (HTTP only)

# Dependencies
- Python with Bottle framework
- MongoDB & PyMongo

# Language Identifiers
- Chromium Compact Language Detector
- Lingua::Identify (Perl)
- langid.py