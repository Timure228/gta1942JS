import Dialog from "/dialog.js";

// Ambience Audio
var village_ambience = new Audio("/maps/ambience_sounds/village.mp3");
village_ambience.volume = 0.6;
village_ambience.loop = true;
village_ambience.play();

let character_icon = "/dialog_faces/player_face_war_injured.png"
let lucy_icon = "/dialog_faces/Lucy/lucy.png"
let lucy_icon_confused = "/dialog_faces/Lucy/lucy_confused.png"

const dialog = new Dialog("dialog", [
    ["...", character_icon],
    ["...", lucy_icon_confused],
    ["Who are you?", lucy_icon_confused],
    ["I mean no harm. I am just looking for food.", character_icon],
    ["Why do you need that gun?", lucy_icon],
    ["...", character_icon],
    ["You're bleeding.", lucy_icon_confused],
    ["It's not as bad as it looks.", character_icon],
    ["It looks bad.", lucy_icon_confused],
    ["You need to stay.", lucy_icon],
    ["I won't stay long. Just food… and maybe water.", character_icon],
    ["Put the gun down first.", lucy_icon],
    ["What is your name?", character_icon],
    ["Lucy.", lucy_icon],

])

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "http://127.0.0.1:3000/maps/blue_ending/blue_ending.html"
    }}
})

