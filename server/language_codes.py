import json

with open('codes.json') as codes_file:
  codes = json.loads(codes_file.read())
  
iso639_3_index = {}
iso639_1_index = {}

for code in codes:
  iso639_3_index[code['id']] = code
  try:
    iso639_1_index[code['part1']] = code
  except:
    pass
    