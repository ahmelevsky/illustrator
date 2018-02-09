#target Illustrator  
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
                   
                     try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                    catch  (exp){}
                   
                   while (doc.symbolItems.length>0){
                    doc.symbolItems[0].breakLink();
                   }
                 try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                 catch  (exp){}
                 
                  app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true); 
               
                    with (doc) {  
                           epsFilePath = new File(outFolder.fsName+'/' +subFiles[i].name);   
                           saveAs(epsFilePath , saveArtboardsAsEpsFile(doc));  
                           close(SaveOptions.DONOTSAVECHANGES);  
                     }  
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