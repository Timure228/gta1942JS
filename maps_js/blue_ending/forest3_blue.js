import Sprite from "/sprite.js";
import { check_collision_player } from "/sprite.js";
import { write_title } from "/cutscene_tools.js";

write_title("3 hours later")

let player = document.querySelector(".player")
player.style.top = 200 + "px"
player.style.left = 1400 + "px"
player.style.rotate = 180 + "deg"

// Barriers
const barrier = new Sprite("skeleton", 1500, 0, 100, 1200)
barrier.add_sprite()
const barrier1 = new Sprite("skeleton", -100, 0, 140, 1200)
barrier1.add_sprite()
const barrier2 = new Sprite("skeleton", -100, 50, 1800, 130)
barrier2.add_sprite()
const barrier3 = new Sprite("skeleton", -100, 370, 1800, 130)
barrier3.add_sprite()
barrier.make_transparent()

const house1 = new Sprite("house1", 200, 300, 500, 400, "/sprite_images/house_images/house1.png") // no col
house1.add_sprite()
const house2 = new Sprite("house1", 550, 310, 500, 400, "/sprite_images/house_images/house1.png") // no col
house2.add_sprite()

const trigger = new Sprite("loc_trigger", 0, 0, 170, 1700, null, null, null, null, null, null, "red",
    "http://127.0.0.1:3000/maps/blue_ending/village.html")
trigger.add_sprite()
trigger.make_transparent()

player.addEventListener("keydown", () => {check_collision_player([
    barrier,
    barrier1,
    barrier2,
    barrier3,
])
check_collision_player([trigger], true)}
)
