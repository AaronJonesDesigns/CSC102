// JavaScript defining the playZeblor function and directing it to the site where Zeblor can be played.
function playZeblor() {
        window.location.href = "https://www.construct.net/en/free-online-games/zeblor-mystic-journey-doom-78664/play"
    }


function validateForm(){
    // get the users first name so we can validate it
    let firstName = document.getElementById("txtFirstName").value;

    // get the users last name so we can validate it
    let lastName = document.getElementById("txtLastName").value;

    // get the user's Zip Code so we can validate it
    let zipCode = document.getElementById("txtZip").value;

    // create a new variable to hold both first and last name
    let fullName = firstName + " " + lastName;

    // Create a shortcut to the message area (div) in the HTML
    let divMessage = document.getElementById("divMessage");

    console.log("firstName=" + firstName);
    console.log("lastName=" + lastName);
    console.log("zipCode=" + zipCode);
    console.log("fullName=" + fullName);

    // Error message if the Full Name has either 1 chara or more than 10
    // for assignment change 10 to 20
    if (fullName.length == 1){
        divMessage.innerHTML = "Zeblor needs to validate your data."
    }
    
    else if (fullName.length > 20){
        // User gets notified of the error and does not get secret message
        divMessage.innerHTML = "Zeblor can't read big words. Please shorten your name.";
    }
    // assignment is single equal sign - = - changing value on the left to match the value on the right
    // equality uses double equal sign - == - checks to see if value on the left hand side equals the value on the right hand side
    // in our if / else if statements we always are are checking equality
    else if (firstName.trim() == ""){
        divMessage.innerHTML = "Zeblor wonders...what is your first name?";
    }
    // Error message for people who forget that they have a last name
    else if (lastName.trim() == ""){
        divMessage.innerHTML = "Zeblor wonders...what is your last name?";
            
    }
    // if the zip code is not exactly 5 digits long
    else if (zipCode.length != 5){
        // User gets notified of the error and does not get secret message
        divMessage.innerHTML = "Zeblor needs to know what part of the planet you live on (Zip).";

    }
    // if we get to this else statement, it means that all of the inputs validated successfully. Give secret message
    else{
        // the inputs validated successfully, show the secret message
        divMessage.innerHTML = "Zeblor has validated your existance!  " + fullName + " you are clear for take off!"

    }
        
    //prevent the form from submitting 
    return false;
}
