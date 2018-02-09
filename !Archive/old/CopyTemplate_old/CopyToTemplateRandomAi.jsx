#target illustrator

main();  

  
  function main(){
      var templFile = File.openDialog("Выберите template");
      
      if (templFile == null) {
        alert ("Ничего не выбрано");
        return;
        }
    
    var inFolder = Folder.selectDialog( 'Выберите папку в которой папки с материалами для копирования' );    
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    
    if ( inFolder == null || outFolder == null ) {  
         alert ("Вы не выбрали папки");
        return;
        }

    var items_packs = []
    var folderContent = inFolder.getFiles();   
        for (var i=0;i<folderContent.length;i++){   
        //    if (i>places.length)
        //        break;
            if (folderContent[i] instanceof Folder )
                items_packs.push(folderContent[i].getFiles("*.eps"));
            }
        
    var items_count = -1;
    for (ic=0; ic<items_packs.length; ic++) {
        if (items_count==-1 || items_packs[ic].length<items_count)
            items_count = items_packs[ic].length;
        }
        
    for (j=0; j<items_count; j++) {    
       templ = app.open(templFile);
        var places = [];
         for (g=1; g<100; g++) {
            try {
                places.push(templ.pageItems.getByName("g" + g));
                }
            catch (exp){
                break;
                }
        }
       
        for (i=0; i<Math.min(items_packs.length, places.length); i++) {
            var material  = app.open(randomElementAndRemove(items_packs[i]));
            var gr = templ.groupItems.add();
                var elements = moveObjects(getAll(material), templ.layers[0], gr); 
                 gr.position = places[i].position;
                             app.activeDocument = templ;
                             gr.selected = true;  
                             var tempArtBoard = templ.artboards.add(gr.geometricBounds);  
                             var lastIndex = templ.artboards.length-1;
                             templ.fitArtboardToSelectedArt(lastIndex);  
                             var offsetX = places[i].geometricBounds[0] - tempArtBoard.artboardRect[0];
                             var offsetY = places[i].geometricBounds[1] - tempArtBoard.artboardRect[1];
                             gr.translate(offsetX, offsetY);  
                             tempArtBoard.remove();  
                             gr.selected = false;
                             templ.selection = null;
            material.close(SaveOptions.DONOTSAVECHANGES);   
        }
        var filePath = new File(outFolder.fsName+'/' + templ.name.slice(0, -3) + '_' + j);   
        templ.saveAs(filePath);  
        templ.close(SaveOptions.DONOTSAVECHANGES);  
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
 
 function moveObjects(sel, dest, group) {  
    var elements = []    
    for (k=sel.length-1; k>=0; k--) {   
        var el =sel[k].duplicate(dest,ElementPlacement.PLACEATBEGINNING);  
        el.moveToBeginning( group );
        elements.push(el);
    }  
  return elements;
 }

function randomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomElementAndRemove(arr) {
    var num = Math.floor(Math.random() * arr.length);
    var el = arr[num]; 
    arr.splice(num, 1);
	return el;
}
