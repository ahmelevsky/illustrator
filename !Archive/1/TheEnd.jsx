#target illustrator  

 var actionStr = [ 
"/version 3",
"/name [ 6",
"546865456e64",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 6",
"546865456e64",
"]",
"/keyIndex 0",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 4",
"/event-1 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_showAll)",
"/localizedName [ 23",
"d09fd0bed0bad0b0d0b7d0b0d182d18c20d0b2d181d0b5",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 0",
"}",
"/event-2 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_clear)",
"/localizedName [ 16",
"d09ed187d0b8d181d182d0b8d182d18c",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 0",
"}",
"/event-3 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_commandManager)",
"/localizedName [ 37",
"d094d0bed181d182d183d0bf20d0ba20d0bfd183d0bdd0bad182d18320d0bcd0",
"b5d0bdd18e",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 3",
"/parameter-1 {",
"/key 1769238125",
"/showInPalette -1",
"/type (ustring)",
"/value [ 17",
"636c65616e7570206d656e75206974656d",
"]",
"}",
"/parameter-2 {",
"/key 1818455661",
"/showInPalette -1",
"/type (ustring)",
"/value [ 18",
"d092d18bd187d0b8d181d182d0b8d182d18c",
"]",
"}",
"/parameter-3 {",
"/key 1668114788",
"/showInPalette -1",
"/type (integer)",
"/value -2130705848",
"}",
"}",
"/event-4 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_playAction)",
"/localizedName [ 43",
"d092d0bed181d0bfd180d0bed0b8d0b7d0b2d0b5d181d182d0b820d0bed0bfd0",
"b5d180d0b0d186d0b8d18e",
"]",
"/isOpen 1",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 2",
"/parameter-1 {",
"/key 1936028718",
"/showInPalette -1",
"/type (ustring)",
"/value [ 40",
"d09ed0bfd0b5d180d0b0d186d0b8d0b820d0bfd0be20d183d0bcd0bed0bbd187",
"d0b0d0bdd0b8d18e",
"]",
"}",
"/parameter-2 {",
"/key 1633907822",
"/showInPalette -1",
"/type (ustring)",
"/value [ 75",
"d0a3d0b4d0b0d0bbd0b8d182d18c20d0bdd0b5d0b8d181d0bfd0bed0bbd18cd0",
"b7d183d0b5d0bcd18bd0b520d18dd0bbd0b5d0bcd0b5d0bdd182d18b20d0bfd0",
"b0d0bbd0b8d182d180d18b",
"]",
"}",
"}",
"}",
].join("\n");

var idoc = app.activeDocument;
var hiddenLayers = [];  

 for (i = 0; i < idoc.layers.length; i++)
    {
     if (idoc.layers[i].visible != true)
            hiddenLayers.push(idoc.layers[i]); 
     }
var hiddencount = hiddenLayers.length;  
   for (j=0; j<hiddencount; j++) {  
            try {  
                hiddenLayers[j].visible = true; 
                hiddenLayers[j].remove();  
            }  
            catch (e) {};  
     }  
 
   var actFileDestStr = Folder.desktop  + "/TheEndAction.aia";  
                               
                                 var f = new File(actFileDestStr);
                                    f.open('w');
                                    f.write(actionStr);
                                    f.close();
                                                         
                                app.loadAction(f);  
                      
                     app.doScript("TheEnd", "TheEnd",true);  
                      app.unloadAction("TheEnd", '');  