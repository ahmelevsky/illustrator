﻿#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  



var actionStr = [ 
"/version 3",
"/name [ 10",
"53617665466f72576562",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 2",
"476f",
"]",
"/keyIndex 0",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 1",
"/event-1 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_SaveForWeb)",
"/localizedName [ 29",
"d0a1d0bed185d180d0b0d0bdd0b8d182d18c20d0b4d0bbd18f20576562",
"]",
"/isOpen 1",
"/isOn 1",
"/hasDialog 1",
"/showDialog 0",
"/parameterCount 14",
"/parameter-1 {",
"/key 1181578272",
"/showInPalette 4294967295",
"/type (enumerated)",
"/name [ 4",
"4a504547",
"]",
"/value 1246774599",
"}",
"/parameter-2 {",
"/key 1231975538",
"/showInPalette 4294967295",
"/type (boolean)",
"/value 0",
"}",
"/parameter-3 {",
"/key 1366062201",
"/showInPalette 4294967295",
"/type (integer)",
"/value 100",
"}",
"/parameter-4 {",
"/key 1332769901",
"/showInPalette 4294967295",
"/type (boolean)",
"/value 1",
"}",
"/parameter-5 {",
"/key 1348563827",
"/showInPalette 4294967295",
"/type (integer)",
"/value 1",
"}",
"/parameter-6 {",
"/key 1651275122",
"/showInPalette 4294967295",
"/type (real)",
"/value 0.0",
"}",
"/parameter-7 {",
"/key 1299477536",
"/showInPalette 4294967295",
"/type (boolean)",
"/value 1",
"}",
"/parameter-8 {",
"/key 1299477586",
"/showInPalette 4294967295",
"/type (integer)",
"/value 255",
"}",
"/parameter-9 {",
"/key 1299477575",
"/showInPalette 4294967295",
"/type (integer)",
"/value 255",
"}",
"/parameter-10 {",
"/key 1299477570",
"/showInPalette 4294967295",
"/type (integer)",
"/value 255",
"}",
"/parameter-11 {",
"/key 1097757761",
"/showInPalette 4294967295",
"/type (ustring)",
"/value [ 44",
"d09bd183d187d188d0b520d0bad0b0d187d0b5d181d182d0b2d0be20d0bed0b1",
"d18ad0b5d0bad182d0bed0b2",
"]",
"}",
"/parameter-12 {",
"/key 1131180097",
"/showInPalette 4294967295",
"/type (boolean)",
"/value 1",
"}",
"/parameter-13 {",
"/key 1399608180",
"/showInPalette 0",
"/type (raw)",
"/value < 1574",
"0000000300000001000000000000000700000001000000000001000000000000",
"0000010100000064000000010000006400000000000000000000000000000002",
"00000000ffffffff0000000004ffffffff00000000ffffffff00000000ffffff",
"ff00000000ffffffff0000000000000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000",
"00ff000000ff000000ff000000ff000000000000000000000000000001a80000",
"00100000000100000000000e54617267657453657474696e67730000000a0000",
"00004d7474434f626a630000000100000000000a4e6174697665517561640000",
"000300000000426c20206c6f6e67000000ff0000000047726e206c6f6e670000",
"00ff00000000526420206c6f6e67000000ff000000004f70746d626f6f6c0100",
"000000516c74796c6f6e67000000640000000b6164644d65746164617461626f",
"6f6c010000000a626c7572416d6f756e74646f75620000000000000000000000",
"0f656d62656449434350726f66696c65626f6f6c000000000a66696c65466f72",
"6d6174656e756d0000000a46696c65466f726d6174000000004a504547000000",
"0c6e6f4d61747465436f6c6f72626f6f6c000000000b70726f67726573736976",
"65626f6f6c000000000c7a6f6e65645175616c6974794f626a63000000010000",
"000000095a6f6e6564496e666f00000004000000096368616e6e656c49446c6f",
"6e67ffffffff0000000d656d70686173697a6554657874626f6f6c0000000010",
"656d70686173697a65566563746f7273626f6f6c0000000005666c6f6f726c6f",
"6e6700000000",
">",
"/size 1574",
"}",
"/parameter-14 {",
"/key 1231953952",
"/showInPalette 4294967295",
"/type (ustring)",
"/value [ FOLDERPATH_LENGTH",
"FOLDERPATH",
"]",
"}",
"}",
"}",
].join("\n");

