var countTotal = 10;
var itemCount = 0;

function startGUI() {
    var inputText, inputNum;
    // Create Main Window
    win = new Window("dialog", "title", undefined);

    // Enable use of 'Enter' key
    win.addEventListener("keydown", function(kd) {
        enter(kd)
    });

    // Style for Main Window
    win.orientation = "column";
    win.alignChildren = ["fill", "fill"];
    win.preferredSize = [250, 150];

    // Style for group
    var objGrp = win.add("panel", undefined, "Panel");
    objGrp.orientation = "column";
    objGrp.alignChildren = ["fill", "fill"];

    var titleMsg = objGrp.add("statictext", undefined, "Number to start from:");
    var txt_Num = objGrp.add("edittext { characters: 1, justify: 'center' }");
    txt_Num.helpTip = "Object number to start from, other than 1";

    txt_Count = win.add("statictext", undefined, "Current object: ".concat(itemCount).concat(" out of: ").concat(countTotal));

    // Button
    var btn = objGrp.add("button", undefined, "Start");
    btn.onClick = function() {
        inputText = txt_Num.text;
        itemCount = inputText
        inputNum = txt_Num.text;
        for (var i = 0; i < 10; i++) {
            itemCount++;
            txt_Count.text = "Current object: ".concat(itemCount).concat(" out of: ").concat(countTotal);
            win.update();
            $.sleep(1000);
        }
        win.close();
    }

    // Use Enter key
    function enter(k) {
        if (k.keyName == "Enter") {
            inputText = txt_Num.text;
            inputNum = txt_Num.text;
            inputNum = txt_Num.text;
            for (var i = 0; i < 10; i++) {
                itemCount++;
                txt_Count.text = "Current object: ".concat(itemCount).concat(" out of: ").concat(countTotal);
                win.update();
                $.sleep(1000);
            }
            win.close();
        }
    }

    // Close button
    var quitBtn = win.add("button", undefined, "Close");

    // Event listener for the quit button
    quitBtn.onClick = function() {
        win.close();
    }

    // Centering & Show Window
    win.center();
    win.show();
} // end startGUI

startGUI();