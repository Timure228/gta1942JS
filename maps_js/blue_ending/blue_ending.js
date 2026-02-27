import Dialog from "/dialog.js";
import { write_title, write_credits, scene_transition } from "/cutscene_tools.js";

write_title("1 year later.")

// Ambience Audio
var village_ambience = new Audio("/maps/ambience_sounds/Blue_Ending.mp3");
village_ambience.volume = 0.6;
village_ambience.loop = true;
village_ambience.play();

let character_icon = "/dialog_faces/player_face_village.png"
let lucy_icon = "/dialog_faces/Lucy/lucy.png"
let lucy_icon_confused = "/dialog_faces/Lucy/lucy_confused.png"
let lucy_icon_smile = "/dialog_faces/Lucy/lucy_smiles.png"
let lucy_icon_flirty = "/dialog_faces/Lucy/lucy_flirty.png"

const dialog = new Dialog("dialog", [
    ["Nice View.", lucy_icon],
    ["Can't sleep tonight?", character_icon],
    ["Maybe insomnia?", lucy_icon_smile],
    ["I don't know.", character_icon],
    ["I never asked you where you're from.", lucy_icon],
    ["I'm from a place where there is no return.", character_icon],
    ["Don't be so mysterious.", lucy_icon_flirty],
    ["Im not.", character_icon],
    ["No you are.", lucy_icon_flirty],
    ["However...", character_icon],
    ["We need to put the kids to bed.", character_icon],
    ["...", lucy_icon_smile],
])


dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        let blue_end_img = document.querySelector(".blue_ending_img")
        let sky_img = document.querySelector(".blue_sky")
        
        new Promise((resolve) => setTimeout(resolve, 1500));
        const interval = setInterval(() => {
            blue_end_img.style.top = (parseInt(blue_end_img.style.top) + 1) + "px"
            sky_img.style.top =  (parseInt(sky_img.style.top) + 1) + "px"
            if (parseInt(blue_end_img.style.top) === 693) {
                clearInterval(interval)
                write_credits([
                    "Mark never returned to Port Luna",
                    "He will live in the village for 5 more years.",
                    "After the war ended Lucy and Mark have moved to Westhaven.",
                    "Where they live to this day.",
                    "It was one of the thousands of stories.",
                    "The End."
                ], () => {
                    scene_transition(3000, true)
                    setTimeout(() => {window.location.href = "http://127.0.0.1:3000/main_menu/menu.html"}, 7000)
                })
                
            }
        }, 15) 
    }}
})
