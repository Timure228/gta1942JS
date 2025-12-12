var click_sound = new Audio("./click_sound.mp3")
click_sound.volume = 0.8;

document.querySelectorAll("#menu_button").forEach(button => {
    
    button.addEventListener("click", () => {
        click_sound.play()
        if (button.innerHTML == "START") {  
            setTimeout(() => {
            window.location.href = "/maps/civil_maps/bay.html";
            }, 550);
        } else {
            setTimeout(() => {
            window.location.href = "https://www.google.com/";
            }, 550);
        }
    
    })
})

