"use strict";

function filterSetting(filter) {
  document
    .querySelector("#filterele")
    .insertAdjacentHTML(
      "afterbegin",
      `<label><input type="radio" name="filter" id="${filter.toLowerCase()}">${filter}</label>`
    );
  document
    .querySelector(`#${filter.toLowerCase()}`)
    .addEventListener("click", function () {
      if (filter !== "none") {
        console.log("Checkbox is checked..");
        locint.forEach((loc) => {
          const isVisible = loc.tags.includes(filter);
          //console.log(loc.name.toLowerCase());
          loc.hide = !isVisible;
        });
        displayLocSearch(locint);
      } else {
        console.log("Checkbox is not checked..");
        displayLoc(locint);
      }
    });
}

filterSetting("none");
filterSetting("Bahnhof");

const alltags = [
  holle,
  shirin,
  evan,
  vegan,
  curryW,
  f,
  rest,
  swt,
  loct,
  msum,
  h,
  club,
  park,
  important,
];

for (let i = 0; i < alltags.length; i++) {
  filterSetting(alltags[i]);
}
//`<label><input type="radio" name="filter" id="${filter.toLowerCase()}">${filter}</label>`
