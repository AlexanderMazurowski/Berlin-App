///TAGs

//Food
const d = "Döner";
const holle = "Holle";
const shirin = "Shirin";
const evan = "Evanijo";
const vegan = "Vegan";
const curryW = "Currywurst";
const f = "Food";
const rest = "Reataurant";
const swt = "Sweet";
//other
const h = "Home";
const loct = "Location";
const msum = "Museum";
const park = "Park";
const important = "Wichtig";

const locations = [
  {
    name: "Mustafa Gemüse Kebap",
    tags: [f, d],
    gmapslink:
      "https://www.google.com/maps/place/Mustafa's+Gem%C3%BCse+Kebap/@52.4939906,13.3858353,17z/data=!3m1!4b1!4m5!3m4!1s0x47a85029195b7e73:0xa934dc3108889d2f!8m2!3d52.4939874!4d13.388024!11m1!6b1",
    time: "11 – 3 Uhr",
    address: "Mehringdamm 32, 10961 Berlin, Deutschland",
  },
  {
    name: "Rüyam Gemüse Kebab",
    tags: [f, d],
    gmapslink:
      "https://www.google.com/maps/place/R%C3%BCyam+Gem%C3%BCse+Kebab/@52.4846314,13.3517793,17z/data=!3m1!4b1!4m5!3m4!1s0x47a85041cced47fd:0xb446f290dc551d69!8m2!3d52.4846757!4d13.3539229",
    time: "sddw",
    address: "Hauptstraße 133, 10827 Berlin, Deutschland",
  },
  {
    name: "FERHAT DÖNER",
    tags: [f, d, holle],
    gmapslink:
      "https://www.google.com/maps/place/FERHAT+D%C3%96NER/@48.1807066,16.3732287,17z/data=!3m1!4b1!4m5!3m4!1s0x476d07a7099d8b21:0x2aa39aa38998bece!8m2!3d48.180703!4d16.3754174",
    time: "sddw",
    address: "Favoritenstraße 94, 1100 Wien",
  },
  {
    name: "ZOB - Zentraler Omnibusbahnhof Berlin",
    tags: [important],
    gmapslink:
      "https://www.google.com/maps/place/Zentraler+Omnibusbahnhof+Berlin/@52.5074826,13.2798914,15z/data=!4m2!3m1!1s0x0:0xce4469a1a53c91b4?sa=X&ved=2ahUKEwj9gqfEyeT2AhVORfEDHSwQC6gQ_BJ6BAhAEAU",
    time: "sddw",
    address: "Masurenallee, 14057 Berlin, Deutschland",
  },
  {
    name: "Computerspielemuseum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Computerspielemuseum/@52.5176101,13.4419998,15z/data=!4m5!3m4!1s0x0:0x2a3680498c207ab8!8m2!3d52.5176101!4d13.4419998",
    time: "10-20 Uhr",
    address: "Karl-Marx-Allee 93A, 10243 Berlin, Deutschland",
  },
  {
    name: "Brandenburger Tor",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Brandenburger+Tor/@52.5162746,13.3777041,15z/data=!4m2!3m1!1s0x0:0x26bbfb4e84674c63?sa=X&ved=2ahUKEwiD89y984L3AhVNpIsKHaEcCD8Q_BJ6BAh_EAU",
    time: "24h",
    address: "Pariser Platz, 10117 Berlin, Deutschland",
  },
  {
    name: "Select Hotel The Wall Berlin",
    tags: [h],
    gmapslink:
      "https://www.google.com/maps/place/Select+Hotel+The+Wall+Berlin/@52.5077682,13.3863374,17z/data=!3m1!4b1!4m10!3m9!1s0x47a851d19ac0fd5f:0x683e1a0d060a18d2!5m4!1s2022-04-08!2i5!4m1!1i2!8m2!3d52.507765!4d13.388526",
    time: "24h",
    address: "Zimmerstraße 88, 10117 Berlin, Deutschland",
  },
  {
    name: "Gärten der Welt",
    tags: [important, loct],
    gmapslink:
      "https://www.google.com/maps/place/G%C3%A4rten+der+Welt/@52.5379611,13.5692782,15z/data=!4m5!3m4!1s0x0:0x15bb7278a83882e6!8m2!3d52.5379611!4d13.5692782",
    time: "9-20 Uhr",
    address: "Blumberger Damm 44, 12685 Berlin, Deutschland",
  },
  {
    name: "Brammibal's Donuts",
    tags: [f, swt, vegan],
    gmapslink:
      "https://www.google.com/maps/place/Brammibal's+Donuts+(Friedrichshain)/@52.5129229,13.4532005,15z/data=!4m2!3m1!1s0x0:0x209f8ab8da47375d?sa=X&ved=2ahUKEwjXuubR9IL3AhUcSfEDHcjRCpUQ_BJ6BAhaEAU",
    time: "9-20 Uhr",
    address: "Maybachufer 8, 12047 Berlin, Deutschland",
  },
  {
    name: "Großer Tiergarten",
    tags: [park],
    gmapslink:
      "https://www.google.com/maps/place/Gro%C3%9Fer+Tiergarten/@52.5141905,13.3406589,14.75z/data=!4m13!1m7!3m6!1s0x47a851082ab0098b:0x52120465b5fabd0!2sTiergarten,+Berlin,+Deutschland!3b1!8m2!3d52.514534!4d13.3501015!3m4!1s0x47a851ae4addd1e1:0x83c392f1dcd0ab7a!8m2!3d52.5141516!4d13.3591634",
    time: "24h",
    address: "Str. des 17. Juni, 10785 Berlin, Deutschland",
  },
  {
    name: "Stasimuseum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Stasimuseum/@52.5145001,13.4875157,15z/data=!4m5!3m4!1s0x0:0x7686c94ea9e10e1d!8m2!3d52.5145001!4d13.4875157",
    time: "11-18 Uhr",
    address: "Normannenstraße 20/Haus 1, 10365 Berlin, Deutschland",
  },
  {
    name: "DDR Museum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/DDR+Museum/@52.5196077,13.4027331,15z/data=!4m2!3m1!1s0x0:0x2d0c99bfca279864?sa=X&ved=2ahUKEwjQ7dLj5IT3AhXgQvEDHXD1DVMQ_BJ6BAhiEAU",
    time: "09:00–21:00",
    address: "Karl-Liebknecht-Str. 1, 10178 Berlin, Deutschland",
  },
  {
    name: "Schwules Museum Berlin",
    tags: [],
    gmapslink:
      "https://www.google.com/maps/place/Schwules+Museum+Berlin/@52.5042961,13.3582175,15z/data=!4m2!3m1!1s0x0:0xcd736ce22edb7533?sa=X&ved=2ahUKEwjy9uiM5YT3AhWDSfEDHdiED9MQ_BJ6BAhgEAU",
    time: "14-18 Uhr",
    address: "Lützowstraße 73, 10785 Berlin, Deutschland",
  },
  {
    name: "East Side Gallery",
    tags: [loct, msum],
    gmapslink:
      "https://www.google.com/maps/place/East+Side+Gallery/@52.5050224,13.4396952,15z/data=!4m2!3m1!1s0x0:0xde9be97b4a912818?sa=X&ved=2ahUKEwib7_u55YT3AhWGl4sKHbcMBhYQ_BJ6BAhhEAU",
    time: "24h",
    address: "Mühlenstraße 3-100, 10243 Berlin, Deutschland",
  },
  {
    name: "Berlin Story Bunker",
    tags: [loct, msum],
    gmapslink:
      "https://www.google.com/maps/place/Berlin+Story+Bunker/@52.5029008,13.3803901,15z/data=!4m2!3m1!1s0x0:0x335d9ae196d3fe8b?sa=X&ved=2ahUKEwix1uLi5YT3AhW3AxAIHecJBMQQ_BJ6BAheEAU",
    time: "10:00–19:00",
    address: "Schöneberger Str. 23A, 10963 Berlin, Deutschland",
  },
  {
    name: "Deutsches Spionagemuseum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Deutsches+Spionagemuseum/@52.5087676,13.3792366,15z/data=!4m5!3m4!1s0x0:0xdd5eea35bbd0995a!8m2!3d52.5087676!4d13.3792366",
    time: "10-20h",
    address: "Leipziger Pl. 9, 10117 Berlin, Deutschland",
  },
  {
    name: "Museum Schöneberg",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Museum+Schöneberg/@52.4839118,13.3509767,15z/data=!4m5!3m4!1s0x0:0x8852343a40434a2b!8m2!3d52.4838575!4d13.3510487",
    time: "14-18h",
    address: "Hauptstraße 40/42, 10827 Berlin, Deutschland",
  },
  {
    name: "Bud Spencer Museum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Deutsches+Technikmuseum/@52.4986982,13.3778846,15z/data=!4m5!3m4!1s0x0:0x4435919b99126a78!8m2!3d52.4986982!4d13.3778846",
    time: "",
    address: "",
  },
  {
    name: "Deutsches Technikmuseum",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Deutsches+Technikmuseum/@52.4986982,13.3778846,15z/data=!4m5!3m4!1s0x0:0x4435919b99126a78!8m2!3d52.4986982!4d13.3778846",
    time: "10-18h",
    address: "Trebbiner Str. 9, 10963 Berlin, Deutschland",
  },
  {
    name: "Zeiss-Großplanetarium",
    tags: [msum],
    gmapslink:
      "https://www.google.com/maps/place/Zeiss-Großplanetarium/@52.5429954,13.4280297,15z/data=!4m5!3m4!1s0x0:0x1af4b1504c15c955!8m2!3d52.5429954!4d13.4280297",
    time: "10-19h",
    address: "Prenzlauer Allee 80, 10405 Berlin, Deutschland",
  },
  {
    name: "Zoologischer Garten Berlin",
    tags: [loct, park],
    gmapslink:
      "https://www.google.com/maps/place/Zoologischer+Garten+Berlin/@52.5079196,13.3377547,15z/data=!4m5!3m4!1s0x0:0x8139eb3ae980ae7e!8m2!3d52.5079196!4d13.3377547",
    time: "9-18:30h",
    address: "Hardenbergpl. 8, 10787 Berlin, Deutschland",
  },
  {
    name: "Schloss Charlottenburg",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Schloss+Charlottenburg/@52.5242697,13.2837144,15z/data=!4m13!1m7!3m6!1s0x47a85131f6383b41:0x9ba15c60be238d26!2sSpandauer+Damm+10-22,+14059+Berlin,+Deutschland!3b1!8m2!3d52.5239539!4d13.293216!3m4!1s0x47a85125754291f3:0x8bb8ae492a79fe1a!8m2!3d52.5209319!4d13.2956165",
    time: "10-16:30h",
    address: "Spandauer Damm 10-22, 14059 Berlin, Deutschland",
  },
  {
    name: "Reichstagsgebäude",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Reichstagsgebäude/@52.5186202,13.3761872,15z/data=!4m2!3m1!1s0x0:0x641b52d3abf17de5?sa=X&ved=2ahUKEwj4-PCR64T3AhXFS_EDHRZTAXAQ_BJ6BAhyEAU",
    time: "24h",
    address: "Platz der Republik 1, 11011 Berlin, Deutschland",
  },
  {
    name: "Berliner Fernsehturm",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Berliner+Fernsehturm/@52.520815,13.4094191,15z/data=!4m5!3m4!1s0x0:0xc8fafc484349e4a1!8m2!3d52.520815!4d13.4094191",
    time: "24h",
    address: "Panoramastraße 1A, 10178 Berlin, Deutschland",
  },
  {
    name: "Weltzeituhr",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Berliner+Fernsehturm/@52.520815,13.4094191,15z/data=!4m5!3m4!1s0x0:0xc8fafc484349e4a1!8m2!3d52.520815!4d13.4094191",
    time: "24h",
    address: "Panoramastraße 1A, 10178 Berlin, Deutschland",
  },
  {
    name: "Botanischer Garten und Botanisches Museum",
    tags: [loct, park],
    gmapslink:
      "https://www.google.com/maps/place/Botanischer+Garten+und+Botanisches+Museum/@52.4543806,13.3056024,15z/data=!4m5!3m4!1s0x0:0x15a2acff1c8d8de8!8m2!3d52.4543806!4d13.3056024",
    time: "9-20h",
    address: "Königin-Luise-Straße 6-8, 14195 Berlin, Deutschland",
  },
  {
    name: "Museumsinsel",
    tags: [loct],
    gmapslink:
      "https://www.google.com/maps/place/Museumsinsel/@52.5168836,13.3933862,15z/data=!3m1!4b1!4m5!3m4!1s0x47a851df3c8bcac7:0x936c396c9e126807!8m2!3d52.5169328!4d13.4018997",
    time: "",
    address: "",
  } /*
  {
    name: "",
    tags: [],
    gmapslink: "",
    time: "",
    address: "",
  },
  {
    name: "",
    tags: [],
    gmapslink: "",
    time: "",
    address: "",
  },*/,
];
/*
Templete: for new Locations:


  {
    name: "",
    tags: [],
    gmapslink:"",
    time: "",
    address: "",
  },


  */
