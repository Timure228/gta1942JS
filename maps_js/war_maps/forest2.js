import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";
import TwoOptionChooseWindow from "/choose_window.js";

let player = document.querySelector(".player")
player.style.top = 335 + "px"
player.style.left = 1350 + "px"
player.style.rotate = 180 + "deg"

// scene_transition(3700)
write_title("1 hour later somewhere in deep forest")

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

const injured_soldier = new Sprite("injured_soldier", 770, 130, 90, 90, "/sprite_images/characters/injured_soldier.png") // No col
injured_soldier.add_sprite()

// Barriers
const barrier = new Sprite("skeleton", 1400, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", -100, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", -100, 0, 1800, 130)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", -100, 570, 1800, 130)
barrier3.add_sprite()
barrier.make_transparent()

const trigger = new Object(null, 775, 140, 70, 75, "green")
trigger.add_object()

let character_icon = "/dialog_faces/player_face_war_injured.png"
let soldier_icon = "/dialog_faces/other/dialog_injured_soldier.png"
let soldier_coughs_icon = "/dialog_faces/other/dialog_injured_soldier_coughs.png"

const dialog = new Dialog("dialog", [
    ["Hey, do you need help?", character_icon],
    ["Where is the meeting pointing for the other troops?", character_icon], 
    ["You...", soldier_icon], 
    ["...", soldier_icon], 
    ["[coughs]", soldier_coughs_icon], 
    ["You have to...", soldier_icon], 
    ["What do I have to do?", character_icon],
    ["[coughs]", soldier_coughs_icon],
    ["[coughs]", soldier_coughs_icon],
    ["Shoot me.", soldier_icon],
    ["No, what do you mean?", character_icon],
    ["Mechanized troops will be here in 10 minutes, you have to.", soldier_icon],
    ["Oh shit.", character_icon],
    ])

const choice = new TwoOptionChooseWindow("choose_window", ["Shoot him", "Let him die"])

player.addEventListener("keydown", () => check_collision_player([
    barrier,
    barrier1,
    barrier2,
    barrier3,
]))

player.addEventListener("keydown", () => {
    check_collision_player([trigger], false, true)
}) 

document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    document.querySelector(".key_tip").remove()
    document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
        dialog.start_dialog(e)
        if (!document.querySelector(".dialog_window")) {
        choice.start_dialog()
        }
    }})
}})

document.body.addEventListener("keydown", (e) => {
    const choice_ = choice.choose(e);
    if (choice_ == "one") {
        new Audio('/weapon_sounds/shot.wav').play()
        scene_transition(5, true, "red")
        setTimeout(() => window.location.href = "", 2700)
    }
    if (choice_ == "two") {
        scene_transition(5, true, "blue")
        setTimeout(() => window.location.href = "dd.com", 2500)
}})


