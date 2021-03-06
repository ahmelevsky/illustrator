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
                  var music = new File("/Users/olya/Downloads/beep.wav");  
                    if(music.exists) music.execute();  
                  doc.executeMenuCommand('saveas');
                  close(SaveOptions.DONOTSAVECHANGES);  
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