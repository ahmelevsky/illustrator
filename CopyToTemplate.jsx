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
    
    var subfolders = [];
    var folderContent = inFolder.getFiles();   
        for (var i=0;i<folderContent.length;i++){   
            if (folderContent[i] instanceof Folder )
            subfolders.push(folderContent[i]);
            }
        
    for (j=0; j<subfolders.length; j++) {    
      var  matFiles = subfolders[j].getFiles("*.eps");
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
      
  
        for (i=0; i<Math.min(matFiles.length, places.length); i++) {
            var material  = app.open(matFiles[i]);
                var gr = templ.groupItems.add();
                var moved = moveObjects(getAll(material), templ.layers[0], gr); 
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
 
 
 function getRealVisibleBounds2(arr) {
      var bounds = [];
      for(i = arr.length - 1; i >=0; i--){
               if(arr[i].typename == "PathItem" && arr[i].clipping) bounds = arr[i].visibleBounds;       
     }
     return (bounds.length == 0) ? null : bounds;
}
  
 
 function getRealVisibleBounds(grp) {
      var bounds = [];
      for(i = grp.pathItems.length - 1; i >=0; i--){
               if(grp.pathItems[i].typename == "PathItem" && grp.pathItems[i].clipping) bounds = grp.pathItems[i].visibleBounds;       
     }
     return (bounds.length == 0) ? null : bounds;
}
 
function getBounds ( arr, bounds ) {
    var x = [], y = [], w = [], h = [],
        bounds = bounds || 'geometricBounds';
    for ( var i = 0; i < arr.length; i++ ) {
        x.push( arr[i][bounds][0] );
        y.push( arr[i][bounds][1] );
        w.push( arr[i][bounds][2] );
        h.push( arr[i][bounds][3] );
    }
    x = Math.min.apply( null, x );
    y = Math.max.apply( null, y );
    w = Math.max.apply( null, w );
    h = Math.min.apply( null, h );
    return rect = [ x, y, w, h ];
};
  
 
 function getAll(document){
     var elements = [];
     for (k=0; k<document.pageItems.length; k++) {  
         if (document.pageItems[k].parent.typename == "Layer")
             elements.push(document.pageItems[k]);
         }
     return elements;
     }
 
 function moveObjectsSimple(sel, dest) {  
    var elements = []    
    for (k=sel.length-1; k>=0; k--) 
         elements.push(sel[k].duplicate(dest,ElementPlacement.PLACEATBEGINNING));  
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

   function openFile(){
       var myFile = File.openDialog("Выберите template");
        if(myFile != null) return app.open(myFile);
       }
   
 function openFiles(){
       var files = File.openDialog("Выберите файлы для вставки в template","*.*",true);
        if(files != null) { 
        var docs = [];
        for (k=0; k<files.length; k++) {   
            docs.push(app.open(files[k]));
       }
        return docs;
   }
 }  

