export function write_title(title) {
    let h1 = document.createElement("h1")
    h1.style.position = "absolute"
    h1.style.top = "-25px"
    h1.style.left = "30px"
    h1.style.color = "white"
    h1.style.fontSize = "2.5em"
    h1.style.fontFamily = "textFont"
    h1.style.zIndex = 100

    let j = 0
    const interval = setInterval(() => {
        h1.textContent += title.charAt(j);
        j++;
        if (j >= title.length) {
            clearInterval(interval);
            setInterval(() => h1.remove(), 1100)
        }
    }, 100);
    document.body.append(h1)
}

export function scene_transition(delay, reverse=false, color="black") {
    let box = document.createElement("span")
    box.classList.add("scene_transition")
    box.style.position = "absolute"
    box.style.left = "0px"
    box.style.top = "0px"
    box.style.backgroundColor = color
    box.style.height = "2000px"
    box.style.width = "2000px"
    box.style.zIndex = 100
    reverse ? box.style.opacity = 0 : 1
    let j;
    reverse ? j = 0 : j = 1;
    setTimeout(() => {
        const interval = setInterval(() => {
            console.log(j)
            box.style.opacity = j;
            if (reverse) {
                j += 0.1
            } else {j -= 0.05}
            if (j <= 0) {
                clearInterval(interval);
            }
        }, 100);
    }, delay);

    document.body.append(box)
}

export async function write_credits(title, callback) {
    let h1 = document.createElement("h1")
    h1.style.position = "absolute"
    h1.style.top = "100px"
    h1.style.left = "300px"
    h1.style.color = "black"
    h1.style.fontSize = "5.5em"
    h1.style.fontFamily = "textFont"
    h1.style.zIndex = 100   
    document.body.append(h1)
    for (let i=0; i < title.length; i++) {
        await type(title, i, h1)
        h1.textContent = ""
    }
    callback()
}

function type(title, id, h1) {
    return new Promise((resolve) => {
    let j = 0
    const interval = setInterval(() => {
            h1.textContent += title[id].charAt(j);
            j++;
            if (j >= title[id].length) {
                clearInterval(interval);
                setTimeout(resolve, 1100);
            }
        }, 80);
    })
}
