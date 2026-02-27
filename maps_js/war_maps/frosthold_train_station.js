import Dialog from "/dialog.js";
import { write_title } from "/cutscene_tools.js";

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.45;
city_ambience.loop = true;
city_ambience.play();

var train_station_ambience = new Audio("/maps/ambience_sounds/train_station.mp3");
train_station_ambience.volume = 0.2;
train_station_ambience.play();

write_title("Frosthold Train Station Platform A2 23:00 AM")

let character_icon = "/dialog_faces/player_face_war.png"
let rick_icon = "/dialog_faces/rick/rick.png"
let rick_icon_question = "/dialog_faces/rick/rick_questioning.png"
let instructor_icon = "/dialog_faces/mil_instructor/mil_instructor.png"
let instructor_scream_icon = "/dialog_faces/mil_instructor/instructor_screaming.png"
let instructor_angry_icon = "/dialog_faces/mil_instructor/instructor_angry.png"

const dialog = new Dialog("dialog", [
    ["Welcome to Frosthold ladies.", instructor_icon],
    ["Hope you didn't freeze your nuts.", instructor_icon],
    ["Nice times are gone! It's time to give something to the country!", instructor_icon],
    ["...", rick_icon_question],
    ["Soldier!", instructor_scream_icon],
    ["What is your name? Combat arm?", instructor_angry_icon],
    ["Rick Radio operator sir!", rick_icon],
    ["From now on your name is Scheissfunksignal. Do you get it Scheissfunksignal!?", instructor_scream_icon],
    ["Sir yes sir!", rick_icon],
    ["I don't hear you Scheissfunksignal!", instructor_scream_icon],
    ["SIR YES SIR!!!", rick_icon],
    ["...", instructor_angry_icon],
    ["...", character_icon],
    ["Soldier!", instructor_scream_icon],
    ["What is your name? Combat arm?", instructor_scream_icon],
    ["Mark William! Eh... Im a new one.", character_icon],
    ["Ah, a new one... From now on you will be Green Ass.", instructor_icon],
    ["Do you get it Green Ass!?", instructor_angry_icon],
    ["Sir yes sir!!", character_icon],
    ["...", instructor_angry_icon],
    ["...", instructor_angry_icon],
    ["Move your asses! We are going to the camp!", instructor_scream_icon],
])

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "http://127.0.0.1:3000/maps/war_maps/pushups.html"
    }}
})
