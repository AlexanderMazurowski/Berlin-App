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
