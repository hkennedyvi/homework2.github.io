//generate password
function generate(){

    //set the password length
    var complexity = document.getElementById("slider").value;

    //store the possible password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

    var password = "";

    //loop to choose password characters

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to the text area in browser
    document.getElementById("display").value = password;
}

//set default length display of 68
document.getElementById("length").innerHTML = "Length: 68";

//set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}