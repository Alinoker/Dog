button.onclick = dropdownquiz;

function dropdownquiz(){
    
    if(fieldsetquiz.style.display === "none" || 
    fieldsetquiz.style.display === ""){
        fieldsetquiz.style.display = "block";
    }
    else{
        fieldsetquiz.style.display === "none"
    }
}