 function buyingAHouse() { 
  // Declare Variables
  var pawPointsAvailable = 1000;
  var form = document.getElementById("chooseHouse");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the value for petType from choosePet.html
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    var petType = urlParams.get("petType"); 

    // Get value for houseChoice
    var houseChoice = document.getElementById("house").value;

    // Compare Values
    if ((petType !== "bird" && petType !== "duck") && houseChoice === "C") {
      alert("Oh no! The pet you chose has no way to get to a house in the trees! Please choose a different option.");
      return;
    }  
        
    var cost = 0;
    //Compare user entry to values    
    switch (houseChoice) {
      case "A":
        cost = 100;
        break;
      case "B":
        cost = 150;
        break; 
      case "C":
        cost = 300;
        break;
      case "D":
        cost = 350;
        break;
      case "E":
        cost = 400;
        break;
      case "F":
        cost = 450;
        break;
      default:
        alert("Please enter a value between A and F. Be sure to capitalize");
      return;
    }  
        
    // Calculations
    pawPointsAvailable -= cost;
    document.getElementById("pawPointsAvailable").textContent = pawPointsAvailable;   
  });
  //Call on button to go to next page
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", function() {
    window.location.href = `chooseBed.html?pawPointsAvailable=${pawPointsAvailable}`; 
  });
}  

// Run the function
buyingAHouse();