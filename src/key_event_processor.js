

import { log_event } from "./key_even_loger.js";
import { move_panel } from "./move_panel.js";

document.onkeydown = process_key;


function process_key(event){

    log_event(event);
    
    var key = event.key;
    
    switch(key){
        case 'q':
            window.location.reload();
            break;
        case 'w':
            move_panel(0, -200);
            break;
        case 's':
            move_panel(0, 200);
            break;
        case 'a':
            move_panel(-200, 0);
            break;
        case 'd':
            move_panel(200, 0);
            break;

    }
}




var lsv = 0;
document.addEventListener("scroll", (event) => {
    lsv = window.scrollY;
    //console.log(lsv);
});