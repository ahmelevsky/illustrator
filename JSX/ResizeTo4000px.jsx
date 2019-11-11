#target illustrator  
var df = new Folder('~/Desktop');
 
var topLevel = Folder.selectDialog('Выберите папку с EPS', df);

var actionStr = [ 
"/version 3",
"/name [ 3",
"344d50",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 6",
"6368616e6765",
"]",
"/keyIndex 0",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 4",
"/event-1 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_selectAll)",
"/localizedName [ 23",
"d092d18bd0b4d0b5d0bbd0b8d182d18c20d0b2d181d0b5",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 0",
"}",
"/event-2 {",
"/useRulersIn1stQuadrant 0",
"/internalName (ai_plugin_transformPalette)",
"/localizedName [ 51",
"d09fd0b0d0bbd0b8d182d180d0b02022d0a2d180d0b0d0bdd181d184d0bed180",
"d0bcd0b8d180d0bed0b2d0b0d0bdd0b8d0b522",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 2",
"/parameter-1 {",
"/key 1954115685",
"/showInPalette 4294967295",
"/type (enumerated)",
"/name [ 47",
"d09cd0b0d181d188d182d0b0d0b1d0b8d180d0bed0b2d0b0d182d18c20d188d0",
"b8d180d0b8d0bdd18320d0bdd0b03a",
"]",
"/value 2",
"}",
"/parameter-2 {",
"/key 1986096245",
"/showInPalette 4294967295",
"/type (unit real)",
"/value NEW_WIDTH",
"/unit 592476268",
"}",
"}",
"/event-3 {",
"/useRulersIn1stQuadrant 0",
"/internalName (ai_plugin_transformPalette)",
"/localizedName [ 51",
"d09fd0b0d0bbd0b8d182d180d0b02022d0a2d180d0b0d0bdd181d184d0bed180",
"d0bcd0b8d180d0bed0b2d0b0d0bdd0b8d0b522",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 2",
"/parameter-1 {",
"/key 1954115685",
"/showInPalette 4294967295",
"/type (enumerated)",
"/name [ 47",
"d09cd0b0d181d188d182d0b0d0b1d0b8d180d0bed0b2d0b0d182d18c20d0b2d1",
"8bd181d0bed182d18320d0bdd0b03a",
"]",
"/value 3",
"}",
"/parameter-2 {",
"/key 1986096245",
"/showInPalette 4294967295",
"/type (unit real)",
"/value NEW_HEIGHT",
"/unit 592476268",
"}",
"}",
"/event-4 {",
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
"/showInPalette 4294967295",
"/type (ustring)",
"/value [ 28",
"46697420417274626f61726420746f2073656c656374656420417274",
"]",
"}",
"/parameter-2 {",
"/key 1818455661",
"/showInPalette 4294967295",
"/type (ustring)",
"/value [ 84",
"d09fd0bed0b4d0bed0b3d0bdd0b0d182d18c20d0bfd0be20d0b3d180d0b0d0bd",
"d0b8d186d0b0d0bc20d0b2d18bd0b4d0b5d0bbd0b5d0bdd0bdd0bed0b920d0b8",
"d0bbd0bbd18ed181d182d180d0b0d186d0b8d0b8",
"]",
"}",
"/parameter-3 {",
"/key 1668114788",
"/showInPalette 4294967295",
"/type (integer)",
"/value 2164261359",
"}",
"}",
"}",

].join("\n");
 
if (topLevel != null) {
 
     topLevel = topLevel.fsName
     var fileList = new Array();
 
     fileListRecursive(topLevel, /\.eps$/i);
 
     if (fileList.length > 0) {
            
          main();    
                   
     } else {
          alert('There is NO Illustrator EPS files in folder you have selected!!');     
     }
}


 
function main() {
     with (app) {
          while (documents.length) {
                 activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);
            }
          for (var a = 0; a < fileList.length; a++) {
               var docRef = open(fileList[a]);
               with (docRef) {
                                
                                var artWidth = width;
                                var artHeight = height;
                                
                                 var newWidth, newHeight ;
                                 
                                 var oldArea = artWidth * artHeight;
                                 var proportions = artWidth/artHeight;
                                 
                                 var newArea = 4000000;
                                 
                                 //If do not need resize close and go to the next file
                                 if (oldArea>=newArea){
                                         close(SaveOptions.DONOTSAVECHANGES);
                                         continue;
                                     }
                                 
                               //recount sizes and execute action
                               newHeight = Math.sqrt(newArea/proportions);
                               newWidth = newHeight * proportions;
                               
                                  
                               // app.executeMenuCommand("selectall"); 
                                 
                                var actFileDestStr = Folder.desktop  + "/ResizeTo4000.aia";  
                               
                                var thisActionString = actionStr.replace("NEW_WIDTH", Math.ceil(newWidth).toFixed(1)).replace("NEW_HEIGHT", Math.ceil(newHeight).toFixed(1));                               
                                var f = new File(actFileDestStr);
                                    f.open('w');
                                    f.write(thisActionString);
                                    f.close();
                                                         
                                app.loadAction(f);  
                                app.doScript("change", "4MP",true);  
                                app.unloadAction("4MP", ''); 
                                
                                f.remove(); 
                                
                                //fitArtboardToSelectedArt(0); 
                                
                                close(SaveOptions.SAVECHANGES);
                                
                                
               }
                                
          }          
         
     }
}
 
function fileListRecursive(f, exp) {          
     var t = Folder(f).getFiles();
     for (var i = 0; i < t.length; i++) {
          if (t[i] instanceof File && RegExp(exp).test(t[i].fsName)) fileList.push(t[i]);
          if (t[i] instanceof Folder) fileListRecursive(t[i].fsName, exp);
     }
}