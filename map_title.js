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
        }
    }, 100);
    document.body.append(h1)
}
