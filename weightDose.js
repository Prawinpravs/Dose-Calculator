

function doseCalc() {
    var weight = document.getElementById('weight').value;
    var gram = weight*(0.05/1)
    var result = document.getElementById('result').innerHTML = "PI Dose: " + gram;
    // document.write(result);
}

function pound() {
    var weight = document.getElementById('weight').value;
    var kgtToPound = weight*(2.2/1)
    var result = document.getElementById('result').innerHTML = "PI Dose: " +weight+" kg in " +kgtToPound+ " Pound(s)";
    // document.write(result);
}


function kg() {
    var weight = document.getElementById('weight').value;
   // var kgtToPound = weight*(2.2/1)
    var result = document.getElementById('result').innerHTML = "PI Dose: " + weight + " kg ";
    // document.write(result);
}