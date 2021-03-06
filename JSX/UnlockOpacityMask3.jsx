﻿#target Illustrator  
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
                                  doc.meshItems[m].name = "_" + doc.meshItems[m].name;
                        }
                   }
                    for (var e = 0; e < doc.meshItems.length; e++ ) {  
                        if (doc.meshItems[e].name.charAt(0)=='_'){
                                  doc.meshItems[e].name = remove_first_character(doc.meshItems[e].name);
                                  $.writeln(e + "    " +doc.meshItems[e].name);
                                  var name =doc.meshItems[e].name;
                                  doc.selection = null;
                                  doc.meshItems[e].selected = true; 
                                  app.doScript("o", "ungroup", true); 
                                  doc.selection = null;
                                  var meshes = [];
                                  for (g=1; g<100; g++) {
                                   try {
                                  var mesh = doc.meshItems.getByName(name);
                                  mesh.name = "temp";
                                  meshes.push(mesh);
                                  }
                                catch (exp){
                                 break;
                                   }    
                                 }
                             
                                  for (var t = 0; t < meshes.length; t++ ) {  
                                                   doc.meshItems[t].locked = false;
                                                   doc.meshItems[t].selected = true; 
                                                   mesh.name = name;
                                      }
                                  
                                  app.doScript("o", "group", true); 
                                  doc.meshItems[e].name = "_" + doc.meshItems[e].name;
                            }
                      }
                  
                  
                   for (var m = 0; m < doc.meshItems.length; m++ ) {  
                        if (doc.meshItems[m].name.charAt(0)=='_'){
                                 doc.meshItems[m].name = remove_first_character(doc.meshItems[m].name);
                        }
                   }
                    doc.save();
                    doc.close(SaveOptions.DONOTSAVECHANGES);  
                   
          };                  
                                                 
          };  
          
          
 };  

function remove_first_character(st) {
  return st.substr(1,st.length)
}