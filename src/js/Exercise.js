const dogbreed = [
  {
    name: "Irish wolfhound",
    description: ["Tall", "Gentle", "Powerful"],
  },
  {
    name: "Irish Setter",
    description: ["Energetic", "Elegant", "Affectionante"],
  },
  {
    name: "Kerry Blue Terrier",
    description: ["Curly", "Loyal", "Spirited"],
  },
  {
    name: "Soft Coated Wheaten Terrier",
    description: ["Friendly", "Playful", "Hypoallergenic"],
  },
];

const container = document.getElementById("breedsdiv");

dogbreed.forEach(function (breed) {
  const h2 = document.createElement("h2");
  h2.textContent = breed.name + breed.description;
  container.appendChild(h2);
});

//dogbreed.map(function(instance){//
//return instance.name + " " + instance.description
//});

//for (let i = 0; i < arr.length; i++){//
