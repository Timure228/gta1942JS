
import Dialog from "/dialog.js";

let character_icon = "/dialog_faces/player_face_civil.png"
const monolog = new Dialog("monolog", [
    ["Hah...", character_icon],
    ["What am I doing with my life...", character_icon], 
    ["I'll go to sleep.", character_icon], 
    ])

document.body.addEventListener("keydown", (e) => { if (e.key == "e") {
    monolog.start_dialog(e)
    if (!document.querySelector(".dialog_window")) {
        window.location.href = "hlksfdaj"
    }}
})
