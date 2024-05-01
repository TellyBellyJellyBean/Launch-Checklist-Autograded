// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");



window.addEventListener("load", function() {
    // console.log(document)
    // console.log(window)
    const formSubmit = document.getElementById("formSubmit");
    formSubmit.addEventListener("click", function(event){
        event.preventDefault();
        console.log(document)
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let launchStatus = document.getElementById("launchStatus");
        let list = document.getElementById("faultyItems");
        

        console.log(pilot, copilot, fuelLevel,cargoLevel);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        //faultyItems goes here as an argument
        //maybe try pilot.value here
        
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        console.log(planet);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance
        let moons = planet.moons
        let image = planet.image
        addDestinationInfo(document, name, diameter, star, distance, moons, image);
    })

    



 });