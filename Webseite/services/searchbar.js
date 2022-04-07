"use strict";

document.querySelector("#Search").addEventListener("input", (e) => {
  //console.log("worked");
  const inputValue = e.target.value.toLowerCase();

  if (inputValue == "") {
    displayLoc(locint);
  } else {
    //console.log(inputValue);
    locint.forEach((loc) => {
      const isVisible = loc.name.toLowerCase().includes(inputValue);
      //console.log(loc.name.toLowerCase());
      loc.hide = !isVisible;
    });
    displayLocSearch(locint);
  }
});
