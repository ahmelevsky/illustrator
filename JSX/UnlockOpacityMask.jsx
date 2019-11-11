#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
                             
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
  
          if ( inFolder != null ) {  
    
                    subFiles = inFolder.getFiles(/\.(ai|eps)$/i);
                
            for ( i = 0; i < subFiles.length; i++ ) {  
                      
                   var doc = open(subFiles[i]);
                    for (var m = 0; m < doc.meshItems.length; m++ ) {  
                        if (doc.meshItems[m].name!=""){
                                  doc.meshItems[m].name = doc.meshItems[m].name + m;
                        }
                   }
                    for (var e = 0; e < doc.meshItems.length; e++ ) {  
                        if (doc.meshItems[e].name!=""){
                                  doc.meshItems[e].name = doc.meshItems[e].name.replace(/[0-9]/g, '');
                                  var name =doc.meshItems[e].name;
                                  doc.selection = null;
                                  doc.meshItems[e].selected = true; 
                                  app.doScript("o", "ungroup", true); 
                                  doc.selection = null;
                                  for (var t = 0; t < doc.meshItems.length; t++ ) {  
                                         if (doc.meshItems[t].name==name){
                                                   doc.meshItems[t].locked = false;
                                                   doc.meshItems[t].selected = true; 
                                             }
                                      }
                                  app.doScript("o", "group", true); 
                            }
                      }
                    doc.save();
                    doc.close(SaveOptions.DONOTSAVECHANGES);  
                   
          };                  
                                                 
          };  
          
 };  

