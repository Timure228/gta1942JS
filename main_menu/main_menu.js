import { write_title, write_credits, scene_transition } from "/cutscene_tools.js";

let game_engine_logo = document.querySelector(".game_engine_logo")

var click_sound = new Audio("./click_sound.mp3")
click_sound.volume = 0.8;

document.querySelectorAll("#menu_button").forEach(button => {
    
    button.addEventListener("click", () => {
        click_sound.play()
        if (button.innerHTML == "START") {  
            scene_transition(200, true)
            game_engine_logo.style.top = "-70px"
            game_engine_logo.style.zindex = 1000
            let j = 0;
            setTimeout(() => {
                const interval = setInterval(() => {
                    game_engine_logo.style.opacity = j;
                    j += 0.02
                if (j <= 0) {
                    clearInterval(interval);
                }
            }, 50);
            }, 2500);
            setTimeout(() => {
            window.location.href = "/maps/civil_maps/bay.html";
            }, 7500);
        } else {
            setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=HfeervqhY9Y";
            }, 1550);
        }
    
    })
})


