"use strict";

function displayLoc(locations) {
  const container = document.querySelector(".list");

  container.innerHTML = "";
  const locs = locations
    .slice()
    .sort((a, b) => b.realdistance - a.realdistance);
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
