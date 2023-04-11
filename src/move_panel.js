


export function move_panel_up(){
    
    var moveable_element = document.getElementById("panel");
    var style = window.getComputedStyle(moveable_element);



    moveable_element.classList.add("move_panel_up");

    moveable_element.classList.remove("move_panel_up");
}

export function move_panel_down(){

    var moveable_element = document.getElementById("panel");
    var style = window.getComputedStyle(moveable_element);


    moveable_element.classList.add("move_panel_down");

    moveable_element.classList.remove("move_panel_down");
}
