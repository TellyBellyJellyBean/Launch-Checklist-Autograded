// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    const missionTargetDiv = document.getElementById("missionTarget")

    missionTargetDiv.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}"> 
                 `
}

function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))){
        return "Not a Number";
    } else {
        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoLevelStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required");
        // list.style = "visibility: hidden";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Pilot and co-pilot names cannot contain numbers. Sorry.");
        list.style = "visibility: hidden";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Fuel level and cargo mass must be an acceptable numerical value.");
        list.style = "visibility: hidden";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"
    } else {
        if ((Number(fuelLevel)) < 10000 && (Number(cargoLevel)) > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelLevelStatus.innerHTML = "Fuel level too low for launch";
            cargoLevelStatus.innerHTML = "Cargo mass too heavy for launch";
            list.style = "visibility: visible";
            launchStatus.style.color = "red";
        } else if ((Number(cargoLevel)) > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelLevelStatus.innerHTML = "Fuel level high enough for launch"
            cargoLevelStatus.innerHTML = "Cargo mass too heavy for launch";
            list.style = "visibility: visible";
            launchStatus.style.color = "red";
        } else if ((Number(fuelLevel)) < 10000){
            launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelLevelStatus.innerHTML = "Fuel level too low for launch";
            list.style = "visibility: visible";
            launchStatus.style.color = "red";        
        } else {
            list.style = "visibility: visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
            fuelLevelStatus.innerHTML = "Fuel level high enough for launch"
            cargoLevelStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch!";
            launchStatus.style.color = "green";
        }

    }



    

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    //  console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    const selectedPlanet = Math.floor((Math.random() * planets.length));
    console.log(selectedPlanet);
    return planets[selectedPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

