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


// Fucking forest
const tree1 = new Sprite("tree1", 800, 270, 55, 160, "/sprite_images/tree_images/tree1.png") // No col
tree1.add_sprite()
const tree2 = new Sprite("tree1", 850, 20, 55, 160, "/sprite_images/tree_images/tree2.png") // No col
tree2.add_sprite()

const tree3 = new Sprite("tree2", 1000, 520, 55, 160, "/sprite_images/tree_images/tree3.png") // No col
tree3.add_sprite()



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
        }, 60)
    }, 100)
}

function move_trees(tree_num) {
    document.querySelectorAll(".tree" + tree_num).forEach(tree => {
        move_tree(tree, tree_num)
    })
}


move_trees(1)
move_trees(2)
scene_transition(2300)
write_title("40 minutes after departure...")

let character_icon = "/dialog_faces/player_face_war.png"
let rick_icon = "/dialog_faces/rick/rick.png"
let rick_icon_question = "/dialog_faces/rick/rick_questioning.png"
let rick_icon_laugh = "/dialog_faces/rick/rick_laughing.png"

const dialog = new Dialog("dialog", [
    ["New one?", rick_icon],
    ["Yeah.", character_icon],
    ["My name is Rick.", rick_icon],
    ["Mark, nice to meet you.", character_icon],
    ["Going to Frosthold?", rick_icon],
    ["Yeah", character_icon],
    ["Got you.", rick_icon],
    ["...", character_icon],
    ["Which city do you live in?", rick_icon_question],
    ["Port Luna", character_icon],
    ["Oh. I was there. Visited some girls.", rick_icon],
    ["You know.", rick_icon],
    ["How many.", character_icon],
    ["Hah. Not a lot.", rick_icon_laugh],
    ["How long have you been in the duty?", character_icon],
    ["1 year.", rick_icon],
])
dialog.start_dialog()


document.body.addEventListener("keydown", (e) => { if (e.key == "e") {dialog.start_dialog(e)}})
