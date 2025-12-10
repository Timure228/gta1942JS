export default class Sprite {
    constructor(class_name, 
        x_left, 
        y_top, 
        width, 
        height, 
        src_, 
        rotation, 
        isanim, 
        n_frames, 
        anim_path,
        anim_speed,
        color,
        trigger_link) 
        {
        this.class_name = class_name;
        this.x_left = x_left;
        this.y_top = y_top;
        this.height = height;
        this.width = width;
        this.src_ = src_;
        this.rotation = rotation;
        this.isanim = isanim;
        this.n_frames = n_frames;
        this.anim_path = anim_path;
        this.anim_speed = anim_speed
        this.color = color;
        this.trigger_link = trigger_link
    }

    add_sprite() {
        let sprite_img = document.createElement("img")
        sprite_img.classList.add(this.class_name)
        if (this.src_) {
            sprite_img.src = this.src_
        }
        if (this.rotation) {
            sprite_img.style.rotate = this.rotation + "deg"
        }
        sprite_img.style.position = "absolute"
        sprite_img.style.left = this.x_left + "px"
        sprite_img.style.top = this.y_top + "px"
        sprite_img.style.width = this.width + "px"
        sprite_img.style.height = this.height + "px"
        if (this.color) {
            sprite_img.style.background = this.color
        }
        document.body.append(sprite_img)
    }
    
    play_anim() {
        let frame = 1;
        setInterval(() => {
            const img = document.querySelector("." + this.class_name)
            img.src = `${this.anim_path}${frame}.png`;
            frame++;
            if (frame > this.n_frames) {
                console.log("dlkj")
                frame = 1
            }
        }, this.anim_speed);
    }  
    
    make_transparent() {
        const img = document.querySelectorAll("." + this.class_name)
        img.forEach((tag) => tag.style.opacity = 0)
    }
}   


export function check_collision_player(sprites, is_trigger=false, is_object=false) {
    let press_tip = document.createElement("img")
    press_tip.src = "/tip_images/T_key.png"
    press_tip.style.width = "40px"
    press_tip.style.position = "absolute"
    press_tip.classList.add("key_tip")
    // Player Collision
    sprites.forEach(sprite => {
        let x_left = sprite.x_left - 25
        let y_top = sprite.y_top - 15
    
        let length = x_left + sprite.width + 30
        let height = y_top + sprite.height - 25
    
        let player_x = player.x
        let player_y = player.y

        if (is_object) {
        press_tip.style.left = (sprite.x_left + 35) + "px"
        press_tip.style.top = (sprite.y_top - 40) + "px"
        }
        if ((player_x > x_left && player_x < length) && (player_y > y_top && player_y < height)) {
            console.log("touched")
            if (player_x + 10 > length) {
                console.log("touched right")
                if (is_trigger) {
                    window.location.href = sprite.trigger_link
                }
                else if (is_object) {
                    console.log("ne pernula a puknul")
                    document.body.append(press_tip)
                } else {player.style.left = (player.x + 3) + "px"}
            }
            else if (player_x - 10 < x_left) {
                console.log("touched left")
                if (is_trigger) {
                    window.location.href = sprite.trigger_link
                }
                else if (is_object) {
                    console.log("ne pernula a puknul")
                    document.body.append(press_tip)
                } else {player.style.left = (player.x - 3) + "px"}
            }
            else if (player_y - 10 < y_top) {
                console.log("touched top")
                if (is_trigger) {
                    window.location.href = sprite.trigger_link
                }
                else if (is_object) {
                    console.log("ne pernula a puknul")
                    document.body.append(press_tip)
                } else {player.style.top = (player.y - 3) + "px"}
            }
            else if (player_y + 10 > height) {
                console.log("touched bottom")
                if (is_trigger) {
                    window.location.href = sprite.trigger_link
                }
                else if (is_object) {
                    console.log("ne pernula a puknul")
                    document.body.append(press_tip)
                } else {player.style.top = (player.y + 3) + "px"}
            }
        }
    });
    
}

export function bullet_collision(sprites) {
    let bullet = document.querySelector(".bullet")
    try {
        let bullet_rect = bullet.getBoundingClientRect()
    
    sprites.forEach(sprite => { 
        let bullet_x = parseInt(bullet_rect.x)
        let bullet_y = parseInt(bullet_rect.y)
        let x_left = sprite.x_left
        let y_top = sprite.y_top
        let length = x_left + sprite.width + 30
        let height = y_top + sprite.height - 35
        if ((bullet_x > x_left && bullet_x < length) && (bullet_y > y_top && bullet_y < height)) {
            bullet.remove()
            
            let explosive_img = document.createElement("img")
            explosive_img.style.position = "absolute"
            explosive_img.style.left = parseInt(bullet_x - 50) + "px"
            explosive_img.style.top = parseInt(bullet_y - 50) + "px"
            explosive_img.style.width = "86px"
            explosive_img.src = "/bullet_anim/1.png"
            document.body.append(explosive_img)
            // Play animation of bullet hitting the Sprite
            let frame = 1;
            const interval = setInterval(() => {
                explosive_img.src = `/bullet_anim/${frame}.png`;
                frame++;
            if (frame > 7) {
                clearInterval(interval);
                explosive_img.remove();
            }
            }, 35);
        }
    });}
    catch (Uncaught) {}

}
