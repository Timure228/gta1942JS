import Sprite from "/sprite.js";
import { check_collision_player, bullet_collision } from "/sprite.js";
// class_name, x_left, y_top, width, height, src_, rotation
const field = new Sprite("field", 300, 200, 50, 200)
field.add_sprite()
const tree1 = new Sprite("tree1", 100, 30, 50, 100, "/sprite_images/tree1.png")
tree1.add_sprite()
const tree2 = new Sprite("tree1", 290, 30, 50, 100, "/sprite_images/tree1.png")
tree2.add_sprite()
const tree3 = new Sprite("tree1", 480, 30, 50, 200, "/sprite_images/tree1.png")
tree3.add_sprite()
const tree4 = new Sprite("tree1", 670, 30, 50, 200, "/sprite_images/tree1.png")
tree4.add_sprite()
const tree5 = new Sprite("tree1", 860, 30, 50, 200, "/sprite_images/tree1.png")
tree5.add_sprite()
const barbed_wire1 = new Sprite("barbed_wire1", 80, 300, 100, 200, "/sprite_images/barbed_wire.png", 75)
barbed_wire1.add_sprite()

player.addEventListener("keydown", () => check_collision_player([
    field, 
    tree1,
    tree2,
    tree3,
    tree4,
    tree5,
]))
document.addEventListener("click", () => setInterval(() => bullet_collision([
    field,
    ]), 16))

