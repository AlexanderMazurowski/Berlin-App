"use strict";

let locint;
let value = "dist";
document.querySelector("#dist").addEventListener("click", function () {
  value = "dist";
  console.log("clicked");
  displayLoc(locint);
});
document.querySelector("#time").addEventListener("click", function () {
  value = "time";
  displayLoc(locint);
});

function displayLoc(locations) {
  locint = locations;
  const container = document.querySelector(".list");
  let locs;
  container.innerHTML = "";
  if (value == "dist") {
    locs = locations.slice().sort((a, b) => b.realdistance - a.realdistance);
  } else {
    locs = locations.slice().sort((a, b) => b.realtime - a.realtime);
  }
  console.log(locs);
  console.log(locations);

  locs.forEach(function (loc, i) {
    const html = `<div class="list-item">
              <div class="left-content">
                <div class="place-name">${loc.name}</div>
                <div class="tag-list">
                  <div class="tag">Tag</div>
                  <div class="tag">Tag</div>
                  <div class="tag">Tag</div>
                </div>
              </div>
              <div class="right-content">
                <div class="info-list">
                  <div class="distance-wrapper">
                    <div class="distance">${loc.realdistance}</div>
                    <div class="meter-km">km</div>
                  </div>
                  <a href="${loc.translink}" class="time-wrapper">
                    <div class="time">${loc.realtime}</div>
                    <div class="min-hour">Min</div>
                  </a>
                </div>
                <a href="${loc.gmapslink}" class="google-maps-link w-inline-block">
                  <div>G Maps</div>
                  <img src="https://uploads-ssl.webflow.com/619c13e28d0e8c4e037f0b4a/619c13e28d0e8cfcd07f0b57_Fevicon%20Fs.png" loading="lazy" alt="" class="arrow">
                </a>
              </div>
            </div>`;
    container.insertAdjacentHTML("afterbegin", html);
  });
}
