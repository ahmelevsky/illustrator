#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
          var meshnames =  ["medium", "main flash", "left light"];
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
          
          if ( inFolder != null ) {  
    
                    subFiles = inFolder.getFiles(/\.(ai|eps)$/i);
                
            for ( i = 0; i < subFiles.length; i++ ) {  
                      
                   var doc = open(subFiles[i]);
                    var mainflash = doc.meshItems.getByName("main flash");
                    var groups = mainflash.parent.parent.groupItems;
                       for (var m = 0; m < groups.length; m++ ) {  
                               for (var e = 0; e < meshnames.length; e++ ) {  
                                  var meshes = getMeshesByName(groups[m], meshnames[e]);
                                   if (!meshes || meshes.length==0)
                                       continue;
                                   var mesh = meshes[0];
                                   doc.selection = null;
                                   mesh.selected = true; 
                                   app.doScript("o", "ungroup", true); 
                                   meshes = getMeshesByName(groups[m], meshnames[e]);
                                   for (var t = 0; t < meshes.length; t++ ) {  
                                                   meshes[t].locked = false;
                                                   meshes[t].selected = true; 
                                                 }
                                   app.doScript("o", "group", true);  
                                   }
                                 $.writeln(subFiles[i].name + ": " + m + " from " + groups.length);
                        }
                    doc.close(SaveOptions.SAVECHANGES);  
                   }
                   //  saveAs(subFiles[i] , epsOptions);  
                    
          };  
          
 };  

 function getMeshesByName(group, name){
     var ms = [];
          for (var t = 0; t < group.meshItems.length; t++ ) {  
                  if (group.meshItems[t].name==name){
                      ms.push(group.meshItems[t]);
                      }
              }
     
        return  ms;
    }


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