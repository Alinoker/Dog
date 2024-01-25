breedlistbutton.onclick = dropdown;

function dropdown(){
  let dogspace = document.getElementById(divfieldset);
  if(divfieldset.style.display === "none" || divfieldset.style.display === ""){
    divfieldset.style.display = "block";
  }
  else{
    divfieldset.style.display = "none";
  }

}

