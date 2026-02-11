import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/mil_truck.mp3");
city_ambience.volume = 0.2;
city_ambience.loop = true;
city_ambience.play();

// Fucking military truck
const mil_truck = new Sprite("mil_truck", 435, 260, 500, 300, "/sprite_images/trucks/mil_truck1.png", 0, true, 2, "/sprite_images/trucks/mil_truck", 500)
mil_truck.add_sprite()
mil_truck.play_anim()

let road_length = 200
for (let i = 0; i <= road_length; i++) {
    if (i === road_length) {
        const road = new Sprite("road_last", i * 260, 245, 300, 360, "/sprite_images/roads/road.png") // No col
        road.add_sprite()
        break
    }
    const road = new Sprite("road", i * 260, 245, 300, 360, "/sprite_images/roads/road.png") // No col
    road.add_sprite()
}

function move_road(road, trigger) {
    const speed = 22
    setTimeout(() => {
        const interval = setInterval(() => {
            road.style.left = (parseInt(road.style.left) - speed) + "px" 
            if (trigger) {
                console.log(road.style.left)
                if (parseInt(road.style.left) < 1250) {
                    alert("done")
                }
            }
        }, 80)
    }, 100)
}

function move_roads(class_name, trigger=false) {
    document.querySelectorAll("." + class_name).forEach(road => {
        move_road(road, trigger)
    })
}

move_roads("road")
move_roads("road_last", true)

let character_icon = "/dialog_faces/player_face_war.png"
let rick_icon = "/dialog_faces/rick/rick.png"
let rick_icon_question = "/dialog_faces/rick/rick_questioning.png"
let rick_icon_laugh = "/dialog_faces/rick/rick_laughing.png"

const dialog = new Dialog("dialog", [
    ["You are good at aiming.", rick_icon],
    ["Thanks.", character_icon],
    ["Did you like the instructor?", rick_icon_question],
    ["...", character_icon],
    ["Yeah, he is a tough guy.", rick_icon_laugh],
    ["Broke my shoulder once. Said it builds character.", rick_icon],
    ["Did it?", character_icon],
    ["Still hurts when it rains.", rick_icon_laugh],
    ["You nervous?", rick_icon_question],
    ["A little.", character_icon],
    ["Good. Means you'll stay sharp.", rick_icon],
    ["How many times have you been out there?", character_icon],
    ["Enough to know silence is worse than gunfire.", rick_icon],
    ["Great.", character_icon],
    ["I have an advise for you.", rick_icon],
    ["I listen.", character_icon],
    ["Always be ready to fight, even if you feel safe.", rick_icon],
    ["Are you ready now?", character_icon],
    ["I always am. You'll see.", rick_icon],
    ["I won't argue with that.", character_icon],
    ["...", rick_icon],
    ["...", character_icon]
])

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        scene_transition(2300, true)
        setTimeout(() => {window.location.href = "https://youtu.be/UfSzkecwbxA?si=OwDXiohhSgBVRZqC&t=592"}, 4300)
    }}
})

