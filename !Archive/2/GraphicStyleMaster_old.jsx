﻿#target Illustrator  
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
                   if (doc.graphicStyles[arts].name =='[По умолчанию]' || doc.graphicStyles[arts].name =='[Default]') arts++;
                   
                   if (arts>=gslength) {
                       doc.close(SaveOptions.DONOTSAVECHANGES); 
                       break;
                       }
                   
                   app.executeMenuCommand ('selectall');
                   for (sel=0;sel<doc.selection.length;sel++)
                    doc.graphicStyles[arts].applyTo(doc.selection[sel]);
                  try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                 catch  (exp){}
                 
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
                 
                var filePath = new File(outFolder.fsName+'/' + doc.name.slice(0, -3) + '_' + (suffix++));   
                
                createClippingMasks(doc);                
                
                var epsOptions;
                if (doc.artboards.length>1)
                   epsOpt = saveArtboardsAsEpsFile(doc);
                else
                   epsOpt = saveAsEpsFile();
                doc.saveAs(filePath, epsOpt);  
                doc.close(SaveOptions.DONOTSAVECHANGES); 
                arts++;
                if (arts>=gslength) break;
          };  
       
        };
 };  

function createClippingMasks(docRef){
    
    var groups = getTopGroups(docRef);
    for (artindex=0;artindex<docRef.artboards.length;artindex++){
     var group = groups[docRef.artboards.length-1-artindex];
     var top=docRef.artboards[artindex].artboardRect[1] ;  
     var left=docRef.artboards[artindex].artboardRect[0];  
     var width=docRef.artboards[artindex].artboardRect[2]-docRef.artboards[artindex].artboardRect[0];  
     var height=docRef.artboards[artindex].artboardRect[1]-docRef.artboards[artindex].artboardRect[3];  
     var rect = docRef.pathItems.rectangle (top, left, width, height);  
     rect.fillColor = rect.strokeColor = new NoColor();  
     
     rect.clipping = true;  
     rect.moveToBeginning( group );
     group.clipped = true;
        }
    
    }

 
  function getTopGroups(document){
      var topGroups = [];
       for (k=0; k<document.pageItems.length; k++) {
         if (document.pageItems[k].typename == "GroupItem" && document.pageItems[k].parent.typename == "Layer")
            topGroups.push(document.pageItems[k]);
         }
       return topGroups;
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