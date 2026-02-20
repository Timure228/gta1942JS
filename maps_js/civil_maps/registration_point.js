import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import TwoOptionChooseWindow from "/choose_window.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

scene_transition(5300, false)

write_title("Port Luna military registration point 7:00 AM")

let player = document.querySelector(".player_civil")
player.style.top = 300 + "px"
player.style.left = 300 + "px"
player.style.rotate = 0 + "deg"

const barrier1 = new Sprite("skeleton", 900, 140, 150, 330)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 100, 0, 150, 1330)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 200, 500, 1500, 133)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 200, 100, 1500, 133)
barrier4.add_sprite()
barrier1.make_transparent()

let inspector_icon = "/dialog_faces/registration_man.png"

const dialog = new Dialog("dialog", [
    ["Good Morning Sir", inspector_icon],
    ])

const dialog1 = new Dialog("dialog", [
    ["Your time has come. You will be transported to the Frosthold.", inspector_icon],
    ["You are in reserve for now. Your Train lives in 30 minutes...", inspector_icon],
    ["Why are you standing here? MOVE!!!", inspector_icon],
    ])

const dialog2 = new Dialog("dialog", [
    ["Eh...", inspector_icon]
    ])

const choice = new TwoOptionChooseWindow("choose_window", ["Good Morning", "Fuck You"])

player.addEventListener("keydown", () => {check_collision_player([barrier1, barrier2, barrier3, barrier4])
})

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
        dialog1.start_dialog(e)
        document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
            if (!document.querySelector(".dialog_window")) {
                window.location.href = "http://127.0.0.1:3000/maps/civil_maps/train.html"
            }
    }})
}
    if (choice_ == "two") {
        dialog2.start_dialog(e)
        document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
            dialog2.start_dialog(e)
            if (!document.querySelector(".dialog_window")) {
                scene_transition(100, true)
                let oof = new Audio("/dialog_sounds/oof.mp3") // Oof sound from Roblox
                let punch = new Audio("/dialog_sounds/punch.mp3") // Punch sound
                punch.volume = 0.3
                setTimeout(() => {oof.play()}, 400)
                setTimeout(() => {punch.play()}, 430)
                setTimeout(() => {window.location.href = "http://127.0.0.1:3000/maps/civil_maps/train.html"}, 1800)
            }
    }})
}})

