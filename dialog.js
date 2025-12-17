export default class Dialog {
    constructor(name, text, txt_index) {
        this.name = name
        this.text = text
        this.txt_index = -1
    }

    start_dialog(e) {
        let dialog_window = document.createElement("span")
        dialog_window.classList.add("dialog_window")
        dialog_window.style.position = "absolute"
        dialog_window.style.left = "800px"
        dialog_window.style.top = "600px"
        dialog_window.style.width = "700px";
        dialog_window.style.height = "100px";
        document.body.append(dialog_window)

        let dialog_icon = document.createElement("img")
        dialog_icon.classList.add("dialog_icon")
        dialog_icon.style.position = "absolute"
        dialog_icon.style.top = "580px"
        dialog_icon.style.left = "680px"
        dialog_icon.style.width = "110px"

        if (!Array.isArray(this.text)) {
            let i = 0
            setInterval(() => {
                if (i < this.text.length) {
                    dialog_window.innerHTML += this.text.charAt(i);
                    i++;
                }}, 60)}  
        
        else if (e != null) {
            let j = 0
            if (e.key == "e" && this.txt_index+1 < this.text.length) {
                document.body.append(dialog_icon)
                setInterval(() => {
                    // Add icon
                    dialog_icon.src = this.text[this.txt_index][1]                    
                    // Add text
                    if (j < this.text[this.txt_index][0].length) {
                        dialog_window.innerHTML += this.text[this.txt_index][0].charAt(j);
                        j++;
                    }}, 60)
                this.txt_index++
            }  
            else {
                document.querySelectorAll(".dialog_icon").forEach(tag => tag.remove())
                document.querySelectorAll(".dialog_window").forEach(tag => tag.remove())
            }                
        }
    }
}
