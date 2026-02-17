import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";
import NPC from "/npc.js";
import { check_shot } from "/npc.js";

// scene_transition(1000)
write_title("1:24 AM        ")

let player = document.querySelector(".player")
player.style.top = 400 + "px"
player.style.left = 720 + "px"
player.style.rotate = -90 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 920, 500, 180, 110, "/sprite_images/barbed_wire.png", 110)
barbed_wire1.add_sprite()
const barbed_wire2 = new Sprite("barbed_wire1", 1000, 640, 180, 110, "/sprite_images/barbed_wire.png", 188)
barbed_wire2.add_sprite()
const barbed_wire3 = new Sprite("barbed_wire1", 920, 100, 180, 110, "/sprite_images/barbed_wire.png", 83)
barbed_wire3.add_sprite()
const barbed_wire4 = new Sprite("barbed_wire1", 930, 300, 180, 110, "/sprite_images/barbed_wire.png", 100)
barbed_wire4.add_sprite()

// Barriers
const barrier = new Sprite("skeleton", 840, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", 500, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 450, 0, 600, 120)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 450, 670, 600, 120)
barrier3.add_sprite()
barrier.make_transparent()

// Class NPC attributes:
// class_name, x_left, y_top, width, height, src_, color, move_to_x, speed
let enemy_x_pos = 800
const enemy = new NPC("enemy", 1400, 150, 90, 90, "/npc_images/enemy.png", null, enemy_x_pos, 11)
enemy.add_NPC()
enemy.move()
setInterval(() =>{
    if (parseInt(document.querySelector(".enemy").style.left) < (enemy_x_pos)) 
    {
    window.location.href = "http://127.0.0.1:3000/maps/war_maps/trench_2.html"
}}, 300)

player.addEventListener("keydown", () => check_collision_player([
    barbed_wire1,
    barbed_wire2,
    barbed_wire3,
    barbed_wire4,
    barrier,
    barrier1,
    barrier2,
    barrier3,
]))

setInterval(() => {
    if (check_shot(enemy, "/weapon_sounds/bullet_npc_hit.mp3", true)) {
        setTimeout(() => window.location.href = "google.com", 200)
    }
}, 1)