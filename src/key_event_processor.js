import { log_event } from "./key_even_loger.js";
import { move_panel_up, move_panel_down } from "./move_panel.js";

document.onkeydown = process_key;


function process_key(event){

    log_event(event);
    
    var key = event.key;
    
    if(key == "w"){
        move_panel_up();
    }
    else if(key == "s"){
        move_panel_down();
    }
}