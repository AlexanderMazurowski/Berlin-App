"use strict"

const searchbar = document.querySelector(".search-field")

searchbar.addEventListener("input", e=> {
    const inputValue = e.target.value
    if(inputValue=""){
        displayLoc(inputValue)
    }else{
    console.log(inputValue)
    locint.forEach(loc => {
        const isVisible = loc.name.toLowerCase().includes(inputValue)
        loc.hide = isVisible
    })
    displayLocSearch(locint);
}

})