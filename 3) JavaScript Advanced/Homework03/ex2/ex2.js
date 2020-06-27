// Function for getting arguments which you put in address line
function getQueryString() {
    let args = {};                                  
    let query = location.search.substring(1);       
    let pairs = query.split("&");                   
    for (let i = 0; i < pairs.length; i++) {
        let pos = pairs[i].indexOf('=');            
        if (pos == -1) {                            
            continue;                    
        }
        let argname = pairs[i].substring(0, pos);   
        let value = pairs[i].substring(pos + 1);    
        args[argname] = value;                      
    }
    return args;
}

// Function which get arguments from address line and calculate their sum
window.onload = function() {
    let args = getQueryString();
    let elem = document.createElement("p");
    elem.innerHTML = "a = " + args.a + "<br />b =  " + args.b + "<br />Sum = " + (parseInt(args.a) + parseInt(args.b));
    document.body.appendChild(elem);
}