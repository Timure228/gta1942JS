import Sprite from "/sprite.js";
import Dialog from "/dialog.js";
import { check_collision_player } from "/sprite.js";

let player = document.querySelector(".player_civil")
player.style.top = 395 + "px"
player.style.left = 0 + "px"
player.style.rotate = 0 + "deg"

// Ambience Audio
var city_ambience = new Audio("/maps/ambience_sounds/cricket.mp3");
city_ambience.volume = 0.95;
city_ambience.loop = true;
city_ambience.play();
