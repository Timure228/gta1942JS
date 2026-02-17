export default class NPC {
    constructor(class_name, x_left, y_top, width, height, src_, color, move_to_x, speed) {
        this.class_name = class_name;
        this.x_left = x_left;
        this.y_top = y_top;
        this.height = height;
        this.width = width;
        this.src_ = src_;
        this.color = color;
        this.move_to_x = move_to_x
        this.speed = speed
    }

    move() {
        if (!this.move_to_x) {
            console.log("No X coordinates provided!")
            return
        }
        let npc = document.querySelector("." + this.class_name)
        let interval = setInterval(() => {
            npc.style.left = (parseInt(npc.style.left) - this.speed) + "px"
            if (parseInt(npc.style.left) < this.move_to_x) {
                clearInterval(interval)
            } 
        }, 100)
        return true
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

export function bullet_collision_npc(npc, hit_sound_, moving=false) {
    let hit = false
    let bullet = document.querySelector(".bullet")
    try {
        let bullet_rect = bullet.getBoundingClientRect()
    npc.forEach(npc => { 
        let bullet_x = parseInt(bullet_rect.x)
        let bullet_y = parseInt(bullet_rect.y)
        let x_left
        let y_top
        if (moving) {
            let npc_tag = document.querySelector("." + npc.class_name)
            x_left = parseInt(npc_tag.style.left)
            y_top = parseInt(npc_tag.style.top)
        } else {
            let x_left = npc.x_left
            let y_top = npc.y_top
        }
        let length = x_left + npc.width + 30
        let height = y_top + npc.height - 35
        console.log(x_left)
        if ((bullet_x > x_left && bullet_x < length) && (bullet_y > y_top && bullet_y < height)) {
            document.querySelectorAll(".bullet").forEach((bullet) => bullet.remove())
            console.log("NPC hit")
            // Play hit sound of bullet hitting the NPC
            const hit_sound = new Audio(hit_sound_)
            hit_sound.volume = 0.4
            hit_sound.play()
            hit = true
        }
    });
    }
    catch (e) {}
    return hit;
}

export function check_shot(current_target, hit_sound, moving=false) {
    return bullet_collision_npc([current_target], hit_sound, moving)
}

