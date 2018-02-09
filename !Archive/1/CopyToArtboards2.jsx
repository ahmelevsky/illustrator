#target illustrator

main();  

  
  function main(){
    var templFolder = Folder.selectDialog( 'Выберите папку с темплейтами' );  
    var inFolder = Folder.selectDialog( 'Выберите папку с материалами для вставки' );    
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    var suffix = 0;
    if (templFolder == null|| inFolder == null || outFolder == null ) {  
         alert ("Вы не выбрали папки");
        return;
        }
    
    var templFiles = templFolder.getFiles("*.ai");   
    for (var i=0;i<templFiles.length;i++){   
         var templ = app.open(templFiles[i]);   
            $.writeln("Artboards: " + templ.artboards.length);
             var pasteFiles = inFolder.getFiles("*.eps");   
             for (var j=0;j<pasteFiles.length;j++){   
                var material = app.open(pasteFiles[j]);   
                var material_items = getTop(material);
                     for (var a=0;a<templ.artboards.length;a++){  
                              var moved = moveObject(material_items, templ.layers[0]); 
                             // app.coordinateSystem = CoordinateSystem.DOCUMENTCOORDINATESYSTEM;  
                              app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;  
                              $.writeln(templ.artboards[a].artboardRect[0]);
                              $.writeln(templ.artboards[a].artboardRect[1]);
                              //moved.position = [templ.artboards[a].artboardRect[0],templ.artboards[a].artboardRect[1]];
                               moved.position [0] = templ.artboards[a].artboardRect[0];
                              moved.position [1] = templ.artboards[a].artboardRect[1];
                              $.writeln( moved.position [0]);
                              $.writeln( moved.position [1]);
                              
                              
                               moved.selected = true;  
                             
                             var tempArtBoard = templ.artboards.add(moved.geometricBounds);  
                             app.activeDocument = templ;
                             var lastIndex = templ.artboards.length-1;
                             templ.fitArtboardToSelectedArt(lastIndex);  

                             var offsetX = templ.artboards[a].artboardRect[0] - tempArtBoard.artboardRect[0];  
                             var offsetY = templ.artboards[a].artboardRect[1] - tempArtBoard.artboardRect[1];  
                             moved.translate(offsetX, offsetY);  
                             tempArtBoard.remove();  
                             templ.selection = null;  

                }
                material.close(SaveOptions.DONOTSAVECHANGES);   
                var fname = templ.name.slice(0, -3);
                var filePath = new File(outFolder.fsName+'/' + fname + '_' + suffix++);   
                templ.saveAs(filePath , saveArtboardsAsEpsFile(templ));  
               // templ.saveAs(filePath);
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