// Write your JavaScript code here!



window.addEventListener("load", function() {
    // console.log(document)
    // console.log(window)
    const formSubmit = document.getElementById("formSubmit");
    formSubmit.addEventListener("click", function(event){
        event.preventDefault();
        console.log(document)
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelLevelStatus = document.getElementById("fuelStatus");
        let cargoLevelStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");
        let list;
        
        formSubmission(document, list, pilotStatus, copilotStatus, fuelLevelStatus, cargoLevelStatus)
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    

    //faultyItems goes here as an argument


 });