import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
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

const dialog = new Dialog("dialog", [
    ["Good Morning Sir.", inspector_icon],
    ["Emm... Do you need something?", character_icon],
    ["Not me, but the country.", inspector_icon],
    ["What do you mean?", character_icon],
    ["Are you Mark Williams?", inspector_icon],
])
dialog.start_dialog()

const dialog1 = new Dialog("dialog", [
    ["Perfect", inspector_icon],
    ["So what do you want?", character_icon],
    ["You are requested to appear in the military registration office today by 4 PM.", inspector_icon],
    ["And what do I do then?", character_icon],
    ["You will recieve all instructions there. Here is your confirmation.", inspector_icon],
    ["...", character_icon],
    ["Have a nice day.", inspector_icon]
])

const dialog2 = new Dialog("dialog", [
    ["Don't lie to me, I know you are.", inspector_icon],
    ["How?", character_icon],
    ["Mark William, lives alone in this apartment. Floor 4.", inspector_icon],
    ["... So what do you want?", character_icon],
    ["You are requested to appear in the military registration office today by 4 PM.", inspector_icon],
    ["And what do I do then?", character_icon],
    ["You will recieve all instructions there. Here is your confirmation.", inspector_icon],
])

const dialog3 = new Dialog("dialog", [
    ["FUCK YOU.", inspector_icon]
])

const choice1 = new TwoOptionChooseWindow("choose_window", ["Yes", "It's not your business"])
const choice2 = new TwoOptionChooseWindow("choose_window", ["...", "Fuck off"])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        // window.location.href = "http://127.0.0.1:3000/maps/civil_maps/apartment_awake.html"
        choice1.start_dialog()
    }
}})

document.body.addEventListener("keydown", (e) => {
    const choice = choice1.choose(e);

    if (choice == "one") {
        dialog1.start_dialog(e)
        document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
            dialog1.start_dialog(e)
            if (!document.querySelector(".dialog_window")) {
                alert("done")
            }
    }})
}
    if (choice == "two") {
        dialog2.start_dialog(e)
        document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
            dialog2.start_dialog(e)
            if (!document.querySelector(".dialog_window")) {
                alert("Two")
            }
    }})
}})
