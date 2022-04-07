"use strict";

//Mustafa Demir’s Gemüse Kebap
//https://www.google.com/maps/place/Mustafa+Demir%E2%80%99s+Gem%C3%BCse+Kebap/@52.5094884,13.4497155,17.83z/data=!3m1!5s0x47a84e5b7a719811:0x810c919bcf16dd8d!4m5!3m4!1s0x47a84e58e23b7319:0x8069096b50d11cb6!8m2!3d52.5100384!4d13.451065
//döner
//Montag,11:00–02:00
let distance;
class Location {
  constructor({ name, tags, gmapslink, time, address }, curLoc) {
    this.name = name;
    this.tags = tags;
    this.gmapslink = gmapslink;
    this.time = time;
    this.distance = "";
    this.gdistance = "";
    this.curLoc = curLoc;
    this.lat = "";
    this.lon = "";
    this.address = address;
  }
  getCordinatesAndDistance() {
    this.lat = this.gmapslink.split("@")[1].split(",")[0]; //nordsüd
    this.lon = this.gmapslink.split("@")[1].split(",")[1]; //westeast
    let cord;

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    //this.gdistance = initMap();

    this.distance = getDistanceFromLatLonInKm(
      this.lat,
      this.lon,
      this.curLoc[0],
      this.curLoc[1]
    );
    const betName = this.name;
    this.translink = `https://www.google.com/maps/dir/?api=1&dir_action=navigate&destination=${this.name}&travelmode=transit`;

    https: return (
      `https://www.google.com/maps/@${this.lat},${this.lon},12z` + this.distance
    );
  }
}
