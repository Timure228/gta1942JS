export default class NPC {
    constructor(class_name, x_left, y_top, width, height, src_, color) {
        this.class_name = class_name;
        this.x_left = x_left;
        this.y_top = y_top;
        this.height = height;
        this.width = width;
        this.src_ = src_;
        this.color = color;
    }

    add_NPC() {
        let npc_img = document.createElement("img")
        npc_img.classList.add(this.class_name)
        if (this.src_) {
            npc_img.src = this.src_
        }
        npc_img.style.position = "absolute"
        npc_img.style.left = this.x_left + "px"
        npc_img.style.top = this.y_top + "px"
        npc_img.style.width = this.width + "px"
        npc_img.style.height = this.height + "px"
        if (this.color) {
            npc_img.style.background = this.color
        }
        document.body.append(npc_img)
    }
}

export function bullet_collision_npc(npc) {
    let bullet = document.querySelector(".bullet")
    let hit = 0
    try {
        let bullet_rect = bullet.getBoundingClientRect()
    npc.forEach(npc => { 
        let bullet_x = parseInt(bullet_rect.x)
        let bullet_y = parseInt(bullet_rect.y)
        let x_left = npc.x_left
        let y_top = npc.y_top
        let length = x_left + npc.width + 30
        let height = y_top + npc.height - 35
        if ((bullet_x > x_left && bullet_x < length) && (bullet_y > y_top && bullet_y < height)) {
            bullet.remove()
            console.log("NPC hit")
            // Play hit sound of bullet hitting the NPC
            const hit_sound = new Audio("/weapon_sounds/bullet_npc_hit.mp3")
            hit_sound.play()
            hit = 1;
        }
    });
    }
    catch (e) {}
    return hit;
}
