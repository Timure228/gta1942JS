import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title } from "/cutscene_tools.js";

write_title("Industrial Zone 22:05 AM")

let player = document.querySelector(".player_civil")
player.style.top = 500 + "px"
player.style.left = 1300 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/cricket.mp3");
city_ambience.volume = 0.5;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
const barrier1 = new Sprite("skeleton", 0, 370, 1700, 170)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 525, 930, 450)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 1535, 500, 95, 450)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 920, 690, 800, 45)
barrier4.add_sprite()
const barrier5 = new Sprite("skeleton", -95, 0, 80, 1700)
barrier5.add_sprite()
const barrier6 = new Sprite("skeleton", 1230, 520, 200, 200)
barrier6.add_sprite()
barrier1.make_transparent()

const car = new Sprite("car", 1460, 660, 50, 100, "/sprite_images/cars/civil_car1/civil_car1.png")
car.add_sprite()

const car1 = new Sprite("car", 1395, 660, 50, 100, "/sprite_images/cars/civil_car1/civil_car3.png", 45)
car1.add_sprite()

let character_icon = "/dialog_faces/player_released.png"

const monolog = new Dialog("monolog", [
    ["...", character_icon],
    ["A lot has changed.", character_icon], 
    ])

const trigger = new Object(null, 1170, 590, 5, 50, "green")
trigger.add_object()

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})
player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4, barrier5, barrier6])
    check_collision_player([trigger], false, true)
})    
document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/red_ending/apartment_red_ending.html"
}})
