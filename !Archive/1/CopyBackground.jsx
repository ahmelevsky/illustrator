#target illustrator

main();  

  
  function main(){
    var templFolder = Folder.selectDialog( 'Выберите папку с фонами' );  
    var inFolder = Folder.selectDialog( 'Выберите папку с материалами для вставки' );    
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    if (templFolder == null|| inFolder == null || outFolder == null ) {  
         alert ("Вы не выбрали папки");
        return;
        }
    
    var templFiles = templFolder.getFiles(/\.(ai|eps|pdf)$/i);   
    var pasteFiles = inFolder.getFiles(/\.(ai|eps|pdf)$/i);  
    
  
  
    for (var i=0;i<templFiles.length;i++){ 
         var suffix = 1;
         templ = app.open(templFiles[i]);   
                    var places = [];
                    for (var p=1;p<50;p++){   
                    try {
                        places.push(templ.pageItems.getByName("g"+p));
                    }
                    catch (err) {
                        break;
                    }
                }
            
          for (var p=0;p<pasteFiles.length;p++){ 
              
          for (var a=0;a<places.length;a++){  
               var material = app.open(pasteFiles[p]);   
               var material_items = getTop(material);
               unlock(material.layers);
               var moved = moveObjectEnd(places[a], material.layers[0]); 
                             moved.position =  material_items.position;
                             material_items.selected = true;  
                             
                             var tempArtBoard = material.artboards.add(material_items.geometricBounds);  
                             app.activeDocument = material;
                             var lastIndex = material.artboards.length-1;
                             material.fitArtboardToSelectedArt(lastIndex);  
                             
                             material_items.selected = false;
                             moved.selected = true;
                             var tempArtBoardBG = material.artboards.add(moved.geometricBounds);
                             material.fitArtboardToSelectedArt(lastIndex+1);  
                                
                             var offsetX = tempArtBoard.artboardRect[0] - tempArtBoardBG.artboardRect[0];  
                             var offsetY = tempArtBoard.artboardRect[1] - tempArtBoardBG.artboardRect[1];  
                             moved.translate(offsetX, offsetY);  
                             tempArtBoardBG.remove(); 
                             tempArtBoard.remove();  
                             
                             
                   var fname = templ.name.slice(0, -3);
                var filePath = new File(outFolder.fsName+'/' + fname + '_' + suffix++);   
                material.saveAs(filePath , saveAsEpsFile());  
                material.close(SaveOptions.DONOTSAVECHANGES);   
                             
                }        
            }    
          templ.close(SaveOptions.DONOTSAVECHANGES);  
    }
}
 
  function getTop(document){
       for (k=0; k<document.pageItems.length; k++) {
         if (document.pageItems[k].parent.typename == "Layer")
             return document.pageItems[k];
         }
      }
 
 function getAll(document){
     var elements = [];
     for (k=0; k<document.pageItems.length; k++) {  
         if (document.pageItems[k].parent.typename == "Layer")
             elements.push(document.pageItems[k]);
         }
     return elements;
     }
 
  function moveObjectEnd(sel, dest) {  
        return sel.duplicate(dest,ElementPlacement.PLACEATEND);  
 }
 
 
 
  function moveObject(sel, dest) {  
        return sel.duplicate(dest,ElementPlacement.PLACEATBEGINNING);  
 }
 
 function moveObjects(sel, dest, group) {  
    var elements = []    
    for (k=sel.length-1; k>=0; k--) {   
        var el =sel[k].duplicate(dest,ElementPlacement.PLACEATBEGINNING);  
        el.moveToBeginning( group );
        elements.push(el);
    }  
  return elements;
 }
  

function unlock ( items ) {  
    var i = items.length;  
    if ( i ) {  
        while ( i-- ) {  
            if (items[i] == undefined) continue;
            items[i].locked = false;  
            if ( items[i].typename === 'GroupItem' ) {  
                unlock( items[i].pageItems );  
            }  
                else if ( items[i].typename === 'Layer' ) {  
                    unlock( items[i].layers );  
                    unlock( items[i].pageItems );  
                }  
        }  
    } 
   else {
        if (items == undefined) return;
          items.locked = false;  
            if ( items.typename === 'GroupItem' ) {  
                unlock( items.pageItems );  
            }  
                else if ( items.typename === 'Layer' ) {  
                    unlock( items.layers );  
                    unlock( items.pageItems );  
                }  
       }
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