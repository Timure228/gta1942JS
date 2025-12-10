export default class Object { 
        constructor(class_name, 
        x_left, 
        y_top, 
        width, 
        height,
        color)
        {
        this.class_name = class_name;
        this.x_left = x_left;
        this.y_top = y_top;
        this.height = height;
        this.width = width;
        this.color = color
        }

        add_object() {
            let object_span = document.createElement("span")
            object_span.classList.add(this.class_name)
            object_span.style.position = "absolute"
            object_span.style.left = this.x_left + "px" 
            object_span.style.top = this.y_top + "px" 
            object_span.style.width = this.width + "px"
            object_span.style.height = this.height + "px"
            object_span.style.border = "5px solid " + this.color

            document.body.append(object_span)
        }
}