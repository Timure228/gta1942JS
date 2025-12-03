let player = document.querySelector(".player_civil")
player.style.left = "0px"
player.style.top = "490px"
player.style.rotate = "0deg"
let walking = false; // Prevent restarting for walking_animation()

const walk = (e) => {
    let speed = 5
    let x_left = player.style.left
    let y_top = player.style.top
    switch (e.key){
        case "w":
            player.style.top = parseInt(y_top) - speed + "px";
            break
        case "s":
            player.style.top = parseInt(y_top) + speed + "px";
            break
        case "a":
            player.style.left = parseInt(x_left) - speed + "px";          
            break
        case "d":
            player.style.left = parseInt(x_left) + speed + "px";
            break  
    }
}

function walking_animation() {
    if (walking) return; // Prevents restarting
    walking = true;

    // Start image changing loop
    let toggle = false;

    let interval = setInterval(() => {
        toggle = !toggle

        if (toggle) {
            player.src = "/player_img/civil_player/player.png";
        } else {
            player.src = "/player_img/civil_player/player_go.png";
        }
        // Play Sound
        var audio = new Audio('/walking_sounds/walk_stone.wav');
        audio.play()
        audio.volume = 0.5
    }, 500);
    // stop after 4 seconds
    setTimeout(() => {
        clearInterval(interval);
        walking = false;
    }, 3500);
}

const aim = (e) => {
    player.focus()
    let mouse_x = e.clientX
    let mouse_y = 587 - e.clientY

    let player_x = player.x
    let player_y = 587 - player.y // so that the top of the screen is 587

    let k1 = Math.abs(player_x - mouse_x)
    let k2 = Math.abs(player_y - mouse_y) // so that the top of the screen is 587
    
    let angle = 90 - (Math.atan(k1/k2) * (180/Math.PI))
    
    // console.log(90 - (Math.atan(k1/k2) * (180/Math.PI)))
    // console.log(mouse_y)
    
    if (mouse_x < player_x && mouse_y > player_y) {
        player.style.rotate = angle - 180 + "deg"
    }
    else if (mouse_x < player_x && mouse_y < player_y) {
        player.style.rotate = 90+(90 - angle) + "deg"
    }
    else if (mouse_y > player_y) {
        player.style.rotate = -angle + "deg"
    } 
    else if (mouse_y < player_y) {
        player.style.rotate = angle + "deg"
    }
    else  {
        player.style.rotate = 180 + "deg"
    }
    
}


player.setAttribute("tabindex", "0");
player.addEventListener("keydown", (e) => walk(e));
// Activate walking_animation()
player.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": walking_animation()
        case "s": walking_animation()
        case "a": walking_animation()
        case "d": walking_animation()
    }
});

document.addEventListener("mousemove", (e) => aim(e))
// document.body.addEventListener("click", () => {player.classList.toggle("focused")});

