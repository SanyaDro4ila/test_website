

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
        case 'ArrowUp':
            move_panel(100, 1);
            break;
        case 'ArrowDown':
            move_panel(100, -1);
            break;
        case 'a':
            break;
        case 'd':
            break;

    }
}




var lsv = 0;
document.addEventListener("scroll", (event) => {
    lsv = window.scrollY;
    //console.log(lsv);
});