import Sprite from "/sprite.js";
import NPC from "/npc.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { bullet_collision_npc } from "/npc.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

write_title("CLEAN THE FUCKING TOILET")
document.body.style.cursor = 'url("/cursor_img/schwamm.png")'

// Ambience Audio
var city_ambience = new Audio("/sfx/toilet_flush.mp3");
city_ambience.volume = 0.3;
city_ambience.play();

// generate dirt particles
for (let i=0; i < 150; i++) {
    let dirt_particle = document.createElement("img")
    dirt_particle.classList = "dirt"

    let random_shit = Math.floor(Math.random() * 4 + 1)
    dirt_particle.src = "/maps/map_img/particles/shit_particle" + random_shit + ".png" 
    dirt_particle.style.height = "30px"
    dirt_particle.style.width = "30px" 
    dirt_particle.style.position = "absolute" 

    let random_top = Math.floor(Math.random() * 550 + 100)
    let random_left = Math.floor(Math.random() * 1050 + 250)
    dirt_particle.style.top = random_top + "px"
    dirt_particle.style.left = random_left + "px"
    
    document.body.append(dirt_particle)
}

document.onmouseover = function(e) {
    if (e.target.classList == "dirt") {
        var remove_sound = new Audio("/sfx/pop.mp3")
        remove_sound.volume = 0.4;
        remove_sound.play()
        e.target.remove()
    }
}

let character_icon = "/dialog_faces/player_face_war.png"
let instructor_scream_icon = "/dialog_faces/mil_instructor/instructor_screaming.png"

const monolog = new Dialog("dialog", [
    ["But how will it help me to become a better fighter Sir?", character_icon],
    ["Shut up your mouth Green Ass!!!", instructor_scream_icon],
    ["MY ORDERS ARE NOT FOR DISCUSSION - ONLY EXECUTION!!!", instructor_scream_icon],
    ["Now I want this toilet to be as clean as your browser history!!!", instructor_scream_icon],
    ["Sir yes Sir!", character_icon]
])

document.body.addEventListener("keydown", (e) => {
    if (e.key == "e") {monolog.start_dialog(e)}
})

let h1_counter = document.querySelector(".pushup_h1")
const interval = setInterval(() => {
    let n_particles = document.querySelectorAll(".dirt").length
    h1_counter.innerHTML = "Particles Left: " +  n_particles;
    if (n_particles == 0) {
        clearInterval(interval)
        window.location.href = "http://127.0.0.1:3000/maps/war_maps/car_to_war.html"
    }
}, 100)
