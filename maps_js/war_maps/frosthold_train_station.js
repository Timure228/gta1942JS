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
