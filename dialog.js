export default class Dialog {
    constructor(name, text) {
        this.name = name
        this.text = text
    }

    start_dialog() {
        let dialog_window = document.createElement("span")
        dialog_window.classList.add("dialog_window")
        dialog_window.style.position = "absolute"
        dialog_window.style.left = "800px"
        dialog_window.style.top = "600px"
        dialog_window.style.width = "700px";
        dialog_window.style.height = "100px";
 


        document.body.append(dialog_window)

        let speed = 120
        let i = 0
        setInterval(() => {
            if (i < this.text.length) {
            dialog_window.innerHTML += this.text.charAt(i);
            i++;
            
            if (i == this.text.length) {
                let j = 0
                setInterval(() => {
                    if (j < " Press E".length) {
                    dialog_window.innerHTML += " Press E".charAt(j);
                    j++;
            }}, 50)}
        }}, speed)   
        
           
    }

}