import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";
import { write_title, scene_transition } from "/cutscene_tools.js";

scene_transition(1000)
write_title("5 Years later. Prison for War Prisoners 12:24 AM")

let player = document.querySelector(".player_civil")
player.style.top = 550 + "px"
player.style.left = 350 + "px"
player.style.rotate = 140 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/feel_free_ambience.mp3");
city_ambience.volume = 1;
city_ambience.loop = true;
city_ambience.play();

// Barriers
const barrier1 = new Sprite("skeleton", 0, 400, 1200, 150)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", 400, -100, 150, 2000)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", 0, 240, 200, 1200)
barrier3.add_sprite()
const barrier4 = new Sprite("skeleton", 320, 640, 200, 200)
barrier4.add_sprite()
barrier1.make_transparent()

const trigger = new Sprite("loc_trigger", 0, 700, 1700, 140, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/red_ending/city_industrial_red_ending.html")
trigger.add_sprite() 
trigger.make_transparent()

let character_icon = "/dialog_faces/player_released.png"
const monolog = new Dialog("monolog", [
    ["...", character_icon],
    ["It is so easy to breath here.", character_icon], 
    ["I guess I need to get home. It's only 5km from here", character_icon], 
    ["I don't any money for a bus.", character_icon],
    ])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})

player.addEventListener("keydown", () => {check_collision_player([
    barrier1,
    barrier2,
    barrier3, 
    barrier4
])
check_collision_player([trigger], true)
})
    