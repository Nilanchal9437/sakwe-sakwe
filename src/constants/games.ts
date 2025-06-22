const games = [
  {
    id: 1,
    title: "Ibisakuzo",
    desc: "Riddles and wit from the heart of Rwanda",
    icon: "/games/Worldle.png",
    bgColor: "#E0F2FE",
    imageShape: "circle",
    questions: [
      { question: "Nagutera icyambuka amazi kitagira amaguru", answer: "ijwi" },
      {
        question: "Nagutera icyo utazi utabonye",
        answer: "ubuto bwa so na nyoko",
      },
      {
        question: "Hagarara hakuno,mpagarare hakurya turate abeza",
        answer: "amenyo",
      },
      { question: "Mpagaze mu ishyamba rimpa umwezi", answer: "ibarizo" },
      {
        question: "Ngeze mu ishyamba rirahungabana",
        answer: "inzara y’umusore",
      },
      { question: "Nshinze umwe ndasakara", answer: "icyobo" },
      { question: "Nyirabakangaza ngo mutahe", answer: "imbeho ku rugi" },
      { question: "Inka yanjye nyikama igaramye", answer: "umuvure" },
      { question: "Twavamo umwe ntitwarya", answer: "ishyiga" },
      { question: "Mpagaze mu mpinga mpenera ab’epfo", answer: "umubagazi" },
      { question: "Mutamu irabyina mu gatabire", answer: "imbwa mu masinde" },
      { question: "Uwagaca yaba ari umugabo", answer: "kubuza umuryi kurya" },
      {
        question: "Ngeze mu rutoki abasirikare baramfata",
        answer: "ibishokoro",
      },
      { question: "Nkubise urushyi rurumira", answer: "ibara ry’inka" },
      {
        question: "Hakurya urwererane, hakuno urwererane",
        answer: "ururabo rw’amashaza",
      },
      {
        question: "Abakobwa banjye barara bahagaze bwacya bakaryama",
        answer: "imyugariro",
      },
      { question: "Hakurya mu bihuku", answer: "ibizu bitagira abantu" },
      {
        question:
          "Nahuye na cya matimbatimba cya maguru umunani kigiye kugura umunyu kwa mirongwitanu",
        answer: "igitagangurirwa",
      },
      { question: "Mutumbajuru wa rujugira", answer: "umwumba w’insina" },
      { question: "Sogokuru aryoha aboze", answer: "umuneke" },
      { question: "Ruganzu araguye n’ingabo ze", answer: "igitoki" },
      { question: "Karavugira ibuhanika", answer: "ingasire" },
      {
        question: "Ayi napfa nakira, simbizi",
        answer: "akanyoni karitse ku nzira",
      },
      {
        question: "Inka yanjye nyizirika ku nzira uyinyuzeho wese akayishitura",
        answer: "urutoryi",
      },
      { question: "Rukara aratema umuvumba", answer: "urwembe mu musatsi" },
      {
        question: "Rukara rw’umwami yicarira abagabo batatu",
        answer: "inkono",
      },
      { question: "Faraziya aceza yicaye", answer: "akayunguruzo" },
      {
        question: "Abakobwa banjye bikwije impindu bose",
        answer: "imirizo y’imbeba",
      },
      {
        question: "Nkiza ibyo bitoki bya so binsaba inyama",
        answer: "ibabi by’ibibonobono",
      },
      { question: "Mama shenge", answer: "umwana w’uruhinja" },
      { question: "Ibuguti, ibuguti", answer: "impyisi ibugutira umupfu" },
      { question: "Ibuguti, ibuguti", answer: "ihene ibugutira amatovu" },
      {
        question: "Ndagiye ku manga Imana nibishaka nzacyura",
        answer: "umugore utwite",
      },
      { question: "Igira hino ncuti", answer: "ikiringiti" },
      {
        question: "Hakurya ni urwererane, hakuno ni urwererane",
        answer: "ururabo rw’ikawa",
      },
      {
        question: "Hakurya ni urwererane, hakuno ni urwererane",
        answer: "ururabo rw’amashaza",
      },
      {
        question:
          "Ko Data na So bameze uruhara, inzoga z’I bwami zizikorera nde",
        answer: "igihaza",
      },
      {
        question: "Kwigerezaho yikoreye ibyo atazi umubare",
        answer: "umusatsi ku mutwe",
      },
      { question: "Akabaje umugabo kamurenza impinge", answer: "ifaranga" },
      { question: "Kati parararara, kati pa", answer: "ifaranga ku meza" },
      { question: "Nshinze umwe ndasakara", answer: "icyobo" },
      {
        question: "Zagarika amahembe ntiwamenya izo nyoko yakowe",
        answer: "imigara y' iminyinya",
      },
      {
        question: "Zagarika amahembe ntiwamenya izo nyoko yakowe",
        answer: "ibiti by’ikawa",
      },
      { question: "Narazindutse mbona inzira y’umukara", answer: "kaburimbo" },
      {
        question: "Ni iki cyatanze umuzungu kwambara karuvati",
        answer: "ikiyoni",
      },
      { question: "Cyasamye kitaryana", answer: "ikiryango cy’inzu" },
      {
        question: "Ko tuvuka ku muntu ukwe ntiduse",
        answer: "umuzungu n’umwirabura",
      },
      { question: "Ujya kurasa inkuba arabandarara", answer: "kwatsa mu ziko" },
      { question: "Nabonye umugenzi urara agenda", answer: "umugezi" },
      { question: "Mutumbajuru wa rujugira", answer: "umwumba w’insina" },
      { question: "Nteye agapira kagera I Roma", answer: "ibaruwa" },
      { question: "Nicaye iwanjye nzengururka isi yose", answer: "televiziyo" },
      {
        question: "Mfite inkwi zanjye zumye, ariko nazicana ntizake",
        answer: "amahembe y’inka",
      },
      {
        question: "Ayiiiiii, ayiiiiiiii",
        answer: "umukobwa ubonye iwabo hashya",
      },
      {
        question: "Nteye igiti gikwira isi yose",
        answer: "ijambo rya perezida",
      },
      { question: "Tabara Sogokuru bamutaye ku munigo", answer: "igikatsi" },
      {
        question: "Nyuze mu nsi y’urugo bamfunda ibirozi",
        answer: "ibiboga byagaze",
      },
      {
        question: "Nyiramikuku arakukuza mu mikuku ya Shyorongi",
        answer: "igiheri mu ruhara",
      },
      { question: "Bihu byumye arenze urugo", answer: "ikiyoni" },
      {
        question: "Nyiramakaraza imana y’i Karagwe, aragiriye ku ishyamba",
        answer: "ikirungurira",
      },
      {
        question: "Mpagaze ku ruhiza nyara I Buriza nti Bahinzi nimuhingure",
        answer: "icyumweru",
      },
      { question: "Kambaye inkonya katazi iyo zavuye", answer: "uruhinja" },
      { question: "Nzamutse umusozi ndizihirwa", answer: "umugore ujya iwabo" },
      { question: "Jugujugu matenbe", answer: "inyundo" },
      {
        question: "Nkubise intobo mu mazi igenda ivuga amanjyanjya",
        answer: "umupira",
      },
      { question: "Nyiramariza ari mu mpinga", answer: "indabo z’amashaza" },
      {
        question: "Maguru mane ahagaze kuri maguru mane ashaka maguru mane",
        answer: "injangwe ihagaze ku meza ishaka imbeba",
      },
      {
        question: "Bwenge bwa none bwagutana",
        answer: "kudashyira ingasire mu masaka ngo iyasye",
      },
      {
        question: "Fata akebo mfate akandi tujhye gitara intagwira",
        answer: "ubwoya bw’inka",
      },
      { question: "Kacira bucece", answer: "icebe ry’inka" },
      {
        question: "Ni iki cyatanze umuzungu kugenda mu ivatiri",
        answer: "akanyamasyo",
      },
      { question: "Nyirabyuma ndashya umugongo", answer: "inkono ku ziko" },
      { question: "Mugongo mugari mpekera abana", answer: "urutara" },
      { question: "Urira rubariro ubone ishyano", answer: "uburiri bw’umwami" },
      {
        question:
          "Mpagaze ku rutare mpamagara Majigo nti amata y’abashumba yabuze",
        answer: "umugono w'ishashi",
      },
      {
        question: "Ndakubise ndirahira nijye mutware wa Mburamatare",
        answer: "gusitara",
      },
      {
        question: "Natumba naturika ni ibuye rya Kagbayi",
        answer: "ishapure n’amasengesho",
      },
      { question: "Mukore ubone", answer: "umwana w’ umwami" },
      { question: "Kanjengereje karakanyagwa", answer: "imvunja mu kirenge" },
      {
        question: "Rutinduka yitabiriye guhamba umuturanyi we",
        answer: "gutara ibitoki",
      },
      {
        question: "Nyamara naza nkaguha amahoro",
        answer: "ibitotsi bya mu gitondo",
      },
      {
        question: "Yankamiye mu kitoze, angaburira ibiryoshye",
        answer: "ibiryo biri mu nkono ifite imbyiro",
      },
      { question: "Mpa umweru wanjye ngabire abana", answer: "amata" },
      {
        question: "Inyundo za bene Ntwari bazikubita hasi ntizimene isi",
        answer: "ibinono by’ inka",
      },
      {
        question: "Inkera y’ I Busasamana bayirara ku manywa",
        answer: "isoko",
      },
      { question: "Nagutera uruhehe rudatokorwa", answer: "sida" },
    ],
  },
  {
    id: 2,
    title: "African Geo Trivia",
    desc: "Test your brain on Africa’s places, peaks, and borders!",
    icon: "/games/Travle.png",
    bgColor: "#FEF6E7",
    imageShape: "square",
    questions: [
      {
        question: "What is the largest desert in Africa?",
        answer: "Sahara Desert",
      },
      {
        question: "Which river is the longest in Africa?",
        answer: "Nile River",
      },
      {
        question:
          "Which African country is known as the Land of a Thousand Hills?",
        answer: "Rwanda",
      },
      {
        question: "What is the highest mountain in Africa?",
        answer: "Mount Kilimanjaro",
      },
      {
        question: "Which African lake is the largest by surface area?",
        answer: "Lake Victoria",
      },
      {
        question: "Which African country has the most pyramids?",
        answer: "Sudan",
      },
      {
        question: "What is the capital city of South Africa?",
        answer: "Pretoria",
      },
      {
        question: "Which African country is the largest by land area?",
        answer: "Algeria",
      },
      {
        question: "Which African river flows through the Congo Rainforest?",
        answer: "Congo River",
      },
      {
        question:
          "Which African country is home to the Serengeti National Park?",
        answer: "Tanzania",
      },
      {
        question: "What is the smallest country in mainland Africa?",
        answer: "The Gambia",
      },
      {
        question:
          "Which African island country is located in the Indian Ocean?",
        answer: "Madagascar",
      },
      {
        question:
          "Which African country is known for its ancient rock-hewn churches in Lalibela?",
        answer: "Ethiopia",
      },
      {
        question:
          "Which African country is bordered by both the Atlantic and Indian Oceans?",
        answer: "South Africa",
      },
      {
        question:
          "Which African country is known for the ancient city of Timbuktu?",
        answer: "Mali",
      },
      {
        question:
          "Which African country has the highest number of official languages?",
        answer: "South Africa",
      },
      {
        question: "What is the longest river in Africa?",
        answer: "Nile River",
      },
      {
        question:
          "Which African country is completely surrounded by South Africa?",
        answer: "Lesotho",
      },
      {
        question: "What is the largest desert in Africa?",
        answer: "Sahara Desert",
      },
      {
        question: "Which African country has the most pyramids?",
        answer: "Sudan",
      },
      { question: "What is the capital of Ethiopia?", answer: "Addis Ababa" },
      {
        question:
          "Which African island nation is the fourth largest island in the world?",
        answer: "Madagascar",
      },
      {
        question: "What is the name of the deepest lake in Africa?",
        answer: "Lake Tanganyika",
      },
      {
        question: "Which African country is the smallest by land area?",
        answer: "Seychelles",
      },
      {
        question: "What is the highest mountain in Africa?",
        answer: "Mount Kilimanjaro",
      },
      {
        question: "Which African country has Victoria Falls on its border?",
        answer: "Zimbabwe",
      },
      { question: "What is the capital of Ghana?", answer: "Accra" },
      {
        question: "Which African country has the longest coastline?",
        answer: "Somalia",
      },
      {
        question: "What is the largest lake in Africa?",
        answer: "Lake Victoria",
      },
      {
        question:
          "Which African country has Mount Nyiragongo an active volcano?",
        answer: "Democratic Republic of the Congo",
      },
      {
        question: "What is the name of the ancient Egyptian writing system?",
        answer: "Hieroglyphics",
      },
      {
        question:
          "Which African country is known as the Land of a Thousand Hills?",
        answer: "Rwanda",
      },
      {
        question: "What is the driest desert in Africa?",
        answer: "Namib Desert",
      },
      {
        question: "Which African country is home to Timbuktu?",
        answer: "Mali",
      },
      { question: "What is the capital of Nigeria?", answer: "Abuja" },
      {
        question:
          "Which African country is known for its historical rock-hewn churches in Lalibela?",
        answer: "Ethiopia",
      },
      {
        question: "What is the southernmost country in Africa?",
        answer: "South Africa",
      },
      {
        question:
          "Which African country is home to the Great Mosque of Djenné?",
        answer: "Mali",
      },
      {
        question:
          "Which African river is famous for its seasonal flooding in Botswana’s Okavango Delta?",
        answer: "Okavango River",
      },
      {
        question: "Which African country has the largest population?",
        answer: "Nigeria",
      },
      { question: "What is the capital of Kenya?", answer: "Nairobi" },
      {
        question:
          "Which African country is the only one with Portuguese as its official language in Southern Africa?",
        answer: "Angola",
      },
      {
        question:
          "Which African country has a city built on water known as Makoko?",
        answer: "Nigeria",
      },
      {
        question:
          "What is the name of the waterfall that marks the beginning of the Nile River?",
        answer: "Ripon Falls",
      },
      {
        question: "Which African country has the largest rainforest?",
        answer: "Democratic Republic of the Congo",
      },
      {
        question: "Which African country is the largest by land area?",
        answer: "Algeria",
      },
      {
        question:
          "What is the name of the body of water separating Africa from Europe?",
        answer: "Mediterranean Sea",
      },
      {
        question:
          "Which African country is known for the ancient city of Carthage?",
        answer: "Tunisia",
      },
      {
        question: "Which African country produces the most cocoa?",
        answer: "Côte d'Ivoire",
      },
      { question: "What is the capital of Senegal?", answer: "Dakar" },
      {
        question: "Which African country has the Skeleton Coast?",
        answer: "Namibia",
      },
      {
        question: "Which African country is home to Lake Malawi?",
        answer: "Malawi",
      },
      { question: "What is the capital of Egypt?", answer: "Cairo" },
      {
        question: "Which African country has the highest peak in North Africa?",
        answer: "Morocco",
      },
      {
        question:
          "Which African country is known for its salt flats in Danakil Depression?",
        answer: "Ethiopia",
      },
      {
        question: "Which African country is home to the Table Mountain?",
        answer: "South Africa",
      },
      {
        question:
          "What is the name of the strait that connects the Atlantic Ocean and the Mediterranean Sea?",
        answer: "Strait of Gibraltar",
      },
      {
        question:
          "Which African country is home to the historic city of Zanzibar?",
        answer: "Tanzania",
      },
      { question: "What is the capital of Sudan?", answer: "Khartoum" },
      {
        question:
          "Which African country is known for the ancient ruins of Great Zimbabwe?",
        answer: "Zimbabwe",
      },
      {
        question:
          "Which African country has the Sahel region running through it?",
        answer: "Chad",
      },
      {
        question:
          "Which African country borders the most other African countries?",
        answer: "Democratic Republic of the Congo",
      },
      {
        question: "What is the capital of Madagascar?",
        answer: "Antananarivo",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "WhenTaken",
  //   desc: "Guess the location and the year of a photograph.",
  //   icon: "/games/WhenTaken.png",
  //   bgColor: "#F3E8FF",
  //   imageShape: "circle",
  //   questions: [
  //     {
  //       question: "What is the largest desert in Africa?",
  //       answer: "Sahara Desert",
  //     },
  //     {
  //       question: "Which river is the longest in Africa?",
  //       answer: "Nile River",
  //     },
  //     {
  //       question:
  //         "Which African country is known as the Land of a Thousand Hills?",
  //       answer: "Rwanda",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "WhenTaken Movies",
  //   desc: "Guess the year and location in which a movie scene was set.",
  //   icon: "/games/WhenTakenMovies.png",
  //   bgColor: "#FEF6E7",
  //   imageShape: "square",
  //   questions: [],
  // },
  // {
  //   id: 5,
  //   title: "GeoConnections",
  //   desc: "Find the links between countries, cities, landmarks and more, and organise them into 4 categories.",
  //   icon: "/games/GeoConnections.png",
  //   bgColor: "#FEF6E7",
  //   imageShape: "square",
  //   questions: [],
  // },
  // {
  //   id: 6,
  //   title: "Statle",
  //   desc: "Guess the US state by its shape, and enjoy bonus rounds with trivia.",
  //   icon: "/games/Statle.png",
  //   bgColor: "#FEE2E2",
  //   imageShape: "circle",
  //   questions: [],
  // },
  // {
  //   id: 7,
  //   title: "WhereTaken",
  //   desc: "Place a pin on the map to guess where in the world a photo was taken.",
  //   icon: "/games/WhereTaken.png",
  //   bgColor: "#E0F2FE",
  //   imageShape: "square",
  //   questions: [],
  // },
  // {
  //   id: 8,
  //   title: "Flagle",
  //   desc: "Guess the flag in 6 guesses or less, +5 bonus rounds with trivia about the country.",
  //   icon: "/games/Flagle.png",
  //   bgColor: "#FEF6E7",
  //   imageShape: "circle",
  //   questions: [],
  // },
  // {
  //   id: 9,
  //   title: "GeoGrid",
  //   desc: "Guess the countries that fit into a grid of clues. Each row and column has its own category.",
  //   icon: "/games/GeoGrid.png",
  //   bgColor: "#E0F2FE",
  //   imageShape: "square",
  //   questions: [],
  // },
  // {
  //   id: 10,
  //   title: "WhereTaken Classic",
  //   desc: "Guess the country/region from a photograph.",
  //   icon: "/games/WhereTakenClassic.png",
  //   bgColor: "#FEF6E7",
  //   imageShape: "circle",
  //   questions: [],
  // },
  // {
  //   id: 11,
  //   title: "WhereTaken US",
  //   desc: "Guess the US state from a photograph.",
  //   icon: "/games/WhereTakenUS.png",
  //   bgColor: "#F3E8FF",
  //   imageShape: "square",
  //   questions: [],
  // },
  // {
  //   id: 12,
  //   title: "Emovi",
  //   desc: "Guess the movie with emoji! 3 guesses, 2 hints.",
  //   icon: "/games/Emovi.png",
  //   bgColor: "#FEF6E7",
  //   imageShape: "circle",
  //   questions: [],
  // },
];

export default games;
