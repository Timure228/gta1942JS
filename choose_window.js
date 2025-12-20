import Dialog from "/dialog.js";

export default class TwoOptionChooseWindow extends Dialog {
    constructor(name, text, txt_index, isOne, isTwo) {
        super(name, text, txt_index)
        this.isOne = false;
        this.isTwo = false;
    }

    show() {
        return console.log(this.name + " " + this.text + " " + this.txt_index) 
    }
   
    start_dialog() {
        let choose_dialog_window = document.createElement("span")
        choose_dialog_window.classList.add("choose_dialog_window")
        choose_dialog_window.style.position = "absolute"
        choose_dialog_window.style.left = "800px"
        choose_dialog_window.style.top = "600px"
        choose_dialog_window.style.width = "700px";
        choose_dialog_window.style.height = "100px";
        document.body.append(choose_dialog_window)
        
        let j = 0
                setInterval(() => {               
                    // Add text
                    if (j < (this.text[0] + this.text[1]).length) {
                        choose_dialog_window.innerHTML += (this.text[0] + this.text[1]).charAt(j);
                        j++;
                    }
                    if (j == this.text[0].length) {
                        choose_dialog_window.innerHTML += "<br>"
                    }
                 }, 60)
        }

    choose(e) {
        let choose_dialog_window = document.querySelector(".choose_dialog_window")

        let first_option_text = "> " + (this.text[0] + "<br>" + this.text[1])
        let second_option_text = (this.text[0] + "<br>" + "> " + this.text[1])

        if (e.keyCode == 38) {
            choose_dialog_window.innerHTML = first_option_text
            this.isOne = true;
            this.isTwo = false;
        }
        else if (e.keyCode == 40) {
            choose_dialog_window.innerHTML = second_option_text
            this.isTwo = true;
            this.isOne = false;
        }
        else if (this.isOne && e.keyCode == 13 && !document.querySelector(".dialog_window")) {
            choose_dialog_window.remove()
            return "one"
        }
        else if (this.isTwo && e.keyCode == 13 && !document.querySelector(".dialog_window")) {
            choose_dialog_window.remove()
            return "two"
        }
    } 
}
