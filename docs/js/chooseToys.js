     function buyToys () {
       //Get remaining PP
        queryString = window.location.search;
          urlParams = new URLSearchParams(queryString);
          var pawPointsAvailable = urlParams.get("pawPointsAvailable");
        
          var toy;  
          var cost = 0;
          //Set while loop
          while ( toy !=="n") {
            //prompt user  
            toy = prompt(
              "Available Paw Points: " + pawPointsAvailable + "\n" + 
              "Enter A-G to choose which toy you would like to buy. \n" + 
              "A.)Fun hat for 10 PP\n" + 
              "B.)Laser for 15 PP\n" + 
              "C.)Large Ball for 20 PP\n" + 
              "D.)Pool for 300 PP\n" + 
              "E.)Chew toy for 17 PP\n" + 
              "F.)Large basket of Toys for 100 PP\n" + 
              "G.)Small basket of toys for 75 PP" + 
              '\nOr enter "n" to stop' 
            );  
            if (toy === null || toy === "") {
              alert("Please enter an acceptable value.");

            }else if (toy ==="n") {
              break;
            }else {  
            //Compare user entry to values  
            switch (toy) {
              case "A" :
                cost = 10;
                break;
              case "B" :
                cost = 15;
                break;
              case "C" :
                cost = 20;
                break;   
              case "D" :
                cost = 300;
                break; 
              case "E" :
                cost = 17;
                break; 
              case "F" :
                cost = 100;
                break;
              case "G" :
                cost = 75;
                break;   
              default:
                alert("Please enter a value between A ang G. Be sure to capitalize.");
                return;              
            }
            //Calculations
            if (cost > pawPointsAvailable) {
              alert("You don't have enough paw points to buy this toy!"); 
            } else {  
              pawPointsAvailable -= cost; 
            }      
            }  
          }    
          document.write("<p>Remaining Paw Points: " + pawPointsAvailable + "</p>");
          document.write("<br>" + "I hope you had fun shopping for your new pet!" + "<br>Press the button to start over.");
          document.write('<button onclick="window.location.href=\'FinalOpeningPage.html\'">Start Over</button>');
  
      }
      //Run function
      buyToys();