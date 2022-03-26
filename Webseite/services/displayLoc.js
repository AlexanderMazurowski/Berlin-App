"use strict";

function displayLoc(locs) {
  const container = document.querySelector(".list");

  container.innerHTML = "";
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
                    <div class="distance">${loc.distance}</div>
                    <div class="meter-km">km</div>
                  </div>
                  <div class="time-wrapper">
                    <div class="time">20</div>
                    <div class="min-hour">Min</div>
                  </div>
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
