var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    console.log(firstName);
    console.log(lastName);
    document.getElementById("p1_fullName").innerHTML= fullName;
    var x ;
    if ( firstName && lastName){ 
    x = "Yes"; 
    }
    else {
    x = "Invalid";
    }
    document.getElementById("p1_valid").innerHTML= x;
    
    var a = firstName.length;
    var b = lastName.length;
    var c = a + b;
    document.getElementById("p1_fullNameLength").innerHTML= c ;
    




    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById("p2_email").innerHTML=emailAddress;
    var e;
    if ( emailAddress.indexOf("@")>-1) {
    e = "Yes";
    }
    else {
    e = "Invalid"
    }
    document.getElementById("p2_valid").innerHTML= e;
    var e_length = emailAddress.length;
  document.getElementById("p2_emailLength").innerHTML= e_length;





    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    document.getElementById("p3_number").innerHTML=randomNumber;
    if  (parseInt(randomNumber) > 0){
    randomNumber = "Yes";
    }
    else { randomNumber = "Nope , not even close";
    }
    document.getElementById("p3_valid").innerHTML=randomNumber;
  





    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    document.getElementsByClassName("input-group").innerHTML=arrayInput;
    
    var a_length = arrayInput.length;
    document.getElementById("p4_arraylength").innerHTML= a_length;
    
    var isNumber = (parseInt(arrayInput) === NaN);
    if (isNaN (arrayInput)){
    arrayInput = "Invalid";
    }else { arrayInput= "Valid"; 
    }
    document.getElementById("p4_valid").innerHTML=arrayInput;
  
    
//Adittional Challange
    
    

    












    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}