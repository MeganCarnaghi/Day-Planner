// Create a variable for the current date display
var currentDate = $('#currentDay');

// Create a variable for the save buttons
var saveBtn = $('#save-button');

// Create a variable for the current time
let currentTime = parseInt((moment().format('H')));

// Display the current date at the top of the page
currentDate.text(moment().format('MMMM Do, YYYY'));

// Create an array for the different times
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Create variables for the content displayed in each of the time blocks
let taContent1 = localStorage.getItem("event1");
$("#ta1").text(taContent1);

let taContent2 = localStorage.getItem("event2");
$("#ta2").text(taContent2);

let taContent3 = localStorage.getItem("event3");
$("#ta3").text(taContent3);

let taContent4 = localStorage.getItem("event4");
$("#ta4").text(taContent4);

let taContent5 = localStorage.getItem("event5");
$("#ta5").text(taContent5);

let taContent6 = localStorage.getItem("event6");
$("#ta6").text(taContent6);

let taContent7 = localStorage.getItem("event7");
$("#ta7").text(taContent7);

let taContent8 = localStorage.getItem("event8");
$("#ta8").text(taContent8);

let taContent9 = localStorage.getItem("event9");
$("#ta9").text(taContent9);


// a function to run through all of the timeblocks and set the class accordingly
function compareTime(){
for(var i = 0; i < time.length; i ++) {
    let textArea = time[i];

    if(textArea < currentTime) {
        $("#ta"+ i +"parent").addClass("past")        

    } 
    if(textArea == currentTime) {
    $("#ta"+ i +"parent").addClass("present")

    } 
    if(textArea > currentTime) {
    $("#ta"+ i +"parent").addClass("future")
    }
    
    }
}
compareTime();


// Function to save the events to local sotrage when save button is clicked
function saveEvents(){
$("#save-button1").on("click", function(event){
     if(event.target.matches = $("#button")) {
     let ta1 = $("#ta1");
     localStorage.setItem("event1", ta1.val().trim());
    }})
    
    
$("#save-button2").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta2 = $("#ta2");
        localStorage.setItem("event2", ta2.val().trim());
    }})

$("#save-button3").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta3 = $("#ta3");
        localStorage.setItem("event3", ta3.val().trim());
    }})

$("#save-button4").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta4 = $("#ta4");
        localStorage.setItem("event4", ta4.val().trim());
    }})

$("#save-button5").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta5 = $("#ta5");
        localStorage.setItem("event5", ta5.val().trim());
    }})

$("#save-button6").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta6 = $("#ta6");
        localStorage.setItem("event6", ta6.val().trim());
    }}) 

$("#save-button7").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta7 = $("#ta7");
        localStorage.setItem("event7", ta7.val().trim());
    }}) 

$("#save-button8").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta8 = $("#ta8");
        localStorage.setItem("event8", ta8.val().trim());
    }})

$("#save-button9").on("click", function(event) {
        if(event.target.matches = $("#button")) {
        let ta9 = $("#ta9");
        localStorage.setItem("event9", ta9.val().trim());
    }})  
}

saveEvents();

// Function to clear all events from local storage and from the textareas
$("#clear").on("click", clearEvents);

function clearEvents() {
    localStorage.clear();
    $(".textarea").text("");
}