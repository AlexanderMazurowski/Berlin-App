"use strict";

function filterSetting(filter) {
  document
    .querySelector(`#${filter.toLowerCase()}`)
    .addEventListener("change", function () {
      if (this.checked) {
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

filterSetting("Döner");
filterSetting("Bahnhof");
