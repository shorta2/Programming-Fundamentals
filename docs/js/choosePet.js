document.getElementById("petSelector").addEventListener("submit", function(event) {
      event.preventDefault();

    const petType = document.getElementById("petType").value;
    const petName = document.getElementById("petName").value;

    window.location.href = `chooseHouse.html?petType=${petType}&petName=${petName}`;   
    });