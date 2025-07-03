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
      <h2>${salon.name}</h2>   
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


// Display the total number of pets
function displayPetCount() {
  const countElement = document.getElementById("petCount");
  if (countElement) {
    countElement.innerText = "Total Pets: " + pets.length;
  }
}

// Display Pet Names
function displayRow() {
  const tbody = document.querySelector("#petList tbody");
  tbody.innerHTML = ""; 

  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];

    let row = document.createElement("tr");

    row.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.service}</td>
      <td>${pet.breed}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>
    `;

    tbody.appendChild(row);
  }
}

//Delete Button
function deletePet(index) {
  if (confirm("Are you sure you want to delete this pet?")) {
    pets.splice(index, 1);     // Remove pet from array
    displayRow();              // Re-render the table
    displayPetCount();         // Update count if you're showing it
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

displayPetCount();              
displayRow();  

  // Clear form
  document.getElementById("petForm").reset();
}

document.getElementById("petForm").addEventListener("submit", registerPet);


// Call display Ffnctions 
document.addEventListener("DOMContentLoaded", () => {
  displaySalonInfo();
  displayPetCount();
  displayRow();
});


