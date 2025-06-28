// Creating an array to hold all the pet objects
let pets = [
  {
    name: "Bella",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "Golden Retriever"
  },
  {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Bathing",
    breed: "German Shepherd"
  },
  {
    name: "Luna",
    age: 2,
    gender: "Female",
    service: "Nail Trim",
    breed: "Poodle"
  }
];

// Function to display the total number of pets
function displayPetCount() {
  let countElement = document.getElementById("petCount");
  countElement.innerText = "Total Pets: " + pets.length;
}

// Function to display pet names in the HTML
function displayPetNames() {
  let petListElement = document.getElementById("petList");
  
  // Clear the list first
  petListElement.innerHTML = "";
  
  // Loop through the array and add each name to the list
  for(let i = 0; i < pets.length; i++) {
    let petName = pets[i].name;
    let listItem = document.createElement("li");
    listItem.innerText = petName;
    petListElement.appendChild(listItem);
  }
}

// Call the functions to show the info on the page
displayPetCount();
displayPetNames();