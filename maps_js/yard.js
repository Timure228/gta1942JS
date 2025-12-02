import Sprite from "/sprite.js";
import { check_collision_player, bullet_collision } from "/sprite.js";
// class_name, x_left, y_top, width, height, src_, rotation, isanim, n_frames, anim_path
const field = new Sprite("field", 300, 200, 50, 200)
field.add_sprite()
const tree1 = new Sprite("tree1", 100, 30, 50, 100, "/sprite_images/tree_images/tree1.png") // No col
tree1.add_sprite()
const tree2 = new Sprite("tree2", 290, 30, 50, 100, "/sprite_images/tree_images/tree2.png") // No col
tree2.add_sprite()
const tree3 = new Sprite("tree3", 480, 30, 60, 200, "/sprite_images/tree_images/tree3.png") // No col
tree3.add_sprite()
const tree4 = new Sprite("tree4", 670, 30, 60, 200, "/sprite_images/tree_images/tree4.png") // No col
tree4.add_sprite()
const tree5 = new Sprite("tree5", 860, 0, 130, 200, "/sprite_images/tree_images/tree5.png") // No col
tree5.add_sprite()
// Wires
const barbed_wire1 = new Sprite("barbed_wire1", 80, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire1.add_sprite()
const barbed_wire2 = new Sprite("barbed_wire1", 170, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire2.add_sprite()
const barbed_wire3 = new Sprite("barbed_wire1", 260, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire3.add_sprite()
const barbed_wire4 = new Sprite("barbed_wire1", 350, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire4.add_sprite()
const barbed_wire5 = new Sprite("barbed_wire1", 440, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire5.add_sprite()
const barbed_wire6 = new Sprite("barbed_wire1", 530, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire6.add_sprite()
const barbed_wire7 = new Sprite("barbed_wire1", 620, 500, 90, 100, "/sprite_images/barbed_wire.png")
barbed_wire7.add_sprite()
const civil_car = new Sprite(
    "civil_car1",
    200, 
    300, 
    60, 
    100,
    "/sprite_images/cars/civil_car1/civil_car1.png", 
    0,
    true, 
    3,
    "/sprite_images/cars/civil_car1/civil_car"
)
civil_car.add_sprite()
civil_car.play_anim()


player.addEventListener("keydown", () => check_collision_player([
    field,
    barbed_wire1
]))
document.addEventListener("click", () => setInterval(() => bullet_collision([
    field,
    ]), 16))

