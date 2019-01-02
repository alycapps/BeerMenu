const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beermenu");

const beerSeed = [
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "10 BLINKS Cheery Saison",
    "style": "Saison",
    "abv": "9.2%",
    "ibu": "24/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Arbor Cheery Cider",
    "style": "Cider",
    "abv": "6.3%",
    "ibu": "/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Barrel Aged EIK ZON IPA",
    "style": "Sour",
    "abv": "7.0%",
    "ibu": "80/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Bliss Wheat",
    "style": "Wheat Beer",
    "abv": "5.9%",
    "ibu": "15/OG 1.054"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Bollywood Blonde",
    "style": "Blonde",
    "abv": "6.0%",
    "ibu": "7/OG 1.056"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Buzzsaw American IPA",
    "style": "IPA",
    "abv": "7.5%",
    "ibu": "51/OG 1.066"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Cucumber Lime Gose",
    "style": "Gose,Kettle Sour",
    "abv": "4.4%",
    "ibu": "5/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Euchre Pilsner",
    "style": "Larger, Pilsner",
    "abv": "5.5%",
    "ibu": "43/OG 1.05"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Framboozled",
    "style": "Sour",
    "abv": "7.7%",
    "ibu": "7/OG 1.07"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Kick Out The Jam",
    "style": "Sour",
    "abv": "4.6%",
    "ibu": "/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Mackinac Island Fudge Stout",
    "style": "Stout",
    "abv": "5.7%",
    "ibu": "15/OG 1.062"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "MAFKA Barrel Aged Sour Ale",
    "style": "Sour, Specialty",
    "abv": "5.0%",
    "ibu": "/OG "
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Sacred Cow IPA",
    "style": "IPA",
    "abv": "6.8%",
    "ibu": "80/OG 1.064"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Second Sun",
    "style": "Americian Wild Ale",
    "abv": "6.8%",
    "ibu": "80/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Strawberry Blonde",
    "style": "Blonde",
    "abv": "7.7%",
    "ibu": "7/OG1.07"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Treebeard IPA",
    "style": "Pale Ale",
    "abv": "6.2%",
    "ibu": "45/OG"
  },
  {
    "breweryName": "Arbor Brewing company Beers",
    "beerName": "Violin Monster",
    "style": "Specialty",
    "abv": "9.5%",
    "ibu": "35/OG 1.090"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "Blonde Bear",
    "style": "NA",
    "abv": "4.2%",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "Sleepy Badger",
    "style": "ENGLISH ALE",
    "abv": "4.5%",
    "ibu": "36"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "WHITE WOLF",
    "style": "AMERICAN ALE",
    "abv": "5.0%",
    "ibu": "40"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "SHIRE HORSE",
    "style": "ENGLISH ALE",
    "abv": "4.3%",
    "ibu": "35"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "C MONSTER",
    "style": "NA",
    "abv": "6.5%",
    "ibu": "55"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "CHAMELEON SERIES",
    "style": "NA",
    "abv": "5.5%",
    "ibu": "50"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "KING CROW",
    "style": "ENGLISH ALE",
    "abv": "7.2%",
    "ibu": "50"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "NUTTY AMBASSADOR",
    "style": "ENGLISH ALE",
    "abv": "6.0%",
    "ibu": "30"
  },
  {
    "breweryName": "LITTLE Critters Brewing Company",
    "beerName": "LITTLE HOPPER",
    "style": "ENGLISH ALE",
    "abv": "3.6%",
    "ibu": "25"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "LIGHTHOUSE AMBER",
    "style": "GERMAN",
    "abv": "5.25%",
    "ibu": "17"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "BLOOD ORANGE HONEY",
    "style": "AMERICIAN",
    "abv": "5.7%",
    "ibu": "9.8"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "IPA #11",
    "style": "BREW MASTER",
    "abv": "5.7%",
    "ibu": "50"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "BLUEBERRY CREAM ALE",
    "style": "BLUE BERRY",
    "abv": "5.0%",
    "ibu": "14"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "LA CERVEZA",
    "style": "AMERICIAN PALE ALE",
    "abv": "5.9%",
    "ibu": "50/OG 1.046"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "OKTOBERFEST",
    "style": "MUNCH, GERMANY",
    "abv": "6.0%",
    "ibu": "28"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "IMPERIAL CINNAMON HEFEWEIZEN",
    "style": "GERMAN",
    "abv": "8.25%",
    "ibu": "11.75"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "RED SAIL ALE",
    "style": "AMERICAN",
    "abv": "4.5%",
    "ibu": "10.8"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "BLACK CHERRY VANILLA PORTER",
    "style": "NA",
    "abv": "5.25%",
    "ibu": "13"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "CHOCOLATE COVERED CHERRY STOUT",
    "style": "STOUT",
    "abv": "6.8%",
    "ibu": "10.7"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "BELGIAN DUBBEL",
    "style": "BELGIUM",
    "abv": "8.8%",
    "ibu": "19"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "WET RY'D",
    "style": "MICHIGAN",
    "abv": "4.8%",
    "ibu": "32"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "YUZU",
    "style": "PERHAPS SUMMER",
    "abv": "5.5%",
    "ibu": "23"
  },
  {
    "breweryName": "CHEBOYGAN BREWING CO.",
    "beerName": "JUSA PORTER",
    "style": "STOUT",
    "abv": "NA",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "ASSUMPTION SAISON",
    "style": "FARMHOUSE",
    "abv": "6.8%",
    "ibu": "28"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "BACK ALLEY PORTER",
    "style": "NA",
    "abv": "5.5%",
    "ibu": "40.3"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "BACK ALLEY NITRO",
    "style": "NA",
    "abv": "5.5%",
    "ibu": "40.3"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "FIRST STREET WHITE ALE",
    "style": "BELGIAN",
    "abv": "5.6%",
    "ibu": "28.6"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "INTER OCEAN IPA",
    "style": "CASCADE AND COLUMBUS",
    "abv": "6.1%",
    "ibu": "63.2"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "POPULAR BLONDE",
    "style": "UNIQUE BLONDE ALE",
    "abv": "5.2%",
    "ibu": "26.3"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "POPULAR BLONDE NITRO",
    "style": "UNIQUE BLONDE ALE",
    "abv": "5.2%",
    "ibu": "26.3"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "QUEEN CITY KOLSCH",
    "style": "COLOGNE, GERMANY LARGER",
    "abv": "5.2%",
    "ibu": "28.2"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "THORNBERRY'S BEST",
    "style": "ENGLISH ALE",
    "abv": "4.3%",
    "ibu": "36.1"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "BAPAJACK'S BIERE DE GRADE",
    "style": "NEW",
    "abv": "6.6%",
    "ibu": "26.3"
  },
  {
    "breweryName": "FIRST STREET BRWEING CO.",
    "beerName": "DLD DUNKELWEIZEN",
    "style": "GERMANY",
    "abv": "5.4%",
    "ibu": "17.7"
  },
  {
    "breweryName": "603 BREWERY",
    "beerName": "18 MILE RYE PALE ALE",
    "style": "MIX OF AMERICIAN AND ENGLISH HOPS",
    "abv": "6.6%",
    "ibu": "37.5"
  },
  {
    "breweryName": "604 BREWERY",
    "beerName": "GRANITE STOUT",
    "style": "MIX OF AMERICIAN AND ENGLISH HOPS",
    "abv": "8.0%",
    "ibu": "34"
  },
  {
    "breweryName": "605 BREWERY",
    "beerName": "NH ALE",
    "style": "MIX OF AMERICIAN AND ENGLISH HOPS",
    "abv": "5.0%",
    "ibu": "18"
  },
  {
    "breweryName": "606 BREWERY",
    "beerName": "WATERVILLE WHEAT",
    "style": "ENGLISH NOBLE",
    "abv": "5.0%",
    "ibu": "17"
  },
  {
    "breweryName": "607 BREWERY",
    "beerName": "WHITE PEAKS IPA",
    "style": "AMERICAN",
    "abv": "6.6%",
    "ibu": "52"
  },
  {
    "breweryName": "608 BREWERY",
    "beerName": "WINNI ALE",
    "style": "AMERICAN",
    "abv": "6.6%",
    "ibu": "39"
  },
  {
    "breweryName": "609 BREWERY",
    "beerName": "WOOD DEVIL DOUBLE IPA",
    "style": "AMERICAN AND EURO",
    "abv": "9.2%",
    "ibu": "101"
  },
  {
    "breweryName": "610 BREWERY",
    "beerName": "FIRST SMOKED PORTER",
    "style": "AMERICIAN",
    "abv": "7.4%",
    "ibu": "31"
  },
  {
    "breweryName": "611 BREWERY",
    "beerName": "ICE OUT",
    "style": "BELGIAN",
    "abv": "7.0%",
    "ibu": "25"
  },
  {
    "breweryName": "612 BREWERY",
    "beerName": "SUMMALIME",
    "style": "AMERICIAN",
    "abv": "4.5%",
    "ibu": "34"
  },
  {
    "breweryName": "613 BREWERY",
    "beerName": "SUMMATIME PALE ALE",
    "style": "AMERICIAN",
    "abv": "4.5%",
    "ibu": "34"
  },
  {
    "breweryName": "614 BREWERY",
    "beerName": "TOASTED PUMPKIN ALE",
    "style": "AMERICIAN AND ENGLISH",
    "abv": "8.2%",
    "ibu": "28"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "EAGLE IPA",
    "style": "AMERICIAN IPA ",
    "abv": "6.2%",
    "ibu": "50"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "AMERICIAN AMBER ALE",
    "style": "AMERICIAN",
    "abv": "5.0%",
    "ibu": "30"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "RAINBOW RED ALE",
    "style": "INDIA RED",
    "abv": "7.5%",
    "ibu": "62"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "BROWN ALE",
    "style": "AMERICIAN",
    "abv": "5.5%",
    "ibu": "35.5"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "TWO RIVERS RYE",
    "style": "AMERICIAN",
    "abv": "6.6%",
    "ibu": "40"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "TWO HEADED STOUT",
    "style": "ENGLISH",
    "abv": "8.0%",
    "ibu": "38"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "DARWIN'S THEORY",
    "style": "ENGLISH",
    "abv": "8.0%",
    "ibu": "38"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "WHITTLE WEE HEAVY",
    "style": "ENGLISH",
    "abv": "9.5%",
    "ibu": "20"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "LOGGER",
    "style": "BOHEMIAN",
    "abv": "4.5%",
    "ibu": "10"
  },
  {
    "breweryName": "TROUT TOWN",
    "beerName": "SUMMER BLONDE",
    "style": "NA",
    "abv": "4.8%",
    "ibu": "20"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "BEE HEAD",
    "style": "Honey colour, flavoured with Sussex Downs Blossom Honey",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "FESTIVALE",
    "style": "Copper colour with a refreshing fruity flavour",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "GOLD ANGEL",
    "style": "Bright Gold, Full bodied flavour with a gentle citrus hop flavour",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "HOP POCKET",
    "style": "Light India pale ale, clean, hoppy and refreshing",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "LAMMAS ALE",
    "style": "Clear amber, celebrating the first harvest ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "1648 BREWERY",
    "beerName": "SIGNATURE",
    "style": "Very Pale, Sweet and malty ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "4T's BREWERY",
    "beerName": "BIG BRO APA",
    "style": "American pale ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "4T's BREWERY",
    "beerName": "BIG DADDY IPA",
    "style": "Strong hoppy IPA",
    "abv": "7.2",
    "ibu": "NA"
  },
  {
    "breweryName": "4T's BREWERY",
    "beerName": "PILSNER",
    "style": "Cask Pilsner",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "4T's BREWERY",
    "beerName": "WALKERS RESURRECTION",
    "style": "Old ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "4T's BREWERY",
    "beerName": "WARRINGTON SPECIAL BITTER",
    "style": "Fruity bitter with a deep bitter after taste",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "9 LIVES",
    "beerName": "DARK",
    "style": "Dark Ruby Ale with an inviting of roast malt and fruit",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "CASUAL",
    "style": "Bold complex stout using unrefined chocolate",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "EASY AMERICAN BROWN",
    "style": "Biscuit caramel & chocolate notes with subtle cascade flavours",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "JACKAL",
    "style": "Traditional porter made with four different malts",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "LIFE OF BRIAN",
    "style": "Chocolate vanilla porter brewed for Brian Moore's 78th birthday",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "PRIDE",
    "style": "Crisp and clean pale session bitter",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "RESTLESS",
    "style": "Hop hitter with bags of Simcoe and Amarillo hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "SALLY POLLARDS ABSTRACT MAIDEN",
    "style": "Strong pale ale brewed with the help of the Festival Cellar team",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ABSTRACT JUNGLE",
    "beerName": "STURDY IPA",
    "style": "A classic style IPA using big hitting American hops",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ACORN",
    "beerName": "ERNEST IPA",
    "style": "Rich, complex golden ale,  apricot, citrus & spice characteristics",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ACORN",
    "beerName": "RED OAK",
    "style": "Rich red coloured, smooth & malty, citrus fruit & spice aromas",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "AIRE HEADS",
    "beerName": "BLACK X BITTER",
    "style": "Bitter / Mild hybrid",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "AIRE HEADS",
    "beerName": "KIRBY YOUR ENTHUSIASM",
    "style": "Full flavoured pale",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "5IVE SISTERS",
    "style": "Amber best bitter",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "BAD DAY AT THE OFFICE",
    "style": "Pale session IPA",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "BLACK CHERRY SAISON",
    "style": "Black fruit saison",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "CHARISMA",
    "style": "Mosaic hop session bitter",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "PHOTON",
    "style": "Session IPA",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "SECRET CITRA",
    "style": "Pale IPA with Vic Secret and Citra hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "SOUTH PACIFIC PALE ",
    "style": "NZ and Australian hopped IPA",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "TEN STOREY MALT BOMB",
    "style": "80 shilling ale with heavy malt character",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ALECHEMY",
    "beerName": "VORTEX",
    "style": "Session pale ale  ",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ALPHABETA",
    "beerName": "BARREL AGED WHISTLE PIG RYE",
    "style": "Sweet rye ale aged in Whistle Pig Rye casks for two months",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ALPHABETA",
    "beerName": "BEST BITTER",
    "style": "Traditional English hopped Best bitter, light and sessionable.",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ALPHABETA",
    "beerName": "CARDINAL IPA",
    "style": "English style IPA with Cardinal hops",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ALPHABETA",
    "beerName": "WILD HOP RYE",
    "style": "Hop heavy, with rye malts & wild green hops foraged in London",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGELS AND DEMONS",
    "beerName": "ADHME ",
    "style": "American Pale Ale with multi -layered grain flavours",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGELS AND DEMONS",
    "beerName": "BOMBAY SOCIAL ",
    "style": "Social session IPA, light in character with huge Hop loveliness",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGELS AND DEMONS",
    "beerName": "McCANNS HARRY HOP ",
    "style": "Dry hopped for extra aroma, Harry Hop is a true session beer",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGELS AND DEMONS",
    "beerName": "McCANNS HOCKLEY SOUL ",
    "style": "Heart warming soulful Stout",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGLES",
    "beerName": "FERAL NUN",
    "style": "Dark Ruby with oatmeal head",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ANGLES",
    "beerName": "GOAT TOSSER",
    "style": "Old English, ruby traditional bitter",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHLEY DOWN",
    "beerName": "DORT WHEAT",
    "style": "New wheat beer",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHLEY DOWN",
    "beerName": "HARVEST GAMBLE",
    "style": "English pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BAA BREWING",
    "beerName": "2 BRIDGES",
    "style": "Amber ale, full bodied citrus hoppy flavour",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BAA BREWING",
    "beerName": "BAA BEST",
    "style": "English best bitter",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BAKERS DOZEN",
    "beerName": "I'M BRIAN AND SO'S MY WIFE",
    "style": "Rhubarb and Juniper saison",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BAKERS DOZEN",
    "beerName": "MAGIC POTION No. 6",
    "style": "Citra and Ella hopped pale ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BAKERS DOZEN",
    "beerName": "THE TURK",
    "style": "Turkish delight in a glass! Chocolate & Rose porter",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BARN OWL",
    "beerName": "BLACK PIET",
    "style": "Dark ale, velvety maltiness and rich plum & blackcurrant flavour",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BARN OWL",
    "beerName": "GOLDEN GOZZARD",
    "style": "Golden summer ale, crisp bitterness and refreshing fruityness",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BARN OWL",
    "beerName": "GOZZARDS GUZZLER",
    "style": "Dark best bitter, full bodied and malty with a fruity finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BARUM",
    "beerName": "MIDSUMMER",
    "style": "Golden summer ale ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BARUM",
    "beerName": "ORIGINAL",
    "style": "English bitter, light bitterness, smooth finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BEACHY HEAD",
    "beerName": "LEGLESS RAMBLER",
    "style": "English bitter brewed with Bramling Cross hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEACHY HEAD",
    "beerName": "PARSONS PORTER",
    "style": "Porter containing Pale, Crystal, Chocolate and Wheat malts",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEATH",
    "beerName": "ARE YOU WITH ME",
    "style": "Citra red ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEATH",
    "beerName": "ELLA ELLA ELLA",
    "style": "Cask lager using Ella hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BEATH",
    "beerName": "MAD WORLD",
    "style": "Porter, dark chocolate and coffee notes",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BEATH",
    "beerName": "UNICORN INVASION OF DUNDEE",
    "style": "Double Imperial IPA. Mosiac, Citra and Ekaunot hops",
    "abv": "7.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BEDLAM",
    "beerName": "BENCHMARK",
    "style": "Amber ale, sweet fruity notes, with hints of chocolate and malt",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEDLAM",
    "beerName": "MOSAIC SMASH",
    "style": "Single malt and single hopped Mosaic ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BEERBLEFISH",
    "beerName": "BLACKBEERBLE STOUT",
    "style": "Not your average stout, just chocolate crystal and aromatic malts",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BEERBLEFISH",
    "beerName": "EXTRA EXTRA SPECIAL BEERBLEFISH (ESB)",
    "style": "ESB aged for four months in a bordeaux cask",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BEERBLEFISH",
    "beerName": "DELTAFISH",
    "style": "Light pale, with fruit, flora and pine notes",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEESTON HOP",
    "beerName": "ACE OF SPADES",
    "style": "Aromatic porter, hopped with Sorachi Ace",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "BEAVER BITTER",
    "style": "Light chestnut, smooth, full flavoured beer    ",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "BLUE BREW",
    "style": "Brewed with whey from stilton cheese",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "DARK HORSE",
    "style": "Acclaimed dark mild",
    "abv": "3.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "GORDON BENNETT",
    "style": "Dry, malty session bitter",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "OATMEAL STOUT",
    "style": "A dark creamy brew",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "OLD DALBY",
    "style": "A ruby red strong ale",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "STAR BITTER",
    "style": "Crisp, golden amber ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BELVOIR",
    "beerName": "WHIPPLING GOLDEN BITTER",
    "style": "Light-golden crisp summer ale",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BESPOKE",
    "beerName": "MONEY FOR OLD ROPE",
    "style": "Dark stout, dry flavours of malt & grain with deep hop bitterness",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BESPOKE",
    "beerName": "OVER A BARREL",
    "style": "Strong, richly coloured, fruity ale, peppery finish from goldings ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXAR COUNTY",
    "beerName": "DIVIDER",
    "style": "Session Pale ale",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXAR COUNTY",
    "beerName": "EL HEFE",
    "style": "A traditional Hefeweisen",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXAR COUNTY",
    "beerName": "RASPBERRY TIMANFAYA",
    "style": "Raspberry infused kombucha soured brown",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXLEY",
    "beerName": "BEXLEY'S OWN BEER",
    "style": "Well balanced amber pale ale with UK and NZ hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXLEY",
    "beerName": "GOLDEN ACRE",
    "style": "Golden Ale using Ella hops for a sharp hop flavour",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BEXLEY",
    "beerName": "OLD MILL",
    "style": "Dark best bitter made with UK hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "POLYGON WOOD",
    "style": "Red rich and malty with 4 C' hops ",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "SEREN",
    "style": "Welsh pale ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "SPECTRE",
    "style": "Espresso stout, tastes of liquorice and toast",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "SUPER TIDY",
    "style": "English pale ale, soft floral notes",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "T WREX",
    "style": "Golden ale with English and European hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BIG HAND",
    "beerName": "TELEKENISIS",
    "style": "Premium American pale ale",
    "abv": "6.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK ROCK",
    "beerName": "BLACK IPA",
    "style": "Black IPA with complex malt and transatlantic hoppiness",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK TOR",
    "beerName": "WHEAT BEER",
    "style": "Orange and Coriander wheat beer",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACKJACK",
    "beerName": "MO MILD,  MO PROBLEMS",
    "style": "Pale mild, hopped with Progress",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACKJACK",
    "beerName": "RAKUA LIGHT",
    "style": "Pale, heavily single hopped pale",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACKJACK",
    "beerName": "STOUT",
    "style": "Traditional dry stout",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUESTONE (Wales)",
    "beerName": "ELDERFLOWER BLONDE",
    "style": "Straw coloured blonde ale with hints of Elderflower",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUESTONE (Wales)",
    "beerName": "FOSSIL FUEL",
    "style": "Creamy stout with a shot of Espresso for good measure",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BOSUN'S",
    "beerName": "RAZZAMATAZZ",
    "style": "Fresh & fruity raspberry flavoured blonde ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BOSUN'S",
    "beerName": "TELL NO TALES",
    "style": "A very dark mild",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BOUTILLIERS",
    "beerName": "1848 PORTER",
    "style": "Deep, dark and full-bodied, with robust roasted malt & caramel",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BOUTILLIERS",
    "beerName": "RYE PALE ALE",
    "style": "Ruby rye ale packed with Waimea hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BOUTILLIERS",
    "beerName": "SMOKED OATMEAL STOUT",
    "style": "Silky smooth finish, German rauch malt adds a peat smokiness ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BOX SOCIAL",
    "beerName": "FXPA",
    "style": "Hazy, unfined extra pale ale, with Falconers Flighthops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "BOX SOCIAL",
    "beerName": "KAFFIR LIME LEAF",
    "style": "Session IPA brewed with Kaffir lime leaf",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BRADFORD",
    "beerName": "HOGSHEAD RED IPA",
    "style": "Rich, deep, hoppy with spicy, pine resinous aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BRADFORD",
    "beerName": "IVEGATE STOUT",
    "style": "Dark, full-bodied, traditional roasty stout",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BRAGDY TWT LOL",
    "beerName": "GLO IN THE DARK",
    "style": "Dark ale, brewed with US hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BRAGDY TWT LOL",
    "beerName": "Tŵti Ffrŵti",
    "style": "Light golden ale brewed with Mosaic and Chinook hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW BUDDIES",
    "beerName": "BEST BITTER",
    "style": "Well rounded bitterness with spicy and fruity and floral notes",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW BUDDIES",
    "beerName": "CITRA BLACK IPA",
    "style": "Brewed with black & chocolate malt, toasty character, Citra hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW BUDDIES",
    "beerName": "SAISON",
    "style": "Lemony flavour complements the estery & spicy yeast character",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW MONSTER",
    "beerName": "LEVIATHAN",
    "style": "Session IPA",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW YORK",
    "beerName": "HAAST'S EAGLE",
    "style": "NZ pale ale. Initial citrus hit,  crisp, dry, gooseberry character ",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BREW YORK",
    "beerName": "X-PANDA V6",
    "style": "Sesion IPA with Citra,  Nelson Sauvign & Waimea hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "1899",
    "style": "Light, refreshing pale ale with biscuit flavour , medium dry finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "CONSTABLE",
    "style": "Traditional caramel session bitter",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "KNIGHT LIGHT",
    "style": "Roasty porter with chocolate sweetness balanced by a hopiness",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "RACER",
    "style": "Light golden, pioneer green hopped harvest ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "SALLY POLLARD'S SPECIAL PALE ALE",
    "style": "Single hop pale ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "STREET BLOCK",
    "style": "Red rye ale, dry, bitter finish with plenty of spicy, aromatic hops",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWHOUSE & KITCHEN (NOTTINGHM)",
    "beerName": "TRICKY TREE",
    "style": "Traditional IPA with an intense piney & citrusy aroma & flavour",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BRINKBURN ST",
    "beerName": "BYKER BROWN ALE",
    "style": "Hoppy version of a traditional Newcastle brown ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BRINKBURN ST",
    "beerName": "MANGO DIPPER (DIPA)",
    "style": "Super fruity and punchy Double India Pale Ale",
    "abv": "8.199999999999999",
    "ibu": "NA"
  },
  {
    "breweryName": "BRINKBURN ST",
    "beerName": "TYNE TITANS PALE",
    "style": "Golden beer with a reddish hue",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BROCKLEY",
    "beerName": "GOLDEN ALE",
    "style": "Golden ale, hints of tangerine citrus and fresh aroma",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BROCKLEY",
    "beerName": "PALE ALE",
    "style": "Pale ale with hints of apricot",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "BROCKLEY",
    "beerName": "RED ALE",
    "style": "Red ale made with American hops ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BROKEN BRIDGE",
    "beerName": "IT'S 5 O'CLOCK SOMEWHERE",
    "style": "APA with Rye and Vienna malts and Cascade and Chinook hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BROKEN BRIDGE",
    "beerName": "STOP MAKING SENSE",
    "style": "India porter / black IPA. Hoppy with roasted caramel grains",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BROLLY BREWING",
    "beerName": "C.O.W",
    "style": "Citra, Oats and Wai-iti, hazy pale ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BROLLY BREWING",
    "beerName": "LOWFIELD WISSY",
    "style": "Traditional Sussex bitter with 5 malts and 3 hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BUCCANEER",
    "beerName": "LANDLUBBERS CHOICE",
    "style": "American style brown ale",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BUCCANEER",
    "beerName": "AMPED UP OCTOPUS",
    "style": "Orange and grapefruit IPA",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BULLHOUSE",
    "beerName": "SMALL AXE",
    "style": "Hoppy, sessionable IPA packed with resinous West Coast hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPBELL'S",
    "beerName": "FLINTLOCK",
    "style": "Golden hoppy ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPBELL'S",
    "beerName": "GUNNER ",
    "style": "Blonde well balanced session ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPERVAN",
    "beerName": "FARMHOOSE",
    "style": "Saison. Belgian style farmhouse pale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPERVAN",
    "beerName": "LEITH JUICE",
    "style": "Session IPA, quite zesty",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPERVAN",
    "beerName": "MUTINY ON THE BOUNTY",
    "style": "Milk stout, chocolate, coconut and vanilla flavours",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CAMPERVAN",
    "beerName": "PACIFIC ZEST",
    "style": "New Zealand hopped IPA, quite fruity",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CANOPY",
    "beerName": "BROCKWELL IPA",
    "style": "Smooth and rounded, with tropical hop flavour",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CANOPY",
    "beerName": "FULL MOON PORTER",
    "style": "Porter with rich chocolate, coffee and caramel flavours",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CANOPY",
    "beerName": "TALL TREES",
    "style": "A session IPA",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "ELSIE MO",
    "style": "Golden ale known for its subtle floral character and citrus taste",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "HARVEST PALE",
    "style": "Multi-award winning blonde beer with a delicate citrus character",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "MOST HAUNTED",
    "style": "Porter brewed with pumpkin spice and a cocktail of hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "PRESERVATION",
    "style": "East Mids-style best bitter,  subtle malt sweetness, resinous hop character ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "RACE TO THE SEA",
    "style": "Wheat beer brewed with Triskel hops from France",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "SCREETCH OWL",
    "style": "Juicy but balanced IPA with a fresh citrus aroma",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "SEASON OF MISTS",
    "style": "Amber ale brewed with spicy and fruity hops from the UK ",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "SHERWOOD RESERVE",
    "style": "Smooth stout brewed with fresh Colombian coffee beans",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLEGATE",
    "beerName": "MERLIN'S OWN",
    "style": "Well hopped English pale",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLEGATE",
    "beerName": "TOWY GOLD",
    "style": "Pale golden ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTOR",
    "beerName": "12th MAN",
    "style": "Golden hoppy bitter balanced by New World hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTOR",
    "beerName": "HOPPING TOAD",
    "style": "Blonde beer with grassy and citrus hop notes",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTOR",
    "beerName": "THE ROARING FORTIES",
    "style": "Malty biscuit based beer gives way to gentle hop tones",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CAT ASYLUM",
    "beerName": "No. 3",
    "style": "A scottish style pale ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CAT ASYLUM",
    "beerName": "OATY MILD",
    "style": "Mild brewed to a London war time recipe",
    "abv": "3.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CAT ASYLUM",
    "beerName": "RED BARREL",
    "style": "1963 cask version of beer that made its \"reputation\" in keg form",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "CELLAR HEAD",
    "beerName": "RASPBERRY WHEAT BEER",
    "style": "Raspberry wheat beer",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "CELLAR HEAD",
    "beerName": "SINGLE HOP",
    "style": "Single hop variety beer with Target hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CERDDIN",
    "beerName": "CASCADE",
    "style": "Single hopped pale with cascade hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CERDDIN",
    "beerName": "CWRW TRI",
    "style": "A strong dark mild",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHAPTER",
    "beerName": "DEAD MAN'S FIST",
    "style": "Subtly smoked porter, followed by fiery black pepper",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHAPTER",
    "beerName": "PARABOLA",
    "style": "Punchy, fragrant American Pale with a huge Columbus burst",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "FIRE IN THE HOLE",
    "style": "Pale chilli beer, citrusy, tangy and hot!!",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "GOATS MILK",
    "style": "Golden yellow nectar. Champion Beer of Britain 2017",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "GRAPEFRUIT",
    "style": "Pale ale with added grapefruit",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "LIMONCELLO",
    "style": "Lemon based pale ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "OLD PAL",
    "style": "Rich, copper coloured beer which is stacked full of malts",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "PINEAPPLE",
    "style": "Pale ale with added pineapple",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "STOUT COFFIN",
    "style": "Black, chewy and creamy, what a stout should be",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH HANBREWERY",
    "beerName": "BLUENETTE",
    "style": "Honey and oatmeal porter",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH HANBREWERY",
    "beerName": "MAT BLACK",
    "style": "Black IPA  ",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CLARKSHAWS",
    "beerName": "GORGONS'S ALIVE",
    "style": "Golden bitter, summery, spicy and refreshing",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CLARKSHAWS",
    "beerName": "NEW WORLD",
    "style": "American pale ale, with tropical fruits and mango flavour",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "PRUNE",
    "style": "Black ale with added prunes",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "VANILLA JACK",
    "style": "Dark roasted flavours with added mix of vanilla and Jack Daniels",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CLARKSHAWS",
    "beerName": "STRANGE BREW",
    "style": "Pale with a hoppy floral flavour from UK cascade",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "COCKSURE  ",
    "beerName": "P'ALE ALE",
    "style": "Pale, fruity bite using three malts & 3 bouncing flowered hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "COCKSURE  ",
    "beerName": "RED ALE",
    "style": "Red ale with hint of smoke",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "COCKSURE  ",
    "beerName": "SESSION IPA",
    "style": "Very drinkable session IPA",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "COLLYFOBBLE",
    "beerName": "BOB ON",
    "style": "Best bitter with spicy & earthy hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "COLLYFOBBLE",
    "beerName": "DUNNA WITTLE",
    "style": "Light golden blonde ale, citrus aroma, light & refreshing flavour",
    "abv": "3.4",
    "ibu": "NA"
  },
  {
    "breweryName": "COLLYFOBBLE",
    "beerName": "SUPWIYO",
    "style": "Pale ale, tropical fruit aroma, very hoppy, fruity flavour",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFT ORIGINALE",
    "beerName": "AULD ALLIANCE",
    "style": "Dark mild beer, with fruity undertones from red grape juice",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFT ORIGINALE",
    "beerName": "FIFE PILGRIM",
    "style": "Light, hoppy session beer",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFT ORIGINALE",
    "beerName": "FRINGE OF GOLD",
    "style": "Hoppy, golden ale",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFT ORIGINALE",
    "beerName": "GUILD IPA",
    "style": "Robust full-bodied golden IPA",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFT ORIGINALE",
    "beerName": "GUZZ ALE",
    "style": "Traditional Scottish ale with peppery undertones",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFTY LITTLE BREWERY",
    "beerName": "BLACK RYE-NO",
    "style": "Cascadian dark ale",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFTY LITTLE BREWERY",
    "beerName": "RED TALE",
    "style": "Toasted malt notes, hint of passion fruit, pine & forest berries",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CRAFTY LITTLE BREWERY",
    "beerName": "WOLF BITE",
    "style": "Classic APA with a heady citrus aroma and a touch of pine",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CRATE",
    "beerName": "CRATE AMBER",
    "style": "American amber/red ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CRATE",
    "beerName": "CRATE GOLDEN",
    "style": "Floral, grapefruit, pine",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CRATE",
    "beerName": "CRATE RYE",
    "style": "Rich, sweet caramel, spice",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CULLERCOATS / DOG & RABBIT",
    "beerName": "SEA DOG AMERICAN IPA",
    "style": "Collab American hopped ale",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW IAL",
    "beerName": "LIMESTONE COWBOY",
    "style": "Robust copper ale with American hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW IAL",
    "beerName": "POCKET ROCKET",
    "style": "Nice light bitter with floral notes",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW IAL",
    "beerName": "POTHOLE PORTER",
    "style": "Classic style porter with British Goldings hops",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW IAL",
    "beerName": "THE APACHE LINE",
    "style": "American East Coast IPA ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW LLYN",
    "beerName": "CWRW GLYNDWR",
    "style": "Legendary golden ale ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW LLYN",
    "beerName": "PORTH NEIGWL",
    "style": "Light, tasty beer with gorse flowers ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW LLYN",
    "beerName": "SEITHENYN",
    "style": "Refreshing golden beer, with a continental character ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CWRW LLYN",
    "beerName": "Y BRAWD HOUDINI",
    "style": "Pale and flowery",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DANS BREWERY",
    "beerName": "PALE ALE",
    "style": "Light, refreshing, subtle aromas of tropical fruits & blueberries",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DANS BREWERY",
    "beerName": "PORTER",
    "style": "Deep mahogany, taste of coffee, liquorice & sweet roasted malts",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DANS BREWERY",
    "beerName": "ZESTED INTEREST",
    "style": "Pale ale with a blend of orange zest and hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "DEVA CRAFT",
    "beerName": "EUREKA",
    "style": "Fruity, malty session ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DEVA CRAFT",
    "beerName": "OATIMUS PRIME",
    "style": "Hoppy oatmeal pale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DEVA CRAFT",
    "beerName": "TITAN",
    "style": "Light, hoppy, hint of citrus",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVECOTE ",
    "beerName": "DOVE ALE",
    "style": "Copper, chestnut session ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVECOTE ",
    "beerName": "DOVE DOWN UNDER",
    "style": "Full flavoured amber with NZ hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVECOTE ",
    "beerName": "DOVE FROM ABOVE",
    "style": "Unfined India Pale Ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVECOTE ",
    "beerName": "WOOD PIGEON",
    "style": "Strong brown ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DROP THE ANCHOR",
    "beerName": "FUSEE CHAIN AMERICAN PALE",
    "style": "American pale ale packed with Ekuanot hops",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DROP THE ANCHOR",
    "beerName": "PRIEST HOLE PORTER",
    "style": "Rich black porter, coffee and chocolate notes",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DROP THE ANCHOR",
    "beerName": "SILENT STONES",
    "style": "Traditional Indian amber ale, big flavoured beer",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "DROP THE ANCHOR",
    "beerName": "TUCTONIA",
    "style": "Fruity pale ale with an amazing aroma",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "DYNAMITE VALLEY",
    "beerName": "BLACK CHARGE",
    "style": "Oatmeal stout, smooth, sweet and with a hint of coffee",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "EAST LONDON BREWING",
    "beerName": "COWCATCHER AMERICAN PALE",
    "style": "American pale ale, generously flavoured with aromatic hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "EAST LONDON BREWING",
    "beerName": "NIGHTWATCHMAN",
    "style": "A dark premium bitter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "EAST LONDON BREWING",
    "beerName": "ORCHID VANILLA MILD",
    "style": "Dark Mild, lightly spiced with Madagascan vanilla.",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "EDINBREW",
    "beerName": "DER WEISSE HAI ",
    "style": "Crystal wheat ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "EDINBREW",
    "beerName": "FRIENDLY FIRE",
    "style": "American pale with a riot of hops!",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "EDINBREW",
    "beerName": "SUPER STOUT",
    "style": "Oatmeal stout",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ERRANT",
    "beerName": "B82REZ NZ Pale Ale",
    "style": "Pale ale, NZ finest hops, Kohatu, Wai-iti and Motueka",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "ERRANT",
    "beerName": "CRYSTAL SKULL ",
    "style": "Five-hop ruby red ale with fruity Rooibos tea",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ERRANT",
    "beerName": "ILL TEMPERED MUTATED SEA BASS",
    "style": "Milk stout with a bad attitude",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ERRANT / OUT THERE",
    "beerName": "UMBRA DUNKELWEISSE",
    "style": "Collab Dunkelweisse beer",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FALLEN",
    "beerName": "CHEW CHEW",
    "style": "Salted caramel milk stout",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FALLEN",
    "beerName": "GRAPEVINE",
    "style": "New World pale, big tropical and citrus fruit flavours",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FALLEN",
    "beerName": "JUST THE TICKET",
    "style": "Pale hoppy beer using NZ and USA hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FALLEN ACORN",
    "beerName": "DANKASHIRE HOT POT",
    "style": "Session IPA",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FALLEN ACORN",
    "beerName": "POT KETTLE",
    "style": "Powerful porter with coffee and chocolate notes",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FARM YARD ALES",
    "beerName": "HAYBOB",
    "style": "Session bitter, well balanced with hint of caramel",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "FARM YARD ALES",
    "beerName": "PALE PIGLET",
    "style": "Pale ale with Topaz hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FARMAGEDDON",
    "beerName": "OATMEAL HAZE IPA",
    "style": "Cryo hopped IPA",
    "abv": "6.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FARMAGEDDON",
    "beerName": "GOLD PALE ALE",
    "style": "Golden pale ale well hopped",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FARMAGEDDON",
    "beerName": "IPA",
    "style": "Big, hoppy American IPA, using hops from the Pacific Northwest",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FARMAGEDDON",
    "beerName": "MOSAIC IPA",
    "style": "Mosaic hopped IPA",
    "abv": "6.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FARMAGEDDON",
    "beerName": "OATMEAL IPA",
    "style": "Oatmeal IPA",
    "abv": "6.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FAT BELLY",
    "beerName": "CARVER DOONE",
    "style": "Strong Exmoor Porter, roasted and chocolate malts",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FAT BELLY",
    "beerName": "CRAFTY",
    "style": "Hoppy pale ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FAT BELLY",
    "beerName": "GUZZLER",
    "style": "Traditionally British beer made on the North Devon Coast",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY ALES (F.A.B.)",
    "beerName": "SLIPPERY HITCH",
    "style": "A rye beer",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY ALES (F.A.B.)",
    "beerName": "LINCOLN LAGER",
    "style": " Bohemian Pilsner style lager,  crisp with complex flavours ",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY ALES (F.A.B.)",
    "beerName": "ARHWOOOO",
    "style": "NA",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY ALES (F.A.B.)",
    "beerName": "SMOKEY JOE PORTER",
    "style": "Classic Porter with a hint of smokiness,",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY ALES (F.A.B.)",
    "beerName": "WODEWOSE RED IPA",
    "style": "Red IPA, light red in colour, mild caramel, malt & citrus flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY BREWERY (Scotland)",
    "beerName": "3 BRIDGES",
    "style": "Hoppy IPA – Strong on citrus flavours and aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY BREWERY (Scotland)",
    "beerName": "SMOKEY JACK",
    "style": "Gingery brown coloured ale with smoked flavours ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY BREWERY (Scotland)",
    "beerName": "FERRY GRAPEFRUIT",
    "style": "Pale Ale with US and British hops & pink grapefruit flavour",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY BREWERY (Scotland)",
    "beerName": "WORLD GONE MAD",
    "style": "Strong bitter citrus dark Ale",
    "abv": "8.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FINE TUNED",
    "beerName": "LANGPORT BITTER",
    "style": "Traditional English amber bitter",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FINE TUNED",
    "beerName": "SUNSHINE REGGAE",
    "style": "APA, light hoppy nectar flavour",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "JAM",
    "style": "Pale amber infused with Mango and dry hopped with Citra",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "POD",
    "style": "Classic Vanilla oatmeal stout",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "RED",
    "style": "Rich spicy red ale with big hop flavours",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "FIVE POINTS",
    "beerName": "PALE ALE",
    "style": "West coast style pale ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FIVE POINTS",
    "beerName": "RAILWAY PORTER",
    "style": "London style porter",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FIVE POINTS",
    "beerName": "XPA",
    "style": "Extra pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FLASH HOUSE",
    "beerName": "SMOKED CHILLI PORTER",
    "style": "Tasty, rich chilli porter",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FLASH HOUSE",
    "beerName": "CHOCOLATE X ORANGE PORTER",
    "style": "Chocolate orange porter",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FLASH HOUSE",
    "beerName": "WAIMEA RIVER PALE",
    "style": "New Zealand hopped pale ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "CLIPPING IPA",
    "style": "Golden IPA, gooseberry & bitter white wine hop flavours",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "DUSTY PENNY",
    "style": "Porter with chocolate and caramel malt flavours",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "EMPRESS RUPEE",
    "style": "IPA with citrus, grapefruit, lemon & lime hop flavours",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "FLIPPING BEST",
    "style": "A dark brown traditional best bitter with gentle hop flavours",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "FULL CROWN",
    "style": "Traditional ruby brown bitter with a crisp fruity hop flavour",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "GOLDEN SOVEREIGN",
    "style": "Refreshingly dry golden brew with cirus & grapefruit flavour",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "RUSSIAN ROUBLE",
    "style": "Strong, dark Russian imperial stout",
    "abv": "7.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FLIPSIDE",
    "beerName": "STERLING PALE",
    "style": "Session  pale ale with a bitter, spicy hop flavour",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "FOUR CANDLES",
    "beerName": "CITRA PILSNER",
    "style": "Distinctive Citra grapefruit backed by New Zealand Rakau hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "FOUR CANDLES",
    "beerName": "GREEN HOP SESSION PALE",
    "style": "East Kent Goldings green hops picked & in copper within 4 hours",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FOUR CANDLES",
    "beerName": "PACIFIC SESSION PALE",
    "style": "New Zealand Pacific Jade with Rakau and Challenger hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GATES",
    "beerName": "GATES BURTON ALE",
    "style": "Amber ale, based on the original Ind Coope DBA recipe",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GATES",
    "beerName": "RESERVOIR",
    "style": "Amber ale with a finely balanced malt and hop character ",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "GLAMORAN BREWING CO",
    "beerName": "JEMIMA'S PITCHFORK",
    "style": "Crisp pale brew with Chinook and Eldorado hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "GLAMORAN BREWING CO",
    "beerName": "WEST COAST RED",
    "style": "US Red Ale, citrus hop nose, grapefruit, pine & juicy berries",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GLEDE",
    "beerName": "TUCKERS NUTS",
    "style": "Malty beer brewed with Amber and Caravan malts",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "GLEDE",
    "beerName": "TUCKERS TIPPLE",
    "style": "Well balanced English bitter",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GLEDE",
    "beerName": "WESTON GRAND BIER",
    "style": "Hazy, lazy summer wheat",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "GREY TREES",
    "beerName": "AFGHAN",
    "style": "American pale ale using Cascade, Citra and Simcoe hops",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "GREY TREES",
    "beerName": "BLACK ROAD ",
    "style": "Dark smooth & comforting with roasted flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GREY TREES",
    "beerName": "CARADOGS",
    "style": "Copper in colour, with a crisp flavour and a dry finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "GREY TREES",
    "beerName": "MOSAIC  ",
    "style": "American single hopped pale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "GRIBBLE",
    "beerName": "FUZZY DUCK",
    "style": "English bitter with malty bite",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "GRIBBLE",
    "beerName": "LAZY BUZZARD",
    "style": "Light and refreshing golden ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GT ALES",
    "beerName": "BLONDE AMBITION",
    "style": "Zesty blonde ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "GT ALES",
    "beerName": "CRIMSON RYE'D",
    "style": "Six malt red rye ale, rounded fruity finish",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "GT ALES",
    "beerName": "DARK HORSE ",
    "style": "Deep ruby ale with distinctive Blackcurrant aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "GT ALES",
    "beerName": "NORTH COAST IPA",
    "style": "American style IPA, Mango and Passion Fruit aroma",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HAFOD",
    "beerName": "CLWYDIAN BLACK",
    "style": "Welsh stout/porter",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "HAFOD",
    "beerName": "POWERHAUS",
    "style": "Hoppy refreshing pale ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "HALF MOON",
    "beerName": "FARROW'S GOLD",
    "style": "Golden premium ale, with an aromatic hoppy bite",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HALF MOON",
    "beerName": "SPACE HOPPER",
    "style": "Blonde ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HAL'S ALES",
    "beerName": "GOLD",
    "style": "Refreshing golden ale from English Goldings hops.",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "HAL'S ALES",
    "beerName": "NEW INN CHESTNUT",
    "style": "Deep red chestnut ale",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HAL'S ALES",
    "beerName": "NEW INN ZEST",
    "style": "Citrus golden ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HAMMERTON",
    "beerName": "N1",
    "style": "Session pale ale with a variety of fruity and aromatic hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "HAMMERTON",
    "beerName": "N7 ",
    "style": "Refreshing IPA with six different hops from the US and NZ",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HAMMERTON",
    "beerName": "PENTONVILLE",
    "style": "Oyster stout, brewed with fresh wild Maldon oysters ",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HANDYMAN",
    "beerName": "OAT BAY PALE",
    "style": "Pale ale, aromas from Indian Bay leaf, brewed with Irish oats",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HANDYMAN",
    "beerName": "HOPPY SAISON",
    "style": "Farmhouse style saison has Citra, Simcoe & Mosaic hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HANDYMAN V BLACKJACK",
    "beerName": "PALE ALE",
    "style": "Collab session pale ale, malty with USA hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HATTIE BROWN",
    "beerName": "CROW BLACK",
    "style": "Deeply flavoured liquorice porter, intense chocolate flavours",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "HATTIE BROWN",
    "beerName": "DOG ON THE ROOF",
    "style": "Strong dark brown English ale",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HEAVY INDUSTRY",
    "beerName": "ELECTRIC MOUNTAIN",
    "style": "Copper coloured, hopped with Czech and German hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HEAVY INDUSTRY",
    "beerName": "FREAK CHICK",
    "style": "Red malty beer, earthy, spicy and zesty character",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HEAVY INDUSTRY",
    "beerName": "NELSON'S EYE",
    "style": "Golden ale, using Nelson Sauvin hops for flavour",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "HEMLOCK",
    "beerName": "HOPTIMYSTIC",
    "style": "Copper coloured best bitter with a hoppy flavour & citrus aroma",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HETTON LAW",
    "beerName": "HETTON HARVEST GOLD",
    "style": "Golden ale with combination of hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "HETTON LAW",
    "beerName": "HETTON HOWLER BITTER",
    "style": "Traditional bitter with rich malty taste",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HIGH HOUSE FARM",
    "beerName": "MATFEN MAGIC ",
    "style": "Classic traditional English brown ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HIGH HOUSE FARM",
    "beerName": "NEL'S BEST",
    "style": "Pale golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HIGH WEALD",
    "beerName": "CHARCOAL BURNER",
    "style": "Traditional oatmeal stout",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HIGH WEALD",
    "beerName": "CHRONICLE",
    "style": "Session ale brewed with English Fuggles and Goldings hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HILDEN",
    "beerName": "CITRA IPA",
    "style": "Single hopped IPA with Citra hops",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HILDEN",
    "beerName": "IRISH STOUT",
    "style": "Full bodied with pronounced dryness from roasted barley",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HILDEN",
    "beerName": "RYE IPA",
    "style": "Rich, malty base from the rye giving a warm amber hue",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "HILDEN",
    "beerName": "SCULLIONS'S IRISH ALE",
    "style": "Bright amber ale, smooth with a slight taste of honey",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HILDEN",
    "beerName": "TWISTED HOP",
    "style": "Citrusy pale ale, well hopped",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "HILLFIRE",
    "beerName": "3C",
    "style": "Amber Ale made from Columbus, Cascade and Chinook hops",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "HILLFIRE",
    "beerName": "CALIFORNIA GOLD",
    "style": "Thirst quenching golden ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HOLLER BOYS",
    "beerName": "FOG CUTTER",
    "style": "Session IPA",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HOLLER BOYS",
    "beerName": "BRASS HAND",
    "style": "A golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Cricklade)",
    "beerName": "PRECIOUS METAL",
    "style": "Golden Barley Wine ",
    "abv": "8.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Swindon)",
    "beerName": "FLAPJACK BLACK",
    "style": "Breakfast Stout, Coffee, Chocolate, Oats ",
    "abv": "7.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Swindon)",
    "beerName": "LODE STAR",
    "style": "Pale ale brewed with 2 classic American hop varieties UK grown",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Swindon)",
    "beerName": "RED STAR",
    "style": "Resinous American red ale ",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Swindon)",
    "beerName": "RISING STAR",
    "style": "Ultra fruity and hazy unfined Session IPA ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP STUDIO",
    "beerName": "MOSAIC",
    "style": "Big juicy pale ale with oats & mosaic hops. Pine & berries aroma",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP STUDIO",
    "beerName": "SOLSTICE",
    "style": "A India pale lager",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP STUFF",
    "beerName": "A.P.A",
    "style": "American pale ale with five hop variants",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP STUFF",
    "beerName": "FUSILIER",
    "style": "Easy drinking amber, malty biscuity English bitter",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP STUFF",
    "beerName": "MJANGO UNCHAINED",
    "style": "English pale ale flavoured with Mango",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPCRAFT",
    "beerName": "KILLING JOKE",
    "style": "British Jester Hopped Pale Ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPCRAFT",
    "beerName": "RED MIST",
    "style": "US Hopped Red Ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPCRAFT",
    "beerName": "SPANISH MAIN",
    "style": "Jamaican stout, muscavado sugar & pepper stout",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPHURST",
    "beerName": "ARLO",
    "style": "American West Coast pale ale. Citra, Chinook and Cascade hops",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPHURST",
    "beerName": "ENVOLVE",
    "style": "English single hopped pale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HOPHURST",
    "beerName": "MELLORS",
    "style": "Blonde ale with delicate floral notes",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HORBURY",
    "beerName": "JFB - ERNEST",
    "style": "A light & fresh pale ale with a dry, citrusy lemon finish.",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "HORBURY",
    "beerName": "SUNDOWN",
    "style": "Powerful blend of citrus hops with lingering tropical fruit finish",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HORBURY",
    "beerName": "TIRAMISU",
    "style": "Chocolate & Coffee Porter with a nutty bitter yet silky finish",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "HYBRID",
    "beerName": "HIPPY CHICK",
    "style": "Premium lager and pale malts and a big fruity floral hop hit",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HYBRID",
    "beerName": "PINK SUNSHINE",
    "style": "Raspberry wheat beer",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HYBRID",
    "beerName": "STREET LEGAL",
    "style": "American pale with Mosiac hops and dry hopped with Simcoe",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "INNER BAY",
    "beerName": "AMBER",
    "style": "Pale -  marmalade on toast",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "INNER BAY",
    "beerName": "CITRINE",
    "style": "Refreshing golden ale with a delicate citrus aroma",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "INNER BAY",
    "beerName": "JASPER",
    "style": "Dark ale with complex flavours ",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLY BOYS",
    "beerName": "AUTUMN GOLD",
    "style": "NA",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLY BOYS",
    "beerName": "JOLLY COLLIER",
    "style": "Dark Yorkshire porter, robust flavour and smooth aftertaste",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLY SAILOR",
    "beerName": " GOLD",
    "style": "Refreshing golden ale with citrus, fruit and herbal notes",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLY SAILOR",
    "beerName": "JOLLY INDIAN SUMMER",
    "style": "India Pale Ale. Light amber colour hints of honey, citrus and spice",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLYBOAT",
    "beerName": "GRENVILLE'S RENOWN",
    "style": "Smooth English bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLYBOAT",
    "beerName": "MAINBRACE",
    "style": "English brown ale ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "JOLLYBOAT",
    "beerName": "PLUNDER",
    "style": "Traditional malty English best bitter",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KEEP BREWING",
    "beerName": "AXIOM",
    "style": "Fruity tropical golden ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "KENNET AND AVON",
    "beerName": "DUNDAS",
    "style": "Copper coloured bitter with 100% US hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "KENNET AND AVON",
    "beerName": "SAVERNAKE STOUT",
    "style": "Full bodied with aromas of licorice, roasted coffee, chocolate",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "CITRA",
    "style": "Citrus flavours and aromas from the single hop series",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "COBNUT",
    "style": "Ruby Ale, generously hopped, dark and nutty",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "DARK HORSE ",
    "style": "Stout, smooth, complex bitter stout enriched with liquorice",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "GREEN GIANT IPA",
    "style": "A colossal amount of freshly harvested East Kent Goldings",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "KGB",
    "style": "Kent Golding Bitter, a taste of historic Kent",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "PROHIBITION",
    "style": "American Pale Ale, hopped with some of the new US varieties",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "THE NEW BLACK",
    "style": "Black version of American Pale Ale, light & hoppy ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KENT BREWERY",
    "beerName": "ZINGIBER",
    "style": "American hops with ginger for a fruity and warming light beer",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KETTLESMITH",
    "beerName": "STREAMLINE",
    "style": "Refreshing blonde ale brewed with lager malt",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "KETTLESMITH",
    "beerName": "TIMELINE",
    "style": "Hop driven, elegant IPA with US and UK hops",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "KEW",
    "beerName": "BOTANIC",
    "style": "Sessionable amber ale, UK Cascade hops, infused with juniper",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KEW",
    "beerName": "PAGODA PALE No1",
    "style": "Pale, No.1 is brewed with the UK grown Chinook hop",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "KILN",
    "beerName": "BRICKS & PORTER",
    "style": "Smoked porter, chocolate, coffee and a subtle smokiness ",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "KILN",
    "beerName": "SESSION AIPA",
    "style": "A session strenth IPA",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KINGS CLIFFE",
    "beerName": "5C",
    "style": "A golden session ale with punchy American hop",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KINGS CLIFFE",
    "beerName": "No10",
    "style": "Traditional dark malty English ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KINGS CLIFFE",
    "beerName": "P51",
    "style": "6 different malts giving a distinctive coffee/dark chocolate taste",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KINNEIL BREW HOOSE",
    "beerName": "KINCARDINE SUNSET",
    "style": "Slightly citrusy & hoppy. Named after sunset over the River Forth",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KINNEIL BREW HOOSE",
    "beerName": "WAYFINDER",
    "style": "Pale, refreshing using Saaz hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "KNOCKOUT",
    "beerName": "IRISH RED ALE",
    "style": "Irish Red Ale has a flavoursome jab on the palate!",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "KNOCKOUT",
    "beerName": "TRISKAIDEKAPHOBIA",
    "style": "Pale lager, hopped using lots of Mosaic, Galaxy and Topaz",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "KNOCKOUT",
    "beerName": "WHEAT  ",
    "style": "Irish wheat beer",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LACADA",
    "beerName": "EAST THE BEAST",
    "style": "IPA, single malt with a mass of hops",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LACADA",
    "beerName": "SHORE",
    "style": "Seaweed stout",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LACADA",
    "beerName": "WEST BAY",
    "style": "Pale ale, dry hopped with Citra hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "LANDLOCKED",
    "beerName": "BEETROOT SOUR",
    "style": "Kettle soured pale with partially fermented lacto-beetroot ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LANDLOCKED",
    "beerName": "ISLAND OF 4C's",
    "style": "An Enlish style IPA",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LANDLOCKED",
    "beerName": "MANGO SOUR",
    "style": "NA",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LANDLOCKED",
    "beerName": "WEST COAST SIX HOP",
    "style": "US west coast style IPA featuring 6 hop varieties",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LAWMAN",
    "beerName": "ELDRITCH",
    "style": "Black IPA, made with speciality malts & large amount of US hops",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LAWMAN",
    "beerName": "ONYX",
    "style": "Rich black stout, dark chocolate bitterness & roasted coffee flavour",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LAWMAN",
    "beerName": "PIXEL BANDIT",
    "style": "Session ale, with a big hop flavour for a low abv",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LEMMINGS",
    "beerName": "BACKSCRATCHER",
    "style": "Chestnut brown ale, coffee and roast chocolate finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LEMMINGS",
    "beerName": "DARK SIDE",
    "style": "Dark ruby porter, coffee, dark fruit and chocolate",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "ARCHER",
    "style": "US style pale ale with strong citrus hop flavours and aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "BRANDRETH, LUDLAM & TURNER",
    "style": "A blend of Brown Stout with Tuck Porter",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "FOUNTAINDALE",
    "style": "Pale ale with Challenger, Fuggles, Brewers Gold & Celeia hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "GEORDIUM GRANDSONIUM",
    "style": "Nuclear Brown Ale, unfined brown ale with a US hop kick",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "GIN and BEER IT",
    "style": "Infused with juniper berries, orange & lemon peel ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "HANGMAN'S NOOSE",
    "style": "A blend of Brown Stout with Hood Best Bitter",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "HOOD",
    "style": "Best bitter packed with Maris Otter malt and choice hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "JOSEF KELLER",
    "style": "Chocolate cherry stout with a hint of bitter chocolate",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "MARION",
    "style": "A pale ale with grapefruit hop and biscuit malt flavours",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "OWD TOM",
    "style": "Brown stout. Recipe from 1820 served from wooden casks",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "QUARTERSTAFF",
    "style": "Rich full bodied stout, generous blackcurrant hop bitterness",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "ROBINS RED FEST",
    "style": "Old ale, matured in cask for three months",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "SALLY POLLARD'S HONEY'D AMBER",
    "style": "Honey amber Ale brewed with help of Festival bar managers",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "SHERIFF",
    "style": "True India pale ale with a powerful English hop aroma",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "SHERWOOD",
    "style": "Extra pale ale with an orange citrus aroma",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "LINCOLN GREEN ",
    "beerName": "TUCK",
    "style": "A silky smooth porter with chocolate coffee flavours",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LINEAR",
    "beerName": "YSBEIDIAU HEULOG",
    "style": "American pale ale,  late hopped with Columbus and Cascade",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LINES",
    "beerName": "CYRO HOP",
    "style": "Oaty Session IPA, acidified and oaty, dry hopped in Cryo Lupulin",
    "abv": "3.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LISTERS",
    "beerName": "AMERICAN PALE",
    "style": "Light and hoppy with a citrus hit and very satisfying",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LISTERS",
    "beerName": "LIMEHOUSE PORTER",
    "style": "Porter, dark in colour, with hints of coffee and molasses",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE BLACK DOG",
    "beerName": "AMERICAN PALE ALE",
    "style": "Bold grapefruit and citrus American hopped pale.",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE BLACK DOG",
    "beerName": "INDIA PALE ALE",
    "style": "Delicate lime and floral English hopped ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE CRITTERS",
    "beerName": "NUTTY AMBASSADOR",
    "style": "Hazelnut milk stout, with coffee and chocolate notes",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE CRITTERS",
    "beerName": "SHIRE HORSE",
    "style": "Chestnut coloured English best bitter",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE DRAGON",
    "beerName": "CLEDDAU GOLD",
    "style": "Golden pale ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE DRAGON",
    "beerName": "JACK SOUND",
    "style": "Amber ale with balanced hop character",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLE DRAGON",
    "beerName": "WATWICK BAY",
    "style": "Bright, hoppy, unfiltered. Full of bold new world hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LEVEN",
    "beerName": "COOL ROY",
    "style": "Refreshing golden bitter, prominent intense fruity dry hop aroma",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LEVEN",
    "beerName": "MARY QUEEN OF SCOTS",
    "style": "Golden with  a subtle honey, earthy and slightly spicy aroma",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LEVEN",
    "beerName": "PALE ALICE",
    "style": "\"Craft lager\" style, quite malty, pale yellow in colour",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LOMOND",
    "beerName": "KESSOG",
    "style": "Dark in colour with warm spicy flavours",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LOMOND",
    "beerName": "LOST IN MOSAIC",
    "style": "American pale ale featuring Mosaic hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LOMOND",
    "beerName": "SILKIE STOUT",
    "style": "Rich dark chocolate stout, coffee and chocolate aromas",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LOCH LOMOND",
    "beerName": "SOUTHERN SUMMIT",
    "style": "Light blonde but highly hopped with Summit and Citra hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON BREWING CO",
    "beerName": "100 OYSTERS",
    "style": "Oyster Stout, brewed with 100 fresh oysters and shells",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON BREWING CO",
    "beerName": "BEER STREET",
    "style": "Best bitter, with toffee and wood aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON BREWING CO",
    "beerName": "SKYLINE",
    "style": "US pale ale, dry hopped with Amarillo, Galaxy & Mosaic hops",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON ROAD",
    "beerName": "BEAVOR LIQUOR",
    "style": "Stout",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON ROAD",
    "beerName": "GLUTEANUS MINAMUS",
    "style": "Straw coloured, refreshing with bursts of Lemon and Lime  ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON ROAD",
    "beerName": "SHERE KHAN",
    "style": "Blood orange IPA",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LORDS",
    "beerName": "1895",
    "style": "refreshing golden ale, good malt flavour & best English hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LORDS",
    "beerName": "HAVELOCK",
    "style": "IPA with lots of hops as well as a touch of spice and a hint curacao",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "LUCKIE",
    "beerName": "80 SHILLINGS",
    "style": "Traditional dark-red Scottish ale",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "LUCKIE",
    "beerName": "NEW LEAF PALE",
    "style": "Pale ale brewed with new world hops",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "LUCKIE",
    "beerName": "PORTER",
    "style": "Chocolate aroma, hints of dark fruit",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LUCKIE",
    "beerName": "YELLAE LINTIE",
    "style": "Strong golden ale brewed with a Scottish ale yeast",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAD DOG",
    "beerName": "ANCHO CHOCOLATE CHEESECAKE",
    "style": "Chocolate malt & chocolate biscuits and Ancho chilli's",
    "abv": "6.7",
    "ibu": "NA"
  },
  {
    "breweryName": "MAD DOG",
    "beerName": "MERTHYR FERKER (THE LEGEND DAVE)",
    "style": "Fruity Simcoe pale, with orange peel added to the boil",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MAD DOG",
    "beerName": "NOW IN A MINUTE",
    "style": "Red in colour with citrus bittering and flavours of dark fruits",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAD DOG",
    "beerName": "STOUTY MCSTOUTFACE",
    "style": "Smooth, chocolate and roast flavours from a hefty 6 malts",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MALLINSONS",
    "beerName": "MOTUEKA",
    "style": "Blonde beer with a juicy, fruity hop aroma and a bitter taste ",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "MALLINSONS",
    "beerName": "NELSON SAUVIN",
    "style": "Golden coloured,citrusy grapefruit nose, hoppy citrus taste",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MANCHESTER BREW CO",
    "beerName": "FACTORY PALE",
    "style": "Straw colour, dry pale, gently hopped with Vic Secret & Mosaic",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MANCHESTER BREW CO",
    "beerName": "KING COTTON",
    "style": "Traditional best bitter, heavily late hopped with US and NZ hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MANCHESTER BREW CO",
    "beerName": "KIR BIER",
    "style": "Tart Blackcurrant wheat, super sharp, purple beer ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET BOSWORTH",
    "beerName": "CASCADING BLOX",
    "style": "Cascade hopped pale ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET BOSWORTH",
    "beerName": "INDIAN SUMMER",
    "style": "Pale, refreshing with lingering citrus finish ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET BOSWORTH",
    "beerName": "PORTER",
    "style": "Very popular easy drinking porter",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET BOSWORTH",
    "beerName": "SESSION ALE",
    "style": "Traditional, light and easy drinker",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET BOSWORTH",
    "beerName": "STOUT  ",
    "style": "Old fashioned stout with chocolate and roast malt",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "GATE HOPPER",
    "style": "Pale golden, hoppy brew",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "GHOST TRAIN",
    "style": "Dark ruby coloured porter,  slightly sweet,  roast malt aftertaste",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "KIWI IPA",
    "style": "A pale golden hoppy ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "MAIBAUM ALT",
    "style": "German style alt beer",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "MAYHEM",
    "style": "Tawny premium bitter, malty aroma with complex flavours ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "MIDGE",
    "style": "Pale gold, full of hop flavour.",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "MILE BY MILE",
    "style": "Golden, packed with US hops, lingering bitter finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "MAYPOLE",
    "beerName": "MONTEREY HOP",
    "style": "Pale, distinct aroma and flavour from Cascade and Citra hops",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "McCOLLS'S",
    "beerName": "BEST BITTER",
    "style": "Unashamedly rich, resinous and bitter",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "McCOLLS'S",
    "beerName": "GOLDEN ALE",
    "style": "Ultra pale ale with lemon and floral aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "McCOLLS'S",
    "beerName": "IPA",
    "style": "English IPA with hop flavours and aroma",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MIGHTY MEDICINE",
    "beerName": "MADCHESTER CREAM",
    "style": "Based on the original great Boddingtons",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MIGHTY MEDICINE",
    "beerName": "PIRATE JUICE",
    "style": "Session IPA",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MIGHTY MEDICINE",
    "beerName": "STUNNING BLONDE",
    "style": "Blonde pale ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "MILETREE",
    "beerName": "BLACK LAGER",
    "style": "Cask conditioned lager, full of character, with a smooth finish",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MILETREE",
    "beerName": "HARVESTER",
    "style": "Pale golden harvest ale with a refreshing grainy malt flavour",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "MILETREE",
    "beerName": "HONEY PORTER",
    "style": "Dark porter with hints of honey, coffee and chocolate",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MITHRIL",
    "beerName": "OCTOPUSSY",
    "style": "Deep golden ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "MILL VALLEY",
    "beerName": "DUKES",
    "style": "An English style IPA",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MILL VALLEY",
    "beerName": "MILL BLONDE",
    "style": "Blonde ale, fruity, banana, light grapefruit, malty backbone",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MITHRIL",
    "beerName": "DERE STREET",
    "style": "Light amber English bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MONTY'S",
    "beerName": "DARK SECRET",
    "style": "Full bodied oatmeal stout, chocolate and coffee taste",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MONTY'S",
    "beerName": "MASQUERADE",
    "style": "Premium golden bitter",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MORTON COLLINS",
    "beerName": "RYHILL PALE ALE",
    "style": "NA",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MORTON COLLINS",
    "beerName": "WINTERSETT GOLD",
    "style": "Classic  English ale hopped with Fuggles & East Kent Goldings",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "MOUNTAIN HARE",
    "beerName": "GOLD",
    "style": "Balanced hoppy golden summer ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "MOURNE MOUNTAINS",
    "beerName": "MOURNE GOLD",
    "style": "Very pale ale, using Continental Brewers Gold hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MUCKLE",
    "beerName": "MUCKLE BUSTER RED ALE",
    "style": "Fruity red ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MUCKLE",
    "beerName": "MUCKLE MOSS STOUT",
    "style": "Rich, dark and aromatic",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "MUCKLE",
    "beerName": "WHIN SILL BLONDE",
    "style": "Blonde ale with Progress and Bramling Cross hops",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MUMBLES",
    "beerName": "IPA",
    "style": "English IPA made with Goldings and Fuggles hops",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "MUMBLES",
    "beerName": "MUMBLES GOLD",
    "style": "Golden in colour with a bold Styrian Goldings hop taste",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "MUMBLES",
    "beerName": "OYSTERMOUTH STOUT",
    "style": "Oyster stout",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "CREAM HEAD",
    "style": "Lactose ale, brewed lager style, but for cask.",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "NEW DAWN",
    "style": "Pale straw in colour, well-hopped, refreshing sharp finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "PATRIOT",
    "style": "Traditional  amber-coloured smooth malty beer",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "REBEL",
    "style": "Citrus golden ale with grapefruit & mango aromas",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "SAVIOUR",
    "style": "Brewed with lager malts,  with full American hop flavours",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "SOUR DIESEL",
    "style": "Grapefruit session IPA, made with real grapefruit",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "SPLENDOR",
    "style": "Clean-tasting, satisfying biscuit flavours, lasting aftertaste",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "NAVIGATION",
    "beerName": "WISE GUY",
    "style": "Copper coloured with fruity aroma & creamy toffee flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NAYLORS",
    "beerName": "TOFFEE MILD",
    "style": "Dark, strong mild with toffee notes",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NAYLORS",
    "beerName": "YORKSHIRE ALE",
    "style": "Copper coloured Yorkshire bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NEWTOWN",
    "beerName": "BLOCKHOUSE",
    "style": "Chestnut coloured best bitter made with six different malts",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NEWTOWN",
    "beerName": "WARRIOR",
    "style": "Dark ale with some German smoked malt ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN ALECHEMY",
    "beerName": "CASCADE OATMEAL PALE",
    "style": "American pale ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN ALECHEMY",
    "beerName": "DARK CHOC MINT MILK STOUT",
    "style": "Chocolate and mint milk stout",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN ALECHEMY",
    "beerName": "GALAXY, CASCADE & CENTENNIAL PALE",
    "style": "Cascade, Galaxy & Centennial pale ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN WHISPER",
    "beerName": "BELTIE STOUT ",
    "style": "Strong, bold and rich stout",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN WHISPER",
    "beerName": "BLIGHTY",
    "style": "Traditional copper coloured British bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHERN WHISPER",
    "beerName": "YAMMERHOUSE",
    "style": "American pale ale, big, brash, bold and ballsy ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "O BROTHER",
    "beerName": "THE CHANCER",
    "style": "American pale ale with lots of tropical flavours",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "O BROTHER",
    "beerName": "THE PREACHER",
    "style": "Session IPA described as Lemon candy!",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "O BROTHER",
    "beerName": "THE RAINMAKER",
    "style": "American IPA with Citra, Mosaic, Galaxy hops ",
    "abv": "7.0",
    "ibu": "NA"
  },
  {
    "breweryName": "O BROTHER",
    "beerName": "THE SINNER",
    "style": "American IPA",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "O BROTHER",
    "beerName": "THE SMASHER",
    "style": "Amazing Grapefruit pale ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "3 WITCHES",
    "style": "Amber ale, fruity orange aroma & soft fruit notes, fruity dry finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "ATTILA",
    "style": "Powerful brew with a long bitter fruity finish",
    "abv": "7.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "BISHOPS FAREWELL",
    "style": "Premium ale with elaborate fruity hop notes",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "BLACK HOLE PORTER",
    "style": "Big darkmalt flavours combine with a sweet and fruity hop taste ",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "BLUE SKIES  I.P.A.",
    "style": "Aged golden ale brewed with Simcoe, Mosaic & Chinook hops",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "BONA NOX",
    "style": "Golden beer packed with powerful citrus and berry flavours",
    "abv": "8.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "CITRA",
    "style": "Light refreshing beer with bitter finish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "GREEN DEVIL IPA",
    "style": "Amazing hop harvest aroma with tropical fruit",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "INFERNO",
    "style": "Light, igniting ale flickers complex fruits across your tongue",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "JHB",
    "style": "A golden beer with citrus notes",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "OAKHAM",
    "beerName": "SCARLET MACAW",
    "style": "Tart gooseberry and soft peach with an intense bitterness",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD PIE FACTORY",
    "beerName": "AMERICAN PIE",
    "style": "American hopped pale ale",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD PIE FACTORY",
    "beerName": "PIE IN THE SKY",
    "style": "Pale English ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD SAWLEY",
    "beerName": "FIGARO",
    "style": "Light extra pale ale with tropical fruitness & floral aroma",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD SAWLEY",
    "beerName": "LITTLE JACK",
    "style": "Refreshing pale ale, fruity citrus taste from a blend of 4 US hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD SAWLEY",
    "beerName": "TOLLBRIDGE",
    "style": "Smooth porter, hints of chocolate, coffee & vanilla",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OTLEY",
    "beerName": "INSPIRATION",
    "style": "Classic IPA, last ever brew from brewery",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "OUT THERE",
    "beerName": "ANGARA BALTIC PORTER",
    "style": "Baltic porter with malty, spicy, chocolate notes",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OUT THERE",
    "beerName": "CASSINI SPECIALE 2 IPA",
    "style": "Amber bitter, good balance of malt and hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "OUT THERE",
    "beerName": "ROSETTE NEBULA 2 RED ALE",
    "style": "Malty red ale with fruity finish ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "OXBREW",
    "beerName": "PALE ALE",
    "style": "Pale, light, crisp and hoppy ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "OXBREW",
    "beerName": "RED ALE",
    "style": "Lovely red ale from this new brewery",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "PARTNERS",
    "beerName": "AMERICAN CRAFT ALE",
    "style": "Brewed with US hops, light & refreshing, citrus flavours & aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PARTNERS",
    "beerName": "TABATHA",
    "style": "Belgian style tripel beer, fruity with hints of coriander",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "PIG & PORTER",
    "beerName": "DANCE FIRST",
    "style": "Subtly hopped dry stout",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "PIG & PORTER",
    "beerName": "FATAL FLAW",
    "style": "American amber featuring aromatic malt and American ale yeast",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PIG & PORTER",
    "beerName": "SLOW BLACK",
    "style": "Rich, complex oatmeal stout, dark malts and porridge oats",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "PILOT (Wales)",
    "beerName": "REVOLVER MOSAIC",
    "style": "Blonde ale with Mosaic hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "PILOT (Wales)",
    "beerName": "SUP IPA",
    "style": "(Stand Up Paddleboarding) American hopped IPA",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PIRATE",
    "beerName": "BLUNDERBUSS",
    "style": "Traditional dark English bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "PIRATE",
    "beerName": "RED BEARD",
    "style": "Vibrantly red coloured, good balanced blend of malt ",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "PITCHFORK",
    "beerName": "PG STEAM",
    "style": "Floral, hoppy, malty English ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "PITCHFORK",
    "beerName": "OLD SLUG",
    "style": "Traditional porter, coffee, blackcurrant and black cherry aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PITCHFORK",
    "beerName": "PITCHFORK",
    "style": "Golden ale with sweet and fruity hoppy taste ",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "POYNTON",
    "beerName": "SIMCOE RED",
    "style": "An American Amber ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "POYNTON",
    "beerName": "VIADUCT",
    "style": "A golden ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "POWDER KEG",
    "beerName": "FARAM'S FAULT",
    "style": "English pale ale",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "POWDER KEG",
    "beerName": "SPEAK EASY",
    "style": "Transatlantic pale ale with US hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "PURPLE MOOSE",
    "beerName": "GOLD COAST",
    "style": "New golden ale with hints of honey",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "RASCALS",
    "beerName": "BIG HOP RED",
    "style": "Hoppy red ale with a caramel malt backbone",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "RALPH'S RUIN",
    "beerName": "TEST BREW 6",
    "style": "Sweet blonde beer, easy to drink leaving a clean pallet",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "RAN ALES",
    "beerName": "RANBO",
    "style": "Bitter sweet pale ale  with a rich fruity aroma",
    "abv": "6.1",
    "ibu": "NA"
  },
  {
    "breweryName": "RAN ALES",
    "beerName": "RUN & RAISIN STOUT",
    "style": "Rich and flavoursome dark ale with hints of rum ‘n’ raisin",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "RANGE ALES",
    "beerName": "BEACH HEAD",
    "style": "Easy drinking amber ale",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "RANGE ALES",
    "beerName": "BLACK OPS",
    "style": "Sublime modern ale with a smooth coffee like finish",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "RANGE ALES",
    "beerName": "RIFLEMAN IPA",
    "style": "Harvest gold, pleasant flowery aroma, Cascade single hopped  ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "RASCALS",
    "beerName": "HAPPY DAYS",
    "style": "Beautiful American hopped session pale ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "RASCALS",
    "beerName": "WUNDERBAR",
    "style": "German IPA - brewed with German hops and Munich malt",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "REBEL",
    "beerName": "BAL MAIDEN",
    "style": "Copper coloured session bitter",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "REBEL",
    "beerName": "EIGHTY SHILLINGS",
    "style": "Dark, Scottish style ale with has a roasted malt flavour",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "REBEL",
    "beerName": "PENRYN PALE ALE",
    "style": "Fruity, hoppy nose with hints of peach and lemongrass",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "REDWILLOW",
    "beerName": "SHAMELESS",
    "style": "Gloriously hoppy beer, tropical fruit and a clean Grapefruit finish ",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "REDWILLOW",
    "beerName": "SMOKELESS",
    "style": "Smoked porter, velvet smooth with infused Chipotles ",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "REDWILLOW",
    "beerName": "WRECKLESS",
    "style": "Beautifully balanced pale ale, loaded with Citra and Amarillo hops ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "REVOLUTIONS",
    "beerName": "BIG IN JAPAN",
    "style": "Cherry Saison",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "REVOLUTIONS",
    "beerName": "BLACK MONK TIME",
    "style": "Belgian Stout",
    "abv": "7.0",
    "ibu": "NA"
  },
  {
    "breweryName": "REVOLUTIONS",
    "beerName": "CANDIDATE",
    "style": "Session Pale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "RIVINGTON",
    "beerName": "AMERICAN BROWN",
    "style": "Brown ale roasty and citrussy",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "REVOLUTIONS",
    "beerName": "SWOON",
    "style": "Chocolate Fudge Milk Stout",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "RIGG & FURROW",
    "beerName": "FLAG LEAF FARMHOUSE TABLE BEER",
    "style": "Mosaic and Simcoe farmhouse Saison",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "RIGG & FURROW",
    "beerName": "THE PALE ALE ",
    "style": "Nice hoppy pale ale ",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "RIGG & FURROW",
    "beerName": "TRICKSTER AMBER",
    "style": "Rich ruby English bitter ",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "RIVERSIDE (W Sussex)",
    "beerName": "RAMBLING MONARCH",
    "style": "Light, floral, citrus/spicy aroma, East Kent & Styrian Golding hops",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "RIVERSIDE (W Sussex)",
    "beerName": "SNEAKY STEAMER",
    "style": "Four different hops used, hints of grapefruit",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "RIVINGTON",
    "beerName": "BINARY SOLO",
    "style": "NZ hopped pale ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "RIVINGTON",
    "beerName": "WEST COAST IPA",
    "style": "Citrus, pine, caramel, little bitterness - classic West Coast",
    "abv": "6.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKET ALES",
    "beerName": "ATLAS IPA",
    "style": "IPA made with 100% Maris Otter malt and UK Admiral hops",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKET ALES",
    "beerName": "BLOODHOUND",
    "style": "Amber ale with fruity, sweet malt nose and hoppy edge",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKET ALES",
    "beerName": "KOMET BIER",
    "style": "German Kolsch style Session IPA ",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKET ALES",
    "beerName": "VOSTOCK STOUT",
    "style": "Russian stout brewed with 5 different malts",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKIN ROBIN",
    "beerName": "REALLY ROCKIN",
    "style": "Quaffable strong pale ale, Chinook and Cascade hops drive it",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKIN ROBIN",
    "beerName": "RELIANT ROBIN",
    "style": "Fresh hoppy session bitter, dry hopped to create floral notes",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCKIN ROBIN",
    "beerName": "RPA",
    "style": "American Pale Ale, Cascade hops dominate. Dry Hopped",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "ROGUE ELEPHANT",
    "beerName": "PORTLY POLICEMAN",
    "style": "Porter with a sweet treacle taste and slight roast malt note",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ROGUE ELEPHANT",
    "beerName": "TOMMY GOODWIN MILD",
    "style": "Malty slightly sweet mild with a hint of roast chocolate malt ",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ROUNDHILL",
    "beerName": "BEARDY BREW BLONDE",
    "style": "Sweet and juicy blonde ale with a natural haze",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SAINTS ROW",
    "beerName": "WELL SPRING APA",
    "style": "English pale ale, citrus, tropical fruits and fresh hop",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ROMNEY MARSH",
    "beerName": "ROMNEY AMBER ALE",
    "style": "Citrus and tropical fruit flavours with a hint of caramel",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ROMNEY MARSH",
    "beerName": "ROMNEY MARSH MELLOW",
    "style": "Pale ale blending five Kentish and American hops",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ROMNEY MARSH",
    "beerName": "ROMNEY RYE",
    "style": "Reddish brown, peppery dryness and gentle toffee notes",
    "abv": "3.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ROUNDHILL",
    "beerName": "BITTER",
    "style": "Traditional English bitter",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "ROUNDHILL",
    "beerName": "BPA",
    "style": "Billingham Pale Ale, hoppy pale ale",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SAINTS ROW",
    "beerName": "THE CATCHER PALE ALE",
    "style": "Traditional EPA, citrusy and floral notes",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SAINTS ROW",
    "beerName": "THE MOTH",
    "style": "German style blonde ale, featuring German Tettnang hop",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SALCOMBE",
    "beerName": "DEVON AMBER",
    "style": "Amber ale, dry hoppy and fresh malty taste",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SALCOMBE",
    "beerName": "GOLD",
    "style": "Light refreshing straw coloured ale, brewed with USA hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SALCOMBE",
    "beerName": "LIFESAVER",
    "style": "Extra strong bitter",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SALTAIRE",
    "beerName": "BLACKBERRY CASCADE",
    "style": "American style pale ale with a hint of blackberry",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SALTAIRE",
    "beerName": "ELDERFLOWER BLONDE",
    "style": "Blonde ale infused with elderflower",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SALTAIRE",
    "beerName": "RASPBERRY BLONDE",
    "style": "Blonde ale  infused with raspberry flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SARAH HUGHES",
    "beerName": "DARK RUBY",
    "style": "The ultimate dark ruby ale",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "BEERFEST AT TIFFANYS",
    "style": "English session bitter, slightly spicy earthy aftertaste",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "BEYOND REASONABLE STOUT",
    "style": "Rich dark, well regarded stout",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "HOPPY POTTER AND THE GOBLET OF ALE",
    "style": "A light coloured ale with citrus aromas",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "MASHER IN THE RYE",
    "style": "Golden American style ale with a dash of rye malt",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "RUBECCA",
    "style": "Smooth ruby beer with hints of chocolate ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SLIGHTLY FOXED",
    "beerName": "QUICK BROWN FOX",
    "style": "Tawny Brown Ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "LIFE OF IPA",
    "style": "A great IPA",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "ONE BREW OVER THE CUCKOO'S NEST",
    "style": "A full strength, full hopped IPA",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SCRIBBLERS ",
    "beerName": "ONE SPECIAL BREW OVER THE CUCKOO'S NEST",
    "style": "An extra special dry hopped IPA",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SKIPPOOL CREEK",
    "beerName": "BLACK OAR STOUT",
    "style": "Stout with aroma of coffee, chocolate, liquorice, and molasses ",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "SKIPPOOL CREEK",
    "beerName": "CROW'S NEST BITTER",
    "style": "British bitter with Admiral hops for bittering and Boadicea hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SKIPPOOL CREEK",
    "beerName": "TOP SAIL PALE",
    "style": "Very light coloured traditional British pale ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SLIGHTLY FOXED",
    "beerName": "FLYING FOX",
    "style": "Golden with apricots",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHSEA BREWING",
    "beerName": "CASEMATE IPA",
    "style": "Hoppy IPA, hazy, dry and loads of flavour",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHSEA BREWING",
    "beerName": "WEISSCAPS",
    "style": "German style wheat beer, fruity banana sweetness",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHWARK",
    "beerName": "BERMONDSEY BEST BITTER",
    "style": "Traditional English best bitter",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHWARK",
    "beerName": "HARVARD APA ",
    "style": "A highly-hopped American Pale Ale",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHWARK",
    "beerName": "HEFEWEIZEN",
    "style": "Wheat beer with notes of banana & cloves",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHWARK",
    "beerName": "LPA (London Pale Ale)",
    "style": "Session Pale Ale, light, hoppy with citrus tones",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SOUTHWARK",
    "beerName": "PETER'S RUSSIAN IMPERIAL STOUT",
    "style": "Russian Imperial Stout, strong chocolate & burnt malt flavours",
    "abv": "8.9",
    "ibu": "NA"
  },
  {
    "breweryName": "STAG (Kent)",
    "beerName": "MAGIC MUNTJAC",
    "style": "Tropical zesty light pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "STAG (Kent)",
    "beerName": "RED IMPERIAL",
    "style": "Dark English bitter with spicy toffee flavours",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "STROUD",
    "beerName": "FIVE VALLEYS",
    "style": "Traditional chestnut coloured, rich and fruity strong ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TENBY BREWING CO",
    "beerName": "BAREFOOT BLONDE",
    "style": "Super refreshing Cascade hopped pale/pilsner hybrid",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "STONEY FORD",
    "beerName": "MEADOWS MOONDANCE",
    "style": "Robust IPA in the English style with strong bitter backbone",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "STONEY FORD",
    "beerName": "SHEEPMARKET SUPERNOVA",
    "style": "Pale summer ale, floral, cedar, grapefruit and peach",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "STONEY FORD",
    "beerName": "STAMFORD 50",
    "style": "Brown Porter,  combination of malts and UK hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "STROUD",
    "beerName": "RAMBLERS REWARD",
    "style": "NEW BEER",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "STU BREW",
    "beerName": "EXTENDED OVERDRAUGHT IPA",
    "style": "Hoppy IPA  ",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TAP SOCIAL MOVEMENT",
    "beerName": "29 IN A MILLION",
    "style": "English hopped ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "TAP SOCIAL MOVEMENT",
    "beerName": "GREBES PROCESSION",
    "style": "Rich and roasty oatmeal stout",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TENBY BREWING CO",
    "beerName": "HAMMERHEAD 7 SEAS",
    "style": "Sweet, fruity juice bomb, casked especially for the festival",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TENBY BREWING CO",
    "beerName": "INTERGALACTIC",
    "style": "Juicy, hoppy, pale wheat beer,  casked especially for the festival",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "TENBY HARBWR",
    "beerName": "SIR GALAHAD",
    "style": "Red ale, complex malt character, a rich ruby red colour",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "TENBY HARBWR",
    "beerName": "NORTH STAR",
    "style": "Malty amber ale, spicy blackcurrant and lemon aroma",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THIRST CLASS",
    "beerName": "ANY PORTER IN A STORM",
    "style": "Traditional English porter, with intense malty & treacle aroma",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "THIRST CLASS",
    "beerName": "HOPFORDIAN",
    "style": "Fruity IPA full of American hops Cascade, Willamette and Simcoe",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THIRST CLASS",
    "beerName": "NEW ZEALAND PALE ALE",
    "style": "Session pale brewed with healthy dose of Rakau& Wai-iti hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BLIND MICE",
    "beerName": "FLIGHT OF THE UNICORN v2",
    "style": "Nelson Sauvin, Citra & Simcoe IPA",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BLIND MICE",
    "beerName": "MILK WORM",
    "style": "Chocolate and Vanilla milk porter",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BLIND MICE / BAKERS DOZEN",
    "beerName": "UPSIDE DOWN IPA",
    "style": "Black IPA hopped with Citra, Mosaic, Summit & Nelson Sauvin ",
    "abv": "7.4",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BROTHERS",
    "beerName": "THAIPA",
    "style": "Crisp hoppy ale with spicy, citrus flavours",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE KINGS",
    "beerName": "HEART 'N' SOUL MOSAIC PALE",
    "style": "Mosiac hopped IPA",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "TIPSY ANGEL",
    "beerName": "T.A.PALE",
    "style": "Copper coloured best bitter",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BROTHERS",
    "beerName": "SHORT & STOUT",
    "style": "Stout, with a chocolate body and hoppy punch",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE BROTHERS",
    "beerName": "THE EX WIFE BITTER",
    "style": "Session bitter with subtle notes of toffee",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE KINGS",
    "beerName": "DARK SIDE OF THE TOON ",
    "style": "Dry stout with dark chocolate and roast coffee notes",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE KINGS",
    "beerName": "RIDE THE PINE",
    "style": "Citrus pale ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE KINGS",
    "beerName": "SUPER MAC",
    "style": "Hoppy golden ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TIGERTOPS",
    "beerName": "JADE HOP",
    "style": "A pale ale brewed with NZ hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TIGERTOPS",
    "beerName": "TASMAN BAY",
    "style": "A pale ale with Australian hops",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "TIPSY ANGEL",
    "beerName": "OATMEAL STOUT",
    "style": "Traditional oatmeal stout",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TOM HERRICK'S",
    "beerName": "BLACK LACE",
    "style": "Chocolate milk stout with roasted coffee & dark chocolate notes ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TOMOS A LILFORD",
    "beerName": "GAUCHO",
    "style": "South American IPA, brewed with a hint of green tea and apricot",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TOMOS A LILFORD",
    "beerName": "HOP CLUB",
    "style": "Fresh green hopped pale ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TOMOS WATKIN",
    "beerName": "BICYCLE BLONDE",
    "style": "Blonde ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TRACK",
    "beerName": "EL CAPITAN",
    "style": "New England IPA, packed full of citrus & tropical hops",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "TRACK",
    "beerName": "SONOMA",
    "style": "Pale with smooth citrus aroma",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TRACK",
    "beerName": "TOBA",
    "style": "Oatmeal Stout, coffee and chocolate come through really nicely",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "TREEN'S",
    "beerName": "CLASSIC",
    "style": "Best Bitter, deep amber, malty beer",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "TROUBLE BREWING",
    "beerName": "DARK ARTS",
    "style": "Rich & dark traditional porter, coffee, chocolate and caramel",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "TRYST",
    "beerName": "PILSNER",
    "style": "Classic cask pilsner with German hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TREEN'S",
    "beerName": "CLOUD CUCKOO",
    "style": "Deep ruby, full-bodied, plum and soft fruits notes",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "TREEN'S",
    "beerName": "RUBY IPA",
    "style": "Full bodied ruby ale with a powerful hop bite and nose",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "TROUBLE BREWING",
    "beerName": "BLOOD BROTHER",
    "style": "Blood orange black IPA",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "TROUBLE BREWING",
    "beerName": "WALK ON THE MILD SIDE ",
    "style": "Mild with chocolate & roast notes. Aroma of toasty chocolate",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "TROUBLE BREWING",
    "beerName": "GRAFITTI",
    "style": "Session pale ale, flavourful punch beyond it’s modest abv",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "TROUBLE BREWING",
    "beerName": "SABOTAGE",
    "style": "Amber English hopped IPA",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TRYST",
    "beerName": "COCONUT & CHOCOLATE PORTER",
    "style": "Rich chocolate porter with toasted coconut",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "TRYST",
    "beerName": "RAJ IPA",
    "style": "Traditional IPA recipe loaded with hops",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TURNING POINT",
    "beerName": "CHAOS THEORY",
    "style": "Honey & Marigold Oatmeal Pale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TURNING POINT",
    "beerName": "LUCID DREAM",
    "style": "Cookie & Cream Stout with Cacao nibs and chocolate malt",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TURNING POINT",
    "beerName": "SUMMER GROVE",
    "style": "Tangy, zesty, white IPA  with rose petals, oranges & gooseberries",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TWISTED ANGEL",
    "beerName": "DAYWALKER",
    "style": "Oatmeal stout, floral hop aroma, roasted barley, hint of coffee",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TWISTED ANGEL",
    "beerName": "SHAPESHIFTER",
    "style": "American pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TWO BY TWO",
    "beerName": "AMARILLO SINGLE HOPPED ALE",
    "style": "Single hopped IPA with Amarillo hop",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TWO BY TWO",
    "beerName": "BIRTHDAY BEER MOSAIC AND CITRA JUICE BOMB",
    "style": "Brewery 3rd birthday beer, tropical juice bomb",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TWO BY TWO",
    "beerName": "OUSEBURN FARM CHARITY BEER",
    "style": "Charity beer packed with Chinook, Equinox and Citra",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TWO BY TWO",
    "beerName": "SOUTHPAW IPA",
    "style": "Fruity, hoppy, English IPA",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "UNITY (Worcs)",
    "beerName": "BUCKEYE SESSION BITTER",
    "style": "Easy drinking, copper-coloured beer",
    "abv": "3.4",
    "ibu": "NA"
  },
  {
    "breweryName": "UNITY (Worcs)",
    "beerName": "SEBRIGHT",
    "style": "Straw-coloured ale with fruity hop aromas",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "URBAN CHICKEN",
    "beerName": "MALT FEAKES",
    "style": "Best bitter with complex malt flavours",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "TYNEBANK",
    "beerName": "GREEN HOP IPA",
    "style": "Fresh green hopped IPA",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "UNITY (Worcs)",
    "beerName": "FRIZZLE BRITSH IPA",
    "style": "Rich golden in colour with a fruity, floral hop aroma ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "UNITY (Worcs)",
    "beerName": "PEKIN PALE",
    "style": "Golden ale, fruity and hoppy",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "UNTAPPED",
    "beerName": "MONNOW",
    "style": "Chestnut coloured English bitter",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "UNTAPPED",
    "beerName": "SUNDOWN",
    "style": "Golden colour, distinct flavour, Goldings & Challenger hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "UNTAPPED",
    "beerName": "TRIPLE \"S\"",
    "style": "Intense black stout, rich upfront flavours",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "UNTAPPED",
    "beerName": "UPA",
    "style": "IPA, distinctly hoppy, with  aromas from Styrian Goldings hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "URBAN CHICKEN",
    "beerName": "BIRD FLUID",
    "style": "American IPA with refreshing citrus finish",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "URBAN CHICKEN",
    "beerName": "BODY POP",
    "style": "Session IPA with tropical fruit flavours from Australian hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "URBAN CHICKEN",
    "beerName": "PIT PONY STOUT",
    "style": "Oatmeal Stout with coffee and chocolate notes",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "URBAN ISLAND",
    "beerName": "DSB (Dolly's Special beer)",
    "style": "Light refreshing Summer ale",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "UTTOXETER",
    "beerName": "ADMIRAL GARDNER",
    "style": "Pale ale,  tropical fruits and mango, a fruity balanced bitter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "UTTOXETER",
    "beerName": "AMERICAN IPA",
    "style": "American IPA, powerful in strength, bitterness and fruitiness",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "UTTOXETER",
    "beerName": "BUNTINGS BLONDE ",
    "style": "Blonde low alcohol ale, lemon-grapefruit, citrusy flavour",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "UTTOXETER",
    "beerName": "FULL GALLOP",
    "style": "English brown ale, malty beer with sweetness & toffee notes",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "UTTOXETER",
    "beerName": "PADDOCK PORTER",
    "style": "Chocolaty, dominated by a distinctive dark grain flavour",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "VALE OF GLAMORGAN",
    "beerName": "PARADYM SHIFT",
    "style": "American amber / red ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "VOLDEN",
    "beerName": "SESSION",
    "style": "Classic session bitter, tangy and moreish",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WELL DRAWN",
    "beerName": "PALE",
    "style": "Pale session ale, Target and Fuggles with crushed Elderflower",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "VALE OF GLAMORGAN / CASK BEER CO",
    "beerName": "CHAOS",
    "style": "Monstrously hopped pale ale",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "VOLDEN",
    "beerName": "JUNIPER",
    "style": "Red rye autumnal beer with Juniper berries",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "VOLDEN",
    "beerName": "PALE ALE",
    "style": "Straw coloured with a long hop finish",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "WEAL ALES",
    "beerName": "GINGER WEAL",
    "style": "Strong golden ale. The addition of ginger gives a spiciness kick",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WEAL ALES",
    "beerName": "WEALD WOOD",
    "style": "Multi hopped session beer made with extra pale malt",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "WEAL ALES",
    "beerName": "WELLER WEAL",
    "style": "Pale ale made with extra pale malt, lots of Mosaic & Citra hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "WELL DRAWN",
    "beerName": "GOLD",
    "style": "Golden, refreshing, bold in flavour using Celeia hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "WEST BY THREE",
    "beerName": "GRISETTE",
    "style": "Grisette - similar to a saison, but with a cheeky dry hop!",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "WEST BY THREE",
    "beerName": "CHOCOLATE MILK STOUT",
    "style": "Choco milk Stout",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WHIM",
    "beerName": "EARL GREY BITTER",
    "style": "Golden brown English bitter with a hoppy, fruity aroma",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WHIM",
    "beerName": "SNOW WHITE",
    "style": "Bavarian style coriander wheat beer (Cloudy)",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITE HORSE",
    "beerName": "BLACK BEAUTY",
    "style": "Rich Ruby in colour, using chocolate malt and English fuggle hops",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITE HORSE",
    "beerName": "OXFORD DARK BLUE",
    "style": "A dark chestnut coloured beer with a smooth rich flavour",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITEWATER",
    "beerName": "BELFAST ALE",
    "style": "Russet ale, rich fruitiness is followed by a gentle hop flavour ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITEWATER",
    "beerName": "CLOTWORTHY DOBBIN",
    "style": "A dark Irish porter",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITEWATER",
    "beerName": "COPPERHEAD",
    "style": "Copper coloured with very intense flavour of hops and spice",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "WHITEWATER",
    "beerName": "HOPPELHAMMER",
    "style": "Muddy orangy beer beer with tastes of hops and exotic fruits",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WILD CARD",
    "beerName": "KING OF HEARTS",
    "style": "Blonde ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WILD CARD",
    "beerName": "NEW ZEALAND PALE ALE",
    "style": "New Zealand Pale ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WILD CARD",
    "beerName": "QUEEN OF DIAMONDS",
    "style": "Session IPA",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDMILL HILL",
    "beerName": "AMERICAN SESSION IPA",
    "style": "Golden American session IPA with Cascade hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDMILL HILL",
    "beerName": "CHESTERTON IPA",
    "style": "Golden amber in colour, hints of roast malts and light fruits",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDMILL HILL",
    "beerName": "MALTHOUSE DORMOUSE",
    "style": "Golden charity beer for Warwickshire Wildlife Trust",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDMILL HILL",
    "beerName": "THE AMBER POST",
    "style": "Classic amber ale with a hoppy twist",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDSOR & ETON",
    "beerName": "CANBERRA",
    "style": "Chestnut brown autumn ale with full tropical fruit hop",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDSOR & ETON",
    "beerName": "CONQUEROR BLACK IPA",
    "style": "Dark, complex, intense. Roast and smokey with Cascadian hop",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WINDSOR & ETON",
    "beerName": "KNIGHT OF THE GARTER",
    "style": "Sunshine in a glass - grapefruit zestiness",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WITHNELL'S",
    "beerName": "BLONDE SUMMIT",
    "style": "Blonde ale brewed with Summit hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WITHNELL'S",
    "beerName": "SINGLE HOP - NORTHERN BREWER",
    "style": "Single hop IPA using Northern Brewer hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WOODMAN'S WILD ALE",
    "beerName": "REDRUTH RED",
    "style": "Flanders red style with wild yeasts, complex sour and fruity",
    "abv": "7.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WOOLPACK INN",
    "beerName": "SLAD VALLEY BITTER",
    "style": "English bitter brewed with English hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WORKING HAND",
    "beerName": "DR KELLYS SICK NOTE",
    "style": "Blonde ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WORKING HAND",
    "beerName": "LUCKY CROWN BITTER",
    "style": "Malty character complimented with subtle fruit flavours",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WORKING HAND",
    "beerName": "MORE CHOKE JACKIE ",
    "style": "Golden session ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "XTREME",
    "beerName": "CHOCOLATE CHERRY STOUT",
    "style": "Chocolate cherry stout brewed with home grown cherries",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "XTREME",
    "beerName": "ROUTE 701",
    "style": "Traditional golden session ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "XTREME",
    "beerName": "YANKEE PIGEON",
    "style": "American IPA using Centennial, Simcoe, Cascade & Mosaic hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "YORKSHIRE",
    "beerName": "CRAZY HORSE",
    "style": "US hopped amber bitter, with mosaic & williamette hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "YORKSHIRE",
    "beerName": "MUTINY",
    "style": "London porter, distinctive coffee aroma and chocolate flavour",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "8 SAIL",
    "beerName": "FENMAN BITTER",
    "style": "Traditional copper coloured bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "8 SAIL",
    "beerName": "OKTOBERFEST",
    "style": "German marzen style beer",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "8 SAIL",
    "beerName": "VICTORIAN PORTER",
    "style": "Very dark ruby red brew with rich malt flavours",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "AMBER",
    "beerName": "CHOCOLATE ORANGE ",
    "style": "Stout with bitter chocolate and orange flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "AMBER",
    "beerName": "THROAT LOZENGE",
    "style": "Fiery strong ale, with honey, lemon and ginger",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "AMBER",
    "beerName": "LIME STOUT",
    "style": "Dark stout with fresh lime zest",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ANSTEY",
    "beerName": "BACK YARD BITTER",
    "style": "Traditional copper bitter  ",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "ANSTEY",
    "beerName": "DARKROOM OATMEAL STOUT",
    "style": "Rounded Oatmeal stout made with 6 types of grain & triple hopped     ",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "ANSTEY",
    "beerName": "MILK STOUT",
    "style": "Sweet , black brew, chocolate, roasted flavours, smoked finish ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ANSTEY",
    "beerName": "NOOK IPA",
    "style": "IPA using Chinook, Cascade hops giving this beer a fresh flavour",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHOVER",
    "beerName": "AMBERELLA",
    "style": "Amber ale, spicy, floral nose & hint of aniseed",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHOVER",
    "beerName": "LITTLEMOOR CITRA",
    "style": "Citra hopped pale ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHOVER",
    "beerName": "THE FABRICK",
    "style": "Golden brew, fruity flavour and crisp clean finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHOVER",
    "beerName": "THOR CAKE",
    "style": "Brown ale with ginger, oats, treacle, orange peel & coriander ",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ASHOVER",
    "beerName": "ZOO",
    "style": "Pale ale brewed with Mosaic & Citra hops",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "AURORA",
    "beerName": "AURORA",
    "style": "Premium bitter",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "AURORA",
    "beerName": "BIG DARK",
    "style": "Dark stout",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "AURORA",
    "beerName": "CONSTELLATION",
    "style": "Traditional amber bitter ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BAILDON",
    "beerName": "AUBURN FLAME",
    "style": "A red ale with spicy hops and a soft fruit finish.",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BAILDON",
    "beerName": "RAVEN",
    "style": "A silky smooth plum porter",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BAILDON",
    "beerName": "SIR TITUS SALT",
    "style": "A golden ale with a slight citrus note and earthy hop base",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BARLOW",
    "beerName": "CARNIVAL ALE",
    "style": "Golden ale with English malts,  hopped for a light citrus finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BINGLEY",
    "beerName": "KORU",
    "style": "Refreshing pale ale, citrus & pine aromas, subtle lime hints",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BINGLEY",
    "beerName": "PELHAM CROSS",
    "style": "Pale bitter, chinook hops. Aromas of spice, pine & grapefruit",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BINGLEY",
    "beerName": "TRI-STATE",
    "style": "Golden US pale ale. Flavours of citrus, spice, lemon and pine",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BIRMINGHAM BREWING CO",
    "beerName": "CONFUSED BRUMMIE",
    "style": "White stout! Made from British floor malt, lightly hopped",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BIRMINGHAM BREWING CO",
    "beerName": "GOLD BRUMMIE",
    "style": "American hopped IPA",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACKHILL",
    "beerName": "BRASS THILL",
    "style": "Golden, pale ale, with a citrus edge and a hint of honey",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACKHILL",
    "beerName": "LOW MAIN",
    "style": "Belgium Pale Ale,  biscuit aroma, hints of orange & spicy notes",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BOOT",
    "beerName": "CLODHOPPER",
    "style": "Golden Ale that has a soft, refreshing and enduring finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BOOT",
    "beerName": "REBOOT",
    "style": "Refreshing, moreish and loaded with American ‘C’ hops",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BOOT",
    "beerName": "TUFFER'S OLD",
    "style": "Velvety rich porter, notes of dark fruit, hazelnut, coffee & cocoa",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BORN IN THE BORDERS",
    "beerName": "GOLD DUST",
    "style": "Light IPA with lots of Centennial hops. Long bitter finish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BOWNESS BAY",
    "beerName": "SWIFT BEST",
    "style": "Rounded with strong malty undercut & balanced hop character",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "BURNOUT",
    "style": "Beech-smoked porter,  with sweet whisky notes ",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "CLIFFHANGER",
    "style": "Cascade hopped golden ale, honours Coastguard Rescue Teams",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "EMERGENCY BITTER",
    "style": "Archetypal British session bitter, brewed to Cold War recipe ",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "HAZELNUT MILD",
    "style": "Luscious 5-malt nut brown mild with a delicate hazelnut aroma",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "I AM GRUIT",
    "style": "Spice/herb beer with lavender, bog myrtle, thyme & rosemary",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BRASS CASTLE",
    "beerName": "TYKEISH DELIGHT",
    "style": "American-style amber ale, with characteristic floral notes",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWSHED",
    "beerName": "AMERICAN BLONDE",
    "style": "Crisp US style IPA with a rich malt character & a citrus fruit nose",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BREWSHED",
    "beerName": "VANILLA PORTER",
    "style": "Traditional brown/black smooth porter with a soft vanilla finish",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BRIARBANK",
    "beerName": "MILK STOUT",
    "style": "Stout brewed with lactose for smooth sweetness, hint of vanilla ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BRIARBANK",
    "beerName": "SAM HARVEY",
    "style": "Hoppy, light golden ale, with a grapefruit and orange finish",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BRUNSWICK",
    "beerName": "RAILWAY PORTER",
    "style": "Classic London style porter with chocolate and coffee notes",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "BRUNSWICK",
    "beerName": "RYE UP",
    "style": "American red rye IPA, late hopped with Mosaic",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BRUNSWICK",
    "beerName": "SOUTH PACIFIC PALE ",
    "style": "Single Waimea hopped pale with added fresh kiwi fruit",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BURTON TOWN",
    "beerName": "ALBION",
    "style": "English bitter, smooth easy drinking session ale",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BURTON TOWN",
    "beerName": "BLACK AS YOUR HAT",
    "style": "Jet black IPA with a liquorice kick",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BURTON TOWN",
    "beerName": "THOMCAT",
    "style": "He’s a little bit nutty & full of zest!",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "CAP HOUSE",
    "beerName": "CHEEKY BLONDE",
    "style": "Citrus aroma pinapple & tangerine flavour, with a hoppy finish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CAP HOUSE",
    "beerName": "RUBY",
    "style": "A rich ruby ale with fruity nut and toffee flavours. ",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CHAPEL-EN-LE-FRITH",
    "beerName": "ACADIAN",
    "style": "New England style IPA",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "CHAPEL-EN-LE-FRITH",
    "beerName": "HOOPY AS FUNK",
    "style": "English Pale Ale with strong malt backbone & citrus hops",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHAPEL-EN-LE-FRITH",
    "beerName": "ISAMBARD",
    "style": "An English pale ale",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CHARNWOOD",
    "beerName": "AMERICAN PALE ALE",
    "style": "Hoppy aroma with cascade, centennial, citra & chinnook hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHARNWOOD",
    "beerName": "BLACK FOX",
    "style": "Traditional stout, chocolate/coffee flavours, roasted bitterness",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CHARNWOOD",
    "beerName": "BLACK HEN PORTER",
    "style": "A rich porter with subtle chocolate and expresso flavours",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "CHARNWOOD",
    "beerName": "HUBBLE BUBBLE",
    "style": "Copper autumnal ale with hints of honey, spice & marmalade",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CHARNWOOD",
    "beerName": "RAINBOW FOX",
    "style": "Deep copper ale, supporting Rainbows charity",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CHIN CHIN",
    "beerName": "ALONE IN THE DARK",
    "style": "Full bodied stout, roast malt, bitter, warming",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CHIN CHIN",
    "beerName": "TARANAKI",
    "style": "New Zealand pale ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "BANANA",
    "style": "Black ale infused with banana",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "CHILLI McCHILLI FACE",
    "style": "Very pale chilli beer with subtle hop and chilli flavours",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "FALLEN ANGEL",
    "style": "Full flavoured pale bitter, bucket fulls of American hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "GRAVEDIGGERS",
    "style": "Dark black, complex mixture of chocolate & roast flavours",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "COLCHESTER   ",
    "beerName": "DRIZZLE",
    "style": "Blonde ale brewed using natural fresh lemons and their zest",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "PEACH",
    "style": "Mid brown ale with added peach",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CHURCH END",
    "beerName": "RHUBARD & CUSTARD",
    "style": "Pale ale, rhubarb and custard in a glass",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "COLCHESTER   ",
    "beerName": "FLAMING GUN",
    "style": "Sorachi Ace single hop pale ale",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "COTLEIGH",
    "beerName": "HONEY BUZZARD",
    "style": "Bronze in colour with a subtle bitter sweet finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "COTLEIGH",
    "beerName": "UNCLE SAM",
    "style": "Deep golden, fruity hop notes, hint of grapefruit, citrus & lychees",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "COTTON END",
    "beerName": "ARAMIS",
    "style": "EPA single hopped ale with Aramis hops from France",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "COTTON END",
    "beerName": "COFFEE PORTER",
    "style": "Porter with a treacle taste using freshly filtered Kenyan coffee",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "COTTON END",
    "beerName": "DOUBLE OAT STOUT",
    "style": "Thick, creamy strong double stout made with rolled oats",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "COTTON END",
    "beerName": "GREEN HOP PALE",
    "style": "Pale, freshly picked green hops from Pomfret Arms garden",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DIGFIELD",
    "beerName": "BARNWELL BITTER",
    "style": "Traditional amber easy drinking beer with a malty finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DIGFIELD",
    "beerName": "FOOLS NOOK",
    "style": "Golden Summer bitter well hopped and refreshing",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DIGFIELD",
    "beerName": "MAD MONK",
    "style": "Dark strong ale has hints of malt and chocolate",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DOGBREATH",
    "beerName": "OWD WICK",
    "style": "Copper coloured traditional bitter",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "DOGBREATH",
    "beerName": "SMOKE IN THE WATER",
    "style": "Smoked porter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DONCASTER",
    "beerName": "SANDHOUSE BLONDE",
    "style": "Gold straw colour with lager & wheat malts. Citrusy aroma ",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DONCASTER",
    "beerName": "SPEEDWELL",
    "style": "Powerful American style IPA",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "DOUBLE TOP",
    "beerName": "HISTORY MAKER",
    "style": "A modern bitter, more hoppy then malty",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "DOUBLE TOP",
    "beerName": "OLD STONEFACE",
    "style": "Black treacle stout",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVE STREET",
    "beerName": "COPDOCK CLASSIC",
    "style": "A golden ale with a slight citrus note and earthy hop base",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DOVE STREET",
    "beerName": "REGAL",
    "style": "Lager style, but brewed with ale yeast  using Czech Saaz hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "DRAYCOTT",
    "beerName": "IRISH RED",
    "style": "Traditional Irish red ale, fruity character & subtle bitterness",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "DRAYCOTT",
    "beerName": "MADE WITH PASSION",
    "style": "Very pale EPA session ale with a hint of passion fruit",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DRAYCOTT",
    "beerName": "MINNESOTA NORTH STAR ",
    "style": "American Red Ale with prominent malt notes & good bitterness",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DRAYCOTT",
    "beerName": "OBSIDIAN BLACK LAGER ALE",
    "style": "Ale with lager malts, yeast, hops.Darker malts give black colour",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "DRAYCOTT",
    "beerName": "USA LIBERTY 1776",
    "style": "Fruity pale ale with a hoppy finish. Single hopped with Simcoe",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DUKERIES",
    "beerName": "BLACK TIE",
    "style": "Chocolate coffee stout",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DUKERIES",
    "beerName": "GOLDEN CASTILLE",
    "style": "Triple hopped golden citrus ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "DUKERIES",
    "beerName": "NORTHERN RISING",
    "style": "Refreshing, fruity, chestnut bitter",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "DUKERIES",
    "beerName": "WERSHESHOPE GOLD",
    "style": "Orange marmalade, lime & slight grass hop taste",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ELLISWOOD",
    "beerName": "BLACK ROSE",
    "style": "Delicious and smooth porter with a subtle chocolate aftertaste",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ELLISWOOD",
    "beerName": "FLAMING STAR",
    "style": "An easy drinking session beer",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ELLISWOOD",
    "beerName": "JUST ONE MORE",
    "style": "Deep golden/amber ale, citrus flavour with a soft fruity note",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ELLISWOOD",
    "beerName": "ROYAL STANDARD 1485",
    "style": "Deep red bitter, sweet toffee taste, with caramel undertones",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "EYES",
    "beerName": "KLEINER WEISSE",
    "style": "White IPA, lemon & citrus aroma, pine & grassy flavours",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "EYES",
    "beerName": "SUMMER SCHOPS",
    "style": "Rich, creamy Polish style wheat beer brewed with lemongrass",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "EYES",
    "beerName": "SUMMER SCHOPS TROPICAL",
    "style": "Polish style wheat beer with lemongrass & herby European hop",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FALSTAFF",
    "beerName": "FISTFUL OF HOPS",
    "style": "Golden amber, powerful hop aromas with citrus undertones",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FALSTAFF",
    "beerName": "ICEMAN",
    "style": "Pale and zingy with hoppy overtones and a malty finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FALSTAFF",
    "beerName": "LILLIAN GRAY",
    "style": "Golden well hopped nose and complex flavours",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FIVE TOWNS",
    "beerName": "CHIEF",
    "style": "Blonde ale. Floral & fruity with restrained bitterness",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FIXED WHEEL",
    "beerName": "DEVIL TAKE THE HINDMOST",
    "style": "Deep red ale with a big hop presence",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FIXED WHEEL",
    "beerName": "SINGLE SPEED SIMCOE",
    "style": "Single hopped IPA with Simcoe hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "KING NORVAK'S SAGA",
    "style": "Champion Porter of the West Midlands",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "HAND OF DOOM",
    "style": "Double IPA",
    "abv": "8.199999999999999",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "KORVAK'S SAGA CHAPTER III: LAMENT",
    "style": "Rye porter",
    "abv": "7.6",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "PROPHETS OF DOOM",
    "style": "Cascadian dark ale",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "STORYTELLER",
    "style": "Honey & Ginger ale ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "THE PALE KING",
    "style": "Pilsner style real ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FOWNES",
    "beerName": "VISIONS OF HERESY",
    "style": "Smoked rye IPA",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FOX ",
    "beerName": "FRESH GOLD",
    "style": "Brewed with hops grown at the brewery, a new beer each year",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "FOX ",
    "beerName": "SAMPHIRE STOUT",
    "style": "Brewed with local seaweed",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FRAMEWORK",
    "beerName": "DANISH RED LAGER",
    "style": "Malty, crisp lager style with a long malty finish.",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "FRAMEWORK",
    "beerName": "GALENA RYE PALE ALE",
    "style": "Rye Beer, with Galena hops for a pineapple & grapefruit taste",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FRAMEWORK",
    "beerName": "LAID BACK STOUT",
    "style": "Complex, viscous & dark. Nine malts give a deep character",
    "abv": "5.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FRAMEWORK",
    "beerName": "LEMON & CORIANDER WHEAT BEER",
    "style": "Wheat beer with lemon zest and coriander",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FRONT ROW",
    "beerName": "RESPECT ",
    "style": "Golden amber brew with a distinct orange, satsuma notes",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "APPARITION",
    "style": "Pale ale with a strong hop bite",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "ILLUMINATI",
    "style": "Perfectly balanced golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "MANHATTAN PALE",
    "style": "Strong, aromatic blonde brew",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "NORTHERN LIGHTS",
    "style": "New dark stout",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "RED DOG",
    "style": "Smooth amber session ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "SÉANCE",
    "style": "Crisp blond ale with a smooth finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FULL MASH",
    "beerName": "WARLORD",
    "style": "Deep golden brew",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FURNACE",
    "beerName": "FUN SPONGE",
    "style": "Citra & Mosaic hopped juicy beer",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FURNACE",
    "beerName": "GOLD DUST",
    "style": "El Dorado & Zeus bringings punchy flavours",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "G2",
    "beerName": "SAIL",
    "style": "Blonde session ale, with a subtle lemony twist",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "G2",
    "beerName": "SOUTHERN CROSS",
    "style": "Golden with a tropical taste and delicious spicy undertone",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GOFFS",
    "beerName": "CHELTENHAM GOLD",
    "style": "Deep gold in colour with an aroma of citrus hops & apricot fruit",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "GOFFS",
    "beerName": "FALLEN KNIGHT",
    "style": "Full bodied dark amber beer with a ruby glow.",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "GREAT HECK",
    "beerName": "AMISH MASH ",
    "style": "German style wheat beer  hopped with loads of American hops",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "GREAT HECK",
    "beerName": "APOCALYPSE BRAU",
    "style": "Dark smooth malty rich Cascadian dark ale",
    "abv": "6.1",
    "ibu": "NA"
  },
  {
    "breweryName": "GREAT OAKLEY",
    "beerName": "EGRET",
    "style": "Pale gold beer brewed with 5 different American and NZ Hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GREAT OAKLEY",
    "beerName": "TIFFIELD THUNDERBOLT",
    "style": "Pale beer brewed with two different New Zealand hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "GREEN DUCK",
    "beerName": "HEAVEN SENT",
    "style": "Rich chocolate milk stout",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GREEN DUCK",
    "beerName": "LOST PATROL",
    "style": "Well hopped pale with a blend of Pacific hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "GUN DOG",
    "beerName": "BAD TO THE BONE",
    "style": "Light brown with Goldings, Cascade and Simcoe ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "GUN DOG",
    "beerName": "BOOZE HOUND",
    "style": "Delicious copper IPA",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HAMELSWORDE",
    "beerName": "KUNG FUSION",
    "style": "Pale ale. Sorachi ace & centennial hops, west coast ale yeast",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HAMELSWORDE",
    "beerName": "SMOKESTACKS",
    "style": "Rich porter brewed with malt smoked over apple & cherry woods",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HILLTOP",
    "beerName": "BLONDE",
    "style": "A quaffing pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HILLTOP",
    "beerName": "GOLDEN ALE",
    "style": "A golden ale with a slight citrus note and earthy hop base",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HOLDEN'S ",
    "beerName": "BLACK COUNTRY BITTER",
    "style": "Golden straw fruity with a malty finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "HOLDEN'S ",
    "beerName": "GOLDEN GLOW",
    "style": "Golden ale fragrant hop aromas,pleasant bitter finish",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "HOWARD TOWN",
    "beerName": "DARK PEAK",
    "style": "Strong and dark with a hint of liquorice and a warming rum kick",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HOWARD TOWN",
    "beerName": "SUPERFORTRESS",
    "style": "Bittersweet ruby ale with malty caramel notes and fruity hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "HOWARD TOWN",
    "beerName": "WEISSPEAK",
    "style": "Bavarian style cloudy wheat beer bread, banana, cloves flavours",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "IMPERIAL",
    "beerName": "HAVE YOU SEEN ME DOG ",
    "style": "A hoppy pale ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "IMPERIAL",
    "beerName": "NAH THEN ",
    "style": "Citra hopped pale ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "IMPERIAL",
    "beerName": "STOUT WI NOWT TEKKEN OWT ",
    "style": "Full bodied stout, 9 malts, slightly sweet, liquorice and spice",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "IMPERIAL/CHIN CHIN/TARN51/JAMES & KIRKMAN",
    "beerName": "BLACK TO THE FUTURE ",
    "style": "Darkish pale in taste, caramel notes with a grapefruit hop burst",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "INTREPID",
    "beerName": "MYRCE",
    "style": "IPA hopped with cascade, centennial & citra ",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "INTREPID",
    "beerName": "NEW WORLD AMBER",
    "style": "Amber ale using NZ hops for a zingy more fruity flavour & aroma",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "INTREPID",
    "beerName": "PORTER",
    "style": "Full bodied porter using a blend of UK & US hops",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "INTREPID",
    "beerName": "SESSION IPA",
    "style": "Low abv IPA using Eldorado, centennial & mosaic hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ISLE OF PURBECK",
    "beerName": "AMERICAN",
    "style": "American Pale Ale with a peach, hoppy & subtle hay aroma",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "JAMES & KIRKMAN",
    "beerName": "PLUM PORTER",
    "style": "Dark porter with added plums",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "JAMES & KIRKMAN",
    "beerName": "SAAZ",
    "style": "Blonde ale, refreshing, with  light biscuit finish & lemon notes ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KINVER",
    "beerName": "FULL CENTURION",
    "style": "Full alcoholic kick, lovely hop character",
    "abv": "10.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KINVER",
    "beerName": "HALF CENTURION",
    "style": "Pale premium bitter with hop and citrus flavours",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KINVER",
    "beerName": "QUARTER CENTURION",
    "style": "Light session ale brewed with English and American hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KINVER",
    "beerName": "SEXY GENERIAN",
    "style": "Pale and strong bitter brewed with Nugget and Centennial hops ",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "KIRKBY LONSDALE",
    "beerName": "PENNINE AMBLER",
    "style": "Thirst quenching amber ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KIRKBY LONSDALE",
    "beerName": "RADICAL",
    "style": "Ruby red beer with a blend of English and European hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "AMERICAN PALE ",
    "style": "Hazy and unfined pale ale with big US hop flavours",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "ATLAS",
    "style": "Rich, classic dry stout. Roasted & chocolate notes",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "BLUEBIRD",
    "style": "Light, dry hopped ale",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "CENTENNIAL SMASH",
    "style": "Pale ale brewed with maris otter malt and centennial hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "CHERRY ATLAS",
    "style": "Cherry flavoured stout",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "CITRA SMASH",
    "style": "Pale ale brewed with maris otter malt and citra hops",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "EXPLORER",
    "style": "Strong & hoppy IPA with citrus flavours & clean, bitter finish",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "GOLD RUSH",
    "style": "Zesty, golden & crisp, easy drinking golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "NELSON SMASH",
    "style": "Pale ale brewed with maris otter malt and nelson sauvin hops",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "OUTPOST",
    "style": "Traditional best bitter with new world hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "PIONEER",
    "style": "Crisp, & golden, pale ale with a hoppy punch",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "LENTON LANE",
    "beerName": "VANILLA ATLAS",
    "style": "Stout with vanilla flavouring",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLEOVER",
    "beerName": "CREST",
    "style": "Malty, conker coloured best bitter ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLEOVER",
    "beerName": "DIABOLICAL LIBERTY",
    "style": "Traditional pale bitter dry hopped",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLEOVER",
    "beerName": "EPIPHANY",
    "style": "Pale ale rammed with Citra, Mosaic and Simcoe hops ",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLEOVER",
    "beerName": "HOLLOW LEGS",
    "style": "Full-bodied traditional Pale Ale with fruity malts",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LITTLEOVER",
    "beerName": "THE PANTHER",
    "style": "Rich warming stout, hints of coffee, chocolate & Irish whiskey",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "LOST INDUSTRY",
    "beerName": "SHADE OF PALE",
    "style": "",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "LOST INDUSTRY",
    "beerName": "STREETS IN THE SKY",
    "style": "Triple IPA hopped with Cascade, Falconer's Flight and Citra",
    "abv": "11.1",
    "ibu": "NA"
  },
  {
    "breweryName": "LYTHAM",
    "beerName": "BLONDE",
    "style": "A Pale golden beer with a subtle hop aroma and smooth dry finnsih",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "LYTHAM",
    "beerName": "GINGER NUT",
    "style": "Golden ale with subtle hints of ginger & hazelnut",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET HARBOROUGH",
    "beerName": "GREEN HOP 2017",
    "style": "Extra pale brew with fresh hops from this year's harvest",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET HARBOROUGH",
    "beerName": "TRES BIEN - PEACOCK",
    "style": "Pale amber brew with juicy hop flavours",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET HARBOROUGH",
    "beerName": "TRES BIEN - PORTER",
    "style": "Traditional Porter. A little chocolatey, a little smokey",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "MARKET HARBOROUGH",
    "beerName": "WHIRPOOL SERIES No6",
    "style": "Amber brew packed with flavour and featuring exotic US hops",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MARLPOOL",
    "beerName": "FRANK",
    "style": "Irish style red ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MARLPOOL",
    "beerName": "STRAW'S GOLD",
    "style": "Pale bitter beer dry hopped with local wild hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MERRIMAN",
    "beerName": "MERRI GOLD",
    "style": "Golden Ale, light spiced hoppy ale with citrus aroma",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MERRIMAN",
    "beerName": "MERRI L",
    "style": "Dark brown ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MILESTONE ",
    "beerName": "AZACCA GOLD",
    "style": "Pale golden, single hop brew, crisp & refreshing with citrus notes",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MILESTONE ",
    "beerName": "HAMMER HEAD STOUT",
    "style": " Robust stout with a hint of liqourice and good bitter finish",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MILESTONE ",
    "beerName": "PLUM PORTER",
    "style": "Smooth dark porter with plum essence,  with soft fruity flavour",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MILESTONE ",
    "beerName": "SUMMER LOVIN",
    "style": "Pale golden with refreshing tropical fruit flavours ",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "MILESTONE ",
    "beerName": "RASPBERRY WHEAT",
    "style": "Continental style fruit beer with a hint of raspberry",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MILLTOWN",
    "beerName": "BLACK JACK PORTER",
    "style": "Full of robust flavours. Coffee is abundance. ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MILLTOWN",
    "beerName": "TIGERS TAIL",
    "style": "Pale ale with slight citrus notes",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "MUIRHOUSE",
    "beerName": "APA",
    "style": "American pale ale  with lots of Simcoe and Chinook hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MUIRHOUSE",
    "beerName": "BACK IN THE BUILDING",
    "style": "Strong pale ale  with American hops (Citra and Simcoe)",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "MUIRHOUSE",
    "beerName": "BLUEBERRY PORTER",
    "style": "Rich porter with a red tinge from the added blueberries",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "MUIRHOUSE",
    "beerName": "PIRATES GOLD",
    "style": "Golden sweet beer with a bitter finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MUIRHOUSE",
    "beerName": "SHOPPING FOR HOPS",
    "style": "Pale session beer with a citrus bitterness",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NEEPSEND",
    "beerName": "CITRA IPA",
    "style": "Single hopped IPA",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NEEPSEND",
    "beerName": "LOA",
    "style": "Pale ale brewed with summit, azacca and chinook hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NETHERGATE",
    "beerName": "STOUR VALLEY GOLD",
    "style": "Floral aroma with a touch of spice & a mellow bitter finish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NETHERGATE",
    "beerName": "UMBEL MAGNA",
    "style": "A 1750's porter with corriander",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "CLARIDGE'S CRYSTAL",
    "style": "Pale session ale, crisp and fresh with a slight citrus hop finish ",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "DARK SPELL",
    "style": "Hearty red-amber ale with a slightly roasted dry finish ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "GOLDINGS",
    "style": "Golden in colour with Golding hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "PLUM PORTER",
    "style": "Dark porter, with a subtle plummy bitterness. ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "SWIFT NICK",
    "style": "Golden ale, full mouth feel with an explosion of hops ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NOBBY'S",
    "beerName": "T'OWD NAVIGATION",
    "style": "Strong dark ale, rich in malt and hop flavours",
    "abv": "6.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NOMADIC",
    "beerName": "HERETIC",
    "style": "Chilli & lime stout, homegrown chillies, fruity flavours",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NOMADIC",
    "beerName": "NOMAD",
    "style": "Flavour packed IPA, with simcoe, centennial & comet hops",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NOMADIC",
    "beerName": "PALE",
    "style": "Pale bitter with a hoppy kick",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTH RIDING",
    "beerName": "AHTANUM",
    "style": "Pale hoppy ale with a floral citrus flavour. US ahtanum hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTH RIDING",
    "beerName": "MOSAIC",
    "style": "Pale ale full of blueberry and citrus flavours from mosaic hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTH RIDING",
    "beerName": "PALE ALE V5",
    "style": "Trans pacific pale featuring US and Australian hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTH RIDING",
    "beerName": "TIRAMISU PORTER",
    "style": "Porter  with coffee & chocolate added post fermentation",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHALLERTON",
    "beerName": "NORTHALLERTON DARK",
    "style": "Dark ale brewed from chocolate malt & Admiral hops",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NORTHALLERTON",
    "beerName": "YORKSHIRE GOLD",
    "style": "Bitter golden ale enhanced by Cascade and First Gold hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "OLD SCHOOL",
    "beerName": "DETENTION",
    "style": "A clean, straw coloured light drinking bitter. ",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "PENTRICH",
    "beerName": "SHOOT THE SERVANT",
    "style": "Dark Bitter with flavours of toasted caramel & subtle chocolate",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "PENTRICH ",
    "beerName": "SHADOW PLAY",
    "style": "Oatmeal stout.  Chocolate notes  with a subtle amount of roast",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "PHEASANTRY",
    "beerName": "EXCITRA",
    "style": "Golden beer with grapefruit & floral aromas, crisp, hoppy finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PHEASANTRY",
    "beerName": "ORANGE PHEASANT",
    "style": "Golden ale, with the zest of oranges & grapefruit in the aroma",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "PHEASANTRY",
    "beerName": "SMOKIN",
    "style": "Reddish amber. Starts sweet & followed by lingering smokiness",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "PHIPPS",
    "beerName": "BECKETTS ALE",
    "style": "Mahogany coloured with floral hoppiness",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PHIPPS",
    "beerName": "GOLD STAR",
    "style": "Strong golden export pale ale",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "POTBELLY",
    "beerName": "HEDDONISM",
    "style": "Golden bitter with a citrus hoppy flavour ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "POTBELLY",
    "beerName": "PIGGIN SAINT",
    "style": "Pale golden ale with New World hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "QUIRKY",
    "beerName": "BLONDE",
    "style": "Crisp, refreshing, tropical, citrus aftertaste. Citra & Cascade hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "QUIRKY",
    "beerName": "RUBY",
    "style": "English bitter with roasted carafa malt for a distinctive finish",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "CF191",
    "style": " English pale with experimental CF191 hops ",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "CHOCOLATE GHOST",
    "style": "A chocolate IPA",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "FUNKY HOP DONKEY",
    "style": "Collab with Pigeon Fisher - cloudy, hoppy New England IPA",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "KIWI PALE",
    "style": "NZ hopped Pale ",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "NEW DAWN",
    "style": "An American amber",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "RAW",
    "beerName": "XTREME OPPOSITE ATTRACTION",
    "style": "Collab with Pigeon Fisher - hybrid IPA ",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCK MILL",
    "beerName": "BLACK BREAGHA",
    "style": "Full bodied stout with chocolate notes & roast coffee aftertaste",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCK MILL",
    "beerName": "RINGING ROGER",
    "style": "Traditional amber bitter with a fruity aftertaste",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCK'N'ROLL",
    "beerName": "IGGY BEER",
    "style": "Pale ale brewed with German hops and lager malt",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ROCK'N'ROLL",
    "beerName": "MASH CITY ROCKERS",
    "style": "Hoppy pale ale",
    "abv": "5.1",
    "ibu": "NA"
  },
  {
    "breweryName": "ROWTON",
    "beerName": "FALL ABOUT",
    "style": "Seasonal copper coloured bitter",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "ROWTON",
    "beerName": "PURE GOLD",
    "style": "Golden, English hopped bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SANDIWAY",
    "beerName": "HOPSCHISM",
    "style": "Fruity, refreshing golden ale",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "SARAH HUGHES",
    "beerName": "DARK RUBY",
    "style": "Classic dark strong mild",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SCARBOROUGH",
    "beerName": "OLD SAILOR",
    "style": "American style golden ale packed with hops. Tropical fruits ",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "SCARBOROUGH",
    "beerName": "SEA LORD",
    "style": "American hopped ale. Subtle hints of lime and grapefruit ",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SHARDLOW",
    "beerName": "FIVE BELLS",
    "style": "A dark rich ruby ale, with coffee notes",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SHARDLOW",
    "beerName": "MAYFLY",
    "style": "Chestnut coloured best bitter made with six different malts",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SHARDLOW",
    "beerName": "TOMBSTONE",
    "style": "Dark amber brew dry hopped with goldings",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SHARDLOW",
    "beerName": "WHILSTLESTOP",
    "style": "A strong pale golden ale",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "4 WOOD",
    "style": " Full-bodied, traditional Best Bitter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "AFFINITY",
    "style": " Golden Bitter with lots and lots of fruity Citra hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "DISCO BALLS",
    "style": "A Big Hitting Hop Loaded IPA",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "HAPPY PEOPLE",
    "style": " Sharp and citrusy golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "NEW WORLD",
    "style": "Golden citrusy big hitter in terms of flavour",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "WRENCH",
    "style": "Stout with 6 different malts, complex, rich flavour profile",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "SILVERSTONE",
    "beerName": "CLASSIC IPA",
    "style": "IPA with a touch of bitter honey and mild grapefruit finish",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "SILVERSTONE",
    "beerName": "IGNITION",
    "style": "Clean and sharp blonde ale with American hops",
    "abv": "3.4",
    "ibu": "NA"
  },
  {
    "breweryName": "SILVERSTONE",
    "beerName": "OCTANE",
    "style": "Golden ale, rich in malts with hints of honey and toffee",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SLATERS",
    "beerName": "MARAVILLA ",
    "style": "Brewed with Staffordshire Maravilla raspberries ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SLAUGHTERHOUSE",
    "beerName": "SADDLEBACK BITTER",
    "style": "Amber coloured conversational bitter ",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "STAMPS",
    "beerName": "AHTANUM",
    "style": "Pale ale with ahtanum hops, dry hopped, strong hint of citrus",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "STAMPS",
    "beerName": "BONDI BLONDE",
    "style": "Simcoe & centennial hops,  citrus notes, a fresh, tasty, blonde ",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "STAMPS",
    "beerName": "MAIL TRAIN",
    "style": "Golden amber with distinct bitterness, pleasing malt character",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "STEEL CITY",
    "beerName": "A STEAMING BUCKET OF CHILLI AND LIME",
    "style": "Added Chilli and Lemon. Andy Lee's 40 thousandth beer",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "STEEL CITY",
    "beerName": "DROP THE C BOMB V2",
    "style": "Pale and very bitter with fresh hop aroma and citrus notes",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "STEEL CITY",
    "beerName": "GET IN THE C",
    "style": "Pale and very bitter with citrus and tropical fruit flavours",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "STEEL CITY",
    "beerName": "INTERNATIONAL MAN OF MISERY",
    "style": "Combining trad dunkelweiss flavours with modern citrus hops ",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "STOCKPORT",
    "beerName": "GINGER TINGE",
    "style": "Crisply hopped bitter with a ginger tinge",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "STOCKPORT",
    "beerName": "SOUTH ISLAND PALE",
    "style": "Straw cpoloured, lycheearoma, citrus hoppy flavour",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "STOCKPORT",
    "beerName": "STOCK PORTER",
    "style": "Liquorice & malty nose with coffee & chocolate notes",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TAPSTONE",
    "beerName": "HOME GROWN",
    "style": "100% 'wet hopped' with Centennials from their own hop field ",
    "abv": "6.3",
    "ibu": "NA"
  },
  {
    "breweryName": "TAPSTONE",
    "beerName": "SEA MONSTER",
    "style": "Tropical flavours, citrus base, hints of blueberry, mango & lime.",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TARN 51",
    "beerName": "ALTOFTS BLONDE",
    "style": "Session blonde ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TARN 51",
    "beerName": "NEWLANDS STOUT",
    "style": "Creamy dark stout",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THOUSAND TRADES",
    "beerName": "ARTS OF TELEFORCE",
    "style": "Oatmeal stout",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "THOUSAND TRADES",
    "beerName": "COCONUT IPA",
    "style": "An IPA brewed with coconut and oats.",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE FIENDS",
    "beerName": "BAD UNCLE BARRY",
    "style": "West coast pale ale",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE FIENDS",
    "beerName": "DARK SIDE ",
    "style": "Cascadian Dark Ale, chocolate start with a bitter finish",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE HILLS",
    "beerName": "CHERRY STOUT",
    "style": "New cherry stout",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "THREE HILLS",
    "beerName": "HEIDRUN",
    "style": "IPA hopped with Mosaic, Citra and Columbus ",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TICKETYBREW",
    "beerName": "COFFEE ANISE PORTER",
    "style": "Porter brewed with lightly roasted coffee beans and star anise",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "TICKETYBREW",
    "beerName": "MUNCHNER",
    "style": "Golden lager & Belgian ale combo. Biscuit taste, hop aroma",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "A NUGGET OF PUREST GREEN",
    "style": "Green hop beer (Collab with Beeston Hop)",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "BUGBEAR",
    "style": "An American brown ale with roasty, chocolatey flavours",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "EASTERN PALE INDIA ALE (EPIA)",
    "style": "Indian tikka-spiced pale ale (Collab with Bexar County)",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "HERR SIMCOE",
    "style": "Hop forward India porter",
    "abv": "6.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "IMPERIAL PORTER",
    "style": "Imperial verson of an American porter",
    "abv": "9.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "MOLTEN UNIVERSE",
    "style": "Fruity red IPA heftily hopped with US and European hops",
    "abv": "5.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "ROUTE 366",
    "style": "Punch yet sessionable American pale ale with  US hop Ekuanot",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TORRSIDE",
    "beerName": "WITCH HUNT",
    "style": "Vienna IPA, with touch of sweetness & fruity and floral flavours",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "ULVERSTON",
    "beerName": "LAUGHING GRAVY",
    "style": "Light copper beer with good balance of malt & hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "UPHAM",
    "beerName": "PEGASUS",
    "style": "Crisp pale ale. Aromatic maltiness with bitter tantalising taste",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "UPHAM",
    "beerName": "TIPSTER",
    "style": "Golden with refreshing citrus notes and a smooth bitterness",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "WAEN",
    "beerName": "CHOCOLATE MOUSSE",
    "style": "A dark version of pamplemousse with chocolate & vanilla",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WAEN",
    "beerName": "PAMPELMOUSSE",
    "style": "A refreshing pale with grapefruit and mango flavours",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WANTSUM",
    "beerName": "BLACK PIG",
    "style": "Dark smooth imperial Russian porter, chocolate & cherry aroma ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "WANTSUM",
    "beerName": "FORTITUDE",
    "style": "Pale amber colour with a light sweet malty taste",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WANTSUM",
    "beerName": "GREEN ONE HOP ",
    "style": "Golden ale, hedgerow hop flavour good bittering and smooth body ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WANTSUM",
    "beerName": "RED RADDLE",
    "style": "Ruby Red premium bitter, biscuit and toasted malt base",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WELBECK ABBEY",
    "beerName": "CLAIRE'S HIGH KOALATY",
    "style": "Crisp & uplifting Australian-style IPA",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WELBECK ABBEY",
    "beerName": "RAPUNZEL",
    "style": "",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WELBECK ABBEY",
    "beerName": "GEORGE AND THE DRAGON",
    "style": "Firey red ale, juicy rakau hop flavours, fruity bitter aftertaste",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WELBECK ABBEY",
    "beerName": "SETH'S HILLBILLY RYE",
    "style": "A sweet and malty fox-red rye ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "WELDON",
    "beerName": "ROSIES SWEAT BOX",
    "style": "Deep ruby ale made with English hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "WELDON",
    "beerName": "STAHLSTADT",
    "style": "Blonde ale with hints of lemon and fragrant garden herbs",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WETHEROAK HILL",
    "beerName": "COFTON COMMON",
    "style": "Lager type ale with Vienna malt",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "WETHEROAK HILL",
    "beerName": "STICKLEBRACK",
    "style": "Pale bitter with New Zealand hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "WISHBONE",
    "beerName": "NIBS & BEAN",
    "style": " Mocha stout with roasted Brazilian Espresso & Cacao Nibs ",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "WISHBONE",
    "beerName": "VOLK",
    "style": "Pale ale hopped with Slovenian Styrian Wolf",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "FERRY BREWERY (Scotland)",
    "beerName": "WORLD GONE MAD",
    "style": "Strong bitter citrus dark Ale",
    "abv": "8.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BATEMANS ",
    "beerName": "GOLD",
    "style": "Golden ale with a citrus flavour & aroma. Dry & very moreish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BATEMANS ",
    "beerName": "LINCOLNSHIRE RED",
    "style": "Polished red ale with 4 malts pale, wheat, crystal & chocolate ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BATEMANS ",
    "beerName": "SKULL & HAMMERS",
    "style": "Uniquely blended light amber ale, hint of citrus, full of flavour",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BATEMANS ",
    "beerName": "XB",
    "style": "Amber, English pale ale crafted with crisp Lincolnshire malt ",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "BATEMANS ",
    "beerName": "XXXB",
    "style": "English tawny pale ale, Challenger, Styrian & Golding hops ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "BAJAN BREAKFAST",
    "style": "Oatmeal Pale ale",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "BLEEDING HEART",
    "style": "Red rye ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "CHASING THE SUN",
    "style": "A powerful IPA",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "ENDLESS SUMMER",
    "style": "Pale beer with a crisp, refreshing bitterness & citrus aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "RISE AND SHINE",
    "style": "A rich Coffee Milk Stout using locally roasted coffee beans ",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "SNAKE EYES",
    "style": "Crisp US session pale, citrus bitterness & tropical fruit aroma",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "BLACK IRIS",
    "beerName": "SORE ARSE CHEEKS",
    "style": "Sorachi ace IPA",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "ELSIE MO",
    "style": "Golden ale known for its subtle floral character and citrus taste",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "HARVEST PALE",
    "style": "Multi-award winning blonde beer with a delicate citrus character",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "HILARY SILVESTER",
    "style": "Red ale with Cascade lupulin powder. Citrusy, malty & more-ish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "MIDNIGHT OWL",
    "style": "Black IPA with citrus aroma and hints of caramel.",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "PILSNER",
    "style": "Classic German hops give this cask Pilsner authenticity",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "SESSION IPA",
    "style": "Simcoe hop give a rounded bitterness & juicy tropical fruit notes",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "SHERWOOD RESERVE",
    "style": "Smooth stout brewed with fresh Colombian coffee beans",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "CASTLE ROCK",
    "beerName": "WHEAT",
    "style": "Smooth & estery wheat beer with lots of Citra dry hop for juiciness",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "EVERARDS",
    "beerName": "BEACON HILL",
    "style": "Amber session bitter, dry, bitter and moreish",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "EVERARDS",
    "beerName": "MYRTLE ",
    "style": "A fruity red ale, brewed with pilot and flyer hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "EVERARDS",
    "beerName": "OLD ORIGINAL",
    "style": "Tawny, copper ale with burnt, roasted flavours",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "EVERARDS",
    "beerName": "SUNCHASER",
    "style": "Refreshing brew with subtle, zesty, sweet flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "EVERARDS",
    "beerName": "TIGER",
    "style": "A clean, malty brew with a hoppy aroma",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "DODGEM",
    "style": "Pale with a floral aroma",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "ROLLERGHOSTER",
    "style": "A red beer brewed with summer fruits",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "STEAM PUNK PORTER",
    "style": "Brewed with malt smoked on the brewery's own smoker",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "TEA CUPS",
    "style": "A mad,  cloudy traditional ginger beer",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "THROUGH THE LOOKING GLASS",
    "style": "Tea cups big brother with a mad fruit twist",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "CHARRINGTON IPA",
    "style": "Crisp blonde beer, not too bitter with a subtle biscuit palate",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "CHARRINGTON OATMEAL STOUT",
    "style": "Well balanced nutty flavour with a slight bitterness and a hint of treacle",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "MASTERPIECE",
    "style": "Rich golden colour, full flavoured with a pleasant mellow finish ",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "OFFILERS BEST BITTER",
    "style": "Aromatic hops, toasted cereal notes with hints of smoke and spice",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "ST.MODWEN",
    "style": "Light amber, smooth drinking bitter with medium bitterness",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "VICTORIA PALE ALE",
    "style": "Aroma of resinous hop notes and smooth fruity palate",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "HERITAGE",
    "beerName": "WITCH DRIPPING",
    "style": "Tawny, well hopped with a black pepper and herb garden aroma ",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "BEST",
    "style": "Glowing copper best Bitter",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "CHERRY RAVEN",
    "style": "Special Cherry Edition of our Raven Stout",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "EIGHT FOR A WISH",
    "style": "Pumpkin spiced dark amber",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "HAVE YOUR CAKE AND EGRET",
    "style": "Raspberry Jam Victoria sponge pale. Collab with Notts WI",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "HOPPILY EVER AFTER",
    "style": "Blonde refreshing beer with distinct endeavour hop flavour",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "JAY IPA",
    "style": "British hopped IPA",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "NINE FOR A KISS",
    "style": "Nottingham Fresh Green Hop Pale Ale",
    "abv": " \t4.0 ",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "RAVEN STOUT",
    "style": "Rich and full bodied Stout",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "THIEVING ROGUE",
    "style": "Straw yellow, thirst quenching fruity and floral ale",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "WANDERLUST SERIES - CHAINLESS",
    "style": "American Pale Ale full of American hops, simcoe and cascade",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "MAGPIE",
    "beerName": "WANDERLUST SERIES - ROAM",
    "style": "New World Pale Ale, Tropical hops from New Zealand and America",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "BROADWAY REEL ALE",
    "style": "Pale-amber ale exclusive to Broadway cinema ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "BULLION",
    "style": "Gold in its purest form!",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "CENTURION ",
    "style": "Tasty dark porter",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "COCK N' HOOP",
    "style": "Rounded bitter with a citrus hop flavour",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "DREADNOUGHT",
    "style": "Amber premium bitter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "EXTRA PALE ALE",
    "style": "Light coloured, well balanced smooth and fragrant ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "FOUNDRY MILD",
    "style": "A strong chestnut mild",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "KNIGHT'S T'ALE",
    "style": "Pale copper coloured with a citrus finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "LEGEND",
    "style": "Flavoursome malt character with a lively hoppy finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "ROBIN HOOD",
    "style": "Pale copper coloured triple hopped brew",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "ROCK BITTER",
    "style": "Good old fashioned, hoppy all-English bitter",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "ROCK MILD",
    "style": "Smooth and dark with a biscuity flavour",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "SOOTY STOUT",
    "style": "Beauty in Black! Traditional classic oatmeal stout ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NOTTINGHAM",
    "beerName": "SUPREME",
    "style": "Light, easy drinking strong ale",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "PENTRICH (Nottm bar)",
    "beerName": "BRICK BY BRICK",
    "style": "An easy drinking golden bitter brewed with Vienna malt",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "PENTRICH (Nottm bar)",
    "beerName": "WAI-ITI",
    "style": "NZ hopped session pale ale brewed with oats & Wai-iti hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "ROBIN HOOD",
    "beerName": "GOLDEN ARCHER",
    "style": "Golden ale with complex fruity and bitter flavour",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "ROBIN HOOD",
    "beerName": "MAIDEN'S PALE",
    "style": "Pale ale with honey-like flavour and fruity hop finish",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "ROBIN HOOD",
    "beerName": "ROBIN HOOD PALE ALE",
    "style": "Balanced pale straw bitter with floral and citrus notes",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "ROBIN HOOD",
    "beerName": "THE BLACK DEATH",
    "style": "Black, evil ale said to ease the boils & pustules from the plague!",
    "abv": "8.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "GOLD STAR BLONDE",
    "style": "Pale ale with a light, smooth and refreshing taste",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "HOLLOW STONE - OLIGO NUNK",
    "style": "Amercian sytle beer brewed with all American hops ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "HOLLOW STONE - PALE ALE",
    "style": "All English Ingredients, Jester Hop & cultured yeast",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "INDIA PALE ALE",
    "style": "Full bodied, English IPA,  floral aroma & smooth hop finish",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "MILD",
    "style": "Traditional English mild, dark, sweet and very light",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "NUT BROWN",
    "style": "English brown ale with a rich nut brown colour",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SHIPSTONES",
    "beerName": "ORIGINAL",
    "style": "Amber session bitter with a a subtle yet assertive bitterness",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "AMBER ALE",
    "style": "Session beer. Chinook hopsgive a pine aroma & flavour",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "DARK ALE",
    "style": "Dark Stout made with roasted barley and English hops ",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "GOLDEN ALE",
    "style": "Brewed with cascade hops leaving floral zesty aftertaste",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "PALE ALE",
    "style": "Chinook hops give a fruity flavour with a hint of pineapple",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "PALE AND INTERESTING",
    "style": "Pale ale with citra hop, strong citrus aroma",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "THORLEY & SON",
    "beerName": "RUBY ALE",
    "style": "Willamette hop gives spice that has fruit & floral essence",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "BISCUIT PORTER",
    "style": "Malts from Germany,  Belgium & UK give a chocolate digestive flavour",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "CAPTAIN HOPBEARD",
    "style": "Brewed with southern hemisphere hops for tropical flavour & aroma",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "GUARDIAN OF THE FOREST",
    "style": "Session IPA with Citra, mosaic and simcoe hops",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "PAPA JANGLES VOODOO STOUT",
    "style": "Stout with complex flavour profile including coffee, chocolate & raisin",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "PASSION FRUIT IN THE FACE",
    "style": "Massive passionfruit flavours",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "PEANUT BUTTER STOUT",
    "style": "A peanut butter stout - would you believe?",
    "abv": "7.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "PUNCH IN THE FACE",
    "style": "American pale with fruity hop character",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "SINGLE HOP NELSON SAUVIN",
    "style": "Single hop pale with Nelson Sauvign hops from NZ.",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "SLAP IN THE FACE",
    "style": "Session pale with citrus hops",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "TOTALLY BREWED",
    "beerName": "THE 4 HOPMEN OF THE APOCALYPSE",
    "style": "Piney, citrus hop character with caramel note",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "99 RED BABOONS",
    "style": "Dark  ale, combining fruity hoppiness with a dark, malty side.  ",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "APE",
    "style": "Strong pale ale with US hops. Aromas of resinous pine & citrus.  ",
    "abv": "5.4",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "BG SIPS",
    "style": "Pale & intensely hoppy witht tropical fruit aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "CHIMPAGNE",
    "style": "Very strong pale ale with fruity tones and smooth bitter finish",
    "abv": "10.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "CHOCOLATE GUERRILLA AMARETTO",
    "style": "A malty stout with a rich chocolate aroma & flavours",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "FUNKY GIBBON",
    "style": "Fruity, earthey, light-copper coloured session ale with US hops",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "GUERRILLA",
    "style": "Malty pitch black beer balanced by a robust bitter bite",
    "abv": "4.9",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "INFINITY  IPA",
    "style": "Satisfying golden ale brewed with Citra hops from the USA",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "MARMOSET",
    "style": "Pale, crisp & refreshing, Citra hops give  tropical fruit flavours",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "NUTS",
    "style": "Nut brown ale with vienna malt. Fruity taste & bitter afternote",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "PLANET OF THE APES",
    "style": "Pale, intensely hoppy,  spiced berry and tropical fruit aromas",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "BLUE MONKEY",
    "beerName": "WINTER WOOLLY",
    "style": "Auburn scotch ale, coffee & fruity aromas, caramel aftertaste",
    "abv": "6.8",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "22",
    "style": "Wonderfully balanced best bitter with fruit notes",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "ABDUCTION",
    "style": "Pale Golden ale with tropical fruit aromas",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "AY UP",
    "style": "Light sparkling ale with crisp citrus flavours",
    "abv": "3.9",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "DARK DRAKE",
    "style": "Velvety oatmeal stout with coffee and toffee finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "GINGER NINJA",
    "style": "Ginger beer with citrus notes and a subtle ginger flavour",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "IMPERIAL DRAKE",
    "style": "Strong, velvety, oatmeal stout. Malty, caramel & liquorice flavours",
    "abv": "6.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "NICE WEATHER 4 DUCKS",
    "style": "Copper coloured session ale, fruit salad in a glass!",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "SAPPHIRE",
    "style": "Fruity aroma with lots of citrus flavours with a spicy finish",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "WADDLE IT BE?",
    "style": "Pale ale with a complex mouth-feel & intense fruity flavours ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "DANCING DUCK",
    "beerName": "WOT THE DUCK - DUCK A L'ORANGE",
    "style": "Warming fruity pale ale infused with Cointreau & orange peel",
    "abv": "6.4",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "APRICOT JUNGLE",
    "style": "Blonde golden ale with added apricots and champagne yeast",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "CARAMEL STOUT",
    "style": "Dark brew with  the flavour of chocolate caramel, rich and sweet ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "CHOCOLATE MINT STOUT",
    "style": "Stout with an After Eights flavour. Fresh mint is added to the brew",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "COCO LOCO",
    "style": "Black coloured ale with big coconut flavours on the palate& nose ",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "FRAMBOISE",
    "style": "A pale golden coloured fermented with raspberries",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "PASHA, PASHA",
    "style": "Golden in colour with a passion fruit bomb of flavours ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "P-BUTTER",
    "style": "Dark brown ale made with caramalt with added peanut butter",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "SILHOUETTE",
    "style": "Extra pale ale with vanilla pods. Vanilla ice cream flavours",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "GRAFTON",
    "beerName": "SALLY POLLARDS GINGER CONCOCTION",
    "style": "Black stout fermented with ginger. Brewed with help of Festival Infrastructure team",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "A beerNameD LEEROY",
    "style": "Hoppy, fruity pale ale  with a hint of maltiness",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "AUSTRALIAN PALE",
    "style": "Rich golden ale, floral aroma & citrus & tropical fruit flavours",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BIG BANG THEORY",
    "style": "Pale ale. Huge hop aroma, malty sweetness, gentle bitter finish",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BITTER",
    "style": "Smooth, full-bodied, pale chestnut traditional bitter",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BLOND SESSION ALE",
    "style": "Light golden session ale with a refreshing citrus hop finish",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "DOUBLE JIP",
    "style": "Beyond an India Pale Ale. Lots of citrus, sage & pine flavour",
    "abv": "9.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "EGYPTIAN CREAM",
    "style": " Creamy milk stout with velvety mouthfeel and a fruity hop bite ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "FENLAND FARMHOUSE SAISON",
    "style": "Refreshing new world Saison with a fruity aroma",
    "abv": "7.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "HOP STASH DENALI",
    "style": "Lots of Denali hops, pineapple& citrus flavours, big malty base",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "MANHATTAN PROJECT",
    "style": "Light & refreshing,  citrus & tropical flavourss",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "PULPING ON YOUR STEREO",
    "style": "Rind and pulp of 359 oranges give this IPA a strong fruity flavour",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "RELEASE THE CHIMPS",
    "style": "IPA with a crisp mouth feel and  clean, punchy bitterness ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "SIMPLE PLEASURES",
    "style": "Light, clean  beer, pleasing citrus hop aroma & flavour",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "SUPERSONIC",
    "style": "Gin & Tonic Wheat Beer with juniper, lemon, other botanicals",
    "abv": "6.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "BLIND TIGER",
    "style": "Aromatic pale golden beer, with oranges added to the brew ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "CHOCOLATE ORANGE ODYSSEY",
    "style": "Smooth black porter with a dark chocolate and orange twist",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "DROP O THE BLACK STUFF",
    "style": "Rich, smooth with a hint of aniseed ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "EXODUS",
    "style": "Golden with a bold citrus flavour, & burst of grapefruit aroma",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "LEFT LION",
    "style": "Traditional chestnut-brown bitter with a dry finish",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "OUTLAWED",
    "style": "Citrusy lemon, hoppy, with floral overtones",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "ROARING MEG",
    "style": "Classic IPA with a sweet citrus honey aroma, dry finish",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SPRINGHEAD",
    "beerName": "SURRENDER",
    "style": "A burnished, copper-coloured bitter",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "BEADECA'S WELL",
    "style": "Smoked porter. Hints of toffee, caramel and dark fruits",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "BEAGLE JUICE",
    "style": "Light pale ale with bold citrus aromas and a juicy mouthfeel",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "BROCK",
    "style": "Velvety dark, smooth stout. Soft treacle, smokey flavour",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "BROTHER RABBIT",
    "style": "Lemon zest colour, clean, hoppy aroma, dry palette",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "COCOA WONDERLAND",
    "style": "Robust porter, natural mocha malt flavours &  real chocolate ",
    "abv": "6.8",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "CRACKENDALE",
    "style": "Single Hopped Citra Pale Ale. Tropical fruit aromas",
    "abv": "5.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "GUTHRIE",
    "style": "Srefreshing pale ale made with cascade and galaxy hops",
    "abv": "4.3",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "JAIPUR",
    "style": "Golden I.P.A. with massive hoppiness",
    "abv": "5.9",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "JAYWICK",
    "style": "American pale ale,  grapefruit hop flavour & malty taste ",
    "abv": "4.8",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "LORD MARPLES",
    "style": "Traditional bitter. Light toffee & caramel with floral spicy notes ",
    "abv": "4.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "PEVEREL",
    "style": "Straw blonde ale with tropical fruit flavours, culminating in a dry, bitter finish",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "PIVNI",
    "style": "Quaffable session IPA made with Cascade and Citra hops",
    "abv": "3.2",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "POLLARDS",
    "style": "Coffee milk stout with rich coffee aromas",
    "abv": "5.0",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "SEQUOIA",
    "style": "American amber ale with citrus and pine notes",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "THORNBRIDGE",
    "beerName": "WILD SWAN",
    "style": "White golden, hint of herbs, subtle spiciness",
    "abv": "3.5",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "JAM",
    "style": "Pale amber infused with Mango and dry hopped with Citra",
    "abv": "4",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "POD",
    "style": "Classic Vanilla oatmeal stout",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "FIRST CHOP",
    "beerName": "RED",
    "style": "Rich spicy red ale with big hop flavours",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "HOP KETTLE (Swindon)",
    "beerName": "LODE STAR",
    "style": "Pale ale brewed with 2 classic American hop varieties UK grown",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "KENNET AND AVON",
    "beerName": "SAVERNAKE STOUT",
    "style": "Full bodied with aromas of licorice, roasted coffee, chocolate",
    "abv": "4.7",
    "ibu": "NA"
  },
  {
    "breweryName": "LONDON ROAD",
    "beerName": "GLUTEANUS MINAMUS",
    "style": "Straw coloured, refreshing with bursts of Lemon and Lime  ",
    "abv": "4",
    "ibu": "NA"
  },
  {
    "breweryName": "MONTY'S",
    "beerName": "DARK SECRET",
    "style": "Full bodied oatmeal stout, chocolate and coffee taste",
    "abv": "5.6",
    "ibu": "NA"
  },
  {
    "breweryName": "MONTY'S",
    "beerName": "MASQUERADE",
    "style": "Premium golden bitter",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "FURNACE",
    "beerName": "FUN SPONGE",
    "style": "Citra & Mosaic hopped juicy beer",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "POTBELLY",
    "beerName": "PIGGIN SAINT",
    "style": "Pale golden ale with New World hops",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "4 WOOD",
    "style": " Full-bodied, traditional Best Bitter",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "AFFINITY",
    "style": " Golden Bitter with lots and lots of fruity Citra hops",
    "abv": "4.6",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "DISCO BALLS",
    "style": "A Big Hitting Hop Loaded IPA",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "HAPPY PEOPLE",
    "style": " Sharp and citrusy golden ale",
    "abv": "4.2",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "NEW WORLD",
    "style": "Golden citrusy big hitter in terms of flavour",
    "abv": "3.7",
    "ibu": "NA"
  },
  {
    "breweryName": "SHINY",
    "beerName": "WRENCH",
    "style": "Stout with 6 different malts, complex, rich flavour profile",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "TEA CUPS",
    "style": "A mad,  cloudy traditional ginger beer",
    "abv": "4",
    "ibu": "NA"
  },
  {
    "breweryName": "FUNFAIR",
    "beerName": "THROUGH THE LOOKING GLASS",
    "style": "Tea cups big brother with a mad fruit twist",
    "abv": "5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "A beerNameD LEEROY",
    "style": "Hoppy, fruity pale ale  with a hint of maltiness",
    "abv": "5.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "AUSTRALIAN PALE",
    "style": "Rich golden ale, floral aroma & citrus & tropical fruit flavours",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BIG BANG THEORY",
    "style": "Pale ale. Huge hop aroma, malty sweetness, gentle bitter finish",
    "abv": "5.3",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BITTER",
    "style": "Smooth, full-bodied, pale chestnut traditional bitter",
    "abv": "4.1",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "BLOND SESSION ALE",
    "style": "Light golden session ale with a refreshing citrus hop finish",
    "abv": "3.8",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "DOUBLE JIP",
    "style": "Beyond an India Pale Ale. Lots of citrus, sage & pine flavour",
    "abv": "9.9",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "EGYPTIAN CREAM",
    "style": " Creamy milk stout with velvety mouthfeel and a fruity hop bite ",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "FENLAND FARMHOUSE SAISON",
    "style": "Refreshing new world Saison with a fruity aroma",
    "abv": "7.2",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "HOP STASH DENALI",
    "style": "Lots of Denali hops, pineapple& citrus flavours, big malty base",
    "abv": "5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "MANHATTAN PROJECT",
    "style": "Light & refreshing,  citrus & tropical flavourss",
    "abv": "4",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "PULPING ON YOUR STEREO",
    "style": "Rind and pulp of 359 oranges give this IPA a strong fruity flavour",
    "abv": "4.5",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "RELEASE THE CHIMPS",
    "style": "IPA with a crisp mouth feel and  clean, punchy bitterness ",
    "abv": "4.4",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "SIMPLE PLEASURES",
    "style": "Light, clean  beer, pleasing citrus hop aroma & flavour",
    "abv": "3.6",
    "ibu": "NA"
  },
  {
    "breweryName": "NENE VALLEY",
    "beerName": "SUPERSONIC",
    "style": "Gin & Tonic Wheat Beer with juniper, lemon, other botanicals",
    "abv": "6",
    "ibu": "NA"
  }
 ];

db.Beers
  .remove({})
  .then(() => db.Beers.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
