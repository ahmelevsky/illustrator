﻿#target illustrator

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
               
             var material  = app.open(pasteFiles[p]);
             unlock(material.layers);
             var material_items = getTop(material);
             material_items.selected = true;
             var mAB = material.artboards.add(material_items.geometricBounds);  
             var lastIndex = material.artboards.length-1;
             material.fitArtboardToSelectedArt(lastIndex); 
             var magb = mAB.artboardRect;             
             material.selection = null;
             mAB.remove(); 
             
             templ.activate(); 
             templ.selection = null;
             var gbb = places[a].geometricBounds;
             places[a].selected = true;
             
             app.copy();               
               
             pasteClipboardToPlace(material, magb);
      
                var fname = templ.name.slice(0, -3);
                var filePath = new File(outFolder.fsName+'/' + fname + '_' + suffix++);   
                material.saveAs(filePath , saveAsEpsFile());  
                material.close(SaveOptions.DONOTSAVECHANGES);   
                             
                }        
            }    
          templ.close(SaveOptions.DONOTSAVECHANGES);  
    }
}
 
 
 

function pasteClipboardToPlace(placedoc, gbb){
                placedoc.activate();
                
                
                var ccx = gbb[0] + (gbb[2] - gbb[0]) / 2;  
                var ccy = gbb[1] + (gbb[3] - gbb[1]) / 2;  
  
                placedoc.views[0].centerPoint = [ccx, ccy]; 
                
                app.paste();
                var sb = placedoc.selection[0].geometricBounds;
                var tempArtBoard = placedoc.artboards.add(sb);  
                var lastIndex = placedoc.artboards.length-1;
                placedoc.fitArtboardToSelectedArt(lastIndex); 
                var agb = tempArtBoard.artboardRect;
                
                var offX =  gbb[0] - agb[0];    
                var offY =  gbb[1] - agb[1]; 
                
                app.cut();  
  
                placedoc.views[0].centerPoint = [Math.ceil(ccx+offX), Math.ceil(ccy+offY)];  
                app.paste();                  
                
                var group = placedoc.groupItems.add();                
                group.name = "PlacedGroup";
                group.move(placedoc,  ElementPlacement.PLACEATEND);
                for ( s = 0; s < placedoc.selection.length; s++ ) 
                    placedoc.selection[s].moveToEnd( group );
                
                placedoc.selection = null;
                tempArtBoard.remove();  
                
    
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