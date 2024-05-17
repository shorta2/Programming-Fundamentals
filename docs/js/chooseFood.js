      //Get remaining PP
      queryString = window.location.search;
        urlParams = new URLSearchParams(queryString);
        var pawPointsAvailable = urlParams.get("pawPointsAvailable");
        
        document.getElementById("pawPointsAvailable").textContent = pawPointsAvailable;
       //Create function 
      function buyingFood() {
        //Declare Variables
        var form = document.getElementById("chooseFood");
        
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          
          var foodChoice = document.getElementById("food").value;
          var foodCost = 0;
          //Compare user entry to values
          switch (foodChoice) {
            case "A":
              foodCost = 5;
              break;
            case "B":
              foodCost = 6;
              break; 
            case "C":
              foodCost = 8;
              break;    
            case "D":
              foodCost = 15;
              break;  
            case "E":
              foodCost = 13;
              break;  
            case "F":
              foodCost = 20;
              break;
            case "G":
              foodCost = 60;
              break;
            default:
              alert("Please enter a value between A ang G. Be sure to capitalize.");
              return;      
          }
          //Calculations
          pawPointsAvailable -= foodCost;
            document.getElementById("pawPointsAvailable").textContent = pawPointsAvailable;
          });
          //Call button to move to next page
          var nextButton = document.getElementById("nextButton");
          nextButton.addEventListener("click", function(event) {
            window.location.href = `chooseToys.html?pawPointsAvailable=${pawPointsAvailable}`;
          });  
      }
      //Run the function
      buyingFood();