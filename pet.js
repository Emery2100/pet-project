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


// Salon Object Literal
const salon = {
  name: "Gotham Grooming",
  address: {
   street: "123 Joker Ave",
   city: "Gotham"
  },
  hours: {
    open: "9:00 AM",
    close: "5:00 PM"
  }
};


// Display Salon Info
function displaySalonInfo() {
  const salonInfo = document.getElementById("salonInfo");
  if (salonInfo) {
    salonInfo.innerHTML = `
      <p><strong>${salon.name}</strong></p>
      <p>Address: ${salon.address.street}, ${salon.address.city}</p>
      <p>Hours: ${salon.hours.open} - ${salon.hours.close}</p>
    `;
  }
}

// Pet Constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Create 3 Pets
let pet = [
  new Pet("Bella", 3, "Female", "Golden Retriever", "Grooming", "Dog"),
  new Pet("Max", 5, "Male", "German Shepherd", "Bathing", "Dog"),
  new Pet("Luna", 2, "Female", "Poodle", "Nail Trim", "Dog")
];

// Display the total number of pets
function displayPetCount() {
  const countElement = document.getElementById("petCount");
  if (countElement) {
    countElement.innerText = "Total Pets: " + pets.length;
  }
}

// Display Pet Names
function displayPetNames() {
  const petListElement = document.getElementById("petList");
  if (petListElement) {
    petListElement.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerText = pets[i].name;
      petListElement.appendChild(listItem);
    }
  }
}


// Register new pet
function registerPet(event) {
  event.preventDefault(); // stop form from refreshing page

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const breed = document.getElementById("breed").value;
  const service = document.getElementById("service").value;
  const type = document.getElementById("type").value;

  const newPet = new Pet(name, age, gender, breed, service, type);
  pets.push(newPet);

  // Clear form
  document.getElementById("petForm").reset();
}

// Call display Ffnctions 
displaySalonInfo();
displayPetCount();
displayPetNames();

