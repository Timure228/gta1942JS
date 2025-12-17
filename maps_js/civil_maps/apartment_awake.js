import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import Object from "/object.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 255 + "px"
player.style.left = 120 + "px"
player.style.rotate = 90 + "deg"

var knock = new Audio("/sfx/knock.mp3");
knock.volume = 1;
knock.play();
// Ambience Audio
setInterval(() => {
    knock.play();
}, 5300)

const barrier1 = new Sprite("skeleton", 0, 0, 1700, 300)
barrier1.add_sprite()

const barrier2 = new Sprite("skeleton", 0, 420, 1800, 50)
barrier2.add_sprite()

const barrier3 = new Sprite("skeleton", 200, 250, 480, 40)
barrier3.add_sprite()

const barrier4 = new Sprite("skeleton", 660, 0, 230, 280)
barrier4.add_sprite()

const barrier5 = new Sprite("skeleton", 860, 0, 1750, 50)
barrier5.add_sprite()

const barrier6 = new Sprite("skeleton", 1050, 0, 500, 500)
barrier6.add_sprite()

const barrier7 = new Sprite("skeleton", 960, 80, 200, 170)
barrier7.add_sprite()

const barrier8 = new Sprite("skeleton", 350, 320, 1300, 200)
barrier8.add_sprite()

const barrier9 = new Sprite("skeleton", 0, 0, 50, 3000)
barrier9.add_sprite()

const barrier10 = new Sprite("skeleton", 30, 325, 200, 50)
barrier10.add_sprite()
barrier1.make_transparent()

const tv = new Object("tv", 30, 415, 150, 80, "green")
tv.add_object()


player.addEventListener("keydown", () => {check_collision_player([barrier1, 
    barrier2, 
    barrier3, 
    barrier4, 
    barrier5, 
    barrier6, 
    barrier7,
    barrier8,
    barrier9,
    barrier10])
    check_collision_player([tv], false, true)
})    

let character_icon = "/dialog_faces/player_face_civil.png"
const monolog = new Dialog("monolog", [
    ["Who the fuck needs me at 6 AM???", character_icon]])



document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})
document.body.addEventListener("keydown", (e) => { if (e.key == "t" && document.querySelector(".key_tip")) {
    window.location.href = "http://127.0.0.1:3000/maps/civil_maps/inspector_visit.html"
}})
