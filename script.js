//generate random password
function generate(){

    //set passsword length/complexity
    var complexity = document.getElementById("slider").value;

    //possible password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

    var password = "";

    //create for loop to choose password characters

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;
}

//set default length display of 68
document.getElementById("length").innerHTML = "Length: 68";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//fucntion to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard");
}