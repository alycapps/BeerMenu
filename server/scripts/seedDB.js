const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/beermenu");

const beerSeed = [
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "10 BLINKS Cheery Saison",
  "Beer Style": "Saison",
  "ABV": "9.2%",
  "IBU": "24/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Arbor Cheery Cider",
  "Beer Style": "Cider",
  "ABV": "6.3%",
  "IBU": "/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Barrel Aged EIK ZON IPA",
  "Beer Style": "Sour",
  "ABV": "7.0%",
  "IBU": "80/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Bliss Wheat",
  "Beer Style": "Wheat Beer",
  "ABV": "5.9%",
  "IBU": "15/OG 1.054"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Bollywood Blonde",
  "Beer Style": "Blonde",
  "ABV": "6.0%",
  "IBU": "7/OG 1.056"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Buzzsaw American IPA",
  "Beer Style": "IPA",
  "ABV": "7.5%",
  "IBU": "51/OG 1.066"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Cucumber Lime Gose",
  "Beer Style": "Gose,Kettle Sour",
  "ABV": "4.4%",
  "IBU": "5/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Euchre Pilsner",
  "Beer Style": "Larger, Pilsner",
  "ABV": "5.5%",
  "IBU": "43/OG 1.05"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Framboozled",
  "Beer Style": "Sour",
  "ABV": "7.7%",
  "IBU": "7/OG 1.07"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Kick Out The Jam",
  "Beer Style": "Sour",
  "ABV": "4.6%",
  "IBU": "/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Mackinac Island Fudge Stout",
  "Beer Style": "Stout",
  "ABV": "5.7%",
  "IBU": "15/OG 1.062"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "MAFKA Barrel Aged Sour Ale",
  "Beer Style": "Sour, Specialty",
  "ABV": "5.0%",
  "IBU": "/OG "
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Sacred Cow IPA",
  "Beer Style": "IPA",
  "ABV": "6.8%",
  "IBU": "80/OG 1.064"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Second Sun",
  "Beer Style": "Americian Wild Ale",
  "ABV": "6.8%",
  "IBU": "80/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Strawberry Blonde",
  "Beer Style": "Blonde",
  "ABV": "7.7%",
  "IBU": "7/OG1.07"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Treebeard IPA",
  "Beer Style": "Pale Ale",
  "ABV": "6.2%",
  "IBU": "45/OG"
  },
  {
  "Brewery Name": "Arbor Brewing company Beers",
  "Beer Name": "Violin Monster",
  "Beer Style": "Specialty",
  "ABV": "9.5%",
  "IBU": "35/OG 1.090"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "Blonde Bear",
  "Beer Style": "NA",
  "ABV": "4.2%",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "Sleepy Badger",
  "Beer Style": "ENGLISH ALE",
  "ABV": "4.5%",
  "IBU": "36"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "WHITE WOLF",
  "Beer Style": "AMERICAN ALE",
  "ABV": "5.0%",
  "IBU": "40"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "SHIRE HORSE",
  "Beer Style": "ENGLISH ALE",
  "ABV": "4.3%",
  "IBU": "35"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "C MONSTER",
  "Beer Style": "NA",
  "ABV": "6.5%",
  "IBU": "55"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "CHAMELEON SERIES",
  "Beer Style": "NA",
  "ABV": "5.5%",
  "IBU": "50"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "KING CROW",
  "Beer Style": "ENGLISH ALE",
  "ABV": "7.2%",
  "IBU": "50"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "NUTTY AMBASSADOR",
  "Beer Style": "ENGLISH ALE",
  "ABV": "6.0%",
  "IBU": "30"
  },
  {
  "Brewery Name": "LITTLE Critters Brewing Company",
  "Beer Name": "LITTLE HOPPER",
  "Beer Style": "ENGLISH ALE",
  "ABV": "3.6%",
  "IBU": "25"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "LIGHTHOUSE AMBER",
  "Beer Style": "GERMAN",
  "ABV": "5.25%",
  "IBU": "17"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "BLOOD ORANGE HONEY",
  "Beer Style": "AMERICIAN",
  "ABV": "5.7%",
  "IBU": "9.8"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "IPA #11",
  "Beer Style": "BREW MASTER",
  "ABV": "5.7%",
  "IBU": "50"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "BLUEBERRY CREAM ALE",
  "Beer Style": "BLUE BERRY",
  "ABV": "5.0%",
  "IBU": "14"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "LA CERVEZA",
  "Beer Style": "AMERICIAN PALE ALE",
  "ABV": "5.9%",
  "IBU": "50/OG 1.046"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "OKTOBERFEST",
  "Beer Style": "MUNCH, GERMANY",
  "ABV": "6.0%",
  "IBU": "28"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "IMPERIAL CINNAMON HEFEWEIZEN",
  "Beer Style": "GERMAN",
  "ABV": "8.25%",
  "IBU": "11.75"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "RED SAIL ALE",
  "Beer Style": "AMERICAN",
  "ABV": "4.5%",
  "IBU": "10.8"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "BLACK CHERRY VANILLA PORTER",
  "Beer Style": "NA",
  "ABV": "5.25%",
  "IBU": "13"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "CHOCOLATE COVERED CHERRY STOUT",
  "Beer Style": "STOUT",
  "ABV": "6.8%",
  "IBU": "10.7"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "BELGIAN DUBBEL",
  "Beer Style": "BELGIUM",
  "ABV": "8.8%",
  "IBU": "19"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "WET RY'D",
  "Beer Style": "MICHIGAN",
  "ABV": "4.8%",
  "IBU": "32"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "YUZU",
  "Beer Style": "PERHAPS SUMMER",
  "ABV": "5.5%",
  "IBU": "23"
  },
  {
  "Brewery Name": "CHEBOYGAN BREWING CO.",
  "Beer Name": "JUSA PORTER",
  "Beer Style": "STOUT",
  "ABV": "NA",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "ASSUMPTION SAISON",
  "Beer Style": "FARMHOUSE",
  "ABV": "6.8%",
  "IBU": "28"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "BACK ALLEY PORTER",
  "Beer Style": "NA",
  "ABV": "5.5%",
  "IBU": "40.3"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "BACK ALLEY NITRO",
  "Beer Style": "NA",
  "ABV": "5.5%",
  "IBU": "40.3"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "FIRST STREET WHITE ALE",
  "Beer Style": "BELGIAN",
  "ABV": "5.6%",
  "IBU": "28.6"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "INTER OCEAN IPA",
  "Beer Style": "CASCADE AND COLUMBUS",
  "ABV": "6.1%",
  "IBU": "63.2"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "POPULAR BLONDE",
  "Beer Style": "UNIQUE BLONDE ALE",
  "ABV": "5.2%",
  "IBU": "26.3"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "POPULAR BLONDE NITRO",
  "Beer Style": "UNIQUE BLONDE ALE",
  "ABV": "5.2%",
  "IBU": "26.3"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "QUEEN CITY KOLSCH",
  "Beer Style": "COLOGNE, GERMANY LARGER",
  "ABV": "5.2%",
  "IBU": "28.2"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "THORNBERRY'S BEST",
  "Beer Style": "ENGLISH ALE",
  "ABV": "4.3%",
  "IBU": "36.1"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "BAPAJACK'S BIERE DE GRADE",
  "Beer Style": "NEW",
  "ABV": "6.6%",
  "IBU": "26.3"
  },
  {
  "Brewery Name": "FIRST STREET BRWEING CO.",
  "Beer Name": "DLD DUNKELWEIZEN",
  "Beer Style": "GERMANY",
  "ABV": "5.4%",
  "IBU": "17.7"
  },
  {
  "Brewery Name": "603 BREWERY",
  "Beer Name": "18 MILE RYE PALE ALE",
  "Beer Style": "MIX OF AMERICIAN AND ENGLISH HOPS",
  "ABV": "6.6%",
  "IBU": "37.5"
  },
  {
  "Brewery Name": "604 BREWERY",
  "Beer Name": "GRANITE STOUT",
  "Beer Style": "MIX OF AMERICIAN AND ENGLISH HOPS",
  "ABV": "8.0%",
  "IBU": "34"
  },
  {
  "Brewery Name": "605 BREWERY",
  "Beer Name": "NH ALE",
  "Beer Style": "MIX OF AMERICIAN AND ENGLISH HOPS",
  "ABV": "5.0%",
  "IBU": "18"
  },
  {
  "Brewery Name": "606 BREWERY",
  "Beer Name": "WATERVILLE WHEAT",
  "Beer Style": "ENGLISH NOBLE",
  "ABV": "5.0%",
  "IBU": "17"
  },
  {
  "Brewery Name": "607 BREWERY",
  "Beer Name": "WHITE PEAKS IPA",
  "Beer Style": "AMERICAN",
  "ABV": "6.6%",
  "IBU": "52"
  },
  {
  "Brewery Name": "608 BREWERY",
  "Beer Name": "WINNI ALE",
  "Beer Style": "AMERICAN",
  "ABV": "6.6%",
  "IBU": "39"
  },
  {
  "Brewery Name": "609 BREWERY",
  "Beer Name": "WOOD DEVIL DOUBLE IPA",
  "Beer Style": "AMERICAN AND EURO",
  "ABV": "9.2%",
  "IBU": "101"
  },
  {
  "Brewery Name": "610 BREWERY",
  "Beer Name": "FIRST SMOKED PORTER",
  "Beer Style": "AMERICIAN",
  "ABV": "7.4%",
  "IBU": "31"
  },
  {
  "Brewery Name": "611 BREWERY",
  "Beer Name": "ICE OUT",
  "Beer Style": "BELGIAN",
  "ABV": "7.0%",
  "IBU": "25"
  },
  {
  "Brewery Name": "612 BREWERY",
  "Beer Name": "SUMMALIME",
  "Beer Style": "AMERICIAN",
  "ABV": "4.5%",
  "IBU": "34"
  },
  {
  "Brewery Name": "613 BREWERY",
  "Beer Name": "SUMMATIME PALE ALE",
  "Beer Style": "AMERICIAN",
  "ABV": "4.5%",
  "IBU": "34"
  },
  {
  "Brewery Name": "614 BREWERY",
  "Beer Name": "TOASTED PUMPKIN ALE",
  "Beer Style": "AMERICIAN AND ENGLISH",
  "ABV": "8.2%",
  "IBU": "28"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "EAGLE IPA",
  "Beer Style": "AMERICIAN IPA ",
  "ABV": "6.2%",
  "IBU": "50"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "AMERICIAN AMBER ALE",
  "Beer Style": "AMERICIAN",
  "ABV": "5.0%",
  "IBU": "30"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "RAINBOW RED ALE",
  "Beer Style": "INDIA RED",
  "ABV": "7.5%",
  "IBU": "62"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "BROWN ALE",
  "Beer Style": "AMERICIAN",
  "ABV": "5.5%",
  "IBU": "35.5"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "TWO RIVERS RYE",
  "Beer Style": "AMERICIAN",
  "ABV": "6.6%",
  "IBU": "40"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "TWO HEADED STOUT",
  "Beer Style": "ENGLISH",
  "ABV": "8.0%",
  "IBU": "38"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "DARWIN'S THEORY",
  "Beer Style": "ENGLISH",
  "ABV": "8.0%",
  "IBU": "38"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "WHITTLE WEE HEAVY",
  "Beer Style": "ENGLISH",
  "ABV": "9.5%",
  "IBU": "20"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "LOGGER",
  "Beer Style": "BOHEMIAN",
  "ABV": "4.5%",
  "IBU": "10"
  },
  {
  "Brewery Name": "TROUT TOWN",
  "Beer Name": "SUMMER BLONDE",
  "Beer Style": "NA",
  "ABV": "4.8%",
  "IBU": "20"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "BEE HEAD",
  "Beer Style": "Honey colour, flavoured with Sussex Downs Blossom Honey",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "FESTIVALE",
  "Beer Style": "Copper colour with a refreshing fruity flavour",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "GOLD ANGEL",
  "Beer Style": "Bright Gold, Full bodied flavour with a gentle citrus hop flavour",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "HOP POCKET",
  "Beer Style": "Light India pale ale, clean, hoppy and refreshing",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "LAMMAS ALE",
  "Beer Style": "Clear amber, celebrating the first harvest ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "1648 BREWERY",
  "Beer Name": "SIGNATURE",
  "Beer Style": "Very Pale, Sweet and malty ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "4T's BREWERY",
  "Beer Name": "BIG BRO APA",
  "Beer Style": "American pale ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "4T's BREWERY",
  "Beer Name": "BIG DADDY IPA",
  "Beer Style": "Strong hoppy IPA",
  "ABV": "7.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "4T's BREWERY",
  "Beer Name": "PILSNER",
  "Beer Style": "Cask Pilsner",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "4T's BREWERY",
  "Beer Name": "WALKERS RESURRECTION",
  "Beer Style": "Old ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "4T's BREWERY",
  "Beer Name": "WARRINGTON SPECIAL BITTER",
  "Beer Style": "Fruity bitter with a deep bitter after taste",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "9 LIVES",
  "Beer Name": "DARK",
  "Beer Style": "Dark Ruby Ale with an inviting of roast malt and fruit",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "CASUAL",
  "Beer Style": "Bold complex stout using unrefined chocolate",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "EASY AMERICAN BROWN",
  "Beer Style": "Biscuit caramel & chocolate notes with subtle cascade flavours",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "JACKAL",
  "Beer Style": "Traditional porter made with four different malts",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "LIFE OF BRIAN",
  "Beer Style": "Chocolate vanilla porter brewed for Brian Moore's 78th birthday",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "PRIDE",
  "Beer Style": "Crisp and clean pale session bitter",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "RESTLESS",
  "Beer Style": "Hop hitter with bags of Simcoe and Amarillo hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "SALLY POLLARDS ABSTRACT MAIDEN",
  "Beer Style": "Strong pale ale brewed with the help of the Festival Cellar team",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ABSTRACT JUNGLE",
  "Beer Name": "STURDY IPA",
  "Beer Style": "A classic style IPA using big hitting American hops",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ACORN",
  "Beer Name": "ERNEST IPA",
  "Beer Style": "Rich, complex golden ale,  apricot, citrus & spice characteristics",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ACORN",
  "Beer Name": "RED OAK",
  "Beer Style": "Rich red coloured, smooth & malty, citrus fruit & spice aromas",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AIRE HEADS",
  "Beer Name": "BLACK X BITTER",
  "Beer Style": "Bitter / Mild hybrid",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AIRE HEADS",
  "Beer Name": "KIRBY YOUR ENTHUSIASM",
  "Beer Style": "Full flavoured pale",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "5IVE SISTERS",
  "Beer Style": "Amber best bitter",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "BAD DAY AT THE OFFICE",
  "Beer Style": "Pale session IPA",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "BLACK CHERRY SAISON",
  "Beer Style": "Black fruit saison",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "CHARISMA",
  "Beer Style": "Mosaic hop session bitter",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "PHOTON",
  "Beer Style": "Session IPA",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "SECRET CITRA",
  "Beer Style": "Pale IPA with Vic Secret and Citra hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "SOUTH PACIFIC PALE ",
  "Beer Style": "NZ and Australian hopped IPA",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "TEN STOREY MALT BOMB",
  "Beer Style": "80 shilling ale with heavy malt character",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALECHEMY",
  "Beer Name": "VORTEX",
  "Beer Style": "Session pale ale  ",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALPHABETA",
  "Beer Name": "BARREL AGED WHISTLE PIG RYE",
  "Beer Style": "Sweet rye ale aged in Whistle Pig Rye casks for two months",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALPHABETA",
  "Beer Name": "BEST BITTER",
  "Beer Style": "Traditional English hopped Best bitter, light and sessionable.",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALPHABETA",
  "Beer Name": "CARDINAL IPA",
  "Beer Style": "English style IPA with Cardinal hops",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ALPHABETA",
  "Beer Name": "WILD HOP RYE",
  "Beer Style": "Hop heavy, with rye malts & wild green hops foraged in London",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGELS AND DEMONS",
  "Beer Name": "ADHME ",
  "Beer Style": "American Pale Ale with multi -layered grain flavours",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGELS AND DEMONS",
  "Beer Name": "BOMBAY SOCIAL ",
  "Beer Style": "Social session IPA, light in character with huge Hop loveliness",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGELS AND DEMONS",
  "Beer Name": "McCANNS HARRY HOP ",
  "Beer Style": "Dry hopped for extra aroma, Harry Hop is a true session beer",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGELS AND DEMONS",
  "Beer Name": "McCANNS HOCKLEY SOUL ",
  "Beer Style": "Heart warming soulful Stout",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGLES",
  "Beer Name": "FERAL NUN",
  "Beer Style": "Dark Ruby with oatmeal head",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANGLES",
  "Beer Name": "GOAT TOSSER",
  "Beer Style": "Old English, ruby traditional bitter",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHLEY DOWN",
  "Beer Name": "DORT WHEAT",
  "Beer Style": "New wheat beer",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHLEY DOWN",
  "Beer Name": "HARVEST GAMBLE",
  "Beer Style": "English pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAA BREWING",
  "Beer Name": "2 BRIDGES",
  "Beer Style": "Amber ale, full bodied citrus hoppy flavour",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAA BREWING",
  "Beer Name": "BAA BEST",
  "Beer Style": "English best bitter",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAKERS DOZEN",
  "Beer Name": "I'M BRIAN AND SO'S MY WIFE",
  "Beer Style": "Rhubarb and Juniper saison",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAKERS DOZEN",
  "Beer Name": "MAGIC POTION No. 6",
  "Beer Style": "Citra and Ella hopped pale ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAKERS DOZEN",
  "Beer Name": "THE TURK",
  "Beer Style": "Turkish delight in a glass! Chocolate & Rose porter",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARN OWL",
  "Beer Name": "BLACK PIET",
  "Beer Style": "Dark ale, velvety maltiness and rich plum & blackcurrant flavour",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARN OWL",
  "Beer Name": "GOLDEN GOZZARD",
  "Beer Style": "Golden summer ale, crisp bitterness and refreshing fruityness",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARN OWL",
  "Beer Name": "GOZZARDS GUZZLER",
  "Beer Style": "Dark best bitter, full bodied and malty with a fruity finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARUM",
  "Beer Name": "MIDSUMMER",
  "Beer Style": "Golden summer ale ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARUM",
  "Beer Name": "ORIGINAL",
  "Beer Style": "English bitter, light bitterness, smooth finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEACHY HEAD",
  "Beer Name": "LEGLESS RAMBLER",
  "Beer Style": "English bitter brewed with Bramling Cross hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEACHY HEAD",
  "Beer Name": "PARSONS PORTER",
  "Beer Style": "Porter containing Pale, Crystal, Chocolate and Wheat malts",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEATH",
  "Beer Name": "ARE YOU WITH ME",
  "Beer Style": "Citra red ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEATH",
  "Beer Name": "ELLA ELLA ELLA",
  "Beer Style": "Cask lager using Ella hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEATH",
  "Beer Name": "MAD WORLD",
  "Beer Style": "Porter, dark chocolate and coffee notes",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEATH",
  "Beer Name": "UNICORN INVASION OF DUNDEE",
  "Beer Style": "Double Imperial IPA. Mosiac, Citra and Ekaunot hops",
  "ABV": "7.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEDLAM",
  "Beer Name": "BENCHMARK",
  "Beer Style": "Amber ale, sweet fruity notes, with hints of chocolate and malt",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEDLAM",
  "Beer Name": "MOSAIC SMASH",
  "Beer Style": "Single malt and single hopped Mosaic ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEERBLEFISH",
  "Beer Name": "BLACKBEERBLE STOUT",
  "Beer Style": "Not your average stout, just chocolate crystal and aromatic malts",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEERBLEFISH",
  "Beer Name": "EXTRA EXTRA SPECIAL BEERBLEFISH (ESB)",
  "Beer Style": "ESB aged for four months in a bordeaux cask",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEERBLEFISH",
  "Beer Name": "DELTAFISH",
  "Beer Style": "Light pale, with fruit, flora and pine notes",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEESTON HOP",
  "Beer Name": "ACE OF SPADES",
  "Beer Style": "Aromatic porter, hopped with Sorachi Ace",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "BEAVER BITTER",
  "Beer Style": "Light chestnut, smooth, full flavoured beer    ",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "BLUE BREW",
  "Beer Style": "Brewed with whey from stilton cheese",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "DARK HORSE",
  "Beer Style": "Acclaimed dark mild",
  "ABV": "3.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "GORDON BENNETT",
  "Beer Style": "Dry, malty session bitter",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "OATMEAL STOUT",
  "Beer Style": "A dark creamy brew",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "OLD DALBY",
  "Beer Style": "A ruby red strong ale",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "STAR BITTER",
  "Beer Style": "Crisp, golden amber ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BELVOIR",
  "Beer Name": "WHIPPLING GOLDEN BITTER",
  "Beer Style": "Light-golden crisp summer ale",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BESPOKE",
  "Beer Name": "MONEY FOR OLD ROPE",
  "Beer Style": "Dark stout, dry flavours of malt & grain with deep hop bitterness",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BESPOKE",
  "Beer Name": "OVER A BARREL",
  "Beer Style": "Strong, richly coloured, fruity ale, peppery finish from goldings ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXAR COUNTY",
  "Beer Name": "DIVIDER",
  "Beer Style": "Session Pale ale",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXAR COUNTY",
  "Beer Name": "EL HEFE",
  "Beer Style": "A traditional Hefeweisen",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXAR COUNTY",
  "Beer Name": "RASPBERRY TIMANFAYA",
  "Beer Style": "Raspberry infused kombucha soured brown",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXLEY",
  "Beer Name": "BEXLEY'S OWN BEER",
  "Beer Style": "Well balanced amber pale ale with UK and NZ hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXLEY",
  "Beer Name": "GOLDEN ACRE",
  "Beer Style": "Golden Ale using Ella hops for a sharp hop flavour",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BEXLEY",
  "Beer Name": "OLD MILL",
  "Beer Style": "Dark best bitter made with UK hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "POLYGON WOOD",
  "Beer Style": "Red rich and malty with 4 C' hops ",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "SEREN",
  "Beer Style": "Welsh pale ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "SPECTRE",
  "Beer Style": "Espresso stout, tastes of liquorice and toast",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "SUPER TIDY",
  "Beer Style": "English pale ale, soft floral notes",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "T WREX",
  "Beer Style": "Golden ale with English and European hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIG HAND",
  "Beer Name": "TELEKENISIS",
  "Beer Style": "Premium American pale ale",
  "ABV": "6.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK ROCK",
  "Beer Name": "BLACK IPA",
  "Beer Style": "Black IPA with complex malt and transatlantic hoppiness",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK TOR",
  "Beer Name": "WHEAT BEER",
  "Beer Style": "Orange and Coriander wheat beer",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACKJACK",
  "Beer Name": "MO MILD,  MO PROBLEMS",
  "Beer Style": "Pale mild, hopped with Progress",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACKJACK",
  "Beer Name": "RAKUA LIGHT",
  "Beer Style": "Pale, heavily single hopped pale",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACKJACK",
  "Beer Name": "STOUT",
  "Beer Style": "Traditional dry stout",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUESTONE (Wales)",
  "Beer Name": "ELDERFLOWER BLONDE",
  "Beer Style": "Straw coloured blonde ale with hints of Elderflower",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUESTONE (Wales)",
  "Beer Name": "FOSSIL FUEL",
  "Beer Style": "Creamy stout with a shot of Espresso for good measure",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOSUN'S",
  "Beer Name": "RAZZAMATAZZ",
  "Beer Style": "Fresh & fruity raspberry flavoured blonde ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOSUN'S",
  "Beer Name": "TELL NO TALES",
  "Beer Style": "A very dark mild",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOUTILLIERS",
  "Beer Name": "1848 PORTER",
  "Beer Style": "Deep, dark and full-bodied, with robust roasted malt & caramel",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOUTILLIERS",
  "Beer Name": "RYE PALE ALE",
  "Beer Style": "Ruby rye ale packed with Waimea hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOUTILLIERS",
  "Beer Name": "SMOKED OATMEAL STOUT",
  "Beer Style": "Silky smooth finish, German rauch malt adds a peat smokiness ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOX SOCIAL",
  "Beer Name": "FXPA",
  "Beer Style": "Hazy, unfined extra pale ale, with Falconers Flighthops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOX SOCIAL",
  "Beer Name": "KAFFIR LIME LEAF",
  "Beer Style": "Session IPA brewed with Kaffir lime leaf",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRADFORD",
  "Beer Name": "HOGSHEAD RED IPA",
  "Beer Style": "Rich, deep, hoppy with spicy, pine resinous aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRADFORD",
  "Beer Name": "IVEGATE STOUT",
  "Beer Style": "Dark, full-bodied, traditional roasty stout",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRAGDY TWT LOL",
  "Beer Name": "GLO IN THE DARK",
  "Beer Style": "Dark ale, brewed with US hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRAGDY TWT LOL",
  "Beer Name": "Tŵti Ffrŵti",
  "Beer Style": "Light golden ale brewed with Mosaic and Chinook hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW BUDDIES",
  "Beer Name": "BEST BITTER",
  "Beer Style": "Well rounded bitterness with spicy and fruity and floral notes",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW BUDDIES",
  "Beer Name": "CITRA BLACK IPA",
  "Beer Style": "Brewed with black & chocolate malt, toasty character, Citra hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW BUDDIES",
  "Beer Name": "SAISON",
  "Beer Style": "Lemony flavour complements the estery & spicy yeast character",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW MONSTER",
  "Beer Name": "LEVIATHAN",
  "Beer Style": "Session IPA",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW YORK",
  "Beer Name": "HAAST'S EAGLE",
  "Beer Style": "NZ pale ale. Initial citrus hit,  crisp, dry, gooseberry character ",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREW YORK",
  "Beer Name": "X-PANDA V6",
  "Beer Style": "Sesion IPA with Citra,  Nelson Sauvign & Waimea hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "1899",
  "Beer Style": "Light, refreshing pale ale with biscuit flavour , medium dry finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "CONSTABLE",
  "Beer Style": "Traditional caramel session bitter",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "KNIGHT LIGHT",
  "Beer Style": "Roasty porter with chocolate sweetness balanced by a hopiness",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "RACER",
  "Beer Style": "Light golden, pioneer green hopped harvest ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "SALLY POLLARD'S SPECIAL PALE ALE",
  "Beer Style": "Single hop pale ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "STREET BLOCK",
  "Beer Style": "Red rye ale, dry, bitter finish with plenty of spicy, aromatic hops",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWHOUSE & KITCHEN (NOTTINGHM)",
  "Beer Name": "TRICKY TREE",
  "Beer Style": "Traditional IPA with an intense piney & citrusy aroma & flavour",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRINKBURN ST",
  "Beer Name": "BYKER BROWN ALE",
  "Beer Style": "Hoppy version of a traditional Newcastle brown ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRINKBURN ST",
  "Beer Name": "MANGO DIPPER (DIPA)",
  "Beer Style": "Super fruity and punchy Double India Pale Ale",
  "ABV": "8.199999999999999",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRINKBURN ST",
  "Beer Name": "TYNE TITANS PALE",
  "Beer Style": "Golden beer with a reddish hue",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROCKLEY",
  "Beer Name": "GOLDEN ALE",
  "Beer Style": "Golden ale, hints of tangerine citrus and fresh aroma",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROCKLEY",
  "Beer Name": "PALE ALE",
  "Beer Style": "Pale ale with hints of apricot",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROCKLEY",
  "Beer Name": "RED ALE",
  "Beer Style": "Red ale made with American hops ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROKEN BRIDGE",
  "Beer Name": "IT'S 5 O'CLOCK SOMEWHERE",
  "Beer Style": "APA with Rye and Vienna malts and Cascade and Chinook hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROKEN BRIDGE",
  "Beer Name": "STOP MAKING SENSE",
  "Beer Style": "India porter / black IPA. Hoppy with roasted caramel grains",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROLLY BREWING",
  "Beer Name": "C.O.W",
  "Beer Style": "Citra, Oats and Wai-iti, hazy pale ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BROLLY BREWING",
  "Beer Name": "LOWFIELD WISSY",
  "Beer Style": "Traditional Sussex bitter with 5 malts and 3 hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BUCCANEER",
  "Beer Name": "LANDLUBBERS CHOICE",
  "Beer Style": "American style brown ale",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BUCCANEER",
  "Beer Name": "AMPED UP OCTOPUS",
  "Beer Style": "Orange and grapefruit IPA",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BULLHOUSE",
  "Beer Name": "SMALL AXE",
  "Beer Style": "Hoppy, sessionable IPA packed with resinous West Coast hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPBELL'S",
  "Beer Name": "FLINTLOCK",
  "Beer Style": "Golden hoppy ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPBELL'S",
  "Beer Name": "GUNNER ",
  "Beer Style": "Blonde well balanced session ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPERVAN",
  "Beer Name": "FARMHOOSE",
  "Beer Style": "Saison. Belgian style farmhouse pale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPERVAN",
  "Beer Name": "LEITH JUICE",
  "Beer Style": "Session IPA, quite zesty",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPERVAN",
  "Beer Name": "MUTINY ON THE BOUNTY",
  "Beer Style": "Milk stout, chocolate, coconut and vanilla flavours",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAMPERVAN",
  "Beer Name": "PACIFIC ZEST",
  "Beer Style": "New Zealand hopped IPA, quite fruity",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CANOPY",
  "Beer Name": "BROCKWELL IPA",
  "Beer Style": "Smooth and rounded, with tropical hop flavour",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CANOPY",
  "Beer Name": "FULL MOON PORTER",
  "Beer Style": "Porter with rich chocolate, coffee and caramel flavours",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CANOPY",
  "Beer Name": "TALL TREES",
  "Beer Style": "A session IPA",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "ELSIE MO",
  "Beer Style": "Golden ale known for its subtle floral character and citrus taste",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "HARVEST PALE",
  "Beer Style": "Multi-award winning blonde beer with a delicate citrus character",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "MOST HAUNTED",
  "Beer Style": "Porter brewed with pumpkin spice and a cocktail of hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "PRESERVATION",
  "Beer Style": "East Mids-style best bitter,  subtle malt sweetness, resinous hop character ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "RACE TO THE SEA",
  "Beer Style": "Wheat beer brewed with Triskel hops from France",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "SCREETCH OWL",
  "Beer Style": "Juicy but balanced IPA with a fresh citrus aroma",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "SEASON OF MISTS",
  "Beer Style": "Amber ale brewed with spicy and fruity hops from the UK ",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "SHERWOOD RESERVE",
  "Beer Style": "Smooth stout brewed with fresh Colombian coffee beans",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLEGATE",
  "Beer Name": "MERLIN'S OWN",
  "Beer Style": "Well hopped English pale",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLEGATE",
  "Beer Name": "TOWY GOLD",
  "Beer Style": "Pale golden ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTOR",
  "Beer Name": "12th MAN",
  "Beer Style": "Golden hoppy bitter balanced by New World hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTOR",
  "Beer Name": "HOPPING TOAD",
  "Beer Style": "Blonde beer with grassy and citrus hop notes",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTOR",
  "Beer Name": "THE ROARING FORTIES",
  "Beer Style": "Malty biscuit based beer gives way to gentle hop tones",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAT ASYLUM",
  "Beer Name": "No. 3",
  "Beer Style": "A scottish style pale ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAT ASYLUM",
  "Beer Name": "OATY MILD",
  "Beer Style": "Mild brewed to a London war time recipe",
  "ABV": "3.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAT ASYLUM",
  "Beer Name": "RED BARREL",
  "Beer Style": "1963 cask version of beer that made its \"reputation\" in keg form",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CELLAR HEAD",
  "Beer Name": "RASPBERRY WHEAT BEER",
  "Beer Style": "Raspberry wheat beer",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CELLAR HEAD",
  "Beer Name": "SINGLE HOP",
  "Beer Style": "Single hop variety beer with Target hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CERDDIN",
  "Beer Name": "CASCADE",
  "Beer Style": "Single hopped pale with cascade hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CERDDIN",
  "Beer Name": "CWRW TRI",
  "Beer Style": "A strong dark mild",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHAPTER",
  "Beer Name": "DEAD MAN'S FIST",
  "Beer Style": "Subtly smoked porter, followed by fiery black pepper",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHAPTER",
  "Beer Name": "PARABOLA",
  "Beer Style": "Punchy, fragrant American Pale with a huge Columbus burst",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "FIRE IN THE HOLE",
  "Beer Style": "Pale chilli beer, citrusy, tangy and hot!!",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "GOATS MILK",
  "Beer Style": "Golden yellow nectar. Champion Beer of Britain 2017",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "GRAPEFRUIT",
  "Beer Style": "Pale ale with added grapefruit",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "LIMONCELLO",
  "Beer Style": "Lemon based pale ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "OLD PAL",
  "Beer Style": "Rich, copper coloured beer which is stacked full of malts",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "PINEAPPLE",
  "Beer Style": "Pale ale with added pineapple",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "STOUT COFFIN",
  "Beer Style": "Black, chewy and creamy, what a stout should be",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH HANBREWERY",
  "Beer Name": "BLUENETTE",
  "Beer Style": "Honey and oatmeal porter",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH HANBREWERY",
  "Beer Name": "MAT BLACK",
  "Beer Style": "Black IPA  ",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CLARKSHAWS",
  "Beer Name": "GORGONS'S ALIVE",
  "Beer Style": "Golden bitter, summery, spicy and refreshing",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CLARKSHAWS",
  "Beer Name": "NEW WORLD",
  "Beer Style": "American pale ale, with tropical fruits and mango flavour",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "PRUNE",
  "Beer Style": "Black ale with added prunes",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "VANILLA JACK",
  "Beer Style": "Dark roasted flavours with added mix of vanilla and Jack Daniels",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CLARKSHAWS",
  "Beer Name": "STRANGE BREW",
  "Beer Style": "Pale with a hoppy floral flavour from UK cascade",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COCKSURE  ",
  "Beer Name": "P'ALE ALE",
  "Beer Style": "Pale, fruity bite using three malts & 3 bouncing flowered hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COCKSURE  ",
  "Beer Name": "RED ALE",
  "Beer Style": "Red ale with hint of smoke",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COCKSURE  ",
  "Beer Name": "SESSION IPA",
  "Beer Style": "Very drinkable session IPA",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COLLYFOBBLE",
  "Beer Name": "BOB ON",
  "Beer Style": "Best bitter with spicy & earthy hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COLLYFOBBLE",
  "Beer Name": "DUNNA WITTLE",
  "Beer Style": "Light golden blonde ale, citrus aroma, light & refreshing flavour",
  "ABV": "3.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COLLYFOBBLE",
  "Beer Name": "SUPWIYO",
  "Beer Style": "Pale ale, tropical fruit aroma, very hoppy, fruity flavour",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFT ORIGINALE",
  "Beer Name": "AULD ALLIANCE",
  "Beer Style": "Dark mild beer, with fruity undertones from red grape juice",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFT ORIGINALE",
  "Beer Name": "FIFE PILGRIM",
  "Beer Style": "Light, hoppy session beer",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFT ORIGINALE",
  "Beer Name": "FRINGE OF GOLD",
  "Beer Style": "Hoppy, golden ale",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFT ORIGINALE",
  "Beer Name": "GUILD IPA",
  "Beer Style": "Robust full-bodied golden IPA",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFT ORIGINALE",
  "Beer Name": "GUZZ ALE",
  "Beer Style": "Traditional Scottish ale with peppery undertones",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFTY LITTLE BREWERY",
  "Beer Name": "BLACK RYE-NO",
  "Beer Style": "Cascadian dark ale",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFTY LITTLE BREWERY",
  "Beer Name": "RED TALE",
  "Beer Style": "Toasted malt notes, hint of passion fruit, pine & forest berries",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRAFTY LITTLE BREWERY",
  "Beer Name": "WOLF BITE",
  "Beer Style": "Classic APA with a heady citrus aroma and a touch of pine",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRATE",
  "Beer Name": "CRATE AMBER",
  "Beer Style": "American amber/red ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRATE",
  "Beer Name": "CRATE GOLDEN",
  "Beer Style": "Floral, grapefruit, pine",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CRATE",
  "Beer Name": "CRATE RYE",
  "Beer Style": "Rich, sweet caramel, spice",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CULLERCOATS / DOG & RABBIT",
  "Beer Name": "SEA DOG AMERICAN IPA",
  "Beer Style": "Collab American hopped ale",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW IAL",
  "Beer Name": "LIMESTONE COWBOY",
  "Beer Style": "Robust copper ale with American hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW IAL",
  "Beer Name": "POCKET ROCKET",
  "Beer Style": "Nice light bitter with floral notes",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW IAL",
  "Beer Name": "POTHOLE PORTER",
  "Beer Style": "Classic style porter with British Goldings hops",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW IAL",
  "Beer Name": "THE APACHE LINE",
  "Beer Style": "American East Coast IPA ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW LLYN",
  "Beer Name": "CWRW GLYNDWR",
  "Beer Style": "Legendary golden ale ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW LLYN",
  "Beer Name": "PORTH NEIGWL",
  "Beer Style": "Light, tasty beer with gorse flowers ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW LLYN",
  "Beer Name": "SEITHENYN",
  "Beer Style": "Refreshing golden beer, with a continental character ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CWRW LLYN",
  "Beer Name": "Y BRAWD HOUDINI",
  "Beer Style": "Pale and flowery",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANS BREWERY",
  "Beer Name": "PALE ALE",
  "Beer Style": "Light, refreshing, subtle aromas of tropical fruits & blueberries",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANS BREWERY",
  "Beer Name": "PORTER",
  "Beer Style": "Deep mahogany, taste of coffee, liquorice & sweet roasted malts",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANS BREWERY",
  "Beer Name": "ZESTED INTEREST",
  "Beer Style": "Pale ale with a blend of orange zest and hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DEVA CRAFT",
  "Beer Name": "EUREKA",
  "Beer Style": "Fruity, malty session ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DEVA CRAFT",
  "Beer Name": "OATIMUS PRIME",
  "Beer Style": "Hoppy oatmeal pale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DEVA CRAFT",
  "Beer Name": "TITAN",
  "Beer Style": "Light, hoppy, hint of citrus",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVECOTE ",
  "Beer Name": "DOVE ALE",
  "Beer Style": "Copper, chestnut session ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVECOTE ",
  "Beer Name": "DOVE DOWN UNDER",
  "Beer Style": "Full flavoured amber with NZ hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVECOTE ",
  "Beer Name": "DOVE FROM ABOVE",
  "Beer Style": "Unfined India Pale Ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVECOTE ",
  "Beer Name": "WOOD PIGEON",
  "Beer Style": "Strong brown ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DROP THE ANCHOR",
  "Beer Name": "FUSEE CHAIN AMERICAN PALE",
  "Beer Style": "American pale ale packed with Ekuanot hops",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DROP THE ANCHOR",
  "Beer Name": "PRIEST HOLE PORTER",
  "Beer Style": "Rich black porter, coffee and chocolate notes",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DROP THE ANCHOR",
  "Beer Name": "SILENT STONES",
  "Beer Style": "Traditional Indian amber ale, big flavoured beer",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DROP THE ANCHOR",
  "Beer Name": "TUCTONIA",
  "Beer Style": "Fruity pale ale with an amazing aroma",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DYNAMITE VALLEY",
  "Beer Name": "BLACK CHARGE",
  "Beer Style": "Oatmeal stout, smooth, sweet and with a hint of coffee",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EAST LONDON BREWING",
  "Beer Name": "COWCATCHER AMERICAN PALE",
  "Beer Style": "American pale ale, generously flavoured with aromatic hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EAST LONDON BREWING",
  "Beer Name": "NIGHTWATCHMAN",
  "Beer Style": "A dark premium bitter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EAST LONDON BREWING",
  "Beer Name": "ORCHID VANILLA MILD",
  "Beer Style": "Dark Mild, lightly spiced with Madagascan vanilla.",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EDINBREW",
  "Beer Name": "DER WEISSE HAI ",
  "Beer Style": "Crystal wheat ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EDINBREW",
  "Beer Name": "FRIENDLY FIRE",
  "Beer Style": "American pale with a riot of hops!",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EDINBREW",
  "Beer Name": "SUPER STOUT",
  "Beer Style": "Oatmeal stout",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ERRANT",
  "Beer Name": "B82REZ NZ Pale Ale",
  "Beer Style": "Pale ale, NZ finest hops, Kohatu, Wai-iti and Motueka",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ERRANT",
  "Beer Name": "CRYSTAL SKULL ",
  "Beer Style": "Five-hop ruby red ale with fruity Rooibos tea",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ERRANT",
  "Beer Name": "ILL TEMPERED MUTATED SEA BASS",
  "Beer Style": "Milk stout with a bad attitude",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ERRANT / OUT THERE",
  "Beer Name": "UMBRA DUNKELWEISSE",
  "Beer Style": "Collab Dunkelweisse beer",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALLEN",
  "Beer Name": "CHEW CHEW",
  "Beer Style": "Salted caramel milk stout",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALLEN",
  "Beer Name": "GRAPEVINE",
  "Beer Style": "New World pale, big tropical and citrus fruit flavours",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALLEN",
  "Beer Name": "JUST THE TICKET",
  "Beer Style": "Pale hoppy beer using NZ and USA hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALLEN ACORN",
  "Beer Name": "DANKASHIRE HOT POT",
  "Beer Style": "Session IPA",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALLEN ACORN",
  "Beer Name": "POT KETTLE",
  "Beer Style": "Powerful porter with coffee and chocolate notes",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARM YARD ALES",
  "Beer Name": "HAYBOB",
  "Beer Style": "Session bitter, well balanced with hint of caramel",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARM YARD ALES",
  "Beer Name": "PALE PIGLET",
  "Beer Style": "Pale ale with Topaz hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARMAGEDDON",
  "Beer Name": "OATMEAL HAZE IPA",
  "Beer Style": "Cryo hopped IPA",
  "ABV": "6.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARMAGEDDON",
  "Beer Name": "GOLD PALE ALE",
  "Beer Style": "Golden pale ale well hopped",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARMAGEDDON",
  "Beer Name": "IPA",
  "Beer Style": "Big, hoppy American IPA, using hops from the Pacific Northwest",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARMAGEDDON",
  "Beer Name": "MOSAIC IPA",
  "Beer Style": "Mosaic hopped IPA",
  "ABV": "6.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FARMAGEDDON",
  "Beer Name": "OATMEAL IPA",
  "Beer Style": "Oatmeal IPA",
  "ABV": "6.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FAT BELLY",
  "Beer Name": "CARVER DOONE",
  "Beer Style": "Strong Exmoor Porter, roasted and chocolate malts",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FAT BELLY",
  "Beer Name": "CRAFTY",
  "Beer Style": "Hoppy pale ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FAT BELLY",
  "Beer Name": "GUZZLER",
  "Beer Style": "Traditionally British beer made on the North Devon Coast",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY ALES (F.A.B.)",
  "Beer Name": "SLIPPERY HITCH",
  "Beer Style": "A rye beer",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY ALES (F.A.B.)",
  "Beer Name": "LINCOLN LAGER",
  "Beer Style": " Bohemian Pilsner style lager,  crisp with complex flavours ",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY ALES (F.A.B.)",
  "Beer Name": "ARHWOOOO",
  "Beer Style": "NA",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY ALES (F.A.B.)",
  "Beer Name": "SMOKEY JOE PORTER",
  "Beer Style": "Classic Porter with a hint of smokiness,",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY ALES (F.A.B.)",
  "Beer Name": "WODEWOSE RED IPA",
  "Beer Style": "Red IPA, light red in colour, mild caramel, malt & citrus flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY BREWERY (Scotland)",
  "Beer Name": "3 BRIDGES",
  "Beer Style": "Hoppy IPA – Strong on citrus flavours and aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY BREWERY (Scotland)",
  "Beer Name": "SMOKEY JACK",
  "Beer Style": "Gingery brown coloured ale with smoked flavours ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY BREWERY (Scotland)",
  "Beer Name": "FERRY GRAPEFRUIT",
  "Beer Style": "Pale Ale with US and British hops & pink grapefruit flavour",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY BREWERY (Scotland)",
  "Beer Name": "WORLD GONE MAD",
  "Beer Style": "Strong bitter citrus dark Ale",
  "ABV": "8.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FINE TUNED",
  "Beer Name": "LANGPORT BITTER",
  "Beer Style": "Traditional English amber bitter",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FINE TUNED",
  "Beer Name": "SUNSHINE REGGAE",
  "Beer Style": "APA, light hoppy nectar flavour",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "JAM",
  "Beer Style": "Pale amber infused with Mango and dry hopped with Citra",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "POD",
  "Beer Style": "Classic Vanilla oatmeal stout",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "RED",
  "Beer Style": "Rich spicy red ale with big hop flavours",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIVE POINTS",
  "Beer Name": "PALE ALE",
  "Beer Style": "West coast style pale ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIVE POINTS",
  "Beer Name": "RAILWAY PORTER",
  "Beer Style": "London style porter",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIVE POINTS",
  "Beer Name": "XPA",
  "Beer Style": "Extra pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLASH HOUSE",
  "Beer Name": "SMOKED CHILLI PORTER",
  "Beer Style": "Tasty, rich chilli porter",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLASH HOUSE",
  "Beer Name": "CHOCOLATE X ORANGE PORTER",
  "Beer Style": "Chocolate orange porter",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLASH HOUSE",
  "Beer Name": "WAIMEA RIVER PALE",
  "Beer Style": "New Zealand hopped pale ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "CLIPPING IPA",
  "Beer Style": "Golden IPA, gooseberry & bitter white wine hop flavours",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "DUSTY PENNY",
  "Beer Style": "Porter with chocolate and caramel malt flavours",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "EMPRESS RUPEE",
  "Beer Style": "IPA with citrus, grapefruit, lemon & lime hop flavours",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "FLIPPING BEST",
  "Beer Style": "A dark brown traditional best bitter with gentle hop flavours",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "FULL CROWN",
  "Beer Style": "Traditional ruby brown bitter with a crisp fruity hop flavour",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "GOLDEN SOVEREIGN",
  "Beer Style": "Refreshingly dry golden brew with cirus & grapefruit flavour",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "RUSSIAN ROUBLE",
  "Beer Style": "Strong, dark Russian imperial stout",
  "ABV": "7.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FLIPSIDE",
  "Beer Name": "STERLING PALE",
  "Beer Style": "Session  pale ale with a bitter, spicy hop flavour",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOUR CANDLES",
  "Beer Name": "CITRA PILSNER",
  "Beer Style": "Distinctive Citra grapefruit backed by New Zealand Rakau hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOUR CANDLES",
  "Beer Name": "GREEN HOP SESSION PALE",
  "Beer Style": "East Kent Goldings green hops picked & in copper within 4 hours",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOUR CANDLES",
  "Beer Name": "PACIFIC SESSION PALE",
  "Beer Style": "New Zealand Pacific Jade with Rakau and Challenger hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GATES",
  "Beer Name": "GATES BURTON ALE",
  "Beer Style": "Amber ale, based on the original Ind Coope DBA recipe",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GATES",
  "Beer Name": "RESERVOIR",
  "Beer Style": "Amber ale with a finely balanced malt and hop character ",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GLAMORAN BREWING CO",
  "Beer Name": "JEMIMA'S PITCHFORK",
  "Beer Style": "Crisp pale brew with Chinook and Eldorado hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GLAMORAN BREWING CO",
  "Beer Name": "WEST COAST RED",
  "Beer Style": "US Red Ale, citrus hop nose, grapefruit, pine & juicy berries",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GLEDE",
  "Beer Name": "TUCKERS NUTS",
  "Beer Style": "Malty beer brewed with Amber and Caravan malts",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GLEDE",
  "Beer Name": "TUCKERS TIPPLE",
  "Beer Style": "Well balanced English bitter",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GLEDE",
  "Beer Name": "WESTON GRAND BIER",
  "Beer Style": "Hazy, lazy summer wheat",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREY TREES",
  "Beer Name": "AFGHAN",
  "Beer Style": "American pale ale using Cascade, Citra and Simcoe hops",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREY TREES",
  "Beer Name": "BLACK ROAD ",
  "Beer Style": "Dark smooth & comforting with roasted flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREY TREES",
  "Beer Name": "CARADOGS",
  "Beer Style": "Copper in colour, with a crisp flavour and a dry finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREY TREES",
  "Beer Name": "MOSAIC  ",
  "Beer Style": "American single hopped pale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRIBBLE",
  "Beer Name": "FUZZY DUCK",
  "Beer Style": "English bitter with malty bite",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRIBBLE",
  "Beer Name": "LAZY BUZZARD",
  "Beer Style": "Light and refreshing golden ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GT ALES",
  "Beer Name": "BLONDE AMBITION",
  "Beer Style": "Zesty blonde ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GT ALES",
  "Beer Name": "CRIMSON RYE'D",
  "Beer Style": "Six malt red rye ale, rounded fruity finish",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GT ALES",
  "Beer Name": "DARK HORSE ",
  "Beer Style": "Deep ruby ale with distinctive Blackcurrant aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GT ALES",
  "Beer Name": "NORTH COAST IPA",
  "Beer Style": "American style IPA, Mango and Passion Fruit aroma",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAFOD",
  "Beer Name": "CLWYDIAN BLACK",
  "Beer Style": "Welsh stout/porter",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAFOD",
  "Beer Name": "POWERHAUS",
  "Beer Style": "Hoppy refreshing pale ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HALF MOON",
  "Beer Name": "FARROW'S GOLD",
  "Beer Style": "Golden premium ale, with an aromatic hoppy bite",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HALF MOON",
  "Beer Name": "SPACE HOPPER",
  "Beer Style": "Blonde ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAL'S ALES",
  "Beer Name": "GOLD",
  "Beer Style": "Refreshing golden ale from English Goldings hops.",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAL'S ALES",
  "Beer Name": "NEW INN CHESTNUT",
  "Beer Style": "Deep red chestnut ale",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAL'S ALES",
  "Beer Name": "NEW INN ZEST",
  "Beer Style": "Citrus golden ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAMMERTON",
  "Beer Name": "N1",
  "Beer Style": "Session pale ale with a variety of fruity and aromatic hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAMMERTON",
  "Beer Name": "N7 ",
  "Beer Style": "Refreshing IPA with six different hops from the US and NZ",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAMMERTON",
  "Beer Name": "PENTONVILLE",
  "Beer Style": "Oyster stout, brewed with fresh wild Maldon oysters ",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HANDYMAN",
  "Beer Name": "OAT BAY PALE",
  "Beer Style": "Pale ale, aromas from Indian Bay leaf, brewed with Irish oats",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HANDYMAN",
  "Beer Name": "HOPPY SAISON",
  "Beer Style": "Farmhouse style saison has Citra, Simcoe & Mosaic hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HANDYMAN V BLACKJACK",
  "Beer Name": "PALE ALE",
  "Beer Style": "Collab session pale ale, malty with USA hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HATTIE BROWN",
  "Beer Name": "CROW BLACK",
  "Beer Style": "Deeply flavoured liquorice porter, intense chocolate flavours",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HATTIE BROWN",
  "Beer Name": "DOG ON THE ROOF",
  "Beer Style": "Strong dark brown English ale",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HEAVY INDUSTRY",
  "Beer Name": "ELECTRIC MOUNTAIN",
  "Beer Style": "Copper coloured, hopped with Czech and German hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HEAVY INDUSTRY",
  "Beer Name": "FREAK CHICK",
  "Beer Style": "Red malty beer, earthy, spicy and zesty character",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HEAVY INDUSTRY",
  "Beer Name": "NELSON'S EYE",
  "Beer Style": "Golden ale, using Nelson Sauvin hops for flavour",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HEMLOCK",
  "Beer Name": "HOPTIMYSTIC",
  "Beer Style": "Copper coloured best bitter with a hoppy flavour & citrus aroma",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HETTON LAW",
  "Beer Name": "HETTON HARVEST GOLD",
  "Beer Style": "Golden ale with combination of hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HETTON LAW",
  "Beer Name": "HETTON HOWLER BITTER",
  "Beer Style": "Traditional bitter with rich malty taste",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HIGH HOUSE FARM",
  "Beer Name": "MATFEN MAGIC ",
  "Beer Style": "Classic traditional English brown ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HIGH HOUSE FARM",
  "Beer Name": "NEL'S BEST",
  "Beer Style": "Pale golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HIGH WEALD",
  "Beer Name": "CHARCOAL BURNER",
  "Beer Style": "Traditional oatmeal stout",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HIGH WEALD",
  "Beer Name": "CHRONICLE",
  "Beer Style": "Session ale brewed with English Fuggles and Goldings hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILDEN",
  "Beer Name": "CITRA IPA",
  "Beer Style": "Single hopped IPA with Citra hops",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILDEN",
  "Beer Name": "IRISH STOUT",
  "Beer Style": "Full bodied with pronounced dryness from roasted barley",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILDEN",
  "Beer Name": "RYE IPA",
  "Beer Style": "Rich, malty base from the rye giving a warm amber hue",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILDEN",
  "Beer Name": "SCULLIONS'S IRISH ALE",
  "Beer Style": "Bright amber ale, smooth with a slight taste of honey",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILDEN",
  "Beer Name": "TWISTED HOP",
  "Beer Style": "Citrusy pale ale, well hopped",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILLFIRE",
  "Beer Name": "3C",
  "Beer Style": "Amber Ale made from Columbus, Cascade and Chinook hops",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILLFIRE",
  "Beer Name": "CALIFORNIA GOLD",
  "Beer Style": "Thirst quenching golden ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOLLER BOYS",
  "Beer Name": "FOG CUTTER",
  "Beer Style": "Session IPA",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOLLER BOYS",
  "Beer Name": "BRASS HAND",
  "Beer Style": "A golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Cricklade)",
  "Beer Name": "PRECIOUS METAL",
  "Beer Style": "Golden Barley Wine ",
  "ABV": "8.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Swindon)",
  "Beer Name": "FLAPJACK BLACK",
  "Beer Style": "Breakfast Stout, Coffee, Chocolate, Oats ",
  "ABV": "7.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Swindon)",
  "Beer Name": "LODE STAR",
  "Beer Style": "Pale ale brewed with 2 classic American hop varieties UK grown",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Swindon)",
  "Beer Name": "RED STAR",
  "Beer Style": "Resinous American red ale ",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Swindon)",
  "Beer Name": "RISING STAR",
  "Beer Style": "Ultra fruity and hazy unfined Session IPA ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP STUDIO",
  "Beer Name": "MOSAIC",
  "Beer Style": "Big juicy pale ale with oats & mosaic hops. Pine & berries aroma",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP STUDIO",
  "Beer Name": "SOLSTICE",
  "Beer Style": "A India pale lager",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP STUFF",
  "Beer Name": "A.P.A",
  "Beer Style": "American pale ale with five hop variants",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP STUFF",
  "Beer Name": "FUSILIER",
  "Beer Style": "Easy drinking amber, malty biscuity English bitter",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP STUFF",
  "Beer Name": "MJANGO UNCHAINED",
  "Beer Style": "English pale ale flavoured with Mango",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPCRAFT",
  "Beer Name": "KILLING JOKE",
  "Beer Style": "British Jester Hopped Pale Ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPCRAFT",
  "Beer Name": "RED MIST",
  "Beer Style": "US Hopped Red Ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPCRAFT",
  "Beer Name": "SPANISH MAIN",
  "Beer Style": "Jamaican stout, muscavado sugar & pepper stout",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPHURST",
  "Beer Name": "ARLO",
  "Beer Style": "American West Coast pale ale. Citra, Chinook and Cascade hops",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPHURST",
  "Beer Name": "ENVOLVE",
  "Beer Style": "English single hopped pale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOPHURST",
  "Beer Name": "MELLORS",
  "Beer Style": "Blonde ale with delicate floral notes",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HORBURY",
  "Beer Name": "JFB - ERNEST",
  "Beer Style": "A light & fresh pale ale with a dry, citrusy lemon finish.",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HORBURY",
  "Beer Name": "SUNDOWN",
  "Beer Style": "Powerful blend of citrus hops with lingering tropical fruit finish",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HORBURY",
  "Beer Name": "TIRAMISU",
  "Beer Style": "Chocolate & Coffee Porter with a nutty bitter yet silky finish",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HYBRID",
  "Beer Name": "HIPPY CHICK",
  "Beer Style": "Premium lager and pale malts and a big fruity floral hop hit",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HYBRID",
  "Beer Name": "PINK SUNSHINE",
  "Beer Style": "Raspberry wheat beer",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HYBRID",
  "Beer Name": "STREET LEGAL",
  "Beer Style": "American pale with Mosiac hops and dry hopped with Simcoe",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INNER BAY",
  "Beer Name": "AMBER",
  "Beer Style": "Pale -  marmalade on toast",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INNER BAY",
  "Beer Name": "CITRINE",
  "Beer Style": "Refreshing golden ale with a delicate citrus aroma",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INNER BAY",
  "Beer Name": "JASPER",
  "Beer Style": "Dark ale with complex flavours ",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLY BOYS",
  "Beer Name": "AUTUMN GOLD",
  "Beer Style": "NA",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLY BOYS",
  "Beer Name": "JOLLY COLLIER",
  "Beer Style": "Dark Yorkshire porter, robust flavour and smooth aftertaste",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLY SAILOR",
  "Beer Name": " GOLD",
  "Beer Style": "Refreshing golden ale with citrus, fruit and herbal notes",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLY SAILOR",
  "Beer Name": "JOLLY INDIAN SUMMER",
  "Beer Style": "India Pale Ale. Light amber colour hints of honey, citrus and spice",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLYBOAT",
  "Beer Name": "GRENVILLE'S RENOWN",
  "Beer Style": "Smooth English bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLYBOAT",
  "Beer Name": "MAINBRACE",
  "Beer Style": "English brown ale ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JOLLYBOAT",
  "Beer Name": "PLUNDER",
  "Beer Style": "Traditional malty English best bitter",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KEEP BREWING",
  "Beer Name": "AXIOM",
  "Beer Style": "Fruity tropical golden ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENNET AND AVON",
  "Beer Name": "DUNDAS",
  "Beer Style": "Copper coloured bitter with 100% US hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENNET AND AVON",
  "Beer Name": "SAVERNAKE STOUT",
  "Beer Style": "Full bodied with aromas of licorice, roasted coffee, chocolate",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "CITRA",
  "Beer Style": "Citrus flavours and aromas from the single hop series",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "COBNUT",
  "Beer Style": "Ruby Ale, generously hopped, dark and nutty",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "DARK HORSE ",
  "Beer Style": "Stout, smooth, complex bitter stout enriched with liquorice",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "GREEN GIANT IPA",
  "Beer Style": "A colossal amount of freshly harvested East Kent Goldings",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "KGB",
  "Beer Style": "Kent Golding Bitter, a taste of historic Kent",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "PROHIBITION",
  "Beer Style": "American Pale Ale, hopped with some of the new US varieties",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "THE NEW BLACK",
  "Beer Style": "Black version of American Pale Ale, light & hoppy ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENT BREWERY",
  "Beer Name": "ZINGIBER",
  "Beer Style": "American hops with ginger for a fruity and warming light beer",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KETTLESMITH",
  "Beer Name": "STREAMLINE",
  "Beer Style": "Refreshing blonde ale brewed with lager malt",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KETTLESMITH",
  "Beer Name": "TIMELINE",
  "Beer Style": "Hop driven, elegant IPA with US and UK hops",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KEW",
  "Beer Name": "BOTANIC",
  "Beer Style": "Sessionable amber ale, UK Cascade hops, infused with juniper",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KEW",
  "Beer Name": "PAGODA PALE No1",
  "Beer Style": "Pale, No.1 is brewed with the UK grown Chinook hop",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KILN",
  "Beer Name": "BRICKS & PORTER",
  "Beer Style": "Smoked porter, chocolate, coffee and a subtle smokiness ",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KILN",
  "Beer Name": "SESSION AIPA",
  "Beer Style": "A session strenth IPA",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINGS CLIFFE",
  "Beer Name": "5C",
  "Beer Style": "A golden session ale with punchy American hop",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINGS CLIFFE",
  "Beer Name": "No10",
  "Beer Style": "Traditional dark malty English ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINGS CLIFFE",
  "Beer Name": "P51",
  "Beer Style": "6 different malts giving a distinctive coffee/dark chocolate taste",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINNEIL BREW HOOSE",
  "Beer Name": "KINCARDINE SUNSET",
  "Beer Style": "Slightly citrusy & hoppy. Named after sunset over the River Forth",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINNEIL BREW HOOSE",
  "Beer Name": "WAYFINDER",
  "Beer Style": "Pale, refreshing using Saaz hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KNOCKOUT",
  "Beer Name": "IRISH RED ALE",
  "Beer Style": "Irish Red Ale has a flavoursome jab on the palate!",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KNOCKOUT",
  "Beer Name": "TRISKAIDEKAPHOBIA",
  "Beer Style": "Pale lager, hopped using lots of Mosaic, Galaxy and Topaz",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KNOCKOUT",
  "Beer Name": "WHEAT  ",
  "Beer Style": "Irish wheat beer",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LACADA",
  "Beer Name": "EAST THE BEAST",
  "Beer Style": "IPA, single malt with a mass of hops",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LACADA",
  "Beer Name": "SHORE",
  "Beer Style": "Seaweed stout",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LACADA",
  "Beer Name": "WEST BAY",
  "Beer Style": "Pale ale, dry hopped with Citra hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LANDLOCKED",
  "Beer Name": "BEETROOT SOUR",
  "Beer Style": "Kettle soured pale with partially fermented lacto-beetroot ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LANDLOCKED",
  "Beer Name": "ISLAND OF 4C's",
  "Beer Style": "An Enlish style IPA",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LANDLOCKED",
  "Beer Name": "MANGO SOUR",
  "Beer Style": "NA",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LANDLOCKED",
  "Beer Name": "WEST COAST SIX HOP",
  "Beer Style": "US west coast style IPA featuring 6 hop varieties",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LAWMAN",
  "Beer Name": "ELDRITCH",
  "Beer Style": "Black IPA, made with speciality malts & large amount of US hops",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LAWMAN",
  "Beer Name": "ONYX",
  "Beer Style": "Rich black stout, dark chocolate bitterness & roasted coffee flavour",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LAWMAN",
  "Beer Name": "PIXEL BANDIT",
  "Beer Style": "Session ale, with a big hop flavour for a low ABV",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LEMMINGS",
  "Beer Name": "BACKSCRATCHER",
  "Beer Style": "Chestnut brown ale, coffee and roast chocolate finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LEMMINGS",
  "Beer Name": "DARK SIDE",
  "Beer Style": "Dark ruby porter, coffee, dark fruit and chocolate",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "ARCHER",
  "Beer Style": "US style pale ale with strong citrus hop flavours and aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "BRANDRETH, LUDLAM & TURNER",
  "Beer Style": "A blend of Brown Stout with Tuck Porter",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "FOUNTAINDALE",
  "Beer Style": "Pale ale with Challenger, Fuggles, Brewers Gold & Celeia hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "GEORDIUM GRANDSONIUM",
  "Beer Style": "Nuclear Brown Ale, unfined brown ale with a US hop kick",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "GIN and BEER IT",
  "Beer Style": "Infused with juniper berries, orange & lemon peel ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "HANGMAN'S NOOSE",
  "Beer Style": "A blend of Brown Stout with Hood Best Bitter",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "HOOD",
  "Beer Style": "Best bitter packed with Maris Otter malt and choice hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "JOSEF KELLER",
  "Beer Style": "Chocolate cherry stout with a hint of bitter chocolate",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "MARION",
  "Beer Style": "A pale ale with grapefruit hop and biscuit malt flavours",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "OWD TOM",
  "Beer Style": "Brown stout. Recipe from 1820 served from wooden casks",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "QUARTERSTAFF",
  "Beer Style": "Rich full bodied stout, generous blackcurrant hop bitterness",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "ROBINS RED FEST",
  "Beer Style": "Old ale, matured in cask for three months",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "SALLY POLLARD'S HONEY'D AMBER",
  "Beer Style": "Honey amber Ale brewed with help of Festival bar managers",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "SHERIFF",
  "Beer Style": "True India pale ale with a powerful English hop aroma",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "SHERWOOD",
  "Beer Style": "Extra pale ale with an orange citrus aroma",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINCOLN GREEN ",
  "Beer Name": "TUCK",
  "Beer Style": "A silky smooth porter with chocolate coffee flavours",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINEAR",
  "Beer Name": "YSBEIDIAU HEULOG",
  "Beer Style": "American pale ale,  late hopped with Columbus and Cascade",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LINES",
  "Beer Name": "CYRO HOP",
  "Beer Style": "Oaty Session IPA, acidified and oaty, dry hopped in Cryo Lupulin",
  "ABV": "3.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LISTERS",
  "Beer Name": "AMERICAN PALE",
  "Beer Style": "Light and hoppy with a citrus hit and very satisfying",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LISTERS",
  "Beer Name": "LIMEHOUSE PORTER",
  "Beer Style": "Porter, dark in colour, with hints of coffee and molasses",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE BLACK DOG",
  "Beer Name": "AMERICAN PALE ALE",
  "Beer Style": "Bold grapefruit and citrus American hopped pale.",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE BLACK DOG",
  "Beer Name": "INDIA PALE ALE",
  "Beer Style": "Delicate lime and floral English hopped ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE CRITTERS",
  "Beer Name": "NUTTY AMBASSADOR",
  "Beer Style": "Hazelnut milk stout, with coffee and chocolate notes",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE CRITTERS",
  "Beer Name": "SHIRE HORSE",
  "Beer Style": "Chestnut coloured English best bitter",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE DRAGON",
  "Beer Name": "CLEDDAU GOLD",
  "Beer Style": "Golden pale ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE DRAGON",
  "Beer Name": "JACK SOUND",
  "Beer Style": "Amber ale with balanced hop character",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLE DRAGON",
  "Beer Name": "WATWICK BAY",
  "Beer Style": "Bright, hoppy, unfiltered. Full of bold new world hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LEVEN",
  "Beer Name": "COOL ROY",
  "Beer Style": "Refreshing golden bitter, prominent intense fruity dry hop aroma",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LEVEN",
  "Beer Name": "MARY QUEEN OF SCOTS",
  "Beer Style": "Golden with  a subtle honey, earthy and slightly spicy aroma",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LEVEN",
  "Beer Name": "PALE ALICE",
  "Beer Style": "\"Craft lager\" style, quite malty, pale yellow in colour",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LOMOND",
  "Beer Name": "KESSOG",
  "Beer Style": "Dark in colour with warm spicy flavours",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LOMOND",
  "Beer Name": "LOST IN MOSAIC",
  "Beer Style": "American pale ale featuring Mosaic hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LOMOND",
  "Beer Name": "SILKIE STOUT",
  "Beer Style": "Rich dark chocolate stout, coffee and chocolate aromas",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOCH LOMOND",
  "Beer Name": "SOUTHERN SUMMIT",
  "Beer Style": "Light blonde but highly hopped with Summit and Citra hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON BREWING CO",
  "Beer Name": "100 OYSTERS",
  "Beer Style": "Oyster Stout, brewed with 100 fresh oysters and shells",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON BREWING CO",
  "Beer Name": "BEER STREET",
  "Beer Style": "Best bitter, with toffee and wood aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON BREWING CO",
  "Beer Name": "SKYLINE",
  "Beer Style": "US pale ale, dry hopped with Amarillo, Galaxy & Mosaic hops",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON ROAD",
  "Beer Name": "BEAVOR LIQUOR",
  "Beer Style": "Stout",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON ROAD",
  "Beer Name": "GLUTEANUS MINAMUS",
  "Beer Style": "Straw coloured, refreshing with bursts of Lemon and Lime  ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON ROAD",
  "Beer Name": "SHERE KHAN",
  "Beer Style": "Blood orange IPA",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LORDS",
  "Beer Name": "1895",
  "Beer Style": "refreshing golden ale, good malt flavour & best English hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LORDS",
  "Beer Name": "HAVELOCK",
  "Beer Style": "IPA with lots of hops as well as a touch of spice and a hint curacao",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LUCKIE",
  "Beer Name": "80 SHILLINGS",
  "Beer Style": "Traditional dark-red Scottish ale",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LUCKIE",
  "Beer Name": "NEW LEAF PALE",
  "Beer Style": "Pale ale brewed with new world hops",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LUCKIE",
  "Beer Name": "PORTER",
  "Beer Style": "Chocolate aroma, hints of dark fruit",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LUCKIE",
  "Beer Name": "YELLAE LINTIE",
  "Beer Style": "Strong golden ale brewed with a Scottish ale yeast",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAD DOG",
  "Beer Name": "ANCHO CHOCOLATE CHEESECAKE",
  "Beer Style": "Chocolate malt & chocolate biscuits and Ancho chilli's",
  "ABV": "6.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAD DOG",
  "Beer Name": "MERTHYR FERKER (THE LEGEND DAVE)",
  "Beer Style": "Fruity Simcoe pale, with orange peel added to the boil",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAD DOG",
  "Beer Name": "NOW IN A MINUTE",
  "Beer Style": "Red in colour with citrus bittering and flavours of dark fruits",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAD DOG",
  "Beer Name": "STOUTY MCSTOUTFACE",
  "Beer Style": "Smooth, chocolate and roast flavours from a hefty 6 malts",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MALLINSONS",
  "Beer Name": "MOTUEKA",
  "Beer Style": "Blonde beer with a juicy, fruity hop aroma and a bitter taste ",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MALLINSONS",
  "Beer Name": "NELSON SAUVIN",
  "Beer Style": "Golden coloured,citrusy grapefruit nose, hoppy citrus taste",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MANCHESTER BREW CO",
  "Beer Name": "FACTORY PALE",
  "Beer Style": "Straw colour, dry pale, gently hopped with Vic Secret & Mosaic",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MANCHESTER BREW CO",
  "Beer Name": "KING COTTON",
  "Beer Style": "Traditional best bitter, heavily late hopped with US and NZ hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MANCHESTER BREW CO",
  "Beer Name": "KIR BIER",
  "Beer Style": "Tart Blackcurrant wheat, super sharp, purple beer ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET BOSWORTH",
  "Beer Name": "CASCADING BLOX",
  "Beer Style": "Cascade hopped pale ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET BOSWORTH",
  "Beer Name": "INDIAN SUMMER",
  "Beer Style": "Pale, refreshing with lingering citrus finish ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET BOSWORTH",
  "Beer Name": "PORTER",
  "Beer Style": "Very popular easy drinking porter",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET BOSWORTH",
  "Beer Name": "SESSION ALE",
  "Beer Style": "Traditional, light and easy drinker",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET BOSWORTH",
  "Beer Name": "STOUT  ",
  "Beer Style": "Old fashioned stout with chocolate and roast malt",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "GATE HOPPER",
  "Beer Style": "Pale golden, hoppy brew",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "GHOST TRAIN",
  "Beer Style": "Dark ruby coloured porter,  slightly sweet,  roast malt aftertaste",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "KIWI IPA",
  "Beer Style": "A pale golden hoppy ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "MAIBAUM ALT",
  "Beer Style": "German style alt beer",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "MAYHEM",
  "Beer Style": "Tawny premium bitter, malty aroma with complex flavours ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "MIDGE",
  "Beer Style": "Pale gold, full of hop flavour.",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "MILE BY MILE",
  "Beer Style": "Golden, packed with US hops, lingering bitter finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAYPOLE",
  "Beer Name": "MONTEREY HOP",
  "Beer Style": "Pale, distinct aroma and flavour from Cascade and Citra hops",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "McCOLLS'S",
  "Beer Name": "BEST BITTER",
  "Beer Style": "Unashamedly rich, resinous and bitter",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "McCOLLS'S",
  "Beer Name": "GOLDEN ALE",
  "Beer Style": "Ultra pale ale with lemon and floral aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "McCOLLS'S",
  "Beer Name": "IPA",
  "Beer Style": "English IPA with hop flavours and aroma",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MIGHTY MEDICINE",
  "Beer Name": "MADCHESTER CREAM",
  "Beer Style": "Based on the original great Boddingtons",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MIGHTY MEDICINE",
  "Beer Name": "PIRATE JUICE",
  "Beer Style": "Session IPA",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MIGHTY MEDICINE",
  "Beer Name": "STUNNING BLONDE",
  "Beer Style": "Blonde pale ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILETREE",
  "Beer Name": "BLACK LAGER",
  "Beer Style": "Cask conditioned lager, full of character, with a smooth finish",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILETREE",
  "Beer Name": "HARVESTER",
  "Beer Style": "Pale golden harvest ale with a refreshing grainy malt flavour",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILETREE",
  "Beer Name": "HONEY PORTER",
  "Beer Style": "Dark porter with hints of honey, coffee and chocolate",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MITHRIL",
  "Beer Name": "OCTOPUSSY",
  "Beer Style": "Deep golden ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILL VALLEY",
  "Beer Name": "DUKES",
  "Beer Style": "An English style IPA",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILL VALLEY",
  "Beer Name": "MILL BLONDE",
  "Beer Style": "Blonde ale, fruity, banana, light grapefruit, malty backbone",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MITHRIL",
  "Beer Name": "DERE STREET",
  "Beer Style": "Light amber English bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MONTY'S",
  "Beer Name": "DARK SECRET",
  "Beer Style": "Full bodied oatmeal stout, chocolate and coffee taste",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MONTY'S",
  "Beer Name": "MASQUERADE",
  "Beer Style": "Premium golden bitter",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MORTON COLLINS",
  "Beer Name": "RYHILL PALE ALE",
  "Beer Style": "NA",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MORTON COLLINS",
  "Beer Name": "WINTERSETT GOLD",
  "Beer Style": "Classic  English ale hopped with Fuggles & East Kent Goldings",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MOUNTAIN HARE",
  "Beer Name": "GOLD",
  "Beer Style": "Balanced hoppy golden summer ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MOURNE MOUNTAINS",
  "Beer Name": "MOURNE GOLD",
  "Beer Style": "Very pale ale, using Continental Brewers Gold hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUCKLE",
  "Beer Name": "MUCKLE BUSTER RED ALE",
  "Beer Style": "Fruity red ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUCKLE",
  "Beer Name": "MUCKLE MOSS STOUT",
  "Beer Style": "Rich, dark and aromatic",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUCKLE",
  "Beer Name": "WHIN SILL BLONDE",
  "Beer Style": "Blonde ale with Progress and Bramling Cross hops",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUMBLES",
  "Beer Name": "IPA",
  "Beer Style": "English IPA made with Goldings and Fuggles hops",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUMBLES",
  "Beer Name": "MUMBLES GOLD",
  "Beer Style": "Golden in colour with a bold Styrian Goldings hop taste",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUMBLES",
  "Beer Name": "OYSTERMOUTH STOUT",
  "Beer Style": "Oyster stout",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "CREAM HEAD",
  "Beer Style": "Lactose ale, brewed lager style, but for cask.",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "NEW DAWN",
  "Beer Style": "Pale straw in colour, well-hopped, refreshing sharp finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "PATRIOT",
  "Beer Style": "Traditional  amber-coloured smooth malty beer",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "REBEL",
  "Beer Style": "Citrus golden ale with grapefruit & mango aromas",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "SAVIOUR",
  "Beer Style": "Brewed with lager malts,  with full American hop flavours",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "SOUR DIESEL",
  "Beer Style": "Grapefruit session IPA, made with real grapefruit",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "SPLENDOR",
  "Beer Style": "Clean-tasting, satisfying biscuit flavours, lasting aftertaste",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAVIGATION",
  "Beer Name": "WISE GUY",
  "Beer Style": "Copper coloured with fruity aroma & creamy toffee flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAYLORS",
  "Beer Name": "TOFFEE MILD",
  "Beer Style": "Dark, strong mild with toffee notes",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NAYLORS",
  "Beer Name": "YORKSHIRE ALE",
  "Beer Style": "Copper coloured Yorkshire bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NEWTOWN",
  "Beer Name": "BLOCKHOUSE",
  "Beer Style": "Chestnut coloured best bitter made with six different malts",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NEWTOWN",
  "Beer Name": "WARRIOR",
  "Beer Style": "Dark ale with some German smoked malt ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN ALECHEMY",
  "Beer Name": "CASCADE OATMEAL PALE",
  "Beer Style": "American pale ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN ALECHEMY",
  "Beer Name": "DARK CHOC MINT MILK STOUT",
  "Beer Style": "Chocolate and mint milk stout",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN ALECHEMY",
  "Beer Name": "GALAXY, CASCADE & CENTENNIAL PALE",
  "Beer Style": "Cascade, Galaxy & Centennial pale ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN WHISPER",
  "Beer Name": "BELTIE STOUT ",
  "Beer Style": "Strong, bold and rich stout",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN WHISPER",
  "Beer Name": "BLIGHTY",
  "Beer Style": "Traditional copper coloured British bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHERN WHISPER",
  "Beer Name": "YAMMERHOUSE",
  "Beer Style": "American pale ale, big, brash, bold and ballsy ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "O BROTHER",
  "Beer Name": "THE CHANCER",
  "Beer Style": "American pale ale with lots of tropical flavours",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "O BROTHER",
  "Beer Name": "THE PREACHER",
  "Beer Style": "Session IPA described as Lemon candy!",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "O BROTHER",
  "Beer Name": "THE RAINMAKER",
  "Beer Style": "American IPA with Citra, Mosaic, Galaxy hops ",
  "ABV": "7.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "O BROTHER",
  "Beer Name": "THE SINNER",
  "Beer Style": "American IPA",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "O BROTHER",
  "Beer Name": "THE SMASHER",
  "Beer Style": "Amazing Grapefruit pale ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "3 WITCHES",
  "Beer Style": "Amber ale, fruity orange aroma & soft fruit notes, fruity dry finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "ATTILA",
  "Beer Style": "Powerful brew with a long bitter fruity finish",
  "ABV": "7.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "BISHOPS FAREWELL",
  "Beer Style": "Premium ale with elaborate fruity hop notes",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "BLACK HOLE PORTER",
  "Beer Style": "Big darkmalt flavours combine with a sweet and fruity hop taste ",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "BLUE SKIES  I.P.A.",
  "Beer Style": "Aged golden ale brewed with Simcoe, Mosaic & Chinook hops",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "BONA NOX",
  "Beer Style": "Golden beer packed with powerful citrus and berry flavours",
  "ABV": "8.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "CITRA",
  "Beer Style": "Light refreshing beer with bitter finish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "GREEN DEVIL IPA",
  "Beer Style": "Amazing hop harvest aroma with tropical fruit",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "INFERNO",
  "Beer Style": "Light, igniting ale flickers complex fruits across your tongue",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "JHB",
  "Beer Style": "A golden beer with citrus notes",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OAKHAM",
  "Beer Name": "SCARLET MACAW",
  "Beer Style": "Tart gooseberry and soft peach with an intense bitterness",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD PIE FACTORY",
  "Beer Name": "AMERICAN PIE",
  "Beer Style": "American hopped pale ale",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD PIE FACTORY",
  "Beer Name": "PIE IN THE SKY",
  "Beer Style": "Pale English ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD SAWLEY",
  "Beer Name": "FIGARO",
  "Beer Style": "Light extra pale ale with tropical fruitness & floral aroma",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD SAWLEY",
  "Beer Name": "LITTLE JACK",
  "Beer Style": "Refreshing pale ale, fruity citrus taste from a blend of 4 US hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD SAWLEY",
  "Beer Name": "TOLLBRIDGE",
  "Beer Style": "Smooth porter, hints of chocolate, coffee & vanilla",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OTLEY",
  "Beer Name": "INSPIRATION",
  "Beer Style": "Classic IPA, last ever brew from brewery",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OUT THERE",
  "Beer Name": "ANGARA BALTIC PORTER",
  "Beer Style": "Baltic porter with malty, spicy, chocolate notes",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OUT THERE",
  "Beer Name": "CASSINI SPECIALE 2 IPA",
  "Beer Style": "Amber bitter, good balance of malt and hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OUT THERE",
  "Beer Name": "ROSETTE NEBULA 2 RED ALE",
  "Beer Style": "Malty red ale with fruity finish ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OXBREW",
  "Beer Name": "PALE ALE",
  "Beer Style": "Pale, light, crisp and hoppy ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OXBREW",
  "Beer Name": "RED ALE",
  "Beer Style": "Lovely red ale from this new brewery",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PARTNERS",
  "Beer Name": "AMERICAN CRAFT ALE",
  "Beer Style": "Brewed with US hops, light & refreshing, citrus flavours & aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PARTNERS",
  "Beer Name": "TABATHA",
  "Beer Style": "Belgian style tripel beer, fruity with hints of coriander",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PIG & PORTER",
  "Beer Name": "DANCE FIRST",
  "Beer Style": "Subtly hopped dry stout",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PIG & PORTER",
  "Beer Name": "FATAL FLAW",
  "Beer Style": "American amber featuring aromatic malt and American ale yeast",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PIG & PORTER",
  "Beer Name": "SLOW BLACK",
  "Beer Style": "Rich, complex oatmeal stout, dark malts and porridge oats",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PILOT (Wales)",
  "Beer Name": "REVOLVER MOSAIC",
  "Beer Style": "Blonde ale with Mosaic hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PILOT (Wales)",
  "Beer Name": "SUP IPA",
  "Beer Style": "(Stand Up Paddleboarding) American hopped IPA",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PIRATE",
  "Beer Name": "BLUNDERBUSS",
  "Beer Style": "Traditional dark English bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PIRATE",
  "Beer Name": "RED BEARD",
  "Beer Style": "Vibrantly red coloured, good balanced blend of malt ",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PITCHFORK",
  "Beer Name": "PG STEAM",
  "Beer Style": "Floral, hoppy, malty English ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PITCHFORK",
  "Beer Name": "OLD SLUG",
  "Beer Style": "Traditional porter, coffee, blackcurrant and black cherry aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PITCHFORK",
  "Beer Name": "PITCHFORK",
  "Beer Style": "Golden ale with sweet and fruity hoppy taste ",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POYNTON",
  "Beer Name": "SIMCOE RED",
  "Beer Style": "An American Amber ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POYNTON",
  "Beer Name": "VIADUCT",
  "Beer Style": "A golden ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POWDER KEG",
  "Beer Name": "FARAM'S FAULT",
  "Beer Style": "English pale ale",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POWDER KEG",
  "Beer Name": "SPEAK EASY",
  "Beer Style": "Transatlantic pale ale with US hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PURPLE MOOSE",
  "Beer Name": "GOLD COAST",
  "Beer Style": "New golden ale with hints of honey",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RASCALS",
  "Beer Name": "BIG HOP RED",
  "Beer Style": "Hoppy red ale with a caramel malt backbone",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RALPH'S RUIN",
  "Beer Name": "TEST BREW 6",
  "Beer Style": "Sweet blonde beer, easy to drink leaving a clean pallet",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAN ALES",
  "Beer Name": "RANBO",
  "Beer Style": "Bitter sweet pale ale  with a rich fruity aroma",
  "ABV": "6.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAN ALES",
  "Beer Name": "RUN & RAISIN STOUT",
  "Beer Style": "Rich and flavoursome dark ale with hints of rum ‘n’ raisin",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RANGE ALES",
  "Beer Name": "BEACH HEAD",
  "Beer Style": "Easy drinking amber ale",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RANGE ALES",
  "Beer Name": "BLACK OPS",
  "Beer Style": "Sublime modern ale with a smooth coffee like finish",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RANGE ALES",
  "Beer Name": "RIFLEMAN IPA",
  "Beer Style": "Harvest gold, pleasant flowery aroma, Cascade single hopped  ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RASCALS",
  "Beer Name": "HAPPY DAYS",
  "Beer Style": "Beautiful American hopped session pale ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RASCALS",
  "Beer Name": "WUNDERBAR",
  "Beer Style": "German IPA - brewed with German hops and Munich malt",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REBEL",
  "Beer Name": "BAL MAIDEN",
  "Beer Style": "Copper coloured session bitter",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REBEL",
  "Beer Name": "EIGHTY SHILLINGS",
  "Beer Style": "Dark, Scottish style ale with has a roasted malt flavour",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REBEL",
  "Beer Name": "PENRYN PALE ALE",
  "Beer Style": "Fruity, hoppy nose with hints of peach and lemongrass",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REDWILLOW",
  "Beer Name": "SHAMELESS",
  "Beer Style": "Gloriously hoppy beer, tropical fruit and a clean Grapefruit finish ",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REDWILLOW",
  "Beer Name": "SMOKELESS",
  "Beer Style": "Smoked porter, velvet smooth with infused Chipotles ",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REDWILLOW",
  "Beer Name": "WRECKLESS",
  "Beer Style": "Beautifully balanced pale ale, loaded with Citra and Amarillo hops ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REVOLUTIONS",
  "Beer Name": "BIG IN JAPAN",
  "Beer Style": "Cherry Saison",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REVOLUTIONS",
  "Beer Name": "BLACK MONK TIME",
  "Beer Style": "Belgian Stout",
  "ABV": "7.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REVOLUTIONS",
  "Beer Name": "CANDIDATE",
  "Beer Style": "Session Pale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIVINGTON",
  "Beer Name": "AMERICAN BROWN",
  "Beer Style": "Brown ale roasty and citrussy",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "REVOLUTIONS",
  "Beer Name": "SWOON",
  "Beer Style": "Chocolate Fudge Milk Stout",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIGG & FURROW",
  "Beer Name": "FLAG LEAF FARMHOUSE TABLE BEER",
  "Beer Style": "Mosaic and Simcoe farmhouse Saison",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIGG & FURROW",
  "Beer Name": "THE PALE ALE ",
  "Beer Style": "Nice hoppy pale ale ",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIGG & FURROW",
  "Beer Name": "TRICKSTER AMBER",
  "Beer Style": "Rich ruby English bitter ",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIVERSIDE (W Sussex)",
  "Beer Name": "RAMBLING MONARCH",
  "Beer Style": "Light, floral, citrus/spicy aroma, East Kent & Styrian Golding hops",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIVERSIDE (W Sussex)",
  "Beer Name": "SNEAKY STEAMER",
  "Beer Style": "Four different hops used, hints of grapefruit",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIVINGTON",
  "Beer Name": "BINARY SOLO",
  "Beer Style": "NZ hopped pale ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RIVINGTON",
  "Beer Name": "WEST COAST IPA",
  "Beer Style": "Citrus, pine, caramel, little bitterness - classic West Coast",
  "ABV": "6.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKET ALES",
  "Beer Name": "ATLAS IPA",
  "Beer Style": "IPA made with 100% Maris Otter malt and UK Admiral hops",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKET ALES",
  "Beer Name": "BLOODHOUND",
  "Beer Style": "Amber ale with fruity, sweet malt nose and hoppy edge",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKET ALES",
  "Beer Name": "KOMET BIER",
  "Beer Style": "German Kolsch style Session IPA ",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKET ALES",
  "Beer Name": "VOSTOCK STOUT",
  "Beer Style": "Russian stout brewed with 5 different malts",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKIN ROBIN",
  "Beer Name": "REALLY ROCKIN",
  "Beer Style": "Quaffable strong pale ale, Chinook and Cascade hops drive it",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKIN ROBIN",
  "Beer Name": "RELIANT ROBIN",
  "Beer Style": "Fresh hoppy session bitter, dry hopped to create floral notes",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCKIN ROBIN",
  "Beer Name": "RPA",
  "Beer Style": "American Pale Ale, Cascade hops dominate. Dry Hopped",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROGUE ELEPHANT",
  "Beer Name": "PORTLY POLICEMAN",
  "Beer Style": "Porter with a sweet treacle taste and slight roast malt note",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROGUE ELEPHANT",
  "Beer Name": "TOMMY GOODWIN MILD",
  "Beer Style": "Malty slightly sweet mild with a hint of roast chocolate malt ",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROUNDHILL",
  "Beer Name": "BEARDY BREW BLONDE",
  "Beer Style": "Sweet and juicy blonde ale with a natural haze",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SAINTS ROW",
  "Beer Name": "WELL SPRING APA",
  "Beer Style": "English pale ale, citrus, tropical fruits and fresh hop",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROMNEY MARSH",
  "Beer Name": "ROMNEY AMBER ALE",
  "Beer Style": "Citrus and tropical fruit flavours with a hint of caramel",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROMNEY MARSH",
  "Beer Name": "ROMNEY MARSH MELLOW",
  "Beer Style": "Pale ale blending five Kentish and American hops",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROMNEY MARSH",
  "Beer Name": "ROMNEY RYE",
  "Beer Style": "Reddish brown, peppery dryness and gentle toffee notes",
  "ABV": "3.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROUNDHILL",
  "Beer Name": "BITTER",
  "Beer Style": "Traditional English bitter",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROUNDHILL",
  "Beer Name": "BPA",
  "Beer Style": "Billingham Pale Ale, hoppy pale ale",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SAINTS ROW",
  "Beer Name": "THE CATCHER PALE ALE",
  "Beer Style": "Traditional EPA, citrusy and floral notes",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SAINTS ROW",
  "Beer Name": "THE MOTH",
  "Beer Style": "German style blonde ale, featuring German Tettnang hop",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALCOMBE",
  "Beer Name": "DEVON AMBER",
  "Beer Style": "Amber ale, dry hoppy and fresh malty taste",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALCOMBE",
  "Beer Name": "GOLD",
  "Beer Style": "Light refreshing straw coloured ale, brewed with USA hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALCOMBE",
  "Beer Name": "LIFESAVER",
  "Beer Style": "Extra strong bitter",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALTAIRE",
  "Beer Name": "BLACKBERRY CASCADE",
  "Beer Style": "American style pale ale with a hint of blackberry",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALTAIRE",
  "Beer Name": "ELDERFLOWER BLONDE",
  "Beer Style": "Blonde ale infused with elderflower",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SALTAIRE",
  "Beer Name": "RASPBERRY BLONDE",
  "Beer Style": "Blonde ale  infused with raspberry flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SARAH HUGHES",
  "Beer Name": "DARK RUBY",
  "Beer Style": "The ultimate dark ruby ale",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "BEERFEST AT TIFFANYS",
  "Beer Style": "English session bitter, slightly spicy earthy aftertaste",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "BEYOND REASONABLE STOUT",
  "Beer Style": "Rich dark, well regarded stout",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "HOPPY POTTER AND THE GOBLET OF ALE",
  "Beer Style": "A light coloured ale with citrus aromas",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "MASHER IN THE RYE",
  "Beer Style": "Golden American style ale with a dash of rye malt",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "RUBECCA",
  "Beer Style": "Smooth ruby beer with hints of chocolate ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SLIGHTLY FOXED",
  "Beer Name": "QUICK BROWN FOX",
  "Beer Style": "Tawny Brown Ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "LIFE OF IPA",
  "Beer Style": "A great IPA",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "ONE BREW OVER THE CUCKOO'S NEST",
  "Beer Style": "A full strength, full hopped IPA",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCRIBBLERS ",
  "Beer Name": "ONE SPECIAL BREW OVER THE CUCKOO'S NEST",
  "Beer Style": "An extra special dry hopped IPA",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SKIPPOOL CREEK",
  "Beer Name": "BLACK OAR STOUT",
  "Beer Style": "Stout with aroma of coffee, chocolate, liquorice, and molasses ",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SKIPPOOL CREEK",
  "Beer Name": "CROW'S NEST BITTER",
  "Beer Style": "British bitter with Admiral hops for bittering and Boadicea hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SKIPPOOL CREEK",
  "Beer Name": "TOP SAIL PALE",
  "Beer Style": "Very light coloured traditional British pale ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SLIGHTLY FOXED",
  "Beer Name": "FLYING FOX",
  "Beer Style": "Golden with apricots",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHSEA BREWING",
  "Beer Name": "CASEMATE IPA",
  "Beer Style": "Hoppy IPA, hazy, dry and loads of flavour",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHSEA BREWING",
  "Beer Name": "WEISSCAPS",
  "Beer Style": "German style wheat beer, fruity banana sweetness",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHWARK",
  "Beer Name": "BERMONDSEY BEST BITTER",
  "Beer Style": "Traditional English best bitter",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHWARK",
  "Beer Name": "HARVARD APA ",
  "Beer Style": "A highly-hopped American Pale Ale",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHWARK",
  "Beer Name": "HEFEWEIZEN",
  "Beer Style": "Wheat beer with notes of banana & cloves",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHWARK",
  "Beer Name": "LPA (London Pale Ale)",
  "Beer Style": "Session Pale Ale, light, hoppy with citrus tones",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SOUTHWARK",
  "Beer Name": "PETER'S RUSSIAN IMPERIAL STOUT",
  "Beer Style": "Russian Imperial Stout, strong chocolate & burnt malt flavours",
  "ABV": "8.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STAG (Kent)",
  "Beer Name": "MAGIC MUNTJAC",
  "Beer Style": "Tropical zesty light pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STAG (Kent)",
  "Beer Name": "RED IMPERIAL",
  "Beer Style": "Dark English bitter with spicy toffee flavours",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STROUD",
  "Beer Name": "FIVE VALLEYS",
  "Beer Style": "Traditional chestnut coloured, rich and fruity strong ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TENBY BREWING CO",
  "Beer Name": "BAREFOOT BLONDE",
  "Beer Style": "Super refreshing Cascade hopped pale/pilsner hybrid",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STONEY FORD",
  "Beer Name": "MEADOWS MOONDANCE",
  "Beer Style": "Robust IPA in the English style with strong bitter backbone",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STONEY FORD",
  "Beer Name": "SHEEPMARKET SUPERNOVA",
  "Beer Style": "Pale summer ale, floral, cedar, grapefruit and peach",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STONEY FORD",
  "Beer Name": "STAMFORD 50",
  "Beer Style": "Brown Porter,  combination of malts and UK hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STROUD",
  "Beer Name": "RAMBLERS REWARD",
  "Beer Style": "NEW BEER",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STU BREW",
  "Beer Name": "EXTENDED OVERDRAUGHT IPA",
  "Beer Style": "Hoppy IPA  ",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TAP SOCIAL MOVEMENT",
  "Beer Name": "29 IN A MILLION",
  "Beer Style": "English hopped ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TAP SOCIAL MOVEMENT",
  "Beer Name": "GREBES PROCESSION",
  "Beer Style": "Rich and roasty oatmeal stout",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TENBY BREWING CO",
  "Beer Name": "HAMMERHEAD 7 SEAS",
  "Beer Style": "Sweet, fruity juice bomb, casked especially for the festival",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TENBY BREWING CO",
  "Beer Name": "INTERGALACTIC",
  "Beer Style": "Juicy, hoppy, pale wheat beer,  casked especially for the festival",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TENBY HARBWR",
  "Beer Name": "SIR GALAHAD",
  "Beer Style": "Red ale, complex malt character, a rich ruby red colour",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TENBY HARBWR",
  "Beer Name": "NORTH STAR",
  "Beer Style": "Malty amber ale, spicy blackcurrant and lemon aroma",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THIRST CLASS",
  "Beer Name": "ANY PORTER IN A STORM",
  "Beer Style": "Traditional English porter, with intense malty & treacle aroma",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THIRST CLASS",
  "Beer Name": "HOPFORDIAN",
  "Beer Style": "Fruity IPA full of American hops Cascade, Willamette and Simcoe",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THIRST CLASS",
  "Beer Name": "NEW ZEALAND PALE ALE",
  "Beer Style": "Session pale brewed with healthy dose of Rakau& Wai-iti hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
    "Brewery Name": "THREE BLIND MICE",
    "Beer Name": "FLIGHT OF THE UNICORN v2",
    "Beer Style": "Nelson Sauvin, Citra & Simcoe IPA",
    "ABV": "5.0",
    "IBU": "NA"
  },
  {
  "Brewery Name": "THREE BLIND MICE",
  "Beer Name": "MILK WORM",
  "Beer Style": "Chocolate and Vanilla milk porter",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE BLIND MICE / BAKERS DOZEN",
  "Beer Name": "UPSIDE DOWN IPA",
  "Beer Style": "Black IPA hopped with Citra, Mosaic, Summit & Nelson Sauvin ",
  "ABV": "7.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE BROTHERS",
  "Beer Name": "THAIPA",
  "Beer Style": "Crisp hoppy ale with spicy, citrus flavours",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE KINGS",
  "Beer Name": "HEART 'N' SOUL MOSAIC PALE",
  "Beer Style": "Mosiac hopped IPA",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TIPSY ANGEL",
  "Beer Name": "T.A.PALE",
  "Beer Style": "Copper coloured best bitter",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE BROTHERS",
  "Beer Name": "SHORT & STOUT",
  "Beer Style": "Stout, with a chocolate body and hoppy punch",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE BROTHERS",
  "Beer Name": "THE EX WIFE BITTER",
  "Beer Style": "Session bitter with subtle notes of toffee",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE KINGS",
  "Beer Name": "DARK SIDE OF THE TOON ",
  "Beer Style": "Dry stout with dark chocolate and roast coffee notes",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE KINGS",
  "Beer Name": "RIDE THE PINE",
  "Beer Style": "Citrus pale ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE KINGS",
  "Beer Name": "SUPER MAC",
  "Beer Style": "Hoppy golden ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TIGERTOPS",
  "Beer Name": "JADE HOP",
  "Beer Style": "A pale ale brewed with NZ hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TIGERTOPS",
  "Beer Name": "TASMAN BAY",
  "Beer Style": "A pale ale with Australian hops",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TIPSY ANGEL",
  "Beer Name": "OATMEAL STOUT",
  "Beer Style": "Traditional oatmeal stout",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOM HERRICK'S",
  "Beer Name": "BLACK LACE",
  "Beer Style": "Chocolate milk stout with roasted coffee & dark chocolate notes ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOMOS A LILFORD",
  "Beer Name": "GAUCHO",
  "Beer Style": "South American IPA, brewed with a hint of green tea and apricot",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOMOS A LILFORD",
  "Beer Name": "HOP CLUB",
  "Beer Style": "Fresh green hopped pale ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOMOS WATKIN",
  "Beer Name": "BICYCLE BLONDE",
  "Beer Style": "Blonde ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRACK",
  "Beer Name": "EL CAPITAN",
  "Beer Style": "New England IPA, packed full of citrus & tropical hops",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRACK",
  "Beer Name": "SONOMA",
  "Beer Style": "Pale with smooth citrus aroma",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRACK",
  "Beer Name": "TOBA",
  "Beer Style": "Oatmeal Stout, coffee and chocolate come through really nicely",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TREEN'S",
  "Beer Name": "CLASSIC",
  "Beer Style": "Best Bitter, deep amber, malty beer",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TROUBLE BREWING",
  "Beer Name": "DARK ARTS",
  "Beer Style": "Rich & dark traditional porter, coffee, chocolate and caramel",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRYST",
  "Beer Name": "PILSNER",
  "Beer Style": "Classic cask pilsner with German hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TREEN'S",
  "Beer Name": "CLOUD CUCKOO",
  "Beer Style": "Deep ruby, full-bodied, plum and soft fruits notes",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TREEN'S",
  "Beer Name": "RUBY IPA",
  "Beer Style": "Full bodied ruby ale with a powerful hop bite and nose",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TROUBLE BREWING",
  "Beer Name": "BLOOD BROTHER",
  "Beer Style": "Blood orange black IPA",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TROUBLE BREWING",
  "Beer Name": "WALK ON THE MILD SIDE ",
  "Beer Style": "Mild with chocolate & roast notes. Aroma of toasty chocolate",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TROUBLE BREWING",
  "Beer Name": "GRAFITTI",
  "Beer Style": "Session pale ale, flavourful punch beyond it’s modest ABV",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TROUBLE BREWING",
  "Beer Name": "SABOTAGE",
  "Beer Style": "Amber English hopped IPA",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRYST",
  "Beer Name": "COCONUT & CHOCOLATE PORTER",
  "Beer Style": "Rich chocolate porter with toasted coconut",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TRYST",
  "Beer Name": "RAJ IPA",
  "Beer Style": "Traditional IPA recipe loaded with hops",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TURNING POINT",
  "Beer Name": "CHAOS THEORY",
  "Beer Style": "Honey & Marigold Oatmeal Pale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TURNING POINT",
  "Beer Name": "LUCID DREAM",
  "Beer Style": "Cookie & Cream Stout with Cacao nibs and chocolate malt",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TURNING POINT",
  "Beer Name": "SUMMER GROVE",
  "Beer Style": "Tangy, zesty, white IPA  with rose petals, oranges & gooseberries",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWISTED ANGEL",
  "Beer Name": "DAYWALKER",
  "Beer Style": "Oatmeal stout, floral hop aroma, roasted barley, hint of coffee",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWISTED ANGEL",
  "Beer Name": "SHAPESHIFTER",
  "Beer Style": "American pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWO BY TWO",
  "Beer Name": "AMARILLO SINGLE HOPPED ALE",
  "Beer Style": "Single hopped IPA with Amarillo hop",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWO BY TWO",
  "Beer Name": "BIRTHDAY BEER MOSAIC AND CITRA JUICE BOMB",
  "Beer Style": "Brewery 3rd birthday beer, tropical juice bomb",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWO BY TWO",
  "Beer Name": "OUSEBURN FARM CHARITY BEER",
  "Beer Style": "Charity beer packed with Chinook, Equinox and Citra",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TWO BY TWO",
  "Beer Name": "SOUTHPAW IPA",
  "Beer Style": "Fruity, hoppy, English IPA",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNITY (Worcs)",
  "Beer Name": "BUCKEYE SESSION BITTER",
  "Beer Style": "Easy drinking, copper-coloured beer",
  "ABV": "3.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNITY (Worcs)",
  "Beer Name": "SEBRIGHT",
  "Beer Style": "Straw-coloured ale with fruity hop aromas",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "URBAN CHICKEN",
  "Beer Name": "MALT FEAKES",
  "Beer Style": "Best bitter with complex malt flavours",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TYNEBANK",
  "Beer Name": "GREEN HOP IPA",
  "Beer Style": "Fresh green hopped IPA",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNITY (Worcs)",
  "Beer Name": "FRIZZLE BRITSH IPA",
  "Beer Style": "Rich golden in colour with a fruity, floral hop aroma ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNITY (Worcs)",
  "Beer Name": "PEKIN PALE",
  "Beer Style": "Golden ale, fruity and hoppy",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNTAPPED",
  "Beer Name": "MONNOW",
  "Beer Style": "Chestnut coloured English bitter",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNTAPPED",
  "Beer Name": "SUNDOWN",
  "Beer Style": "Golden colour, distinct flavour, Goldings & Challenger hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNTAPPED",
  "Beer Name": "TRIPLE \"S\"",
  "Beer Style": "Intense black stout, rich upfront flavours",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UNTAPPED",
  "Beer Name": "UPA",
  "Beer Style": "IPA, distinctly hoppy, with  aromas from Styrian Goldings hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "URBAN CHICKEN",
  "Beer Name": "BIRD FLUID",
  "Beer Style": "American IPA with refreshing citrus finish",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "URBAN CHICKEN",
  "Beer Name": "BODY POP",
  "Beer Style": "Session IPA with tropical fruit flavours from Australian hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "URBAN CHICKEN",
  "Beer Name": "PIT PONY STOUT",
  "Beer Style": "Oatmeal Stout with coffee and chocolate notes",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "URBAN ISLAND",
  "Beer Name": "DSB (Dolly's Special beer)",
  "Beer Style": "Light refreshing Summer ale",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UTTOXETER",
  "Beer Name": "ADMIRAL GARDNER",
  "Beer Style": "Pale ale,  tropical fruits and mango, a fruity balanced bitter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UTTOXETER",
  "Beer Name": "AMERICAN IPA",
  "Beer Style": "American IPA, powerful in strength, bitterness and fruitiness",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UTTOXETER",
  "Beer Name": "BUNTINGS BLONDE ",
  "Beer Style": "Blonde low alcohol ale, lemon-grapefruit, citrusy flavour",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UTTOXETER",
  "Beer Name": "FULL GALLOP",
  "Beer Style": "English brown ale, malty beer with sweetness & toffee notes",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UTTOXETER",
  "Beer Name": "PADDOCK PORTER",
  "Beer Style": "Chocolaty, dominated by a distinctive dark grain flavour",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "VALE OF GLAMORGAN",
  "Beer Name": "PARADYM SHIFT",
  "Beer Style": "American amber / red ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "VOLDEN",
  "Beer Name": "SESSION",
  "Beer Style": "Classic session bitter, tangy and moreish",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELL DRAWN",
  "Beer Name": "PALE",
  "Beer Style": "Pale session ale, Target and Fuggles with crushed Elderflower",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "VALE OF GLAMORGAN / CASK BEER CO",
  "Beer Name": "CHAOS",
  "Beer Style": "Monstrously hopped pale ale",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "VOLDEN",
  "Beer Name": "JUNIPER",
  "Beer Style": "Red rye autumnal beer with Juniper berries",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "VOLDEN",
  "Beer Name": "PALE ALE",
  "Beer Style": "Straw coloured with a long hop finish",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WEAL ALES",
  "Beer Name": "GINGER WEAL",
  "Beer Style": "Strong golden ale. The addition of ginger gives a spiciness kick",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WEAL ALES",
  "Beer Name": "WEALD WOOD",
  "Beer Style": "Multi hopped session beer made with extra pale malt",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WEAL ALES",
  "Beer Name": "WELLER WEAL",
  "Beer Style": "Pale ale made with extra pale malt, lots of Mosaic & Citra hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELL DRAWN",
  "Beer Name": "GOLD",
  "Beer Style": "Golden, refreshing, bold in flavour using Celeia hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WEST BY THREE",
  "Beer Name": "GRISETTE",
  "Beer Style": "Grisette - similar to a saison, but with a cheeky dry hop!",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WEST BY THREE",
  "Beer Name": "CHOCOLATE MILK STOUT",
  "Beer Style": "Choco milk Stout",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHIM",
  "Beer Name": "EARL GREY BITTER",
  "Beer Style": "Golden brown English bitter with a hoppy, fruity aroma",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHIM",
  "Beer Name": "SNOW WHITE",
  "Beer Style": "Bavarian style coriander wheat beer (Cloudy)",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITE HORSE",
  "Beer Name": "BLACK BEAUTY",
  "Beer Style": "Rich Ruby in colour, using chocolate malt and English fuggle hops",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITE HORSE",
  "Beer Name": "OXFORD DARK BLUE",
  "Beer Style": "A dark chestnut coloured beer with a smooth rich flavour",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITEWATER",
  "Beer Name": "BELFAST ALE",
  "Beer Style": "Russet ale, rich fruitiness is followed by a gentle hop flavour ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITEWATER",
  "Beer Name": "CLOTWORTHY DOBBIN",
  "Beer Style": "A dark Irish porter",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITEWATER",
  "Beer Name": "COPPERHEAD",
  "Beer Style": "Copper coloured with very intense flavour of hops and spice",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WHITEWATER",
  "Beer Name": "HOPPELHAMMER",
  "Beer Style": "Muddy orangy beer beer with tastes of hops and exotic fruits",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WILD CARD",
  "Beer Name": "KING OF HEARTS",
  "Beer Style": "Blonde ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WILD CARD",
  "Beer Name": "NEW ZEALAND PALE ALE",
  "Beer Style": "New Zealand Pale ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WILD CARD",
  "Beer Name": "QUEEN OF DIAMONDS",
  "Beer Style": "Session IPA",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDMILL HILL",
  "Beer Name": "AMERICAN SESSION IPA",
  "Beer Style": "Golden American session IPA with Cascade hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDMILL HILL",
  "Beer Name": "CHESTERTON IPA",
  "Beer Style": "Golden amber in colour, hints of roast malts and light fruits",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDMILL HILL",
  "Beer Name": "MALTHOUSE DORMOUSE",
  "Beer Style": "Golden charity beer for Warwickshire Wildlife Trust",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDMILL HILL",
  "Beer Name": "THE AMBER POST",
  "Beer Style": "Classic amber ale with a hoppy twist",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDSOR & ETON",
  "Beer Name": "CANBERRA",
  "Beer Style": "Chestnut brown autumn ale with full tropical fruit hop",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDSOR & ETON",
  "Beer Name": "CONQUEROR BLACK IPA",
  "Beer Style": "Dark, complex, intense. Roast and smokey with Cascadian hop",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WINDSOR & ETON",
  "Beer Name": "KNIGHT OF THE GARTER",
  "Beer Style": "Sunshine in a glass - grapefruit zestiness",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WITHNELL'S",
  "Beer Name": "BLONDE SUMMIT",
  "Beer Style": "Blonde ale brewed with Summit hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WITHNELL'S",
  "Beer Name": "SINGLE HOP - NORTHERN BREWER",
  "Beer Style": "Single hop IPA using Northern Brewer hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WOODMAN'S WILD ALE",
  "Beer Name": "REDRUTH RED",
  "Beer Style": "Flanders red style with wild yeasts, complex sour and fruity",
  "ABV": "7.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WOOLPACK INN",
  "Beer Name": "SLAD VALLEY BITTER",
  "Beer Style": "English bitter brewed with English hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WORKING HAND",
  "Beer Name": "DR KELLYS SICK NOTE",
  "Beer Style": "Blonde ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WORKING HAND",
  "Beer Name": "LUCKY CROWN BITTER",
  "Beer Style": "Malty character complimented with subtle fruit flavours",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WORKING HAND",
  "Beer Name": "MORE CHOKE JACKIE ",
  "Beer Style": "Golden session ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "XTREME",
  "Beer Name": "CHOCOLATE CHERRY STOUT",
  "Beer Style": "Chocolate cherry stout brewed with home grown cherries",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "XTREME",
  "Beer Name": "ROUTE 701",
  "Beer Style": "Traditional golden session ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "XTREME",
  "Beer Name": "YANKEE PIGEON",
  "Beer Style": "American IPA using Centennial, Simcoe, Cascade & Mosaic hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "YORKSHIRE",
  "Beer Name": "CRAZY HORSE",
  "Beer Style": "US hopped amber bitter, with mosaic & williamette hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "YORKSHIRE",
  "Beer Name": "MUTINY",
  "Beer Style": "London porter, distinctive coffee aroma and chocolate flavour",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "8 SAIL",
  "Beer Name": "FENMAN BITTER",
  "Beer Style": "Traditional copper coloured bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "8 SAIL",
  "Beer Name": "OKTOBERFEST",
  "Beer Style": "German marzen style beer",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "8 SAIL",
  "Beer Name": "VICTORIAN PORTER",
  "Beer Style": "Very dark ruby red brew with rich malt flavours",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AMBER",
  "Beer Name": "CHOCOLATE ORANGE ",
  "Beer Style": "Stout with bitter chocolate and orange flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AMBER",
  "Beer Name": "THROAT LOZENGE",
  "Beer Style": "Fiery strong ale, with honey, lemon and ginger",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AMBER",
  "Beer Name": "LIME STOUT",
  "Beer Style": "Dark stout with fresh lime zest",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANSTEY",
  "Beer Name": "BACK YARD BITTER",
  "Beer Style": "Traditional copper bitter  ",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANSTEY",
  "Beer Name": "DARKROOM OATMEAL STOUT",
  "Beer Style": "Rounded Oatmeal stout made with 6 types of grain & triple hopped     ",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANSTEY",
  "Beer Name": "MILK STOUT",
  "Beer Style": "Sweet , black brew, chocolate, roasted flavours, smoked finish ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ANSTEY",
  "Beer Name": "NOOK IPA",
  "Beer Style": "IPA using Chinook, Cascade hops giving this beer a fresh flavour",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHOVER",
  "Beer Name": "AMBERELLA",
  "Beer Style": "Amber ale, spicy, floral nose & hint of aniseed",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHOVER",
  "Beer Name": "LITTLEMOOR CITRA",
  "Beer Style": "Citra hopped pale ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHOVER",
  "Beer Name": "THE FABRICK",
  "Beer Style": "Golden brew, fruity flavour and crisp clean finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHOVER",
  "Beer Name": "THOR CAKE",
  "Beer Style": "Brown ale with ginger, oats, treacle, orange peel & coriander ",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ASHOVER",
  "Beer Name": "ZOO",
  "Beer Style": "Pale ale brewed with Mosaic & Citra hops",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AURORA",
  "Beer Name": "AURORA",
  "Beer Style": "Premium bitter",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AURORA",
  "Beer Name": "BIG DARK",
  "Beer Style": "Dark stout",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "AURORA",
  "Beer Name": "CONSTELLATION",
  "Beer Style": "Traditional amber bitter ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAILDON",
  "Beer Name": "AUBURN FLAME",
  "Beer Style": "A red ale with spicy hops and a soft fruit finish.",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAILDON",
  "Beer Name": "RAVEN",
  "Beer Style": "A silky smooth plum porter",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BAILDON",
  "Beer Name": "SIR TITUS SALT",
  "Beer Style": "A golden ale with a slight citrus note and earthy hop base",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BARLOW",
  "Beer Name": "CARNIVAL ALE",
  "Beer Style": "Golden ale with English malts,  hopped for a light citrus finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BINGLEY",
  "Beer Name": "KORU",
  "Beer Style": "Refreshing pale ale, citrus & pine aromas, subtle lime hints",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BINGLEY",
  "Beer Name": "PELHAM CROSS",
  "Beer Style": "Pale bitter, chinook hops. Aromas of spice, pine & grapefruit",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BINGLEY",
  "Beer Name": "TRI-STATE",
  "Beer Style": "Golden US pale ale. Flavours of citrus, spice, lemon and pine",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIRMINGHAM BREWING CO",
  "Beer Name": "CONFUSED BRUMMIE",
  "Beer Style": "White stout! Made from British floor malt, lightly hopped",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BIRMINGHAM BREWING CO",
  "Beer Name": "GOLD BRUMMIE",
  "Beer Style": "American hopped IPA",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACKHILL",
  "Beer Name": "BRASS THILL",
  "Beer Style": "Golden, pale ale, with a citrus edge and a hint of honey",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACKHILL",
  "Beer Name": "LOW MAIN",
  "Beer Style": "Belgium Pale Ale,  biscuit aroma, hints of orange & spicy notes",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOOT",
  "Beer Name": "CLODHOPPER",
  "Beer Style": "Golden Ale that has a soft, refreshing and enduring finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOOT",
  "Beer Name": "REBOOT",
  "Beer Style": "Refreshing, moreish and loaded with American ‘C’ hops",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOOT",
  "Beer Name": "TUFFER'S OLD",
  "Beer Style": "Velvety rich porter, notes of dark fruit, hazelnut, coffee & cocoa",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BORN IN THE BORDERS",
  "Beer Name": "GOLD DUST",
  "Beer Style": "Light IPA with lots of Centennial hops. Long bitter finish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BOWNESS BAY",
  "Beer Name": "SWIFT BEST",
  "Beer Style": "Rounded with strong malty undercut & balanced hop character",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "BURNOUT",
  "Beer Style": "Beech-smoked porter,  with sweet whisky notes ",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "CLIFFHANGER",
  "Beer Style": "Cascade hopped golden ale, honours Coastguard Rescue Teams",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "EMERGENCY BITTER",
  "Beer Style": "Archetypal British session bitter, brewed to Cold War recipe ",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "HAZELNUT MILD",
  "Beer Style": "Luscious 5-malt nut brown mild with a delicate hazelnut aroma",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "I AM GRUIT",
  "Beer Style": "Spice/herb beer with lavender, bog myrtle, thyme & rosemary",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRASS CASTLE",
  "Beer Name": "TYKEISH DELIGHT",
  "Beer Style": "American-style amber ale, with characteristic floral notes",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWSHED",
  "Beer Name": "AMERICAN BLONDE",
  "Beer Style": "Crisp US style IPA with a rich malt character & a citrus fruit nose",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BREWSHED",
  "Beer Name": "VANILLA PORTER",
  "Beer Style": "Traditional brown/black smooth porter with a soft vanilla finish",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRIARBANK",
  "Beer Name": "MILK STOUT",
  "Beer Style": "Stout brewed with lactose for smooth sweetness, hint of vanilla ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRIARBANK",
  "Beer Name": "SAM HARVEY",
  "Beer Style": "Hoppy, light golden ale, with a grapefruit and orange finish",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRUNSWICK",
  "Beer Name": "RAILWAY PORTER",
  "Beer Style": "Classic London style porter with chocolate and coffee notes",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRUNSWICK",
  "Beer Name": "RYE UP",
  "Beer Style": "American red rye IPA, late hopped with Mosaic",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BRUNSWICK",
  "Beer Name": "SOUTH PACIFIC PALE ",
  "Beer Style": "Single Waimea hopped pale with added fresh kiwi fruit",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BURTON TOWN",
  "Beer Name": "ALBION",
  "Beer Style": "English bitter, smooth easy drinking session ale",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BURTON TOWN",
  "Beer Name": "BLACK AS YOUR HAT",
  "Beer Style": "Jet black IPA with a liquorice kick",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BURTON TOWN",
  "Beer Name": "THOMCAT",
  "Beer Style": "He’s a little bit nutty & full of zest!",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAP HOUSE",
  "Beer Name": "CHEEKY BLONDE",
  "Beer Style": "Citrus aroma pinapple & tangerine flavour, with a hoppy finish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CAP HOUSE",
  "Beer Name": "RUBY",
  "Beer Style": "A rich ruby ale with fruity nut and toffee flavours. ",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHAPEL-EN-LE-FRITH",
  "Beer Name": "ACADIAN",
  "Beer Style": "New England style IPA",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHAPEL-EN-LE-FRITH",
  "Beer Name": "HOOPY AS FUNK",
  "Beer Style": "English Pale Ale with strong malt backbone & citrus hops",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHAPEL-EN-LE-FRITH",
  "Beer Name": "ISAMBARD",
  "Beer Style": "An English pale ale",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHARNWOOD",
  "Beer Name": "AMERICAN PALE ALE",
  "Beer Style": "Hoppy aroma with cascade, centennial, citra & chinnook hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHARNWOOD",
  "Beer Name": "BLACK FOX",
  "Beer Style": "Traditional stout, chocolate/coffee flavours, roasted bitterness",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHARNWOOD",
  "Beer Name": "BLACK HEN PORTER",
  "Beer Style": "A rich porter with subtle chocolate and expresso flavours",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHARNWOOD",
  "Beer Name": "HUBBLE BUBBLE",
  "Beer Style": "Copper autumnal ale with hints of honey, spice & marmalade",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHARNWOOD",
  "Beer Name": "RAINBOW FOX",
  "Beer Style": "Deep copper ale, supporting Rainbows charity",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHIN CHIN",
  "Beer Name": "ALONE IN THE DARK",
  "Beer Style": "Full bodied stout, roast malt, bitter, warming",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHIN CHIN",
  "Beer Name": "TARANAKI",
  "Beer Style": "New Zealand pale ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "BANANA",
  "Beer Style": "Black ale infused with banana",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "CHILLI McCHILLI FACE",
  "Beer Style": "Very pale chilli beer with subtle hop and chilli flavours",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "FALLEN ANGEL",
  "Beer Style": "Full flavoured pale bitter, bucket fulls of American hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "GRAVEDIGGERS",
  "Beer Style": "Dark black, complex mixture of chocolate & roast flavours",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COLCHESTER   ",
  "Beer Name": "DRIZZLE",
  "Beer Style": "Blonde ale brewed using natural fresh lemons and their zest",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "PEACH",
  "Beer Style": "Mid brown ale with added peach",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CHURCH END",
  "Beer Name": "RHUBARD & CUSTARD",
  "Beer Style": "Pale ale, rhubarb and custard in a glass",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COLCHESTER   ",
  "Beer Name": "FLAMING GUN",
  "Beer Style": "Sorachi Ace single hop pale ale",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTLEIGH",
  "Beer Name": "HONEY BUZZARD",
  "Beer Style": "Bronze in colour with a subtle bitter sweet finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTLEIGH",
  "Beer Name": "UNCLE SAM",
  "Beer Style": "Deep golden, fruity hop notes, hint of grapefruit, citrus & lychees",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTTON END",
  "Beer Name": "ARAMIS",
  "Beer Style": "EPA single hopped ale with Aramis hops from France",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTTON END",
  "Beer Name": "COFFEE PORTER",
  "Beer Style": "Porter with a treacle taste using freshly filtered Kenyan coffee",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTTON END",
  "Beer Name": "DOUBLE OAT STOUT",
  "Beer Style": "Thick, creamy strong double stout made with rolled oats",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "COTTON END",
  "Beer Name": "GREEN HOP PALE",
  "Beer Style": "Pale, freshly picked green hops from Pomfret Arms garden",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DIGFIELD",
  "Beer Name": "BARNWELL BITTER",
  "Beer Style": "Traditional amber easy drinking beer with a malty finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DIGFIELD",
  "Beer Name": "FOOLS NOOK",
  "Beer Style": "Golden Summer bitter well hopped and refreshing",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DIGFIELD",
  "Beer Name": "MAD MONK",
  "Beer Style": "Dark strong ale has hints of malt and chocolate",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOGBREATH",
  "Beer Name": "OWD WICK",
  "Beer Style": "Copper coloured traditional bitter",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOGBREATH",
  "Beer Name": "SMOKE IN THE WATER",
  "Beer Style": "Smoked porter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DONCASTER",
  "Beer Name": "SANDHOUSE BLONDE",
  "Beer Style": "Gold straw colour with lager & wheat malts. Citrusy aroma ",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DONCASTER",
  "Beer Name": "SPEEDWELL",
  "Beer Style": "Powerful American style IPA",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOUBLE TOP",
  "Beer Name": "HISTORY MAKER",
  "Beer Style": "A modern bitter, more hoppy then malty",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOUBLE TOP",
  "Beer Name": "OLD STONEFACE",
  "Beer Style": "Black treacle stout",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVE STREET",
  "Beer Name": "COPDOCK CLASSIC",
  "Beer Style": "A golden ale with a slight citrus note and earthy hop base",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DOVE STREET",
  "Beer Name": "REGAL",
  "Beer Style": "Lager style, but brewed with ale yeast  using Czech Saaz hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DRAYCOTT",
  "Beer Name": "IRISH RED",
  "Beer Style": "Traditional Irish red ale, fruity character & subtle bitterness",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DRAYCOTT",
  "Beer Name": "MADE WITH PASSION",
  "Beer Style": "Very pale EPA session ale with a hint of passion fruit",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DRAYCOTT",
  "Beer Name": "MINNESOTA NORTH STAR ",
  "Beer Style": "American Red Ale with prominent malt notes & good bitterness",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DRAYCOTT",
  "Beer Name": "OBSIDIAN BLACK LAGER ALE",
  "Beer Style": "Ale with lager malts, yeast, hops.Darker malts give black colour",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DRAYCOTT",
  "Beer Name": "USA LIBERTY 1776",
  "Beer Style": "Fruity pale ale with a hoppy finish. Single hopped with Simcoe",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DUKERIES",
  "Beer Name": "BLACK TIE",
  "Beer Style": "Chocolate coffee stout",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DUKERIES",
  "Beer Name": "GOLDEN CASTILLE",
  "Beer Style": "Triple hopped golden citrus ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DUKERIES",
  "Beer Name": "NORTHERN RISING",
  "Beer Style": "Refreshing, fruity, chestnut bitter",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DUKERIES",
  "Beer Name": "WERSHESHOPE GOLD",
  "Beer Style": "Orange marmalade, lime & slight grass hop taste",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ELLISWOOD",
  "Beer Name": "BLACK ROSE",
  "Beer Style": "Delicious and smooth porter with a subtle chocolate aftertaste",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ELLISWOOD",
  "Beer Name": "FLAMING STAR",
  "Beer Style": "An easy drinking session beer",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ELLISWOOD",
  "Beer Name": "JUST ONE MORE",
  "Beer Style": "Deep golden/amber ale, citrus flavour with a soft fruity note",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ELLISWOOD",
  "Beer Name": "ROYAL STANDARD 1485",
  "Beer Style": "Deep red bitter, sweet toffee taste, with caramel undertones",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EYES",
  "Beer Name": "KLEINER WEISSE",
  "Beer Style": "White IPA, lemon & citrus aroma, pine & grassy flavours",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EYES",
  "Beer Name": "SUMMER SCHOPS",
  "Beer Style": "Rich, creamy Polish style wheat beer brewed with lemongrass",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EYES",
  "Beer Name": "SUMMER SCHOPS TROPICAL",
  "Beer Style": "Polish style wheat beer with lemongrass & herby European hop",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALSTAFF",
  "Beer Name": "FISTFUL OF HOPS",
  "Beer Style": "Golden amber, powerful hop aromas with citrus undertones",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALSTAFF",
  "Beer Name": "ICEMAN",
  "Beer Style": "Pale and zingy with hoppy overtones and a malty finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FALSTAFF",
  "Beer Name": "LILLIAN GRAY",
  "Beer Style": "Golden well hopped nose and complex flavours",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIVE TOWNS",
  "Beer Name": "CHIEF",
  "Beer Style": "Blonde ale. Floral & fruity with restrained bitterness",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIXED WHEEL",
  "Beer Name": "DEVIL TAKE THE HINDMOST",
  "Beer Style": "Deep red ale with a big hop presence",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIXED WHEEL",
  "Beer Name": "SINGLE SPEED SIMCOE",
  "Beer Style": "Single hopped IPA with Simcoe hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "KING NORVAK'S SAGA",
  "Beer Style": "Champion Porter of the West Midlands",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "HAND OF DOOM",
  "Beer Style": "Double IPA",
  "ABV": "8.199999999999999",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "KORVAK'S SAGA CHAPTER III: LAMENT",
  "Beer Style": "Rye porter",
  "ABV": "7.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "PROPHETS OF DOOM",
  "Beer Style": "Cascadian dark ale",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "STORYTELLER",
  "Beer Style": "Honey & Ginger ale ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "THE PALE KING",
  "Beer Style": "Pilsner style real ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOWNES",
  "Beer Name": "VISIONS OF HERESY",
  "Beer Style": "Smoked rye IPA",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOX ",
  "Beer Name": "FRESH GOLD",
  "Beer Style": "Brewed with hops grown at the brewery, a new beer each year",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FOX ",
  "Beer Name": "SAMPHIRE STOUT",
  "Beer Style": "Brewed with local seaweed",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FRAMEWORK",
  "Beer Name": "DANISH RED LAGER",
  "Beer Style": "Malty, crisp lager style with a long malty finish.",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FRAMEWORK",
  "Beer Name": "GALENA RYE PALE ALE",
  "Beer Style": "Rye Beer, with Galena hops for a pineapple & grapefruit taste",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FRAMEWORK",
  "Beer Name": "LAID BACK STOUT",
  "Beer Style": "Complex, viscous & dark. Nine malts give a deep character",
  "ABV": "5.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FRAMEWORK",
  "Beer Name": "LEMON & CORIANDER WHEAT BEER",
  "Beer Style": "Wheat beer with lemon zest and coriander",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FRONT ROW",
  "Beer Name": "RESPECT ",
  "Beer Style": "Golden amber brew with a distinct orange, satsuma notes",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "APPARITION",
  "Beer Style": "Pale ale with a strong hop bite",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "ILLUMINATI",
  "Beer Style": "Perfectly balanced golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "MANHATTAN PALE",
  "Beer Style": "Strong, aromatic blonde brew",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "NORTHERN LIGHTS",
  "Beer Style": "New dark stout",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "RED DOG",
  "Beer Style": "Smooth amber session ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "SÉANCE",
  "Beer Style": "Crisp blond ale with a smooth finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FULL MASH",
  "Beer Name": "WARLORD",
  "Beer Style": "Deep golden brew",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FURNACE",
  "Beer Name": "FUN SPONGE",
  "Beer Style": "Citra & Mosaic hopped juicy beer",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FURNACE",
  "Beer Name": "GOLD DUST",
  "Beer Style": "El Dorado & Zeus bringings punchy flavours",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "G2",
  "Beer Name": "SAIL",
  "Beer Style": "Blonde session ale, with a subtle lemony twist",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "G2",
  "Beer Name": "SOUTHERN CROSS",
  "Beer Style": "Golden with a tropical taste and delicious spicy undertone",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GOFFS",
  "Beer Name": "CHELTENHAM GOLD",
  "Beer Style": "Deep gold in colour with an aroma of citrus hops & apricot fruit",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GOFFS",
  "Beer Name": "FALLEN KNIGHT",
  "Beer Style": "Full bodied dark amber beer with a ruby glow.",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREAT HECK",
  "Beer Name": "AMISH MASH ",
  "Beer Style": "German style wheat beer  hopped with loads of American hops",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREAT HECK",
  "Beer Name": "APOCALYPSE BRAU",
  "Beer Style": "Dark smooth malty rich Cascadian dark ale",
  "ABV": "6.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREAT OAKLEY",
  "Beer Name": "EGRET",
  "Beer Style": "Pale gold beer brewed with 5 different American and NZ Hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREAT OAKLEY",
  "Beer Name": "TIFFIELD THUNDERBOLT",
  "Beer Style": "Pale beer brewed with two different New Zealand hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREEN DUCK",
  "Beer Name": "HEAVEN SENT",
  "Beer Style": "Rich chocolate milk stout",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GREEN DUCK",
  "Beer Name": "LOST PATROL",
  "Beer Style": "Well hopped pale with a blend of Pacific hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GUN DOG",
  "Beer Name": "BAD TO THE BONE",
  "Beer Style": "Light brown with Goldings, Cascade and Simcoe ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GUN DOG",
  "Beer Name": "BOOZE HOUND",
  "Beer Style": "Delicious copper IPA",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAMELSWORDE",
  "Beer Name": "KUNG FUSION",
  "Beer Style": "Pale ale. Sorachi ace & centennial hops, west coast ale yeast",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HAMELSWORDE",
  "Beer Name": "SMOKESTACKS",
  "Beer Style": "Rich porter brewed with malt smoked over apple & cherry woods",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILLTOP",
  "Beer Name": "BLONDE",
  "Beer Style": "A quaffing pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HILLTOP",
  "Beer Name": "GOLDEN ALE",
  "Beer Style": "A golden ale with a slight citrus note and earthy hop base",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOLDEN'S ",
  "Beer Name": "BLACK COUNTRY BITTER",
  "Beer Style": "Golden straw fruity with a malty finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOLDEN'S ",
  "Beer Name": "GOLDEN GLOW",
  "Beer Style": "Golden ale fragrant hop aromas,pleasant bitter finish",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOWARD TOWN",
  "Beer Name": "DARK PEAK",
  "Beer Style": "Strong and dark with a hint of liquorice and a warming rum kick",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOWARD TOWN",
  "Beer Name": "SUPERFORTRESS",
  "Beer Style": "Bittersweet ruby ale with malty caramel notes and fruity hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOWARD TOWN",
  "Beer Name": "WEISSPEAK",
  "Beer Style": "Bavarian style cloudy wheat beer bread, banana, cloves flavours",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "IMPERIAL",
  "Beer Name": "HAVE YOU SEEN ME DOG ",
  "Beer Style": "A hoppy pale ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "IMPERIAL",
  "Beer Name": "NAH THEN ",
  "Beer Style": "Citra hopped pale ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "IMPERIAL",
  "Beer Name": "STOUT WI NOWT TEKKEN OWT ",
  "Beer Style": "Full bodied stout, 9 malts, slightly sweet, liquorice and spice",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "IMPERIAL/CHIN CHIN/TARN51/JAMES & KIRKMAN",
  "Beer Name": "BLACK TO THE FUTURE ",
  "Beer Style": "Darkish pale in taste, caramel notes with a grapefruit hop burst",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INTREPID",
  "Beer Name": "MYRCE",
  "Beer Style": "IPA hopped with cascade, centennial & citra ",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INTREPID",
  "Beer Name": "NEW WORLD AMBER",
  "Beer Style": "Amber ale using NZ hops for a zingy more fruity flavour & aroma",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INTREPID",
  "Beer Name": "PORTER",
  "Beer Style": "Full bodied porter using a blend of UK & US hops",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "INTREPID",
  "Beer Name": "SESSION IPA",
  "Beer Style": "Low ABV IPA using Eldorado, centennial & mosaic hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ISLE OF PURBECK",
  "Beer Name": "AMERICAN",
  "Beer Style": "American Pale Ale with a peach, hoppy & subtle hay aroma",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JAMES & KIRKMAN",
  "Beer Name": "PLUM PORTER",
  "Beer Style": "Dark porter with added plums",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "JAMES & KIRKMAN",
  "Beer Name": "SAAZ",
  "Beer Style": "Blonde ale, refreshing, with  light biscuit finish & lemon notes ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINVER",
  "Beer Name": "FULL CENTURION",
  "Beer Style": "Full alcoholic kick, lovely hop character",
  "ABV": "10.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINVER",
  "Beer Name": "HALF CENTURION",
  "Beer Style": "Pale premium bitter with hop and citrus flavours",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINVER",
  "Beer Name": "QUARTER CENTURION",
  "Beer Style": "Light session ale brewed with English and American hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KINVER",
  "Beer Name": "SEXY GENERIAN",
  "Beer Style": "Pale and strong bitter brewed with Nugget and Centennial hops ",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KIRKBY LONSDALE",
  "Beer Name": "PENNINE AMBLER",
  "Beer Style": "Thirst quenching amber ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KIRKBY LONSDALE",
  "Beer Name": "RADICAL",
  "Beer Style": "Ruby red beer with a blend of English and European hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "AMERICAN PALE ",
  "Beer Style": "Hazy and unfined pale ale with big US hop flavours",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "ATLAS",
  "Beer Style": "Rich, classic dry stout. Roasted & chocolate notes",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "BLUEBIRD",
  "Beer Style": "Light, dry hopped ale",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "CENTENNIAL SMASH",
  "Beer Style": "Pale ale brewed with maris otter malt and centennial hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "CHERRY ATLAS",
  "Beer Style": "Cherry flavoured stout",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "CITRA SMASH",
  "Beer Style": "Pale ale brewed with maris otter malt and citra hops",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "EXPLORER",
  "Beer Style": "Strong & hoppy IPA with citrus flavours & clean, bitter finish",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "GOLD RUSH",
  "Beer Style": "Zesty, golden & crisp, easy drinking golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "NELSON SMASH",
  "Beer Style": "Pale ale brewed with maris otter malt and nelson sauvin hops",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "OUTPOST",
  "Beer Style": "Traditional best bitter with new world hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "PIONEER",
  "Beer Style": "Crisp, & golden, pale ale with a hoppy punch",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LENTON LANE",
  "Beer Name": "VANILLA ATLAS",
  "Beer Style": "Stout with vanilla flavouring",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLEOVER",
  "Beer Name": "CREST",
  "Beer Style": "Malty, conker coloured best bitter ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLEOVER",
  "Beer Name": "DIABOLICAL LIBERTY",
  "Beer Style": "Traditional pale bitter dry hopped",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLEOVER",
  "Beer Name": "EPIPHANY",
  "Beer Style": "Pale ale rammed with Citra, Mosaic and Simcoe hops ",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLEOVER",
  "Beer Name": "HOLLOW LEGS",
  "Beer Style": "Full-bodied traditional Pale Ale with fruity malts",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LITTLEOVER",
  "Beer Name": "THE PANTHER",
  "Beer Style": "Rich warming stout, hints of coffee, chocolate & Irish whiskey",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOST INDUSTRY",
  "Beer Name": "SHADE OF PALE",
  "Beer Style": "",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LOST INDUSTRY",
  "Beer Name": "STREETS IN THE SKY",
  "Beer Style": "Triple IPA hopped with Cascade, Falconer's Flight and Citra",
  "ABV": "11.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LYTHAM",
  "Beer Name": "BLONDE",
  "Beer Style": "A Pale golden beer with a subtle hop aroma and smooth dry finnsih",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LYTHAM",
  "Beer Name": "GINGER NUT",
  "Beer Style": "Golden ale with subtle hints of ginger & hazelnut",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET HARBOROUGH",
  "Beer Name": "GREEN HOP 2017",
  "Beer Style": "Extra pale brew with fresh hops from this year's harvest",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET HARBOROUGH",
  "Beer Name": "TRES BIEN - PEACOCK",
  "Beer Style": "Pale amber brew with juicy hop flavours",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET HARBOROUGH",
  "Beer Name": "TRES BIEN - PORTER",
  "Beer Style": "Traditional Porter. A little chocolatey, a little smokey",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARKET HARBOROUGH",
  "Beer Name": "WHIRPOOL SERIES No6",
  "Beer Style": "Amber brew packed with flavour and featuring exotic US hops",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARLPOOL",
  "Beer Name": "FRANK",
  "Beer Style": "Irish style red ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MARLPOOL",
  "Beer Name": "STRAW'S GOLD",
  "Beer Style": "Pale bitter beer dry hopped with local wild hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MERRIMAN",
  "Beer Name": "MERRI GOLD",
  "Beer Style": "Golden Ale, light spiced hoppy ale with citrus aroma",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MERRIMAN",
  "Beer Name": "MERRI L",
  "Beer Style": "Dark brown ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILESTONE ",
  "Beer Name": "AZACCA GOLD",
  "Beer Style": "Pale golden, single hop brew, crisp & refreshing with citrus notes",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILESTONE ",
  "Beer Name": "HAMMER HEAD STOUT",
  "Beer Style": " Robust stout with a hint of liqourice and good bitter finish",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILESTONE ",
  "Beer Name": "PLUM PORTER",
  "Beer Style": "Smooth dark porter with plum essence,  with soft fruity flavour",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILESTONE ",
  "Beer Name": "SUMMER LOVIN",
  "Beer Style": "Pale golden with refreshing tropical fruit flavours ",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILESTONE ",
  "Beer Name": "RASPBERRY WHEAT",
  "Beer Style": "Continental style fruit beer with a hint of raspberry",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILLTOWN",
  "Beer Name": "BLACK JACK PORTER",
  "Beer Style": "Full of robust flavours. Coffee is abundance. ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MILLTOWN",
  "Beer Name": "TIGERS TAIL",
  "Beer Style": "Pale ale with slight citrus notes",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUIRHOUSE",
  "Beer Name": "APA",
  "Beer Style": "American pale ale  with lots of Simcoe and Chinook hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUIRHOUSE",
  "Beer Name": "BACK IN THE BUILDING",
  "Beer Style": "Strong pale ale  with American hops (Citra and Simcoe)",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUIRHOUSE",
  "Beer Name": "BLUEBERRY PORTER",
  "Beer Style": "Rich porter with a red tinge from the added blueberries",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUIRHOUSE",
  "Beer Name": "PIRATES GOLD",
  "Beer Style": "Golden sweet beer with a bitter finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MUIRHOUSE",
  "Beer Name": "SHOPPING FOR HOPS",
  "Beer Style": "Pale session beer with a citrus bitterness",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NEEPSEND",
  "Beer Name": "CITRA IPA",
  "Beer Style": "Single hopped IPA",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NEEPSEND",
  "Beer Name": "LOA",
  "Beer Style": "Pale ale brewed with summit, azacca and chinook hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NETHERGATE",
  "Beer Name": "STOUR VALLEY GOLD",
  "Beer Style": "Floral aroma with a touch of spice & a mellow bitter finish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NETHERGATE",
  "Beer Name": "UMBEL MAGNA",
  "Beer Style": "A 1750's porter with corriander",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "CLARIDGE'S CRYSTAL",
  "Beer Style": "Pale session ale, crisp and fresh with a slight citrus hop finish ",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "DARK SPELL",
  "Beer Style": "Hearty red-amber ale with a slightly roasted dry finish ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "GOLDINGS",
  "Beer Style": "Golden in colour with Golding hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "PLUM PORTER",
  "Beer Style": "Dark porter, with a subtle plummy bitterness. ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "SWIFT NICK",
  "Beer Style": "Golden ale, full mouth feel with an explosion of hops ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOBBY'S",
  "Beer Name": "T'OWD NAVIGATION",
  "Beer Style": "Strong dark ale, rich in malt and hop flavours",
  "ABV": "6.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOMADIC",
  "Beer Name": "HERETIC",
  "Beer Style": "Chilli & lime stout, homegrown chillies, fruity flavours",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOMADIC",
  "Beer Name": "NOMAD",
  "Beer Style": "Flavour packed IPA, with simcoe, centennial & comet hops",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOMADIC",
  "Beer Name": "PALE",
  "Beer Style": "Pale bitter with a hoppy kick",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTH RIDING",
  "Beer Name": "AHTANUM",
  "Beer Style": "Pale hoppy ale with a floral citrus flavour. US ahtanum hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTH RIDING",
  "Beer Name": "MOSAIC",
  "Beer Style": "Pale ale full of blueberry and citrus flavours from mosaic hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTH RIDING",
  "Beer Name": "PALE ALE V5",
  "Beer Style": "Trans pacific pale featuring US and Australian hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTH RIDING",
  "Beer Name": "TIRAMISU PORTER",
  "Beer Style": "Porter  with coffee & chocolate added post fermentation",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHALLERTON",
  "Beer Name": "NORTHALLERTON DARK",
  "Beer Style": "Dark ale brewed from chocolate malt & Admiral hops",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NORTHALLERTON",
  "Beer Name": "YORKSHIRE GOLD",
  "Beer Style": "Bitter golden ale enhanced by Cascade and First Gold hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "OLD SCHOOL",
  "Beer Name": "DETENTION",
  "Beer Style": "A clean, straw coloured light drinking bitter. ",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PENTRICH",
  "Beer Name": "SHOOT THE SERVANT",
  "Beer Style": "Dark Bitter with flavours of toasted caramel & subtle chocolate",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PENTRICH ",
  "Beer Name": "SHADOW PLAY",
  "Beer Style": "Oatmeal stout.  Chocolate notes  with a subtle amount of roast",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PHEASANTRY",
  "Beer Name": "EXCITRA",
  "Beer Style": "Golden beer with grapefruit & floral aromas, crisp, hoppy finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PHEASANTRY",
  "Beer Name": "ORANGE PHEASANT",
  "Beer Style": "Golden ale, with the zest of oranges & grapefruit in the aroma",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PHEASANTRY",
  "Beer Name": "SMOKIN",
  "Beer Style": "Reddish amber. Starts sweet & followed by lingering smokiness",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PHIPPS",
  "Beer Name": "BECKETTS ALE",
  "Beer Style": "Mahogany coloured with floral hoppiness",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PHIPPS",
  "Beer Name": "GOLD STAR",
  "Beer Style": "Strong golden export pale ale",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POTBELLY",
  "Beer Name": "HEDDONISM",
  "Beer Style": "Golden bitter with a citrus hoppy flavour ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POTBELLY",
  "Beer Name": "PIGGIN SAINT",
  "Beer Style": "Pale golden ale with New World hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "QUIRKY",
  "Beer Name": "BLONDE",
  "Beer Style": "Crisp, refreshing, tropical, citrus aftertaste. Citra & Cascade hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "QUIRKY",
  "Beer Name": "RUBY",
  "Beer Style": "English bitter with roasted carafa malt for a distinctive finish",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "CF191",
  "Beer Style": " English pale with experimental CF191 hops ",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "CHOCOLATE GHOST",
  "Beer Style": "A chocolate IPA",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "FUNKY HOP DONKEY",
  "Beer Style": "Collab with Pigeon Fisher - cloudy, hoppy New England IPA",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "KIWI PALE",
  "Beer Style": "NZ hopped Pale ",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "NEW DAWN",
  "Beer Style": "An American amber",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "RAW",
  "Beer Name": "XTREME OPPOSITE ATTRACTION",
  "Beer Style": "Collab with Pigeon Fisher - hybrid IPA ",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCK MILL",
  "Beer Name": "BLACK BREAGHA",
  "Beer Style": "Full bodied stout with chocolate notes & roast coffee aftertaste",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCK MILL",
  "Beer Name": "RINGING ROGER",
  "Beer Style": "Traditional amber bitter with a fruity aftertaste",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCK'N'ROLL",
  "Beer Name": "IGGY BEER",
  "Beer Style": "Pale ale brewed with German hops and lager malt",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROCK'N'ROLL",
  "Beer Name": "MASH CITY ROCKERS",
  "Beer Style": "Hoppy pale ale",
  "ABV": "5.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROWTON",
  "Beer Name": "FALL ABOUT",
  "Beer Style": "Seasonal copper coloured bitter",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROWTON",
  "Beer Name": "PURE GOLD",
  "Beer Style": "Golden, English hopped bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SANDIWAY",
  "Beer Name": "HOPSCHISM",
  "Beer Style": "Fruity, refreshing golden ale",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SARAH HUGHES",
  "Beer Name": "DARK RUBY",
  "Beer Style": "Classic dark strong mild",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCARBOROUGH",
  "Beer Name": "OLD SAILOR",
  "Beer Style": "American style golden ale packed with hops. Tropical fruits ",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SCARBOROUGH",
  "Beer Name": "SEA LORD",
  "Beer Style": "American hopped ale. Subtle hints of lime and grapefruit ",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHARDLOW",
  "Beer Name": "FIVE BELLS",
  "Beer Style": "A dark rich ruby ale, with coffee notes",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHARDLOW",
  "Beer Name": "MAYFLY",
  "Beer Style": "Chestnut coloured best bitter made with six different malts",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHARDLOW",
  "Beer Name": "TOMBSTONE",
  "Beer Style": "Dark amber brew dry hopped with goldings",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHARDLOW",
  "Beer Name": "WHILSTLESTOP",
  "Beer Style": "A strong pale golden ale",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "4 WOOD",
  "Beer Style": " Full-bodied, traditional Best Bitter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "AFFINITY",
  "Beer Style": " Golden Bitter with lots and lots of fruity Citra hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "DISCO BALLS",
  "Beer Style": "A Big Hitting Hop Loaded IPA",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "HAPPY PEOPLE",
  "Beer Style": " Sharp and citrusy golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "NEW WORLD",
  "Beer Style": "Golden citrusy big hitter in terms of flavour",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "WRENCH",
  "Beer Style": "Stout with 6 different malts, complex, rich flavour profile",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SILVERSTONE",
  "Beer Name": "CLASSIC IPA",
  "Beer Style": "IPA with a touch of bitter honey and mild grapefruit finish",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SILVERSTONE",
  "Beer Name": "IGNITION",
  "Beer Style": "Clean and sharp blonde ale with American hops",
  "ABV": "3.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SILVERSTONE",
  "Beer Name": "OCTANE",
  "Beer Style": "Golden ale, rich in malts with hints of honey and toffee",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SLATERS",
  "Beer Name": "MARAVILLA ",
  "Beer Style": "Brewed with Staffordshire Maravilla raspberries ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SLAUGHTERHOUSE",
  "Beer Name": "SADDLEBACK BITTER",
  "Beer Style": "Amber coloured conversational bitter ",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STAMPS",
  "Beer Name": "AHTANUM",
  "Beer Style": "Pale ale with ahtanum hops, dry hopped, strong hint of citrus",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STAMPS",
  "Beer Name": "BONDI BLONDE",
  "Beer Style": "Simcoe & centennial hops,  citrus notes, a fresh, tasty, blonde ",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STAMPS",
  "Beer Name": "MAIL TRAIN",
  "Beer Style": "Golden amber with distinct bitterness, pleasing malt character",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STEEL CITY",
  "Beer Name": "A STEAMING BUCKET OF CHILLI AND LIME",
  "Beer Style": "Added Chilli and Lemon. Andy Lee's 40 thousandth beer",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STEEL CITY",
  "Beer Name": "DROP THE C BOMB V2",
  "Beer Style": "Pale and very bitter with fresh hop aroma and citrus notes",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STEEL CITY",
  "Beer Name": "GET IN THE C",
  "Beer Style": "Pale and very bitter with citrus and tropical fruit flavours",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STEEL CITY",
  "Beer Name": "INTERNATIONAL MAN OF MISERY",
  "Beer Style": "Combining trad dunkelweiss flavours with modern citrus hops ",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STOCKPORT",
  "Beer Name": "GINGER TINGE",
  "Beer Style": "Crisply hopped bitter with a ginger tinge",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STOCKPORT",
  "Beer Name": "SOUTH ISLAND PALE",
  "Beer Style": "Straw cpoloured, lycheearoma, citrus hoppy flavour",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "STOCKPORT",
  "Beer Name": "STOCK PORTER",
  "Beer Style": "Liquorice & malty nose with coffee & chocolate notes",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TAPSTONE",
  "Beer Name": "HOME GROWN",
  "Beer Style": "100% 'wet hopped' with Centennials from their own hop field ",
  "ABV": "6.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TAPSTONE",
  "Beer Name": "SEA MONSTER",
  "Beer Style": "Tropical flavours, citrus base, hints of blueberry, mango & lime.",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TARN 51",
  "Beer Name": "ALTOFTS BLONDE",
  "Beer Style": "Session blonde ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TARN 51",
  "Beer Name": "NEWLANDS STOUT",
  "Beer Style": "Creamy dark stout",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THOUSAND TRADES",
  "Beer Name": "ARTS OF TELEFORCE",
  "Beer Style": "Oatmeal stout",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THOUSAND TRADES",
  "Beer Name": "COCONUT IPA",
  "Beer Style": "An IPA brewed with coconut and oats.",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE FIENDS",
  "Beer Name": "BAD UNCLE BARRY",
  "Beer Style": "West coast pale ale",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE FIENDS",
  "Beer Name": "DARK SIDE ",
  "Beer Style": "Cascadian Dark Ale, chocolate start with a bitter finish",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE HILLS",
  "Beer Name": "CHERRY STOUT",
  "Beer Style": "New cherry stout",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THREE HILLS",
  "Beer Name": "HEIDRUN",
  "Beer Style": "IPA hopped with Mosaic, Citra and Columbus ",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TICKETYBREW",
  "Beer Name": "COFFEE ANISE PORTER",
  "Beer Style": "Porter brewed with lightly roasted coffee beans and star anise",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TICKETYBREW",
  "Beer Name": "MUNCHNER",
  "Beer Style": "Golden lager & Belgian ale combo. Biscuit taste, hop aroma",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "A NUGGET OF PUREST GREEN",
  "Beer Style": "Green hop beer (Collab with Beeston Hop)",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "BUGBEAR",
  "Beer Style": "An American brown ale with roasty, chocolatey flavours",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "EASTERN PALE INDIA ALE (EPIA)",
  "Beer Style": "Indian tikka-spiced pale ale (Collab with Bexar County)",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "HERR SIMCOE",
  "Beer Style": "Hop forward India porter",
  "ABV": "6.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "IMPERIAL PORTER",
  "Beer Style": "Imperial verson of an American porter",
  "ABV": "9.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "MOLTEN UNIVERSE",
  "Beer Style": "Fruity red IPA heftily hopped with US and European hops",
  "ABV": "5.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "ROUTE 366",
  "Beer Style": "Punch yet sessionable American pale ale with  US hop Ekuanot",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TORRSIDE",
  "Beer Name": "WITCH HUNT",
  "Beer Style": "Vienna IPA, with touch of sweetness & fruity and floral flavours",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ULVERSTON",
  "Beer Name": "LAUGHING GRAVY",
  "Beer Style": "Light copper beer with good balance of malt & hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UPHAM",
  "Beer Name": "PEGASUS",
  "Beer Style": "Crisp pale ale. Aromatic maltiness with bitter tantalising taste",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "UPHAM",
  "Beer Name": "TIPSTER",
  "Beer Style": "Golden with refreshing citrus notes and a smooth bitterness",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WAEN",
  "Beer Name": "CHOCOLATE MOUSSE",
  "Beer Style": "A dark version of pamplemousse with chocolate & vanilla",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WAEN",
  "Beer Name": "PAMPELMOUSSE",
  "Beer Style": "A refreshing pale with grapefruit and mango flavours",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WANTSUM",
  "Beer Name": "BLACK PIG",
  "Beer Style": "Dark smooth imperial Russian porter, chocolate & cherry aroma ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WANTSUM",
  "Beer Name": "FORTITUDE",
  "Beer Style": "Pale amber colour with a light sweet malty taste",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WANTSUM",
  "Beer Name": "GREEN ONE HOP ",
  "Beer Style": "Golden ale, hedgerow hop flavour good bittering and smooth body ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WANTSUM",
  "Beer Name": "RED RADDLE",
  "Beer Style": "Ruby Red premium bitter, biscuit and toasted malt base",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELBECK ABBEY",
  "Beer Name": "CLAIRE'S HIGH KOALATY",
  "Beer Style": "Crisp & uplifting Australian-style IPA",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELBECK ABBEY",
  "Beer Name": "RAPUNZEL",
  "Beer Style": "",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELBECK ABBEY",
  "Beer Name": "GEORGE AND THE DRAGON",
  "Beer Style": "Firey red ale, juicy rakau hop flavours, fruity bitter aftertaste",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELBECK ABBEY",
  "Beer Name": "SETH'S HILLBILLY RYE",
  "Beer Style": "A sweet and malty fox-red rye ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELDON",
  "Beer Name": "ROSIES SWEAT BOX",
  "Beer Style": "Deep ruby ale made with English hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WELDON",
  "Beer Name": "STAHLSTADT",
  "Beer Style": "Blonde ale with hints of lemon and fragrant garden herbs",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WETHEROAK HILL",
  "Beer Name": "COFTON COMMON",
  "Beer Style": "Lager type ale with Vienna malt",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WETHEROAK HILL",
  "Beer Name": "STICKLEBRACK",
  "Beer Style": "Pale bitter with New Zealand hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WISHBONE",
  "Beer Name": "NIBS & BEAN",
  "Beer Style": " Mocha stout with roasted Brazilian Espresso & Cacao Nibs ",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "WISHBONE",
  "Beer Name": "VOLK",
  "Beer Style": "Pale ale hopped with Slovenian Styrian Wolf",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FERRY BREWERY (Scotland)",
  "Beer Name": "WORLD GONE MAD",
  "Beer Style": "Strong bitter citrus dark Ale",
  "ABV": "8.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BATEMANS ",
  "Beer Name": "GOLD",
  "Beer Style": "Golden ale with a citrus flavour & aroma. Dry & very moreish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BATEMANS ",
  "Beer Name": "LINCOLNSHIRE RED",
  "Beer Style": "Polished red ale with 4 malts pale, wheat, crystal & chocolate ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BATEMANS ",
  "Beer Name": "SKULL & HAMMERS",
  "Beer Style": "Uniquely blended light amber ale, hint of citrus, full of flavour",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BATEMANS ",
  "Beer Name": "XB",
  "Beer Style": "Amber, English pale ale crafted with crisp Lincolnshire malt ",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BATEMANS ",
  "Beer Name": "XXXB",
  "Beer Style": "English tawny pale ale, Challenger, Styrian & Golding hops ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "BAJAN BREAKFAST",
  "Beer Style": "Oatmeal Pale ale",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "BLEEDING HEART",
  "Beer Style": "Red rye ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "CHASING THE SUN",
  "Beer Style": "A powerful IPA",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "ENDLESS SUMMER",
  "Beer Style": "Pale beer with a crisp, refreshing bitterness & citrus aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "RISE AND SHINE",
  "Beer Style": "A rich Coffee Milk Stout using locally roasted coffee beans ",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "SNAKE EYES",
  "Beer Style": "Crisp US session pale, citrus bitterness & tropical fruit aroma",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLACK IRIS",
  "Beer Name": "SORE ARSE CHEEKS",
  "Beer Style": "Sorachi ace IPA",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "ELSIE MO",
  "Beer Style": "Golden ale known for its subtle floral character and citrus taste",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "HARVEST PALE",
  "Beer Style": "Multi-award winning blonde beer with a delicate citrus character",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "HILARY SILVESTER",
  "Beer Style": "Red ale with Cascade lupulin powder. Citrusy, malty & more-ish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "MIDNIGHT OWL",
  "Beer Style": "Black IPA with citrus aroma and hints of caramel.",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "PILSNER",
  "Beer Style": "Classic German hops give this cask Pilsner authenticity",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "SESSION IPA",
  "Beer Style": "Simcoe hop give a rounded bitterness & juicy tropical fruit notes",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "SHERWOOD RESERVE",
  "Beer Style": "Smooth stout brewed with fresh Colombian coffee beans",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "CASTLE ROCK",
  "Beer Name": "WHEAT",
  "Beer Style": "Smooth & estery wheat beer with lots of Citra dry hop for juiciness",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EVERARDS",
  "Beer Name": "BEACON HILL",
  "Beer Style": "Amber session bitter, dry, bitter and moreish",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EVERARDS",
  "Beer Name": "MYRTLE ",
  "Beer Style": "A fruity red ale, brewed with pilot and flyer hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EVERARDS",
  "Beer Name": "OLD ORIGINAL",
  "Beer Style": "Tawny, copper ale with burnt, roasted flavours",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EVERARDS",
  "Beer Name": "SUNCHASER",
  "Beer Style": "Refreshing brew with subtle, zesty, sweet flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "EVERARDS",
  "Beer Name": "TIGER",
  "Beer Style": "A clean, malty brew with a hoppy aroma",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "DODGEM",
  "Beer Style": "Pale with a floral aroma",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "ROLLERGHOSTER",
  "Beer Style": "A red beer brewed with summer fruits",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "STEAM PUNK PORTER",
  "Beer Style": "Brewed with malt smoked on the brewery's own smoker",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "TEA CUPS",
  "Beer Style": "A mad,  cloudy traditional ginger beer",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "THROUGH THE LOOKING GLASS",
  "Beer Style": "Tea cups big brother with a mad fruit twist",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "CHARRINGTON IPA",
  "Beer Style": "Crisp blonde beer, not too bitter with a subtle biscuit palate",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "CHARRINGTON OATMEAL STOUT",
  "Beer Style": "Well balanced nutty flavour with a slight bitterness and a hint of treacle",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "MASTERPIECE",
  "Beer Style": "Rich golden colour, full flavoured with a pleasant mellow finish ",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "OFFILERS BEST BITTER",
  "Beer Style": "Aromatic hops, toasted cereal notes with hints of smoke and spice",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "ST.MODWEN",
  "Beer Style": "Light amber, smooth drinking bitter with medium bitterness",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "VICTORIA PALE ALE",
  "Beer Style": "Aroma of resinous hop notes and smooth fruity palate",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HERITAGE",
  "Beer Name": "WITCH DRIPPING",
  "Beer Style": "Tawny, well hopped with a black pepper and herb garden aroma ",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "BEST",
  "Beer Style": "Glowing copper best Bitter",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "CHERRY RAVEN",
  "Beer Style": "Special Cherry Edition of our Raven Stout",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "EIGHT FOR A WISH",
  "Beer Style": "Pumpkin spiced dark amber",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "HAVE YOUR CAKE AND EGRET",
  "Beer Style": "Raspberry Jam Victoria sponge pale. Collab with Notts WI",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "HOPPILY EVER AFTER",
  "Beer Style": "Blonde refreshing beer with distinct endeavour hop flavour",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "JAY IPA",
  "Beer Style": "British hopped IPA",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "NINE FOR A KISS",
  "Beer Style": "Nottingham Fresh Green Hop Pale Ale",
  "ABV": " \t4.0 ",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "RAVEN STOUT",
  "Beer Style": "Rich and full bodied Stout",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "THIEVING ROGUE",
  "Beer Style": "Straw yellow, thirst quenching fruity and floral ale",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "WANDERLUST SERIES - CHAINLESS",
  "Beer Style": "American Pale Ale full of American hops, simcoe and cascade",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MAGPIE",
  "Beer Name": "WANDERLUST SERIES - ROAM",
  "Beer Style": "New World Pale Ale, Tropical hops from New Zealand and America",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "BROADWAY REEL ALE",
  "Beer Style": "Pale-amber ale exclusive to Broadway cinema ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "BULLION",
  "Beer Style": "Gold in its purest form!",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "CENTURION ",
  "Beer Style": "Tasty dark porter",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "COCK N' HOOP",
  "Beer Style": "Rounded bitter with a citrus hop flavour",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "DREADNOUGHT",
  "Beer Style": "Amber premium bitter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "EXTRA PALE ALE",
  "Beer Style": "Light coloured, well balanced smooth and fragrant ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "FOUNDRY MILD",
  "Beer Style": "A strong chestnut mild",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "KNIGHT'S T'ALE",
  "Beer Style": "Pale copper coloured with a citrus finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "LEGEND",
  "Beer Style": "Flavoursome malt character with a lively hoppy finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "ROBIN HOOD",
  "Beer Style": "Pale copper coloured triple hopped brew",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "ROCK BITTER",
  "Beer Style": "Good old fashioned, hoppy all-English bitter",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "ROCK MILD",
  "Beer Style": "Smooth and dark with a biscuity flavour",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "SOOTY STOUT",
  "Beer Style": "Beauty in Black! Traditional classic oatmeal stout ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NOTTINGHAM",
  "Beer Name": "SUPREME",
  "Beer Style": "Light, easy drinking strong ale",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PENTRICH (Nottm bar)",
  "Beer Name": "BRICK BY BRICK",
  "Beer Style": "An easy drinking golden bitter brewed with Vienna malt",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "PENTRICH (Nottm bar)",
  "Beer Name": "WAI-ITI",
  "Beer Style": "NZ hopped session pale ale brewed with oats & Wai-iti hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROBIN HOOD",
  "Beer Name": "GOLDEN ARCHER",
  "Beer Style": "Golden ale with complex fruity and bitter flavour",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROBIN HOOD",
  "Beer Name": "MAIDEN'S PALE",
  "Beer Style": "Pale ale with honey-like flavour and fruity hop finish",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROBIN HOOD",
  "Beer Name": "ROBIN HOOD PALE ALE",
  "Beer Style": "Balanced pale straw bitter with floral and citrus notes",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "ROBIN HOOD",
  "Beer Name": "THE BLACK DEATH",
  "Beer Style": "Black, evil ale said to ease the boils & pustules from the plague!",
  "ABV": "8.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "GOLD STAR BLONDE",
  "Beer Style": "Pale ale with a light, smooth and refreshing taste",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "HOLLOW STONE - OLIGO NUNK",
  "Beer Style": "Amercian sytle beer brewed with all American hops ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "HOLLOW STONE - PALE ALE",
  "Beer Style": "All English Ingredients, Jester Hop & cultured yeast",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "INDIA PALE ALE",
  "Beer Style": "Full bodied, English IPA,  floral aroma & smooth hop finish",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "MILD",
  "Beer Style": "Traditional English mild, dark, sweet and very light",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "NUT BROWN",
  "Beer Style": "English brown ale with a rich nut brown colour",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHIPSTONES",
  "Beer Name": "ORIGINAL",
  "Beer Style": "Amber session bitter with a a subtle yet assertive bitterness",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "AMBER ALE",
  "Beer Style": "Session beer. Chinook hopsgive a pine aroma & flavour",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "DARK ALE",
  "Beer Style": "Dark Stout made with roasted barley and English hops ",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "GOLDEN ALE",
  "Beer Style": "Brewed with cascade hops leaving floral zesty aftertaste",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "PALE ALE",
  "Beer Style": "Chinook hops give a fruity flavour with a hint of pineapple",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "PALE AND INTERESTING",
  "Beer Style": "Pale ale with citra hop, strong citrus aroma",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORLEY & SON",
  "Beer Name": "RUBY ALE",
  "Beer Style": "Willamette hop gives spice that has fruit & floral essence",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "BISCUIT PORTER",
  "Beer Style": "Malts from Germany,  Belgium & UK give a chocolate digestive flavour",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "CAPTAIN HOPBEARD",
  "Beer Style": "Brewed with southern hemisphere hops for tropical flavour & aroma",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "GUARDIAN OF THE FOREST",
  "Beer Style": "Session IPA with Citra, mosaic and simcoe hops",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "PAPA JANGLES VOODOO STOUT",
  "Beer Style": "Stout with complex flavour profile including coffee, chocolate & raisin",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "PASSION FRUIT IN THE FACE",
  "Beer Style": "Massive passionfruit flavours",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "PEANUT BUTTER STOUT",
  "Beer Style": "A peanut butter stout - would you believe?",
  "ABV": "7.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "PUNCH IN THE FACE",
  "Beer Style": "American pale with fruity hop character",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "SINGLE HOP NELSON SAUVIN",
  "Beer Style": "Single hop pale with Nelson Sauvign hops from NZ.",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "SLAP IN THE FACE",
  "Beer Style": "Session pale with citrus hops",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "TOTALLY BREWED",
  "Beer Name": "THE 4 HOPMEN OF THE APOCALYPSE",
  "Beer Style": "Piney, citrus hop character with caramel note",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "99 RED BABOONS",
  "Beer Style": "Dark  ale, combining fruity hoppiness with a dark, malty side.  ",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "APE",
  "Beer Style": "Strong pale ale with US hops. Aromas of resinous pine & citrus.  ",
  "ABV": "5.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "BG SIPS",
  "Beer Style": "Pale & intensely hoppy witht tropical fruit aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "CHIMPAGNE",
  "Beer Style": "Very strong pale ale with fruity tones and smooth bitter finish",
  "ABV": "10.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "CHOCOLATE GUERRILLA AMARETTO",
  "Beer Style": "A malty stout with a rich chocolate aroma & flavours",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "FUNKY GIBBON",
  "Beer Style": "Fruity, earthey, light-copper coloured session ale with US hops",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "GUERRILLA",
  "Beer Style": "Malty pitch black beer balanced by a robust bitter bite",
  "ABV": "4.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "INFINITY  IPA",
  "Beer Style": "Satisfying golden ale brewed with Citra hops from the USA",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "MARMOSET",
  "Beer Style": "Pale, crisp & refreshing, Citra hops give  tropical fruit flavours",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "NUTS",
  "Beer Style": "Nut brown ale with vienna malt. Fruity taste & bitter afternote",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "PLANET OF THE APES",
  "Beer Style": "Pale, intensely hoppy,  spiced berry and tropical fruit aromas",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "BLUE MONKEY",
  "Beer Name": "WINTER WOOLLY",
  "Beer Style": "Auburn scotch ale, coffee & fruity aromas, caramel aftertaste",
  "ABV": "6.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "22",
  "Beer Style": "Wonderfully balanced best bitter with fruit notes",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "ABDUCTION",
  "Beer Style": "Pale Golden ale with tropical fruit aromas",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "AY UP",
  "Beer Style": "Light sparkling ale with crisp citrus flavours",
  "ABV": "3.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "DARK DRAKE",
  "Beer Style": "Velvety oatmeal stout with coffee and toffee finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "GINGER NINJA",
  "Beer Style": "Ginger beer with citrus notes and a subtle ginger flavour",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "IMPERIAL DRAKE",
  "Beer Style": "Strong, velvety, oatmeal stout. Malty, caramel & liquorice flavours",
  "ABV": "6.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "NICE WEATHER 4 DUCKS",
  "Beer Style": "Copper coloured session ale, fruit salad in a glass!",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "SAPPHIRE",
  "Beer Style": "Fruity aroma with lots of citrus flavours with a spicy finish",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "WADDLE IT BE?",
  "Beer Style": "Pale ale with a complex mouth-feel & intense fruity flavours ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "DANCING DUCK",
  "Beer Name": "WOT THE DUCK - DUCK A L'ORANGE",
  "Beer Style": "Warming fruity pale ale infused with Cointreau & orange peel",
  "ABV": "6.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "APRICOT JUNGLE",
  "Beer Style": "Blonde golden ale with added apricots and champagne yeast",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "CARAMEL STOUT",
  "Beer Style": "Dark brew with  the flavour of chocolate caramel, rich and sweet ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "CHOCOLATE MINT STOUT",
  "Beer Style": "Stout with an After Eights flavour. Fresh mint is added to the brew",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "COCO LOCO",
  "Beer Style": "Black coloured ale with big coconut flavours on the palate& nose ",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "FRAMBOISE",
  "Beer Style": "A pale golden coloured fermented with raspberries",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "PASHA, PASHA",
  "Beer Style": "Golden in colour with a passion fruit bomb of flavours ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "P-BUTTER",
  "Beer Style": "Dark brown ale made with caramalt with added peanut butter",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "SILHOUETTE",
  "Beer Style": "Extra pale ale with vanilla pods. Vanilla ice cream flavours",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "GRAFTON",
  "Beer Name": "SALLY POLLARDS GINGER CONCOCTION",
  "Beer Style": "Black stout fermented with ginger. Brewed with help of Festival Infrastructure team",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "A BEER NAMED LEEROY",
  "Beer Style": "Hoppy, fruity pale ale  with a hint of maltiness",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "AUSTRALIAN PALE",
  "Beer Style": "Rich golden ale, floral aroma & citrus & tropical fruit flavours",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BIG BANG THEORY",
  "Beer Style": "Pale ale. Huge hop aroma, malty sweetness, gentle bitter finish",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BITTER",
  "Beer Style": "Smooth, full-bodied, pale chestnut traditional bitter",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BLOND SESSION ALE",
  "Beer Style": "Light golden session ale with a refreshing citrus hop finish",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "DOUBLE JIP",
  "Beer Style": "Beyond an India Pale Ale. Lots of citrus, sage & pine flavour",
  "ABV": "9.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "EGYPTIAN CREAM",
  "Beer Style": " Creamy milk stout with velvety mouthfeel and a fruity hop bite ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "FENLAND FARMHOUSE SAISON",
  "Beer Style": "Refreshing new world Saison with a fruity aroma",
  "ABV": "7.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "HOP STASH DENALI",
  "Beer Style": "Lots of Denali hops, pineapple& citrus flavours, big malty base",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "MANHATTAN PROJECT",
  "Beer Style": "Light & refreshing,  citrus & tropical flavourss",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "PULPING ON YOUR STEREO",
  "Beer Style": "Rind and pulp of 359 oranges give this IPA a strong fruity flavour",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "RELEASE THE CHIMPS",
  "Beer Style": "IPA with a crisp mouth feel and  clean, punchy bitterness ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "SIMPLE PLEASURES",
  "Beer Style": "Light, clean  beer, pleasing citrus hop aroma & flavour",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "SUPERSONIC",
  "Beer Style": "Gin & Tonic Wheat Beer with juniper, lemon, other botanicals",
  "ABV": "6.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "BLIND TIGER",
  "Beer Style": "Aromatic pale golden beer, with oranges added to the brew ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "CHOCOLATE ORANGE ODYSSEY",
  "Beer Style": "Smooth black porter with a dark chocolate and orange twist",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "DROP O THE BLACK STUFF",
  "Beer Style": "Rich, smooth with a hint of aniseed ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "EXODUS",
  "Beer Style": "Golden with a bold citrus flavour, & burst of grapefruit aroma",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "LEFT LION",
  "Beer Style": "Traditional chestnut-brown bitter with a dry finish",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "OUTLAWED",
  "Beer Style": "Citrusy lemon, hoppy, with floral overtones",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "ROARING MEG",
  "Beer Style": "Classic IPA with a sweet citrus honey aroma, dry finish",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SPRINGHEAD",
  "Beer Name": "SURRENDER",
  "Beer Style": "A burnished, copper-coloured bitter",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "BEADECA'S WELL",
  "Beer Style": "Smoked porter. Hints of toffee, caramel and dark fruits",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "BEAGLE JUICE",
  "Beer Style": "Light pale ale with bold citrus aromas and a juicy mouthfeel",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "BROCK",
  "Beer Style": "Velvety dark, smooth stout. Soft treacle, smokey flavour",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "BROTHER RABBIT",
  "Beer Style": "Lemon zest colour, clean, hoppy aroma, dry palette",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "COCOA WONDERLAND",
  "Beer Style": "Robust porter, natural mocha malt flavours &  real chocolate ",
  "ABV": "6.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "CRACKENDALE",
  "Beer Style": "Single Hopped Citra Pale Ale. Tropical fruit aromas",
  "ABV": "5.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "GUTHRIE",
  "Beer Style": "Srefreshing pale ale made with cascade and galaxy hops",
  "ABV": "4.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "JAIPUR",
  "Beer Style": "Golden I.P.A. with massive hoppiness",
  "ABV": "5.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "JAYWICK",
  "Beer Style": "American pale ale,  grapefruit hop flavour & malty taste ",
  "ABV": "4.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "LORD MARPLES",
  "Beer Style": "Traditional bitter. Light toffee & caramel with floral spicy notes ",
  "ABV": "4.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "PEVEREL",
  "Beer Style": "Straw blonde ale with tropical fruit flavours, culminating in a dry, bitter finish",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "PIVNI",
  "Beer Style": "Quaffable session IPA made with Cascade and Citra hops",
  "ABV": "3.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "POLLARDS",
  "Beer Style": "Coffee milk stout with rich coffee aromas",
  "ABV": "5.0",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "SEQUOIA",
  "Beer Style": "American amber ale with citrus and pine notes",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "THORNBRIDGE",
  "Beer Name": "WILD SWAN",
  "Beer Style": "White golden, hint of herbs, subtle spiciness",
  "ABV": "3.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "JAM",
  "Beer Style": "Pale amber infused with Mango and dry hopped with Citra",
  "ABV": "4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "POD",
  "Beer Style": "Classic Vanilla oatmeal stout",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FIRST CHOP",
  "Beer Name": "RED",
  "Beer Style": "Rich spicy red ale with big hop flavours",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "HOP KETTLE (Swindon)",
  "Beer Name": "LODE STAR",
  "Beer Style": "Pale ale brewed with 2 classic American hop varieties UK grown",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "KENNET AND AVON",
  "Beer Name": "SAVERNAKE STOUT",
  "Beer Style": "Full bodied with aromas of licorice, roasted coffee, chocolate",
  "ABV": "4.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "LONDON ROAD",
  "Beer Name": "GLUTEANUS MINAMUS",
  "Beer Style": "Straw coloured, refreshing with bursts of Lemon and Lime  ",
  "ABV": "4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MONTY'S",
  "Beer Name": "DARK SECRET",
  "Beer Style": "Full bodied oatmeal stout, chocolate and coffee taste",
  "ABV": "5.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "MONTY'S",
  "Beer Name": "MASQUERADE",
  "Beer Style": "Premium golden bitter",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FURNACE",
  "Beer Name": "FUN SPONGE",
  "Beer Style": "Citra & Mosaic hopped juicy beer",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "POTBELLY",
  "Beer Name": "PIGGIN SAINT",
  "Beer Style": "Pale golden ale with New World hops",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "4 WOOD",
  "Beer Style": " Full-bodied, traditional Best Bitter",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "AFFINITY",
  "Beer Style": " Golden Bitter with lots and lots of fruity Citra hops",
  "ABV": "4.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "DISCO BALLS",
  "Beer Style": "A Big Hitting Hop Loaded IPA",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "HAPPY PEOPLE",
  "Beer Style": " Sharp and citrusy golden ale",
  "ABV": "4.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "NEW WORLD",
  "Beer Style": "Golden citrusy big hitter in terms of flavour",
  "ABV": "3.7",
  "IBU": "NA"
  },
  {
  "Brewery Name": "SHINY",
  "Beer Name": "WRENCH",
  "Beer Style": "Stout with 6 different malts, complex, rich flavour profile",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "TEA CUPS",
  "Beer Style": "A mad,  cloudy traditional ginger beer",
  "ABV": "4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "FUNFAIR",
  "Beer Name": "THROUGH THE LOOKING GLASS",
  "Beer Style": "Tea cups big brother with a mad fruit twist",
  "ABV": "5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "A BEER NAMED LEEROY",
  "Beer Style": "Hoppy, fruity pale ale  with a hint of maltiness",
  "ABV": "5.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "AUSTRALIAN PALE",
  "Beer Style": "Rich golden ale, floral aroma & citrus & tropical fruit flavours",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BIG BANG THEORY",
  "Beer Style": "Pale ale. Huge hop aroma, malty sweetness, gentle bitter finish",
  "ABV": "5.3",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BITTER",
  "Beer Style": "Smooth, full-bodied, pale chestnut traditional bitter",
  "ABV": "4.1",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "BLOND SESSION ALE",
  "Beer Style": "Light golden session ale with a refreshing citrus hop finish",
  "ABV": "3.8",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "DOUBLE JIP",
  "Beer Style": "Beyond an India Pale Ale. Lots of citrus, sage & pine flavour",
  "ABV": "9.9",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "EGYPTIAN CREAM",
  "Beer Style": " Creamy milk stout with velvety mouthfeel and a fruity hop bite ",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "FENLAND FARMHOUSE SAISON",
  "Beer Style": "Refreshing new world Saison with a fruity aroma",
  "ABV": "7.2",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "HOP STASH DENALI",
  "Beer Style": "Lots of Denali hops, pineapple& citrus flavours, big malty base",
  "ABV": "5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "MANHATTAN PROJECT",
  "Beer Style": "Light & refreshing,  citrus & tropical flavourss",
  "ABV": "4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "PULPING ON YOUR STEREO",
  "Beer Style": "Rind and pulp of 359 oranges give this IPA a strong fruity flavour",
  "ABV": "4.5",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "RELEASE THE CHIMPS",
  "Beer Style": "IPA with a crisp mouth feel and  clean, punchy bitterness ",
  "ABV": "4.4",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "SIMPLE PLEASURES",
  "Beer Style": "Light, clean  beer, pleasing citrus hop aroma & flavour",
  "ABV": "3.6",
  "IBU": "NA"
  },
  {
  "Brewery Name": "NENE VALLEY",
  "Beer Name": "SUPERSONIC",
  "Beer Style": "Gin & Tonic Wheat Beer with juniper, lemon, other botanicals",
  "ABV": "6",
  "IBU": "NA"
  }
]

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
