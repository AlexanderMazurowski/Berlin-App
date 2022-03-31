"use strict"

document.querySelector("#id").addEventListener("input", e=> {
    console.log("worked")
    const inputValue = e.target.value.toLowerCase()
    if(inputValue=""){
        displayLoc(locint)
    }else{
    console.log(inputValue)
    locint.forEach(loc => {
        const isVisible = loc.name.toLowerCase().includes(inputValue)
        loc.hide = isVisible
    })
    displayLocSearch(locint);
}

})