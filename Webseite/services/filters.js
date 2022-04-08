"use strict";
let sel = false
function setfilterstyle(domlabel) {
  if(sel){
  const selctfilter = document.querySelector(".filter-choose-select");

  selctfilter.classList.remove("filter-choose-select");
  selctfilter.classList.add("filter-choose");
  }
  domlabel.classList.remove("filter-choose");
  domlabel.classList.add("filter-choose-select");
  sel = true
}

function filterSetting(filter) {
  document.querySelector(".filter-pop-up").insertAdjacentHTML(
    "afterbegin",
    `<label class="filter-choose" id="${filter.toLowerCase()}label"><input class="hide" type="radio" name="filter" id="${filter.toLowerCase()}"> ${filter} </label>`

    //`<label class="filter-choose"><input type="radio" name="filter">${filter.toLowerCase()}">${filter}</label>`
  );
  const domlabel = document.querySelector(`#${filter.toLowerCase()}label`);
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
        setfilterstyle(domlabel);
      } else {
        console.log("Checkbox is not checked..");
        displayLoc(locint);

        setfilterstyle(domlabel);
      }
    });
}

//filterSetting("none");
//filterSetting("Bahnhof");

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
  park,
  important,
  "none",
];

for (let i = 0; i < alltags.length; i++) {
  filterSetting(alltags[i]);
}
//`<label><input type="radio" name="filter" id="${filter.toLowerCase()}">${filter}</label>`
