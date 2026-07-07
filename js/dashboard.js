const button = document.getElementById("darkModeBtn");
button.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        button.textContent = "light Mode"
    }else{
        button.textContent = "Dark Mode"
    }
})