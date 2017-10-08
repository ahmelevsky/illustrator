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
                app.executeMenuCommand("selectall");  
                app.copy();
                templ.activate();
                app.paste();
                var gr = templ.selection[0];

                var tempArtBoard = templ.artboards.add(gr.geometricBounds);  
                var lastIndex = templ.artboards.length-1;
                templ.fitArtboardToSelectedArt(lastIndex);  
                var offsetX = places[i].geometricBounds[0] - tempArtBoard.artboardRect[0];
                var offsetY = places[i].geometricBounds[1] - tempArtBoard.artboardRect[1];
                var gb = tempArtBoard.artboardRect;
                var cx = gb[0] + (gb[2] - gb[0]) / 2;  
                var cy = gb[1] + (gb[3] - gb[1]) / 2;  
  
                templ.views[0].centerPoint = [cx, cy];  
                app.cut();  
  
                templ.views[0].centerPoint = [cx+offsetX, cy+offsetY];  
                app.paste();  
                templ.selection = null;
                tempArtBoard.remove();  
                material.close(SaveOptions.DONOTSAVECHANGES);   
        }
        var filePath = new File(outFolder.fsName+'/' + templ.name.slice(0, -3) + '_' + j);   
        templ.saveAs(filePath);  
        templ.close(SaveOptions.DONOTSAVECHANGES);  
    }
  }
 

