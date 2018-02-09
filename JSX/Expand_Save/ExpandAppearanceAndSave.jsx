#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
                             
                                
  
  
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
  
          if ( inFolder != null ) {  
                                                      
                    subFiles = inFolder.getFiles( /\.eps$/i ) ;

                
            for ( i = 0; i < subFiles.length; i++ ) {  
                      
                   var doc = open(subFiles[i]);
         
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    doc.close(SaveOptions.SAVECHANGES);  
                   
          };  
       
  };
 };  

