"use strict";

let locint;
let value = "dist";
const sortdis = document.querySelector("#dist");
const sorttime = document.querySelector("#time");

sortdis.addEventListener("click", function () {
  sorttime.classList.remove("sort-choose-select");
  sorttime.classList.add("sort-choose");
  sortdis.classList.add("sort-choose-select");
  value = "dist";
  console.log("clicked");
  displayLoc(locint);
});
sorttime.addEventListener("click", function () {
  sortdis.classList.remove("sort-choose-select");
  sortdis.classList.add("sort-choose");
  sorttime.classList.add("sort-choose-select");
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
  const allTagHTML = [];
  for (let i = 0; i < locs.length; i++) {
    let tagHTML = "";
    for (let b = 0; b < locs[i].tags.length; b++) {
      tagHTML += `<img
                    src="assets/${locs[i].tags[b]}.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  />`;
    }
    allTagHTML.push(tagHTML);
  }

  locs.forEach(function (loc, i) {
    const html = `<div class="item">
                <div class="item-name">${loc.name}</div>
                <div class="item-time">${loc.time}</div>
                <div class="item-data">
                  <a href="${
                    loc.translink
                  }" target="_blank" class="distance-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01da97811840f0ae7e3_train.svg"
                      loading="lazy"
                      alt=""
                      class="distance-icon"
                    />
                    <div>${
                      loc.realdistance ?? Math.round(loc.distance)
                    } Kilometer</div></a
                  ><a href="${
                    loc.translink
                  }" target="_blank" class="duration-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01bc01e81813d95b591_timer.svg"
                      loading="lazy"
                      alt=""
                      class="duration-icon"
                    />
                    <div>${loc.realtime ?? "/"} Min </div></a
                  ><a href="${
                    loc.gmapslink
                  }" target="_blank" class="gmaps-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01af210c21ebe09157a_place.svg"
                      loading="lazy"
                      alt=""
                      class="gmaps-icon"
                    />
                    <div>Maps</div></a
                  >
                </div>
                <div class="item-tags">
                  ${allTagHTML[i]}
                </div>
              </div>`;
    container.insertAdjacentHTML("afterbegin", html);
  });
}

function displayLocSearch(locations) {
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
  //console.log(locations);
  const allTagHTML = [];
  for (let i = 0; i < locs.length; i++) {
    let tagHTML = "";
    for (let b = 0; b < locs[i].tags.length; b++) {
      tagHTML += `<img
                    src="assets/${locs[i].tags[b]}.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  />`;
    }
    allTagHTML.push(tagHTML);
  }
  console.log(allTagHTML);

  locs.forEach(function (loc, i) {
    const html = `<div class="item ${loc.hide ? "hide" : ""}">
                <div class="item-name">${loc.name}</div>
                <div class="item-time">${loc.time}</div>
                <div class="item-data">
                  <a href="${
                    loc.translink
                  }" target="_blank" class="distance-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01da97811840f0ae7e3_train.svg"
                      loading="lazy"
                      alt=""
                      class="distance-icon"
                    />
                    <div>${
                      loc.realdistance ?? Math.round(loc.distance)
                    } Kilometer</div></a
                  ><a href="${
                    loc.translink
                  }" target="_blank" class="duration-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01bc01e81813d95b591_timer.svg"
                      loading="lazy"
                      alt=""
                      class="duration-icon"
                    />
                    <div>${loc.realtime ?? "/"} Min </div></a
                  ><a href="${
                    loc.gmapslink
                  }" target="_blank" class="gmaps-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01af210c21ebe09157a_place.svg"
                      loading="lazy"
                      alt=""
                      class="gmaps-icon"
                    />
                    <div>Maps</div></a
                  >
                </div>
                <div class="item-tags">
                  ${allTagHTML[i]}
                </div>
              </div>`;
    container.insertAdjacentHTML("afterbegin", html);
  });
}

/*<div class="item">
                <div class="item-name">Rüyam’s Gemüse Kebab</div>
                <div class="item-time">Geöffnet von 12:00 bis 20:00</div>
                <div class="item-data">
                  <a href="#" class="distance-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01da97811840f0ae7e3_train.svg"
                      loading="lazy"
                      alt=""
                      class="distance-icon"
                    />
                    <div>200 Meter</div></a
                  ><a href="#" class="duration-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01bc01e81813d95b591_timer.svg"
                      loading="lazy"
                      alt=""
                      class="duration-icon"
                    />
                    <div>20 Min</div></a
                  ><a href="#" class="gmaps-wrapper w-inline-block"
                    ><img
                      src="https://uploads-ssl.webflow.com/624b22e46231cd476432b8b8/624ea01af210c21ebe09157a_place.svg"
                      loading="lazy"
                      alt=""
                      class="gmaps-icon"
                    />
                    <div>Maps</div></a
                  >
                </div>
                <div class="item-tags">
                  <img
                    src="assets/Sweet.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  /><img
                    src="assets/Sweet.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  /><img
                    src="assets/Sweet.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  /><img
                    src="assets/Sweet.png"
                    loading="lazy"
                    alt=""
                    class="tag-image"
                  />
                </div>
              </div> */
