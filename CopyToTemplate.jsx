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
       template = app.open(templFile);
        var places = [];
        for (g=1; g<100; g++) {
            try {
                places.push(template.pageItems.getByName("g" + g));
            }
            catch (exp){
            break;
            }
            }       
      
  
        for (i=0; i<Math.min(matFiles.length, places.length); i++) {
            var gbb = places[i].geometricBounds;
             places[i].selected = true;
             var tAB = template.artboards.add(gbb);  
             var lastIndex = template.artboards.length-1;
             template.fitArtboardToSelectedArt(lastIndex); 
             var tagb = tAB.artboardRect;             
             template.selection = null;
             tAB.remove();  
             
             var material  = app.open(matFiles[i]);
             app.executeMenuCommand("selectall");  
             app.copy();
             pasteClipboardToPlace(template, tagb, i);
             material.close(SaveOptions.DONOTSAVECHANGES);     
        }
        var filePath = new File(outFolder.fsName+'/' + template.name.slice(0, -3) + '_' + j);   
        template.saveAs(filePath);  
        template.close(SaveOptions.DONOTSAVECHANGES);  
    }
  }
 
 

function pasteClipboardToPlace(placedoc, gbb, groupIndex){
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
  
                placedoc.views[0].centerPoint = [ccx+offX, ccy+offY];  
                app.paste();                  
                
                var group = placedoc.groupItems.add();                
                group.name = "PlacedGroup" + groupIndex;
                for ( s = 0; s < placedoc.selection.length; s++ ) 
                    placedoc.selection[s].moveToEnd( group );
                
                placedoc.selection = null;
                tempArtBoard.remove();  
                
    
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

