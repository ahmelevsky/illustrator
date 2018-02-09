#target estoolkit   
var outFolder, i, inFolder, subFiles, filesCount, files, done;  
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
          outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
          filesCount = Number(prompt ('Через сколько ai файлов перезапускать иллюстратор?', 0, 'Вопрос'));  
         
          if ( inFolder == null || outFolder == null ) {  
                alert ("Вы не выбрали папки");
                throw new Error("Nothing is selected");
            }
        
    subFiles = inFolder.getFiles( /\.ai/i ) ;


            
    while (subFiles.length>0) {  
         if (filesCount == 0)
            files = subFiles.splice(0, subFiles.length);
         else if ( subFiles.length  >filesCount)
            files =  subFiles.splice(0, filesCount);
         else 
            files = subFiles.splice(0);
         
         done = false;
         var bt = new BridgeTalk();  
         bt.target = 'illustrator';  
         bt.onResult = function(resultMsg) {  
            $.writeln(resultMsg.body    );
            done = true;
         }  
     
        bt.onError = function(a) {  
           alert(a.body + "(" + a.headers["Error-Code"] + ")")  
        }  
        
        bt.body = Main.toSource() + "(" + files.toSource() + "," + outFolder.toSource() + ");";  
        bt.send();                   
        $.writeln("Executing Main...")
        while (!done)
        {
           $.sleep(1000)
        }
     $.writeln("Wait for the next iteration...")
     $.sleep(5000);
    }



function Main(files, outputFolder) {  

         for ( i = 0; i < files.length; i++ ) {  
    
             var arts = 0;
             var suffix = 1;
             while (true) {
                   var doc = open(files[i]);
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
                 
                   var grForSymbols = doc.groupItems.add();
                   for (j=0; j<doc.symbolItems.length;j++)
                        doc.symbolItems[j].moveToBeginning( grForSymbols );          
                 
                 
                  while (doc.symbolItems.length>0){
                    doc.symbolItems[0].breakLink();
                   }
                 try{
                    app.executeMenuCommand ('selectall');
                    app.executeMenuCommand ('expandStyle');
                    }
                catch  (exp){}
                app.doScript("Delete Unused Panel Items", "Default Actions", true);  
                 
                var filePath = new File(outputFolder.fsName+'/' + doc.name.slice(0, -3) + '_' +  pad(suffix++, 2));   
                
                grForSymbols.selected = true;
                app.executeMenuCommand ('ungroup');                
                
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
     app.quit();
     return "Completed...";
     
     
     
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
} 





function createClippingMasks(docRef){
    
    for (artindex=0;artindex<docRef.artboards.length;artindex++){
     docRef.artboards.setActiveArtboardIndex(artindex);
     docRef.selection = null;
     docRef.selectObjectsOnActiveArtboard();
     app.executeMenuCommand ('group');
     var group = docRef.selection[0];
     
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
       for (k=0; k<document.groupItems.length; k++) {
         if (document.groupItems[k].parent.typename == "Layer")
            topGroups.push(document.groupItems[k]);
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
     
     
}



 