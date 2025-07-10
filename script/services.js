// Constructor for the services
function Service(name, description, duration, price){
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.price = price;
};



//wait until the html is loaded
$(document).ready(function(){

//Select the form with jQuery and track the event (submit)
$("#serviceRegistrationForm").on("submit", function (event){
   // console.log(event);
event.preventDefault();

// Select the inputs and get the v alues using jQuery
const name = $("#serviceName").val().trim();
const description = $("#serviceDescription").val().trim();
const duration = $("#serviceDuration").val().trim();
const price = $("#servicePrice").val().trim();

let isValid = true;

      // Input colors
$("#serviceRegistrationForm input").removeClass("error");

if (name === "") {
$("#serviceName").addClass("error");
isValid = false;
}

if (description === "") {
$("#serviceDescription").addClass("error");
isValid = false;
}

if (duration === "") {
$("#serviceDuration").addClass("error");
isValid = false;
}

if (price === "" || isNaN(price) || parseFloat(price) <= 0) {
$("#servicePrice").addClass("error");
isValid = false;
}
if (isValid) {

// Create new Service object
const newService = new Service(name, description, duration, parseFloat(price));
console.log("Registered service:", newService);

localStorage.setItem("serviceName", name);
localStorage.setItem("serviceDescription", description);
localStorage.setItem("serviceDuration", duration);
localStorage.setItem("servicePrice", price); 


// Remove red borders
$("#serviceRegistrationForm input").removeClass("error");
}

// Console log the inputs to double check the information
console.log(` Service Name: ${name}, Service Description ${description},Service Duration ${duration}, Service Price: ${price}`);

});
 });
 
 // Clear the form
 $("#clearButton").click(function () {
$("#serviceRegistrationForm")[0].reset();
$("#serviceRegistrationForm input").removeClass("error");
});

//Dark Mode

$("#changeModeButton").click(function(){

$("body").toggleClass("dark-mode");

const isDark = $("body").hasClass("dark-mode");

$("h2").text(isDark ? "Dark" : "Light");


 });

// Get form info
const serviceName = $("#serviceName").val().trim();
const serviceDiscription = $("#serviceDescription").val();
const serviceDuration = $("#serviceDuration").val().trim();
const servicePrice = $("#servicePrice").val().trim();

    // Confirm we are getting the info
console.log(serviceName, serviceDescription, serviceDuration, servicePrice); 

    // Clear the form
$("form").get(0).reset();

    // Retrieve data
$("#loadButton").click(function(event){
event.preventDefault();

   //Get the stored username
const serviceNameStored = localStorage.getItem("serviceName");
const serviceDescriptionStored = localStorage.getItem("serviceDescription");
const serviceDurationStored = localStorage.getItem("serviceDuration");
const servicePriceStored = localStorage.getItem("servicePrice");

    // If there is a info, Added to the html
if (serviceNameStored){
    $("#resultservicename").text(serviceNameStored);
} else {
    $("#resultservicename").text("No data found");
}

if (serviceDescriptionStored){
    $("#resultservicedescription").text(serviceDescriptionStored);
} else {
    $("#resultservicedescription").text("No data found");
}

if (serviceDurationStored){
    $("#resultserviceduration").text(serviceDurationStored);
} else {
    $("#resultserviceduration").text("No data found");
}

if (servicePriceStored){
    $("#resultserviceprice").text(servicePriceStored);
} else {
    $("#resultserviceprice").text("No data found");
}
    // Clear data
$("#clearButton").click(function(event){
event.preventDefault();

const confirmation = confirm("Are you sure you want to clear the data?")

if(confirmation) {
    localStorage.clear();
     //refresh the page
    location.reload();
}
});
});


