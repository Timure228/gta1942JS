import Dialog from "/dialog.js";

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/mil_camp_music.mp3");
city_ambience.volume = 0.4;
city_ambience.loop = true;
city_ambience.play();

let instructor_icon = "/dialog_faces/mil_instructor/mil_instructor.png"
let instructor_scream_icon = "/dialog_faces/mil_instructor/instructor_screaming.png"

const monolog = new Dialog("dialog", [
    ["Come on Green Ass!", instructor_icon],
    ["40 PUSH UPS!!!", instructor_scream_icon]
])

monolog.start_dialog()
document.body.addEventListener("keydown", (e) => { if (e.key == "e") {monolog.start_dialog(e)}})

let pushup_counter = 0
let pushup_h1 = document.querySelector(".pushup_h1")

document.body.addEventListener("keydown", (e) => {
    let pushup_tag = document.querySelector(".pushup")
    if (e.code == "Space" && pushup_tag.src === "http://127.0.0.1:3000/maps/anim_maps/pushup1.jpg") {
        pushup_counter++;
        pushup_tag.src = "/maps/anim_maps/pushup2.png"
    }
    else if (pushup_counter == 41) {
        window.location.href = "http://127.0.0.1:3000/maps/war_maps/shooting_range.html"
    }
    else {
        pushup_h1.innerHTML = "Push ups: " + pushup_counter 
        pushup_tag.src = "/maps/anim_maps/pushup1.jpg"
    }
})
