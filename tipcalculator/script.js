// script.js

// Custom function
function calculateTip() {
    
    // Store the data of inputs
    const billAmount = document.getElementById("billAmount").value;
    const serviceQuality = document.getElementById("serviceQuality").value;
    const numPeople = document.getElementById("totalPeople").value;
    const calculate = document.getElementById("calculate");
    
    // Quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values =)))");
        return; // this will prevent the function from continuing
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
        
    } else {
        
        document.getElementById("each").style.display = "block";
        
    }
    
    // Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    
    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
calculate.onclick = function() {
    calculateTip();};











