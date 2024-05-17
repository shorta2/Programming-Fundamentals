// Get remaining PP 
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  var pawPointsAvailable = urlParams.get("pawPointsAvailable");
      
  document.getElementById("pawPointsAvailable").textContent = pawPointsAvailable;   
        
  function buyingABed() {
    //Declare Variables    
    var form = document.getElementById("chooseBed");
      
    form.addEventListener("submit", function(event) {
      event.preventDefault();
        
      var bedChoice = document.getElementById("bed").value;
        
      var bedCost = 0;
      //Compare user entry to values  
      switch (bedChoice) {
        case "A":
          bedCost = 2;
          break;
        case "B":
            bedCost = 5;
            break; 
         case "C":
            bedCost = 7;
            break;
        case "D":
            bedCost = 9;
            break;
        case "E":
            bedCost = 15;
            break; 
        default:
          alert("Please enter a value between A and E. Be sure to capitalize");
          return;
      }            
      //Calculations  
      pawPointsAvailable -= bedCost;
      document.getElementById("pawPointsAvailable").textContent = pawPointsAvailable; 
    });
      //Call on button to move to next page
      var nextButton = document.getElementById("nextButton");
      nextButton.addEventListener("click", function() {
        window.location.href = `chooseFood.html?pawPointsAvailable=${pawPointsAvailable}`;
      });
  }

      // Run the function
      buyingABed();