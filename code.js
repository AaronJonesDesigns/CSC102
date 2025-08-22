// Variable declaration
let memeImage = document.getElementById('memeImage')
// default location variable allows the stopMovement function to move the image back to the starting top position
let defaultTop = 240;
// default location variable allows the stopMovement function to move the image back to the starting left position
let defaultLeft = 300;
let intervalID = 0;

function oldSiteLink() {
        window.location.href = "https://aajones79.wixsite.com/aaronsjonesdesigns"
    }

// Starts memeImage moving to random location once every second.  Also, disables the "Start" button and enables the "Stop" button
function startMovement(){
    // set it up so that we cannot click on the start button
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    
    // in place of the getRandomNumber function
    intervalID = setInterval(function () {
    // sets max left value to the limits of the viewable screen (so it won't go off screen)
    let newLeft = window.innerWidth - memeImage.offsetWidth - 1;
    // sets max top value to the limits of the viewable screen (so it won't go off screen)
    let newTop = window.innerHeight - memeImage.offsetHeight - 1;
    // changing CSS properties for the image and generates random value for newLeft
    memeImage.style.left = Math.floor(Math.random() * newLeft) + 'px';
    // changing CSS properties for the image and generates random value for newTop
    memeImage.style.top = Math.floor(Math.random() * newTop) + 'px';
    
    console.log("left=" + newLeft + "px");
    console.log("top=" + newTop + "px");
    }, 1000);  // 1000 is ni miliseconds - 1000 miliseconds is 1 second //
}
// function to stop the image from moving
function stopMovement(){
    // set it up so that we cannot click on the start button
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    // stop the image from moving and return it to the default position
    clearInterval(intervalID);
    memeImage.style.top = defaultTop + 'px';
    memeImage.style.left = defaultLeft + 'px';
}
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

    // Console logs
    console.log("firstName=" + firstName);
    console.log("lastName=" + lastName);
    console.log("zipCode=" + zipCode);
    console.log("fullName=" + fullName);

    // Error message if the Full Name has either 1 chara or more than 10
    // for assignment change 10 to 20
    if (fullName.length == 1){
        divMessage.innerHTML = "Zeblor needs to validate your data."
    }
    // Error message for names exceed 20 full name characters
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
function validateFeedback() {
    // get the users inputs and comments from the feedbackForm element
    let form = document.getElementById("feedbackForm");
    let formData = new FormData(form);
    let results = {};

    for (let entry of formData.entries()) {
        let key = entry[0];
        let value = entry[1];
        results[key] = value;
    }

    console.table(results);

    // Acknowledgement message to user that they feedback has been recorded
    document.getElementById("ackMessage").textContent = "Zeblor thanks you for helping make his world better!";

    // Resets the form
    form.reset();

    // prevents page reload
    return false;
}
function checkPalindrome(event){
    // Prevent the form from submitting 
    event.preventDefault();

    // Create a shortcut to the txtWord user input
    let userInput = document.getElementById("txtWord").value;

    // create shorcut to the output div
    let divPalinResults = document.getElementById("divPalinResults");

    // set up a variable to hold if the word is a palindrome or not
    let isPalin = isPalindrome(userInput);

    // this is equivalent to isPalin == true
    if (isPalin){
        divPalinResults.textContent = userInput + " is a palindrome!"
    }
    // this is not a Palindrome
    else{
        divPalinResults.textContent = userInput + " is not a palindrome!"
    }

}
// Function to see if the string is a palindrome
// stringToTest is what the user entered
function isPalindrome(stringToTest){
    // convert the string to test to lowercase because I think that is a better user experience
    stringToTest = stringToTest.toLowerCase();
            
    // set up a variable to reverse the contents of and set it to the original string
    let stringToReverse = stringToTest;

    // convert the string to an array (each letter in their own slot)
    // reverse the contents of our new array (run the letter is the reverese order)
    // then join the array so it becomes a backwards string
    stringToReverse = stringToReverse.split("").reverse().join("");

    // compare the original string to the backwards string
    // you can use == or ===
    if (stringToTest == stringToReverse){
        // return true to the calling code
        return true;
    }
            
    // as a default, return false
    return false;

}
// Sound functions
// function to add an audio element
function addSound(){
    // shortcut to play button
    let btnPlay = document.getElementById("btnPlay");
    // shortcut to play button
    let btnPause = document.getElementById("btnPause");
    // shortcut to add sound button
    let btnAddSound = document.getElementById("btnAddSound");
    // create an audio element
    let audZeblor = document.createElement("audio");

    // give the audio element an id
    audZeblor.setAttribute("id", "audZeblor");

    // set up the source for the audio file
    audZeblor.setAttribute("src", "Ludum Dare 30 04.ogg");

    document.body.appendChild(audZeblor);

    // add controls attribute
    // audZeblor.setAttribute("controls", "controls"); //

    // unhide btnPlay
    btnPlay.hidden = false;
    
    // unhide btnPlay
    btnPause.hidden = false;
    
    //disable btnPause
    btnPause.disabled = true;

    // hide btnAddSound
    btnAddSound.hidden = true;

//function to start playing the audio element
}

function playSound(){
    //shortcut to audio element that we created
    let audio = document.getElementById("audZeblor");

    // play the audio
    audio.play();

    //call the function instead to disable/enable buttons
    manageButtons(true, false);
}

// function to pause audio
function pauseSound(){
    //shortcut to audio element that we created
    let audio = document.getElementById("audZeblor");

    // play the audio
    audio.pause();

    //call the function instead to disable/enable buttons
    manageButtons(false, true);
}

// function to manage the buttons
function manageButtons(disableplay, disablePause){
    // shortcut to play button
    let btnPlay = document.getElementById("btnPlay");
    
    // shortcut to play button
    let btnPause = document.getElementById("btnPause");

     // enable btnPlay
    btnPlay.disabled = disableplay;
    
    // disable btnPlay
    btnPause.disabled = disablePause;
}

function loadTableData(){
    let arrProblems = [
        ["Crowdstrike", 2024, "5.4B", "Faulty update to security software"],
        ["Facebook", 2020, "$90M", "Misconfiguration which cased downtime"],
        ["Citibank", 2020, "$900M", "Mistake transfer"],
        ["Mars Climate Orbiter", 1999, "$327M", "Metric versus imperial measurement issue"]
    ];

    // for loop to loop through the rows
    for (let i=0; i < arrProblems.length; i++){
        // create a tr tag
        let tr = document.createElement("tr");
        // for loop for each colum of data
        for (let j=0; j < arrProblems[i].length; j++){
            // create a td tag for each peice of data row/array
            let td = document.createElement("td");

            // set the data from row i and column j to the td that we just created
            td.textContent = arrProblems[i][j];

            // add the td to the tr
            tr.appendChild(td);
        }
        // add the row to the table
        document.getElementById("tblData").appendChild(tr);
    }
}
