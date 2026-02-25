import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";
import TwoOptionChooseWindow from "/choose_window.js";

let player = document.querySelector(".player")
player.style.top = 335 + "px"
player.style.left = 1280 + "px"
player.style.rotate = 180 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3"); // 
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();


// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Trees
const tree1 = new Sprite("tree1", 1200, -100, 150, 250, "/sprite_images/tree_images/tree3.png") // no col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 1150, 500, 150, 200, "/sprite_images/tree_images/tree2.png") // no col
tree2.add_sprite()
const tree3 = new Sprite("tree1", 550, 490, 150, 250, "/sprite_images/tree_images/tree4.png") // no col
tree3.add_sprite()
const tree4 = new Sprite("tree1", 850, 470, 130, 200, "/sprite_images/tree_images/tree2.png") // no col
tree4.add_sprite()
const tree5 = new Sprite("tree1", 120, -200, 250, 350, "/sprite_images/tree_images/tree5.png") // no col
tree5.add_sprite()
const tree6 = new Sprite("tree1", 920, -270, 250, 400, "/sprite_images/tree_images/tree5.png") // no col
tree6.add_sprite()

const bush = new Sprite("bush", 1020, 540, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush.add_sprite()
const bush1 = new Sprite("bush", 405, 610, 130, null, "/sprite_images/bushes/bush1.png") // No col
bush1.add_sprite()

// Barriers
const barrier2 = new Sprite("skeleton", 0, 0, 170, 1700)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, -100, 1700, 170)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 0, 700, 1700, 170)
barrier4.add_sprite()
const barrier5 = new Sprite("skeleton", 1420, 0, 170, 1700)
barrier5.add_sprite()
barrier5.make_transparent()

let death_video = document.createElement("source")
death_video.src = "/videos/wanted.webm" 
death_video.type = "video/mp4"
death_video.classList.add("wanted_source")

function getting_shot_forest3() {
    player.remove()
    document.querySelector(".forest3").src = "/maps/map_img/forest3_shoot.png"
    document.querySelector(".wanted").append(death_video)
    new Audio("/sfx/gun_shooting.mp3").play()
    const dead_player = new Sprite("dead_player", 
        parseInt(player.style.left) - 40, 
        parseInt(player.style.top) - 70, 
        230, 230, "/sprite_images/characters/player_dead.png") // no col
    dead_player.add_sprite()
    setTimeout(() => window.location.href = "http://127.0.0.1:3000/maps/red_ending/forest3.html", 8000)
}

document.body.addEventListener("click", () => {
    getting_shot_forest3()
})

let inspector_icon = "/dialog_faces/other/enemy_face.png"

const dialog = new Dialog("dialog", [
    ["STAND WHERE YOU ARE!", inspector_icon],
    ["Don't try anything stupid! We will shoot.", inspector_icon],
    ])

const dialog1 = new Dialog("dialog", [
    ["Ok, guys take him.", inspector_icon],
    ])

const choice = new TwoOptionChooseWindow("choose_window", ["Surrender", "Not this time!"])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    // Start the choice
    if (!document.querySelector(".dialog_window")) {
        choice.start_dialog()
    }
}})

document.body.addEventListener("keydown", (e) => {
    const choice_ = choice.choose(e);
    if (choice_ == "one") {
        document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
            dialog1.start_dialog(e)
            if (!document.querySelector(".dialog_window")) {
                window.location.href = "http://127.0.0.1:3000/maps/red_ending/feel_free.html"
            }
        }})
    }
    if (choice_ == "two") {
        getting_shot_forest3()
}})


player.addEventListener("keydown", () => {check_collision_player([barrier2, barrier3, barrier4, barrier5])})

const interval = setInterval(() => {if (parseInt(player.style.left) < 1170) {
        clearInterval(interval)
        getting_shot_forest3()
}}, 10)
