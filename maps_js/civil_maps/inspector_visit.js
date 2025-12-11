import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";

var door_open = new Audio("/sfx/opening_door.mp3");
door_open.volume = 0.5;
door_open.play();


// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/city_industrial.mp3");
city_ambience.volume = 0.4;
city_ambience.loop = true;
city_ambience.play();


let character_icon = "/dialog_faces/player_face_civil.png"
let inspector_icon = "/dialog_faces/inspector.png"
const monolog = new Dialog("monolog", [
    ["Good Morning Sir", inspector_icon],
    ["Emm... Do you need something?", character_icon],
    ["Not me, but the country.", inspector_icon],
    ["What do you mean?", character_icon],
    ["Are you Mark Williams?", inspector_icon],
    ["No I am Uzbek?", character_icon],
    ["AHAHJSDHFLKASÖJDF", inspector_icon],
    ["HEEEEEELP HE FUCKS MY AAAASSSSS", character_icon],
])
monolog.start_dialog()

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    monolog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "http://127.0.0.1:3000/maps/civil_maps/apartment_awake.html"
    }}
})
