import Sprite from "/sprite.js";
import NPC from "/npc.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { bullet_collision_npc } from "/npc.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

write_title("Shooting Range")

let player = document.querySelector(".player")
player.style.top = 400 + "px"
player.style.left = 500 + "px"
player.style.rotate = -90 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/windstorm.mp3");
city_ambience.volume = 0.6;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 150, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire1.add_sprite()
const barbed_wire2 = new Sprite("barbed_wire1", 300, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire2.add_sprite()
const barbed_wire3 = new Sprite("barbed_wire1", 450, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire3.add_sprite()
const barbed_wire4 = new Sprite("barbed_wire1", 600, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire4.add_sprite()
const barbed_wire5 = new Sprite("barbed_wire1", 750, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire5.add_sprite()
const barbed_wire6 = new Sprite("barbed_wire1", 900, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire6.add_sprite()
const barbed_wire7 = new Sprite("barbed_wire1", 1050, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire7.add_sprite()
const barbed_wire8 = new Sprite("barbed_wire1", 1200, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire8.add_sprite()
const barbed_wire9 = new Sprite("barbed_wire1", 1350, 500, 150, 100, "/sprite_images/barbed_wire.png")
barbed_wire9.add_sprite()

const tree1 = new Sprite("tree1", 350, 350, 150, 300, "/sprite_images/tree_images/tree_snow1.png") // no col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 610, 370, 150, 300, "/sprite_images/tree_images/tree_snow2.png") // no col
tree2.add_sprite()
const tree3 = new Sprite("tree1", 750, 350, 150, 300, "/sprite_images/tree_images/tree_snow1.png") // no col
tree3.add_sprite()
const tree4 = new Sprite("tree1", 1050, 370, 150, 300, "/sprite_images/tree_images/tree_snow2.png") // no col
tree4.add_sprite()

// Additional design
const campfire = new Sprite(
    "campfire",
    1200, 
    450, 
    50, 
    50,
    "/sprite_images/campfire/campfire1.png", 
    0,
    true, 
    2,
    "/sprite_images/campfire/campfire",
    600
)
campfire.add_sprite()
campfire.play_anim()
const blue_flag = new Sprite(
    "blue_flag",
    1270,
    170,
    150,
    300,
    "/sprite_images/flags/flag_blue/flag_blue1.png",
    0,
    true,
    2,
    "/sprite_images/flags/flag_blue/flag_blue",
    320
)
blue_flag.add_sprite()
blue_flag.play_anim()


// Barriers
const barrier = new Sprite("skeleton", 1400, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", 0, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 0, 240, 1400, 120)
barrier2.add_sprite()
barrier.make_transparent()

// class_name, x_left, y_top, width, height, src_, color
const shooting_target1 = new NPC("shooting_target", 300, 100, 100, 100, "/npc_images/aim_target.png", false)
shooting_target1.add_NPC()

const shooting_target2 = new NPC("shooting_target", 500, 100, 100, 100, "/npc_images/aim_target.png", false)
shooting_target2.add_NPC()

const shooting_target3 = new NPC("shooting_target", 700, 100, 100, 100, "/npc_images/aim_target.png", false)
shooting_target3.add_NPC()

const shooting_target4 = new NPC("shooting_target", 900, 100, 100, 100, "/npc_images/aim_target.png", false)
shooting_target4.add_NPC()

player.addEventListener("keydown", () => check_collision_player([
    barbed_wire1,
    barbed_wire2,
    barbed_wire3,
    barbed_wire4,
    barbed_wire5,
    barbed_wire6,
    barbed_wire7,
    barbed_wire8,
    barbed_wire9,
    barrier,
    barrier1,
    barrier2
]))

let instructor_icon = "/dialog_faces/mil_instructor/mil_instructor.png" 
const monolog = new Dialog("dialog", [
    ["It's time to aim.", instructor_icon],
    ["Show what you have learned Green Ass!", instructor_icon]
])

document.body.addEventListener("keydown", (e) => {
    if (e.key == "e") {monolog.start_dialog(e)}
})

let aim_pointer = document.querySelector(".aim_pointer")
// Aim pointer left for 1: 328px for 2: 528px for 3: 728px for 4: 928px 
function switch_pointer() {
    let random_next = parseInt((Math.random() * 4) + 1)
    switch (random_next) { 
        case 1:
            aim_pointer.style.left = "328px"
            return shooting_target1
        case 2:
            aim_pointer.style.left = "528px"
            return shooting_target2
        case 3:
            aim_pointer.style.left = "728px"
            return shooting_target3
        case 4:
            aim_pointer.style.left = "928px"
            return shooting_target4
    }
}

function check_shot(current_target) {
    return bullet_collision_npc([current_target], "/weapon_sounds/bullet_npc_hit.mp3")
}

function get_current_pointer() {
    switch (parseInt(aim_pointer.style.left)) {
        case 328:
            return shooting_target1
        case 528:
            return shooting_target2
        case 728:
            return shooting_target3
        case 928:
            return shooting_target4
    }
}

function show_stat() {
    document.querySelector("#score_div").style.display = "";
    let accuracy = parseInt(((hits / total_shots) * 100))
    let score_texte = document.querySelectorAll("#score_text")
    score_texte[1].innerHTML = "Total targets: " + hits
    score_texte[2].innerHTML = "Total seconds: " + seconds
    score_texte[3].innerHTML = "Total missed: " + (total_shots - hits)
    score_texte[4].innerHTML = "Total accuracy: " + accuracy + "%"

    let verdict = document.createElement("h1")
    verdict.id = "score_text"
    verdict.style.top = "350px"
    verdict.style.left = "675px"
    verdict.style.fontSize = "4.2em"
    if (accuracy >= 90) {
        verdict.innerHTML = "Master";
        verdict.style.color = "gold";
    } else if (accuracy >= 80) {
        verdict.innerHTML = "Elite";
        verdict.style.color = "purple";
    } else if (accuracy >= 70) {
        verdict.innerHTML = "Expert";
        verdict.style.color = "blue";
    } else if (accuracy >= 60) {
        verdict.innerHTML = "Sharpshooter";
        verdict.style.color = "green";
    } else if (accuracy >= 50) {
        verdict.innerHTML = "Trained";
        verdict.style.color = "teal";
    } else if (accuracy >= 40) {
        verdict.innerHTML = "Average";
        verdict.style.color = "yellow";
    } else if (accuracy >= 30) {
        verdict.innerHTML = "Untrained";
        verdict.style.color = "orange";
    } else {
        verdict.innerHTML = "Beginner";
        verdict.style.color = "white";
    }
    document.body.append(verdict)

    let next_button = document.createElement("button")
    next_button.id = "menu_button"
    next_button.style.position = "absolute" 
    next_button.style.top = "520px" 
    next_button.style.left = "780px" 
    next_button.style.width = "200px" 
    next_button.style.borderRadius = "10%"
    next_button.style.backgroundColor = "gray";
    next_button.style.color = "white";
    next_button.innerHTML = "→"
    next_button.onclick = () => window.location.href = "Nononono"

    let repeat_button = document.createElement("button")
    repeat_button.id = "menu_button"
    repeat_button.style.position = "absolute" 
    repeat_button.style.top = "520px" 
    repeat_button.style.left = "480px" 
    repeat_button.style.width = "200px" 
    repeat_button.style.borderRadius = "10%"
    repeat_button.style.backgroundColor = "gray";
    repeat_button.style.color = "white";
    repeat_button.innerHTML = "Repeat"
    repeat_button.onclick = () => window.location.href = "http://127.0.0.1:3000/maps/war_maps/shooting_range.html"

    document.body.append(repeat_button)
    if (accuracy > 65) {
        document.body.append(next_button)
    }

}

let total_shots = 0;
document.addEventListener("mousedown", () => {
    total_shots++;
})

let max_to_shot = 20;
let hits = 0;
let current_target = get_current_pointer();
let hit_count_tag = document.querySelector(".hit_count")
const interval = setInterval(() => {
    hit_count_tag.innerHTML = hits + "/" + max_to_shot
    if (hits == max_to_shot) {
        clearInterval(interval)
        show_stat()
    }
    else if (check_shot(current_target)) {
        current_target = switch_pointer();
        hits++;
    }
}, 2);

let seconds = 0;
function timer() {
    var sec = 1;
    var timer = setInterval(() => {
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec++;
        seconds++;
        if (hits == max_to_shot) {
            clearInterval(timer)
        }
    }, 1000);
}

let interval1 = setInterval(() => {if (hits == 1) {
    timer()
    clearInterval(interval1)    
}
}) 
