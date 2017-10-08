﻿#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
                             
                                
  
  
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
          outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
  
          if ( inFolder != null ) {  
    
                                                  
                    subFiles = inFolder.getFiles( /\.ai$/i ) ;

                
            for ( i = 0; i < subFiles.length; i++ ) {  
                      
                   var doc = open(subFiles[i]);
                   app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true); 
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                   with (doc) {  
                       
                             
                           var epsOptions = saveArtboardsAsEpsFile(doc);  
                             
                                                    
                           epsFilePath = new File(outFolder.fsName+'/' +subFiles[i].name);   
                             
                           saveAs(epsFilePath , epsOptions);  
                             
                           //redraw();  
                                                     
                           close(SaveOptions.DONOTSAVECHANGES);  
                             
                     }  
                  
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