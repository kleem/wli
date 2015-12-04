
/** cld_languages indexes **/
db.getCollection("cld_languages").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** cld_languages records **/
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000000"),
  "iso_639-2": "eng",
  "name": "ENGLISH",
  "iso_639-1": "en"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000001"),
  "iso_639-2": "dan",
  "name": "DANISH",
  "iso_639-1": "da"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000002"),
  "iso_639-2": "dut",
  "name": "DUTCH",
  "iso_639-1": "nl"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000003"),
  "iso_639-2": "fin",
  "name": "FINNISH",
  "iso_639-1": "fi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000004"),
  "iso_639-2": "fre",
  "name": "FRENCH",
  "iso_639-1": "fr"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000005"),
  "iso_639-2": "ger",
  "name": "GERMAN",
  "iso_639-1": "de"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000006"),
  "iso_639-2": "heb",
  "name": "HEBREW",
  "iso_639-1": "he"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000007"),
  "iso_639-2": "ita",
  "name": "ITALIAN",
  "iso_639-1": "it"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000008"),
  "iso_639-2": "jpn",
  "name": "Japanese",
  "iso_639-1": "ja"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000009"),
  "iso_639-2": "kor",
  "name": "Korean",
  "iso_639-1": "ko"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000a"),
  "comment": "WLI: nb(nob) and nor are two distinct languages in ISO 639",
  "iso_639-2": "nor",
  "name": "NORWEGIAN",
  "iso_639-1": "nb"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000b"),
  "iso_639-2": "pol",
  "name": "POLISH",
  "iso_639-1": "pl"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000c"),
  "iso_639-2": "por",
  "name": "PORTUGUESE",
  "iso_639-1": "pt"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000d"),
  "iso_639-2": "rus",
  "name": "RUSSIAN",
  "iso_639-1": "ru"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000e"),
  "iso_639-2": "spa",
  "name": "SPANISH",
  "iso_639-1": "es"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00000f"),
  "iso_639-2": "swe",
  "name": "SWEDISH",
  "iso_639-1": "sv"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000010"),
  "nonstd_code": "zh-CN",
  "iso_639-2": "chi",
  "name": "Chinese",
  "iso_639-1": "zh"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000011"),
  "iso_639-2": "cze",
  "name": "CZECH",
  "iso_639-1": "cs"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000012"),
  "iso_639-2": "gre",
  "name": "GREEK",
  "iso_639-1": "el"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000013"),
  "iso_639-2": "ice",
  "name": "ICELANDIC",
  "iso_639-1": "is"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000014"),
  "iso_639-2": "lav",
  "name": "LATVIAN",
  "iso_639-1": "lv"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000015"),
  "iso_639-2": "lit",
  "name": "LITHUANIAN",
  "iso_639-1": "lt"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000016"),
  "iso_639-2": "rum",
  "name": "ROMANIAN",
  "iso_639-1": "ro"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000017"),
  "iso_639-2": "hun",
  "name": "HUNGARIAN",
  "iso_639-1": "hu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000018"),
  "iso_639-2": "est",
  "name": "ESTONIAN",
  "iso_639-1": "et"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000019"),
  "comment": "TODO: Although Teragram has two output names 'TG_UNKNOWN_LANGUAGE' and 'Unknown', they are essentially the same. Need to unify them. 'un' and 'ut' are invented by us, not from ISO-639.",
  "name": "TG_UNKNOWN_LANGUAGE",
  "nonstd_code": "ut"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001a"),
  "comment": "TODO: Although Teragram has two output names 'TG_UNKNOWN_LANGUAGE' and 'Unknown', they are essentially the same. Need to unify them. 'un' and 'ut' are invented by us, not from ISO-639.",
  "name": "Unknown",
  "nonstd_code": "un"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001b"),
  "iso_639-2": "bul",
  "name": "BULGARIAN",
  "iso_639-1": "bg"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001c"),
  "iso_639-2": "scr",
  "name": "CROATIAN",
  "iso_639-1": "hr"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001d"),
  "iso_639-2": "scc",
  "name": "SERBIAN",
  "iso_639-1": "sr"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001e"),
  "iso_639-2": "gle",
  "name": "IRISH",
  "iso_639-1": "ga"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00001f"),
  "iso_639-2": "glg",
  "name": "GALICIAN",
  "iso_639-1": "gl"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000020"),
  "comment": "Impossible to tell Tagalog from Filipino at the moment. Use ISO 639-2 code for Filipino here.",
  "iso_639-2": "fil",
  "name": "TAGALOG"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000021"),
  "iso_639-2": "tur",
  "name": "TURKISH",
  "iso_639-1": "tr"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000022"),
  "iso_639-2": "ukr",
  "name": "UKRAINIAN",
  "iso_639-1": "uk"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000023"),
  "iso_639-2": "hin",
  "name": "HINDI",
  "iso_639-1": "hi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000024"),
  "iso_639-2": "mac",
  "name": "MACEDONIAN",
  "iso_639-1": "mk"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000025"),
  "iso_639-2": "ben",
  "name": "BENGALI",
  "iso_639-1": "bn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000026"),
  "iso_639-2": "ind",
  "name": "INDONESIAN",
  "iso_639-1": "id"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000027"),
  "iso_639-2": "lat",
  "name": "LATIN",
  "iso_639-1": "la"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000028"),
  "iso_639-2": "may",
  "name": "MALAY",
  "iso_639-1": "ms"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000029"),
  "iso_639-2": "mal",
  "name": "MALAYALAM",
  "iso_639-1": "ml"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002a"),
  "iso_639-2": "wel",
  "name": "WELSH",
  "iso_639-1": "cy"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002b"),
  "iso_639-2": "nep",
  "name": "NEPALI",
  "iso_639-1": "ne"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002c"),
  "iso_639-2": "tel",
  "name": "TELUGU",
  "iso_639-1": "te"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002d"),
  "iso_639-2": "alb",
  "name": "ALBANIAN",
  "iso_639-1": "sq"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002e"),
  "iso_639-2": "tam",
  "name": "TAMIL",
  "iso_639-1": "ta"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00002f"),
  "iso_639-2": "bel",
  "name": "BELARUSIAN",
  "iso_639-1": "be"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000030"),
  "iso_639-2": "jav",
  "name": "JAVANESE",
  "iso_639-1": "jw"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000031"),
  "iso_639-2": "oci",
  "name": "OCCITAN",
  "iso_639-1": "oc"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000032"),
  "iso_639-2": "urd",
  "name": "URDU",
  "iso_639-1": "ur"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000033"),
  "iso_639-2": "bih",
  "name": "BIHARI",
  "iso_639-1": "bh"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000034"),
  "iso_639-2": "guj",
  "name": "GUJARATI",
  "iso_639-1": "gu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000035"),
  "iso_639-2": "tha",
  "name": "THAI",
  "iso_639-1": "th"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000036"),
  "iso_639-2": "ara",
  "name": "ARABIC",
  "iso_639-1": "ar"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000037"),
  "iso_639-2": "cat",
  "name": "CATALAN",
  "iso_639-1": "ca"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000038"),
  "iso_639-2": "epo",
  "name": "ESPERANTO",
  "iso_639-1": "eo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000039"),
  "iso_639-2": "baq",
  "name": "BASQUE",
  "iso_639-1": "eu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003a"),
  "iso_639-2": "ina",
  "name": "INTERLINGUA",
  "iso_639-1": "ia"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003b"),
  "iso_639-2": "kan",
  "name": "KANNADA",
  "iso_639-1": "kn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003c"),
  "iso_639-2": "pan",
  "name": "PUNJABI",
  "iso_639-1": "pa"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003d"),
  "iso_639-2": "gla",
  "name": "SCOTS_GAELIC",
  "iso_639-1": "gd"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003e"),
  "iso_639-2": "swa",
  "name": "SWAHILI",
  "iso_639-1": "sw"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00003f"),
  "iso_639-2": "slv",
  "name": "SLOVENIAN",
  "iso_639-1": "sl"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000040"),
  "iso_639-2": "mar",
  "name": "MARATHI",
  "iso_639-1": "mr"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000041"),
  "iso_639-2": "mlt",
  "name": "MALTESE",
  "iso_639-1": "mt"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000042"),
  "iso_639-2": "vie",
  "name": "VIETNAMESE",
  "iso_639-1": "vi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000043"),
  "iso_639-2": "fry",
  "name": "FRISIAN",
  "iso_639-1": "fy"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000044"),
  "iso_639-2": "slo",
  "name": "SLOVAK",
  "iso_639-1": "sk"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000045"),
  "comment": "We intentionally set these 2 fields to NULL to avoid confusion between CHINESE_T and CHINESE.",
  "name": "ChineseT",
  "nonstd_code": "zh-TW"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000046"),
  "iso_639-2": "fao",
  "name": "FAROESE",
  "iso_639-1": "fo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000047"),
  "iso_639-2": "sun",
  "name": "SUNDANESE",
  "iso_639-1": "su"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000048"),
  "iso_639-2": "uzb",
  "name": "UZBEK",
  "iso_639-1": "uz"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000049"),
  "iso_639-2": "amh",
  "name": "AMHARIC",
  "iso_639-1": "am"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004a"),
  "iso_639-2": "aze",
  "name": "AZERBAIJANI",
  "iso_639-1": "az"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004b"),
  "iso_639-2": "geo",
  "name": "GEORGIAN",
  "iso_639-1": "ka"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004c"),
  "iso_639-2": "tir",
  "name": "TIGRINYA",
  "iso_639-1": "ti"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004d"),
  "iso_639-2": "per",
  "name": "PERSIAN",
  "iso_639-1": "fa"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004e"),
  "iso_639-2": "bos",
  "name": "BOSNIAN",
  "iso_639-1": "bs"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00004f"),
  "iso_639-2": "sin",
  "name": "SINHALESE",
  "iso_639-1": "si"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000050"),
  "iso_639-2": "nno",
  "name": "NORWEGIAN_N",
  "iso_639-1": "nn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000051"),
  "name": "PORTUGUESE_P",
  "nonstd_code": "pt-PT"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000052"),
  "name": "PORTUGUESE_B",
  "nonstd_code": "pt-BR"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000053"),
  "iso_639-2": "xho",
  "name": "XHOSA",
  "iso_639-1": "xh"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000054"),
  "iso_639-2": "zul",
  "name": "ZULU",
  "iso_639-1": "zu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000055"),
  "iso_639-2": "grn",
  "name": "GUARANI",
  "iso_639-1": "gn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000056"),
  "iso_639-2": "sot",
  "name": "SESOTHO",
  "iso_639-1": "st"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000057"),
  "iso_639-2": "tuk",
  "name": "TURKMEN",
  "iso_639-1": "tk"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000058"),
  "iso_639-2": "kir",
  "name": "KYRGYZ",
  "iso_639-1": "ky"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000059"),
  "iso_639-2": "bre",
  "name": "BRETON",
  "iso_639-1": "br"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005a"),
  "iso_639-2": "twi",
  "name": "TWI",
  "iso_639-1": "tw"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005b"),
  "iso_639-2": "yid",
  "name": "YIDDISH",
  "iso_639-1": "yi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005c"),
  "name": "SERBO_CROATIAN",
  "iso_639-1": "sh"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005d"),
  "iso_639-2": "som",
  "name": "SOMALI",
  "iso_639-1": "so"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005e"),
  "iso_639-2": "uig",
  "name": "UIGHUR",
  "iso_639-1": "ug"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00005f"),
  "iso_639-2": "kur",
  "name": "KURDISH",
  "iso_639-1": "ku"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000060"),
  "iso_639-2": "mon",
  "name": "MONGOLIAN",
  "iso_639-1": "mn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000061"),
  "iso_639-2": "arm",
  "name": "ARMENIAN",
  "iso_639-1": "hy"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000062"),
  "iso_639-2": "lao",
  "name": "LAOTHIAN",
  "iso_639-1": "lo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000063"),
  "iso_639-2": "snd",
  "name": "SINDHI",
  "iso_639-1": "sd"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000064"),
  "iso_639-2": "roh",
  "name": "RHAETO_ROMANCE",
  "iso_639-1": "rm"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000065"),
  "iso_639-2": "afr",
  "name": "AFRIKAANS",
  "iso_639-1": "af"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000066"),
  "iso_639-2": "ltz",
  "name": "LUXEMBOURGISH",
  "iso_639-1": "lb"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000067"),
  "iso_639-2": "bur",
  "name": "BURMESE",
  "iso_639-1": "my"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000068"),
  "comment": "KHMER is known as Cambodian for Google user interfaces.",
  "iso_639-2": "khm",
  "name": "KHMER",
  "iso_639-1": "km"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000069"),
  "iso_639-2": "tib",
  "name": "TIBETAN",
  "iso_639-1": "bo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006a"),
  "iso_639-2": "div",
  "name": "DHIVEHI",
  "iso_639-1": "dv"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006b"),
  "iso_639-2": "chr",
  "name": "CHEROKEE"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006c"),
  "iso_639-2": "syr",
  "name": "SYRIAC"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006d"),
  "name": "LIMBU",
  "nonstd_code": "sit-NP"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006e"),
  "iso_639-2": "ori",
  "name": "ORIYA",
  "iso_639-1": "or"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00006f"),
  "iso_639-2": "asm",
  "name": "ASSAMESE",
  "iso_639-1": "as"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000070"),
  "iso_639-2": "cos",
  "name": "CORSICAN",
  "iso_639-1": "co"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000071"),
  "iso_639-2": "ine",
  "name": "INTERLINGUE",
  "iso_639-1": "ie"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000072"),
  "iso_639-2": "kaz",
  "name": "KAZAKH",
  "iso_639-1": "kk"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000073"),
  "iso_639-2": "lin",
  "name": "LINGALA",
  "iso_639-1": "ln"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000074"),
  "iso_639-2": "mol",
  "name": "MOLDAVIAN",
  "iso_639-1": "mo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000075"),
  "iso_639-2": "pus",
  "name": "PASHTO",
  "iso_639-1": "ps"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000076"),
  "iso_639-2": "que",
  "name": "QUECHUA",
  "iso_639-1": "qu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000077"),
  "iso_639-2": "sna",
  "name": "SHONA",
  "iso_639-1": "sn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000078"),
  "iso_639-2": "tgk",
  "name": "TAJIK",
  "iso_639-1": "tg"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000079"),
  "iso_639-2": "tat",
  "name": "TATAR",
  "iso_639-1": "tt"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007a"),
  "iso_639-2": "tog",
  "name": "TONGA",
  "iso_639-1": "to"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007b"),
  "iso_639-2": "yor",
  "name": "YORUBA",
  "iso_639-1": "yo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007c"),
  "iso_639-2": "cpe",
  "name": "CREOLES_AND_PIDGINS_ENGLISH_BASED"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007d"),
  "iso_639-2": "cpf",
  "name": "CREOLES_AND_PIDGINS_FRENCH_BASED"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007e"),
  "iso_639-2": "cpp",
  "name": "CREOLES_AND_PIDGINS_PORTUGUESE_BASED"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00007f"),
  "iso_639-2": "crp",
  "name": "CREOLES_AND_PIDGINS_OTHER"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000080"),
  "iso_639-2": "mao",
  "name": "MAORI",
  "iso_639-1": "mi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000081"),
  "iso_639-2": "wol",
  "name": "WOLOF",
  "iso_639-1": "wo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000082"),
  "iso_639-2": "abk",
  "name": "ABKHAZIAN",
  "iso_639-1": "ab"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000083"),
  "iso_639-2": "aar",
  "name": "AFAR",
  "iso_639-1": "aa"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000084"),
  "iso_639-2": "aym",
  "name": "AYMARA",
  "iso_639-1": "ay"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000085"),
  "iso_639-2": "bak",
  "name": "BASHKIR",
  "iso_639-1": "ba"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000086"),
  "iso_639-2": "bis",
  "name": "BISLAMA",
  "iso_639-1": "bi"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000087"),
  "iso_639-2": "dzo",
  "name": "DZONGKHA",
  "iso_639-1": "dz"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000088"),
  "iso_639-2": "fij",
  "name": "FIJIAN",
  "iso_639-1": "fj"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000089"),
  "iso_639-2": "kal",
  "name": "GREENLANDIC",
  "iso_639-1": "kl"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008a"),
  "iso_639-2": "hau",
  "name": "HAUSA",
  "iso_639-1": "ha"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008b"),
  "name": "HAITIAN_CREOLE",
  "iso_639-1": "ht"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008c"),
  "iso_639-2": "ipk",
  "name": "INUPIAK",
  "iso_639-1": "ik"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008d"),
  "iso_639-2": "iku",
  "name": "INUKTITUT",
  "iso_639-1": "iu"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008e"),
  "iso_639-2": "kas",
  "name": "KASHMIRI",
  "iso_639-1": "ks"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00008f"),
  "iso_639-2": "kin",
  "name": "KINYARWANDA",
  "iso_639-1": "rw"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000090"),
  "iso_639-2": "mlg",
  "name": "MALAGASY",
  "iso_639-1": "mg"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000091"),
  "iso_639-2": "nau",
  "name": "NAURU",
  "iso_639-1": "na"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000092"),
  "iso_639-2": "orm",
  "name": "OROMO",
  "iso_639-1": "om"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000093"),
  "iso_639-2": "run",
  "name": "RUNDI",
  "iso_639-1": "rn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000094"),
  "iso_639-2": "smo",
  "name": "SAMOAN",
  "iso_639-1": "sm"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000095"),
  "iso_639-2": "sag",
  "name": "SANGO",
  "iso_639-1": "sg"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000096"),
  "iso_639-2": "san",
  "name": "SANSKRIT",
  "iso_639-1": "sa"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000097"),
  "iso_639-2": "ssw",
  "name": "SISWANT",
  "iso_639-1": "ss"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000098"),
  "iso_639-2": "tso",
  "name": "TSONGA",
  "iso_639-1": "ts"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d000099"),
  "iso_639-2": "tsn",
  "name": "TSWANA",
  "iso_639-1": "tn"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009a"),
  "iso_639-2": "vol",
  "name": "VOLAPUK",
  "iso_639-1": "vo"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009b"),
  "iso_639-2": "zha",
  "name": "ZHUANG",
  "iso_639-1": "za"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009c"),
  "iso_639-2": "kha",
  "name": "KHASI"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009d"),
  "iso_639-2": "sco",
  "name": "SCOTS"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009e"),
  "iso_639-2": "lug",
  "name": "GANDA",
  "iso_639-1": "lg"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d00009f"),
  "iso_639-2": "glv",
  "name": "MANX",
  "iso_639-1": "gv"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d0000a0"),
  "name": "MONTENEGRIN",
  "nonstd_code": "sr-ME"
});
db.getCollection("cld_languages").insert({
  "_id": ObjectId("4f577c1d7d9eff315d0000a1"),
  "name": "XX",
  "nonstd_code": "XX"
});
