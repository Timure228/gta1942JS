import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import TwoOptionChooseWindow from "/choose_window.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";


// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/train.mp3");
city_ambience.volume = 0.2;
city_ambience.loop = true;
city_ambience.play();

// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path, anim_speed, color, trigger_link
// Fucking forest
const tree1 = new Sprite("tree1", 800, 270, 55, 160, "/sprite_images/tree_images/tree1.png") // No col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 850, 20, 55, 160, "/sprite_images/tree_images/tree2.png") // No col
tree2.add_sprite()

const tree3 = new Sprite("tree2", 1000, 520, 55, 160, "/sprite_images/tree_images/tree3.png") // No col
tree3.add_sprite()

// Fucking train
const train = new Sprite("train", 436, 261, 600, 200, "/sprite_images/trains/train1.png", 0, true, 2, "/sprite_images/trains/train", 450)
train.add_sprite()
train.play_anim()
document.querySelector(".train").style.zindex = "-3"

function move_tree(tree, tree_num) {
    const speed = 15
    setTimeout(() => {
        const interval = setInterval(() => {
            tree.style.left = (parseInt(tree.style.left) - speed) + "px" 
            if (parseInt(tree.style.left) < -150) {
                clearInterval(interval)
                tree.remove()
                let random_top
                if (Math.random() < 0.5) {
                    random_top = Math.floor(Math.random() * 150) // 0–399
                } else {
                    random_top = Math.floor(Math.random() * (600 - 400) + 400) // 500–599
                }
                let random_left = Math.floor(Math.random() * 2500 + 1700)
                let random_tree = Math.floor(Math.random() * 4 + 1)
                const tree1 = new Sprite("tree" + tree_num, random_left, random_top, 55, 160, "/sprite_images/tree_images/tree" + random_tree + ".png")
                tree1.add_sprite()

                move_tree(document.querySelector(".tree" + tree_num))
            }
        }, 80)
    }, 100)
}

function move_trees(tree_num) {
    document.querySelectorAll(".tree" + tree_num).forEach(tree => {
        move_tree(tree, tree_num)
    })
}

function create_ground() {
    for (let i = 2; i <= 500; i++) {
        let width = 2000
        let height = 810 
        let grass = document.createElement("img")
        grass.classList.add("grass")
        grass.style.width = width + "px"       
        grass.style.height = height + "px"
        grass.src = "/maps/map_img/grass_img.png"
        grass.style.position = "absolute"   
        grass.style.left = ((i *400) + 1000) + "px"
        grass.style.top = "0px"
        document.body.append(grass)
    }
}

function move_ground() {
    const grass = document.querySelectorAll(".grass")
    const speed = 15
    grass.forEach((grass) => 
    {
        setTimeout(() => {
            const interval = setInterval(() => {
                grass.style.left = (parseInt(grass.style.left) - speed) + "px" 
                if (parseInt(grass.style.left) < -1900) {
                    grass.remove()
                }
            }, 80)
        }, 100)
    })
    
}
move_trees(1)
move_trees(2)
create_ground()
move_ground()

scene_transition(2300)
write_title("40 minutes after departure...")

let character_icon = "/dialog_faces/player_face_war.png"
let rick_icon = "/dialog_faces/rick/rick.png"
let rick_icon_question = "/dialog_faces/rick/rick_questioning.png"
let rick_icon_laugh = "/dialog_faces/rick/rick_laughing.png"

const dialog = new Dialog("dialog", [
    ["New one?", rick_icon],
    ["Yeah, just got assigned.", character_icon],
    ["I'm Rick.", rick_icon],
    ["Mark. Nice to meet you.", character_icon],
    ["You headed to Frosthold?", rick_icon],
    ["Yeah, that's the plan.", character_icon],
    ["Got it. First time there?", rick_icon],
    ["...", character_icon],
    ["Where do you call home?", rick_icon_question],
    ["Port Luna.", character_icon],
    ["Ah, been there. Spent some time with a few locals.", rick_icon],
    ["You know how it is.", rick_icon],
    ["How many exactly?", character_icon],
    ["Hah, not too many.", rick_icon_laugh],
    ["How long have you been on duty?", character_icon],
    ["A year now.", rick_icon],
    ["Not bad at all.", character_icon],
    ["Yeah… seen a fair share of things.", rick_icon],
    ["???", character_icon],
    ["Some bad stuff… more than I care to remember.", rick_icon_question],
    ["Anything in particular?", character_icon],
    ["Frosthold has its fair share of trouble. You'll see.", rick_icon],
    ["Sounds like I should be prepared.", character_icon],
    ["Always be prepared. Never know what's waiting.", rick_icon],
    ["Any tips for a newbie?", character_icon],
    ["Keep your head down, watch your corners, and trust your instincts.", rick_icon],
    ["Where are you from originally?", character_icon],
    ["Westhaven.", rick_icon],
    ["Westhaven? By the sea, right?", character_icon],
    ["Yeah… grew up with the docks and the waves. Feels different here.", rick_icon],
    ["I guess that experience helps out.", character_icon],
    ["You could say that.", rick_icon_laugh]
])

dialog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {dialog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "http://127.0.0.1:3000/maps/civil_maps/apartment_awake.html"
    }}
})

