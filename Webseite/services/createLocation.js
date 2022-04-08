"use strict";

function createLocations(latlon) {
  let finalLocation = [];
  for (let i = 0; i < locations.length; i++) {
    finalLocation[i] = new Location(locations[i], latlon);
    finalLocation[i].getCordinatesAndDistance();
    console.log(finalLocation[i].name);
    //calculateDistance(finalLocation[i]);
  }
  console.log(finalLocation);

  //displayLoc(finalLocation);
  calculateDistances(finalLocation);

  return finalLocation;
}
