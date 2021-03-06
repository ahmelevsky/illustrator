﻿/////////////////////////////////////////////////////////////////
//Batch Convert EPS file to JPG
//
//This script ask you to select folder with your EPS files. 
//Script also consider all files in subfolder of selected folder.
//
//JPG size is determined by artboard size of EPS file. 
//It makes JPG 5000px on long side.
//
//This script close eps files without saving them.
//
//Big thanks to all who helped with testing and improving this script.
//
// JS code (c) copyright: Alexander Rodionov  www.behance.net/GarryKillian
//////////////////////////////////////////////////////////////////
#target illustrator  
var df = new Folder('~/Desktop');
 
var topLevel = Folder.selectDialog('Выберите папку с EPS', df);
var outputFolder = Folder.selectDialog('Выберите папку куда писать JPG', topLevel);

var actionStr = [ 
 "/version 3",
"/name [ 4",
"54455354",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 6",
"4578706f7274",
"]",
"/keyIndex 0",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 1",
"/event-1 {",
"/useRulersIn1stQuadrant 0",
"/internalName (adobe_SaveForWeb)",
"/localizedName [ 12",
"5361766520666f7220576562",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 1",
"/showDialog 0",
"/parameterCount 16",
"/parameter-1 {",
"/key 1181578272",
"/showInPalette -1",
"/type (enumerated)",
"/name [ 4",
"4a504547",
"]",
"/value 1246774599",
"}",
"/parameter-2 {",
"/key 1231975538",
"/showInPalette -1",
"/type (boolean)",
"/value 0",
"}",
"/parameter-3 {",
"/key 1366062201",
"/showInPalette -1",
"/type (integer)",
"/value 100",
"}",
"/parameter-4 {",
"/key 1332769901",
"/showInPalette -1",
"/type (boolean)",
"/value 1",
"}",
"/parameter-5 {",
"/key 1348563827",
"/showInPalette -1",
"/type (integer)",
"/value 1",
"}",
"/parameter-6 {",
"/key 1651275122",
"/showInPalette -1",
"/type (real)",
"/value 0.0",
"}",
"/parameter-7 {",
"/key 1299477536",
"/showInPalette -1",
"/type (boolean)",
"/value 1",
"}",
"/parameter-8 {",
"/key 1299477586",
"/showInPalette -1",
"/type (integer)",
"/value 255",
"}",
"/parameter-9 {",
"/key 1299477575",
"/showInPalette -1",
"/type (integer)",
"/value 255",
"}",
"/parameter-10 {",
"/key 1299477570",
"/showInPalette -1",
"/type (integer)",
"/value 255",
"}",
"/parameter-11 {",
"/key 1213424492",
"/showInPalette -1",
"/type (unit real)",
"/value DocW",
"/unit 592474723",
"}",
"/parameter-12 {",
"/key 1448305516",
"/showInPalette -1",
"/type (unit real)",
"/value DocH",
"/unit 592474723",
"}",
"/parameter-13 {",
"/key 1097757761",
"/showInPalette -1",
"/type (ustring)",
"/value [ 13",
"417274204f7074696d697a6564",
"]",
"}",
"/parameter-14 {",
"/key 1131180097",
"/showInPalette -1",
"/type (boolean)",
"/value 1",
"}",
"/parameter-15 {",
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
"/parameter-16 {",
"/key 1231953952",
"/showInPalette -1",
"/type (ustring)",
"/value [ FOLDERPATH_LENGTH",
"FOLDERPATH",
"]",
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
              var fname = fileList[a].name.slice(0, -4);
                var filePath = new File(outputFolder.fsName+'/' + fname+ '.jpg'); 
                  if (filePath.exists) continue;
               var docRef = open(fileList[a]);
               with (docRef) {
                   
                   
                                var artWidth = app.activeDocument.width;
                                var artHeight = app.activeDocument.height;
                                if (artWidth<=artHeight) 
                                 { 
                                    var DocW = ((3010*100)/artWidth).toFixed(2);
                                    var DocH = DocW;
                                   }
                                else
                                {  
                                   var DocH = ((3010*100)/artHeight).toFixed(2);      
                                   var DocW = DocH;
                                    
                                }
                                var pathfile = outputFolder.fsName;                               
                                
                                var destStr = decodeURI(pathfile);
                                var pathString = toHex(destStr);
                                var actFileDestStr = Folder.desktop  + "/ExpJPGAction.aia";  
                               
                                var thisActionString = actionStr.replace("FOLDERPATH_LENGTH", destStr.length).replace("FOLDERPATH", pathString).replace("DocW",DocW).replace("DocH",DocH);                               
                                var f = new File(actFileDestStr);
                                    f.open('w');
                                    f.write(thisActionString);
                                    f.close();
                                                         
                                app.loadAction(f);  
                                app.doScript("Export", "TEST",true);  
                                app.unloadAction("TEST", ''); 
                                f.remove(); 
                                close(SaveOptions.DONOTSAVECHANGES);
                                
                                
               }
                                
          }          
         
     }
}
 
 function toHex3(str){
     var hex;
  try{
    hex = unescape(encodeURIComponent(str))
    .split('').map(function(v){
      return v.charCodeAt(0).toString(16)
    }).join('')
  }
  catch(e){
    hex = str
  }
  return hex
}

function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

function toHex2(str) {
    var hex, i;

    var result = "";
    for (i=0; i<str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
  }

function fileListRecursive(f, exp) {          
     var t = Folder(f).getFiles();
     for (var i = 0; i < t.length; i++) {
          if (t[i] instanceof File && RegExp(exp).test(t[i].fsName)) fileList.push(t[i]);
          if (t[i] instanceof Folder) fileListRecursive(t[i].fsName, exp);
     }
}