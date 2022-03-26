"use strict"

function createLocations(){
    let finalLocation=[]
    for (let i = 0; i < locations.length; i++) {
        finalLocation[i] = new Location(...locations[i], latlon)
        finalLocation[i].getCordinatesAndDistance()
    }
    return finalLocation
}