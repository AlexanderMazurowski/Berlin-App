"use strict";

let latlon = "loc...";
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  latlon = [crd.latitude, crd.longitude];
  
  console.log(createLocations());
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
function getLocation() {
    console.log("run");
  return navigator.geolocation.getCurrentPosition(success, error, options);

  //return latlon;
}
