"use strict";

function createLocations() {
  let finalLocation = [];
  for (let i = 0; i < locations.length; i++) {
    finalLocation[i] = new Location(locations[i], latlon);
    //finalLocation[i].getCordinatesAndDistance();
    console.log(finalLocation[i].name);
    //calculateDistance(finalLocation[i]);
  }
  //displayLoc(finalLocation);
  calculateDistances(finalLocation);

  return finalLocation;
}
