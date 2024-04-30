// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   const missionTargetDiv = document.getElementById(missionTarget)
 }
 
 function validateInput(testInput) {
    
    if (testInput === "" || testInput === null || testInput === 0){
        return "Empty";
    }   else if (!isNaN(Number(testInput))){
        return "Is a Number"
    }   else {
        return "Not a Number"
    }

}





function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // event.preventDefault()
    
    // let faultyItems = document.getElementById("faultyItems"); pass into formSubmission as list for script.js
    // console.log(document, list, pilot, copilot, fuelLevel, cargoLevel)

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields must be filled out properly.");
    }   else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"){
            alert("Pilot and co-pilot names cannot contain numbers. Sorry.")
    }   else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
            alert("Fuel level and cargo mass must be an acceptable numerical value.");
    }   else {
            pilotStatus.innerHTML = `${pilot} is ready for launch!`;
            copilotStatus.innerHTML = `${copilot} is ready for launch!`;
            list.style.visibility = "hidden"
    }



    if (validateInput(Number(fuelLevel)) < 10000){
            fuelLevelStatus.innerHTML = "Insufficient fuel level!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            list.style.visibility = "visible";
            launchStatus.style.color = "red";

    }   else if (validateInput(Number(cargoLevel)) > 10000){
            list.style.visibility = "visible";          
            cargoLevelStatus.innerHTML = "Too much mass for shuttle takeoff!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
    }   else {
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "green";
    }
    // let formFieldData = {
    //     pilot: input.,
    //     copilot: "",
    //     fuelLevel: Number(input.fuelLevel),
    //     cargoLevel: Number(input.cargoLevel),
    // }
 }
 
 async function myFetch() {
     let planetsReturned = "";
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return response.json(planetsReturned);
 }
 
 function pickPlanet(planets) {
    return Math.random(planets);
    console.log
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

