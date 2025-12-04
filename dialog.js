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

        if (!Array.isArray(this.text)) {
            let i = 0
            setInterval(() => {
                if (i < this.text.length) {
                    dialog_window.innerHTML += this.text.charAt(i);
                    i++;
                }}, 50)}  
        
        else if (e != null) {
            let j = 0
            if (e.key == "e" && this.txt_index+1 < this.text.length) {
                setInterval(() => {
                    if (j < this.text[this.txt_index].length) {
                        console.log(this.txt_index)
                        dialog_window.innerHTML += this.text[this.txt_index].charAt(j);
                        j++;
                    }}, 80)
                this.txt_index++
            }  
            else {
                document.querySelectorAll(".dialog_window").forEach(tag => tag.remove())
            }
                
            
        }

        
    } 
}