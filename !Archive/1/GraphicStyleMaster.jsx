#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var outFolder, i, inFolder, subFiles;  
          var suffix = 0
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
          outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
  
              
          if ( inFolder == null || outFolder == null ) {  
                alert ("Вы не выбрали папки");
                return;
            }
                                                      
           subFiles = inFolder.getFiles( /\.ai$/i ) ;

                
            for ( i = 0; i < subFiles.length; i++ ) {  
             var arts = 0;
             var suffix = 1;
             while (true) {
                   var doc = open(subFiles[i]);
                   var gslength = doc.graphicStyles.length;
                   if (doc.graphicStyles[arts].name =='Стиль графики по умолчанию' || doc.graphicStyles[arts].name =='Default Graphic Style') arts++;
                   
                   if (arts>=gslength) {
                       doc.close(SaveOptions.DONOTSAVECHANGES); 
                       break;
                       }
                   
                   app.executeMenuCommand ('selectall');
                   doc.graphicStyles[arts].applyTo(doc.selection[0]);
                            
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
                
                var filePath = new File(outFolder.fsName+'/' + doc.name.slice(0, -3) + '_' + (suffix++));   
                var epsOptions;
                if (doc.artboards.length>1)
                   epsOpt = saveArtboardsAsEpsFile(doc);
                else
                   epsOpt = saveAsEpsFile();
                doc.saveAs(filePath, epsOpt);  
                doc.close(SaveOptions.DONOTSAVECHANGES); 
                arts++;
          };  
       
        };
 };  

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