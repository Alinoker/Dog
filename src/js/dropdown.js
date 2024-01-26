const button = document.getElementById("buttonlist")
button.onclick = dropdown;
console.log("buttonlist")

function dropdown() {
  const dogspace = document.getElementById("breedlistfieldset");
  if (
    dogspace.style.display === "none" ||
    dogspace.style.display === ""
  ) { console.log("hello world")
    dogspace.style.display = "block";
  } else {
    dogspace.style.display = "none";
  }
  console.log("buttonlist")
}
