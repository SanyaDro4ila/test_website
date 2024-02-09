



var panel_y = 0;
var panel_x = 0;

export function move_panel(dist_x, dist_y){
    
    var moveable_element = document.getElementById("panel1");
    //var style = window.getComputedStyle(moveable_element);

    moveable_element.style.transition = `transform 0.5s`;

    panel_x += dist_x;
    panel_y += dist_y;         

    set_position(moveable_element, panel_x, panel_y);
    
}

function set_position(el, dx, dy){
    el.style.transform = `translate(${dx}px, ${dy}px)`;
}