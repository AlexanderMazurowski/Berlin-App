"use strict";

let alllocs;
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

/* function httpGet(loc) {
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
      if (myArr.rows[0].elements[0].duration.text.includes("hour")) {
        const h =
          parseInt(myArr.rows[0].elements[0].duration.text.split(" ")[0]) * 60;
        const min = parseInt(
          myArr.rows[0].elements[0].duration.text.split(" ")[2]
        );
        loc.realtime = h + min;
      } else {
        loc.realtime = parseInt(
          myArr.rows[0].elements[0].duration.text.split(" ")[0]
        );
      }

      //console.log(myArr);
      locswgoog.push(loc);
      console.log(loc);
      //displayLoc(locswgoog);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  //return myArr;
} */
/*
// calculate distance
function calculateDistance(loc) {
  locgdis = loc;
  var origin = new google.maps.LatLng(
    parseFloat(loc.curLoc[0]),
    parseFloat(loc.curLoc[1])
  ); //loc.curLoc;
  var destination = new google.maps.LatLng(
    parseFloat(loc.lat),
    parseFloat(loc.lon)
  ); //loc.name;
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      //unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
      unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
      avoidHighways: false,
      avoidTolls: false,
    },
    callback
  );
}
// get distance results
function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
  } else {
    var origin = response.originAddresses[0];
    var destination = response.destinationAddresses[0];
    if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
    } else {
      console.log(response);
      var distance = response.rows[0].elements[0].distance.text;
      var duration = response.rows[0].elements[0].duration.text;
      console.log(distance);
      locgdis.realdistance = parseInt(distance.split(" ")[0]);
      if (duration.includes("hour")) {
        const h = parseInt(duration.split(" ")[0]) * 60;
        const min = parseInt(duration.split(" ")[2]);
        const realtime = h + min;
      } else {
        const realtime = parseInt(duration.split(" ")[0]);
      }
      console.log(response.rows[0].elements[0].distance);

      locswgoog.push(locgdis);

      console.log(locgdis);
      console.log(locswgoog);
    }
  }
}
//displayLoc(locswgoog);
 */

function calculateDistances(locs) {
  alllocs = locs;
  //const geocoder = new google.maps.Geocoder();
  const service = new google.maps.DistanceMatrixService();
  const origin1 = { lat: locs[0].curLoc[0], lng: locs[0].curLoc[1] };
  //const origin2 = "Greenwich, England";
  const finaldestinations = [];
  for (let i = 0; i < locs.length; i++) {
    finaldestinations.push(locs[i].address);
  }
  const destinationA = "R%C3%BCyam+Gem%C3%BCse+Kebab";
  const destinationB = { lat: 50.087, lng: 14.421 };
  service.getDistanceMatrix(
    {
      origins: [origin1],
      destinations: finaldestinations,
      travelMode: google.maps.TravelMode.TRANSIT,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    },
    callback
  );
}
function callback(response, status) {
  if (status != google.maps.DistanceMatrixStatus.OK) {
  } else {
    if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
    } else {
      console.log(response);
      console.log(alllocs);

      for (let i = 0; i < alllocs.length; i++) {
        alllocs[i].realdistance = parseFloat(
          response.rows[0].elements[i].distance.text
            .split(" ")[0]
            .replace(",", ".")
        );
        //alllocs[i].realtime = response.rows[0].elements[i].duration.text;
        if (
          response.rows[0].elements[i].duration.text.includes("hour") ||
          response.rows[0].elements[i].duration.text.includes("Stunden")
        ) {
          const h =
            parseInt(response.rows[0].elements[i].duration.text.split(" ")[0]) *
            60;
          const min = parseInt(
            response.rows[0].elements[i].duration.text.split(" ")[2]
          );
          alllocs[i].realtime = h + min;
        } else {
          alllocs[i].realtime = parseInt(
            response.rows[0].elements[i].duration.text.split(" ")[0]
          );
        }
      }
      console.log(alllocs);
      displayLoc(alllocs);

      /*       var distance = response.rows[0].elements[0].distance.text;
      var duration = response.rows[0].elements[0].duration.text;
      console.log(distance);
      locgdis.realdistance = parseInt(distance.split(" ")[0]);
      if (duration.includes("hour")) {
        const h = parseInt(duration.split(" ")[0]) * 60;
        const min = parseInt(duration.split(" ")[2]);
        const realtime = h + min;
      } else {
        const realtime = parseInt(duration.split(" ")[0]);
      }
      console.log(response.rows[0].elements[0].distance);

      locswgoog.push(locgdis);

      console.log(locgdis);
      console.log(locswgoog); */
    }
  }
}
