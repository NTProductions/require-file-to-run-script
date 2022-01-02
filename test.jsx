var window = new Window("palette", "My Script", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Some sample text");
var button = window.add("button", undefined, "Start");

main();

function main() {
    var filePath = $.fileName;
    filePath = filePath.slice(0, filePath.lastIndexOf("/"))+"/image.png";
    
    if(!File(filePath).exists) {
        alert("No 'Image.png' file detected!");
        return false;
        } else {
            window.center();
            window.show();
            }
    
    }