export function write_title(title) {
    let h1 = document.createElement("h1")
    h1.style.position = "absolute"
    h1.style.top = "-25px"
    h1.style.left = "30px"
    h1.style.color = "white"
    h1.style.fontSize = "2.5em"
    h1.style.fontFamily = "textFont"

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

export function scene_transition(delay) {
    let box = document.createElement("span")
    box.classList.add("scene_transition")
    box.style.position = "absolute"
    box.style.left = "0"
    box.style.top = "0"
    box.style.backgroundColor = "black"
    box.style.height = "2000px"
    box.style.width = "2000px"
    let j = 1;
    setTimeout(() => {
        const interval = setInterval(() => {
            box.style.opacity = j;
            j -= 0.01;
            if (j <= 0) {
                clearInterval(interval);
            }
        }, 100);
    }, delay);

    document.body.append(box)
}