Main();  
  
function Main() {  
    
          var outFolder, i, inFolder, subFiles;  
          var suffix = 0
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
          outFolder = Folder.selectDialog( 'Выберите папку, куда сохранять JPG' ); 
              
          if ( inFolder == null || outFolder == null ) {  
                alert ("Вы не выбрали все что необходимо");
                return;
            }
                                                      
           subFiles = inFolder.getFiles( /\.ai$/i ) ;
           
          
                
            for ( i = 0; i < subFiles.length; i++ ) {  
             var arts = 0;
             var suffix = 1;
             while (true) {
                   var doc = open(subFiles[i]);
                   var gslength = doc.graphicStyles.length;
                   if (doc.graphicStyles[arts].name =='[По умолчанию]' || doc.graphicStyles[arts].name =='[Default]') arts++;
                   
                   if (arts>=gslength) {
                       doc.close(SaveOptions.DONOTSAVECHANGES); 
                       break;
                       }
                   
                   app.executeMenuCommand ('selectall');
                   for (sel=0;sel<doc.selection.length;sel++)
                    doc.graphicStyles[arts].applyTo(doc.selection[sel]);
                  try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                 catch  (exp){}
                 
                   var gr = doc.groupItems.add();
                   for (j=0; j<doc.symbolItems.length;j++)
                        doc.symbolItems[j].moveToBeginning( gr );
                 
                  while (doc.symbolItems.length>0){
                    doc.symbolItems[0].breakLink();
                   }
                 try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                catch  (exp){}
                app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true); 
                 
                createClippingMasks(doc);                
                
                var pathfile =  outFolder.fsName+'/' +subFiles[i].name.slice(0, -3) + '_' + (suffix++) + '.jpg'; 
                saveForWeb(pathfile);
                
                doc.close(SaveOptions.DONOTSAVECHANGES); 
                arts++;
                if (arts>=gslength) break;
          };  
       
        };
   
 };  


function saveForWeb(destFilePath){
    var destStr = decodeURI(destFilePath);
    var pathString = toHex(destStr);
    var actFileDestStr = Folder.desktop  + "/ExpJPGAction.aia";  
                               
    var thisActionString = actionStr.replace("FOLDERPATH_LENGTH", destStr.length).replace("FOLDERPATH", pathString);                               
    var f = new File(actFileDestStr);
       f.open('w');
       f.write(thisActionString);
       f.close();    
    
    
    app.loadAction(f); 
    app.doScript("Go", "SaveForWeb",true);   
    app.unloadAction("SaveForWeb", ''); 
     f.remove(); 
    }
 
function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

function createClippingMasks(docRef){
    
    var groups = getTopGroups(docRef);
    for (artindex=0;artindex<docRef.artboards.length;artindex++){
     var group = groups[docRef.artboards.length-1-artindex];
     var top=docRef.artboards[artindex].artboardRect[1] ;  
     var left=docRef.artboards[artindex].artboardRect[0];  
     var width=docRef.artboards[artindex].artboardRect[2]-docRef.artboards[artindex].artboardRect[0];  
     var height=docRef.artboards[artindex].artboardRect[1]-docRef.artboards[artindex].artboardRect[3];  
     var rect = docRef.pathItems.rectangle (top, left, width, height);  
     rect.fillColor = rect.strokeColor = new NoColor();  
     
     rect.clipping = true;  
     rect.moveToBeginning( group );
     group.clipped = true;
        }
    
    }

  function getTopGroups(document){
      var topGroups = [];
       for (k=0; k<document.groupItems.length; k++) {
         if (document.groupItems[k].parent.typename == "Layer")
            topGroups.push(document.groupItems[k]);
         }
       return topGroups;
      }



