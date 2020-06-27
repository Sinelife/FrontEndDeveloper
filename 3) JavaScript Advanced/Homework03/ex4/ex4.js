// Function-constructor which contains: object link, boolean value for activity of link and window of correct link
function WindowBlock(link) {
    this.isActive = false;
    this.link = link;
}

// Method for closing window of correct windowBlock object(it close window and change text in link)
WindowBlock.prototype.closeWindow = function() {
    this.link.innerHTML = this.link.innerHTML.replace("(Open)", "");
    this.isActive = false;
    this.window.close();
}

// Method for opening window of correct windowBlock object(it oprn window and change text in link)
WindowBlock.prototype.openWindow = function() {
    this.link.innerHTML += "(Open)";
    this.isActive = true;
    this.window = getWindow(this.link.id);
}

// Function for geting opened window
function getWindow(id) {
    return window.open("windows/" + id + ".html", "Window Name", "width=1200,height=400,status=yes,resizable=no,top=200");
}

// Array which stores all windowBlock objects. Indexes(keys) for this array would be ids of links in windowBlocks.
// For example you could get element by such code windowBlocks['window1']
let windowBlocks = [];

// !!Array which store ids of links. It is added because without it I can't run by foreach cycle through windowBlock elements
let ids = [];


// Fill our windowBLocks array with correct info and also fill ids array
window.onload = function() {
    let array = document.getElementsByTagName("a");
    for (let i = 0; i < array.length; i++) {
        let id = array[i].id;
        windowBlocks[id] = new WindowBlock(array[i]);
        ids.push(id);
    }
}

// Function to close all windows of all links which are opened
function closeAllWindows() {
    for(let i = 0; i < ids.length; i++) {
        if (windowBlocks[ids[i]].isActive) {
            windowBlocks[ids[i]].closeWindow();
        }
    }
}

// Function which open window of link if it is closed and closed window of link if it is opened
let onClick = function(id) {
    let windowBlock = windowBlocks[id];
    if (windowBlock.isActive) {
        windowBlock.closeWindow();
    } else {
        closeAllWindows();
        windowBlock.openWindow();
    }
}