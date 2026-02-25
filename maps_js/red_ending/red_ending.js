import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import NPC from "/npc.js";
import { check_collision_player } from "/sprite.js";
import { write_title, write_credits, scene_transition } from "/cutscene_tools.js";

// Ending Song
var city_ambience = new Audio("/maps/ambience_sounds/red_ending_song.mp3");
city_ambience.volume = 0.4;
city_ambience.loop = true;
city_ambience.play();

let red_end_img = document.querySelector(".red_ending_img")
let water_img = document.querySelector(".red_ending_water")

await new Promise((resolve) => setTimeout(resolve, 1500));
const interval = setInterval(() => {
    red_end_img.style.top = (parseInt(red_end_img.style.top) + 1) + "px"
    water_img.style.top =  (parseInt(water_img.style.top) + 1) + "px"
    if (parseInt(red_end_img.style.top) === 725) {
        clearInterval(interval)
        write_credits([
            "Mark returned to normal life.", 
            "His apartment was abandoned after return.",
            "But he managed to return ownership of it.",
            "He filled his apartment with furniture.",
            "Mark finally found a job as builder.",
            "With enough money he could buy himself a car.",
            "He got married and lives in Port Luna.",
            "It was one of the thousands of stories.",
            "The End."
        ], () => {
            scene_transition(3000, true)
            setTimeout(() => {window.location.href = "http://127.0.0.1:3000/main_menu/menu.html"}, 7000)
        })
        
    }
}, 15)


