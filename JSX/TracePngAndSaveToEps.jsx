#target Illustrator  


var actionStr = [ 
"/version 3",
"/name [ 10",
"41667465725472616365",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 10",
"41667465725472616365",
"]",
"/keyIndex 0",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 3",
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
"/value [ 28",
"46697420417274626f61726420746f2073656c656374656420417274",
"]",
"}",
"/parameter-2 {",
"/key 1818455661",
"/showInPalette -1",
"/type (ustring)",
"/value [ 84",
"d09fd0bed0b4d0bed0b3d0bdd0b0d182d18c20d0bfd0be20d0b3d180d0b0d0bd",
"d0b8d186d0b0d0bc20d0b2d18bd0b4d0b5d0bbd0b5d0bdd0bdd0bed0b920d0b8",
"d0bbd0bbd18ed181d182d180d0b0d186d0b8d0b8",
"]",
"}",
"/parameter-3 {",
"/key 1668114788",
"/showInPalette -1",
"/type (integer)",
"/value -2130706022",
"}",
"}",
"/event-3 {",
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


 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
  
                                
  
  
          inFolder = Folder.selectDialog( 'Please choose your Parent Folder…?' );  
  
          if ( inFolder != null ) {  
    
                    fileList = Array();  
  
                    inFiles = inFolder.getFiles();  
                       
                                 
                    subFiles = inFolder.getFiles( /\.png$/i ) ;

                    
                   var actFileDestStr = Folder.desktop  + "/AfterTraceAction.aia";  
                               
                                 var f = new File(actFileDestStr);
                                    f.open('w');
                                    f.write(actionStr);
                                    f.close();
                                                         
                                app.loadAction(f);  
                      
                    placeAndTrace( subFiles , inFolder );  
                      app.unloadAction("AfterTrace", '');  
                   
          };  
       
  
};  
  
  
function placeAndTrace( allFiles , inFolder) {  
    
          var doc, i, j, lay, thisPlace, thisImage, uIL;  
  
          uIL = userInteractionLevel;  
          var orginalUIL = app.userInteractionLevel       
          app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;   
  
          for ( i = 0; i < allFiles.length; i++ ) {  
                      
                    doc = app.documents.add(DocumentColorSpace.RGB,1024,1024);  
                      
                 
                              doc.layers[0].name = 'Layer1'                   
                 
                              thisPlace = doc.placedItems.add();  
                           
                              thisPlace.file = allFiles[i];  
                         
                              thisImage = thisPlace.trace();  
                                                                  
                              thisImage.tracing.tracingOptions.loadFromPreset( 'NewStyle' );  
  
                              thisImage.tracing.expandTracing();  
                                                         
                                                         
                                                         
                              app.doScript("AfterTrace", "AfterTrace", false);  
                      
                   with (doc) {  
                       
                         //  layers.getByName( 'Слой 1' ).remove();  
                             
                           var epsOptions = saveAsEpsFile();  
                             
                                                    
                           epsFilePath = new File(inFolder.fsName+'/' +allFiles[i].name.slice(0, -4)+ '.eps');   
                             
                           saveAs(epsFilePath , epsOptions);  
                             
                           redraw();  
                                                     
                           close(SaveOptions.DONOTSAVECHANGES);  
                             
                     }  
                  
                   //  beep() //   
          };  
        
      userInteractionLevel = orginalUIL;            
  
};  
function saveAsAiFile() {  
     var aiOptions = new IllustratorSaveOptions();  
     with (aiOptions) {  
          compatibility = Compatibility.ILLUSTRATOR12;  
          compressed = true;  
          embedICCProfile = true;  
          embedLinkedFiles = true;  
          flattenOutput = OutputFlattening.PRESERVEAPPEARANCE;  
          fontSubsetThreshold = 0;  
          overprint = PDFOverprint.PRESERVEPDFOVERPRINT;  
          pdfCompatible = true  
     }  
     return aiOptions;  
}  

function saveAsEpsFile() {  
     var epsOptions = new EPSSaveOptions();  
     with (epsOptions) {  
         
    compatibility = Compatibility.ILLUSTRATOR10;
    embedLinkedFiles = false;
    includeDocumentThumbnails = false;
    embedAllFonts = false;
    saveMultipleArtboards = false;
    cmykPostScript = false;
   preview = EPSPreview.None; 
     }  
     return epsOptions;  
}