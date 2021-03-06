﻿#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
                             
                                
  
  
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
  
          if ( inFolder != null ) {  
    
                                                  
                    subFiles = inFolder.getFiles( /\.ai$/i ) ;

                
            for ( i = 0; i < subFiles.length; i++ ) {  
                      
                   var doc = open(subFiles[i]);
                    for ( e = 0; e < doc.meshItems.length; e++ ) {  
                        if (doc.meshItems[e].name!=""){
                                  var name =doc.meshItems[e].name;
                                  doc.selection = null;
                                  doc.meshItems[e].selected = true; 
                                  app.doScript("o", "ungroup", true); 
                                  doc.selection = null;
                                  for ( t = 0; t < doc.meshItems.length; t++ ) {  
                                         if (doc.meshItems[t].name==name){
                                                   doc.meshItems[t].selected = true; 
                                             }
                                      }
                                  app.doScript("o", "group", true); 
                            }
                      }
                    doc.save();
                    doc.close(SaveOptions.DONOTSAVECHANGES);  
                   
                   //  beep() //   
          };                  
                
                
                   
          };  
       
  
  
 };  


function saveAsEpsFile() {  
     var epsOptions = new EPSSaveOptions();  
     with (epsOptions) {  
         
    compatibility = Compatibility.ILLUSTRATOR10;
    embedLinkedFiles = false;
    includeDocumentThumbnails = false;
    embedAllFonts = false;
    saveMultipleArtboards = true;
    cmykPostScript = false;
   preview = EPSPreview.None; 
     }  
     return epsOptions;  
}
  
function saveArtboardsAsEpsFile(docum) {  
     var epsOptions = new EPSSaveOptions();  
     with (epsOptions) {  
    artboardRange = '1-' + docum.artboards.length;     
    compatibility = Compatibility.ILLUSTRATOR10;
    embedLinkedFiles = false;
    includeDocumentThumbnails = false;
    embedAllFonts = false;
    saveMultipleArtboards = true;
    cmykPostScript = false;
   preview = EPSPreview.None; 
     }  
     return epsOptions;  
}