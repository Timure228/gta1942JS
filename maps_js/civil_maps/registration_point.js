import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

// scene_transition(5300)

// write_title("Port Luna military registration point 7:00")

let player = document.querySelector(".player_civil")
player.style.top = 300 + "px"
player.style.left = 300 + "px"
player.style.rotate = 0 + "deg"



const trigger = new Object(null, 1015, 430, 175, 160, "green")
trigger.add_object()

player.addEventListener("keydown", () => {check_collision_player([])
    check_collision_player([trigger], false, true)
})
document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/civil_maps/apartment.html"
}})

