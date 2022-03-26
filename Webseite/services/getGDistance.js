"use strict";

/* function initMap() {
  let gdistance;
  const service = new google.maps.DistanceMatrixService();

  const origin1 = { lat: 55.93, lng: -3.118 };
  const origin2 = "Greenwich, England";
  const destinationA = "Stockholm, Sweden";
  const destinationB = { lat: 50.087, lng: 14.421 };
  const request = {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };

  service.getDistanceMatrix(request).then((response) => {
    // put response
    gdistance = JSON.stringify(response);
  });
  gdistance = JSON.parse(gdistance);

  console.log(gdistance);
  return gdistance;
} */
let locswgoog = [];
function httpGet(loc) {
  //loc.name;
  //loc.curLoc;
  var xmlhttp = new XMLHttpRequest();
  var url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${loc.name}&origins=${loc.curLoc}&mode=transit&units=metric&key=AIzaSyCJqrrnFZ8ijSsTY9xVyfKRLtxdp9-ZyqA`;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      loc.realdistance = parseInt(
        myArr.rows[0].elements[0].distance.text.split(" ")[0]
      );
      loc.realtime = myArr.rows[0].elements[0].duration.text;
      //console.log(myArr);
      locswgoog.push(loc);
      console.log(loc);
      displayLoc(locswgoog);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  //return myArr;
}
