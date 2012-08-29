use Lingua::Identify qw(:language_identification);

$/ = undef; # used to read the whole STDIN as a single string
$text = <STDIN>;

($language, $probability) = langof($text);
%languages = langof($text);

# export in a python dictionary like format
print "{'best': {'$language': $probability}, 'languages': {";
while ( ($k,$v) = each %languages ) {
    print "'$k': $v,";
}
print "}}";