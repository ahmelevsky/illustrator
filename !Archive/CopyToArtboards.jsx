#target illustrator

main();  

  
  function main(){
    var templFolder = Folder.selectDialog( 'Выберите папку с фонами' );  
    var inFolder = Folder.selectDialog( 'Выберите папку с материалами для вставки' );    
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    var suffix = 0;
    if (templFolder == null|| inFolder == null || outFolder == null ) {  
         alert ("Вы не выбрали папки");
        return;
        }
    
    var templFiles = templFolder.getFiles(/\.(ai|eps|pdf)$/i);   
    var pasteFiles = inFolder.getFiles(/\.(ai|eps|pdf)$/i);  
    for (var i=0;i<templFiles.length;i++){   
             for (var j=0;j<pasteFiles.length;j++){   
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
                 
                var material = app.open(pasteFiles[j]);   
                var material_items = getTop(material);
                unlock(material.layers);
                app.activeDocument = templ;
                     for (var a=0;a<places.length;a++){  
                             var moved = moveObject(material_items, templ.layers[0]); 
                             moved.position = places[a].position;
                             moved.selected = true;  
                             
                             var tempArtBoard = templ.artboards.add(moved.geometricBounds);  
                             app.activeDocument = templ;
                             var lastIndex = templ.artboards.length-1;
                             templ.fitArtboardToSelectedArt(lastIndex);  

                             moved.selected = false;
                             places[a].selected = true;
                             var tempArtBoardBG = material.artboards.add(places[a].geometricBounds);
                             material.fitArtboardToSelectedArt(lastIndex+1);  
                                
                             var offsetX = tempArtBoard.artboardRect[0] - tempArtBoardBG.artboardRect[0];  
                             var offsetY = tempArtBoard.artboardRect[1] - tempArtBoardBG.artboardRect[1];  
                             moved.translate(offsetX, offsetY);  
                             tempArtBoardBG.remove(); 
                             tempArtBoard.remove();  
                }
                material.close(SaveOptions.DONOTSAVECHANGES);   
                var fname = templ.name.slice(0, -3);
                var filePath = new File(outFolder.fsName+'/' + fname + '_' + suffix++);   
                templ.saveAs(filePath , saveArtboardsAsEpsFile(templ));  
                templ.close(SaveOptions.DONOTSAVECHANGES);  
            }    
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