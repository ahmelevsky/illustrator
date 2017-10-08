#target Illustrator  
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
                   while (doc.symbolItems.length>0){
                    doc.symbolItems[0].breakLink();
                   }
                 try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                catch  (exp){}
                    doc.close(SaveOptions.SAVECHANGES);  
                   
          };  
       
  };
 };  

