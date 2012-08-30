import sys, os, bottle

sys.path = ['/home/wafi/servers/wli/'] + sys.path
os.chdir(os.path.dirname(__file__))

import api # This loads your application

application = bottle.default_app()
