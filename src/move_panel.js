



var panel_y = 0;

export function move_panel(distance, dir){
    
    var moveable_element = document.getElementById("panel");
    var style = window.getComputedStyle(moveable_element);

    moveable_element.style.transition = `transform 0.5s`;

    if(dir>0){
        panel_y-=200;
    }
    else{
        panel_y+=200;        
    }

    set_position(moveable_element, 0, panel_y);
    
}

function set_position(el, dx, dy){
    el.style.transform = `translate(${dx}px, ${dy}px)`;
}