﻿#target illustrator

main();  

  
  function main(){
      var templFile = File.openDialog("Выберите template");
      var suffix = 1622;
      
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


    var root_folders = []
    readNewRootFolders(inFolder,root_folders);
    
    for (b=0; b<root_folders.length; b++){


    var items_packs = []
    var folderContent = root_folders[b].getFiles();   
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
       
        for (i=0; i<Math.min(items_packs.length, places.length); i++) {
             template.selection = null;
             places[i].selected = true;    
             var tAB = template.artboards.add(places[i].geometricBounds);  
             var lastIndex = template.artboards.length-1;
             template.fitArtboardToSelectedArt(lastIndex); 
             template.selection = null;
             
              
             var material  = app.open(randomElementAndRemove(items_packs[i]));
             app.executeMenuCommand("selectall");  
             app.copy();
             
             template.activate();
             app.paste();
             
              var group = template.groupItems.add();                
              group.name = "PlacedGroup" + i;
                for ( s = 0; s < template.selection.length; s++ ) 
                    template.selection[s].moveToEnd( group );
             
             
             template.artboards.setActiveArtboardIndex(lastIndex);
             app.doScript("align_to_left", "align_operation_set",true);  
             
             material.close(SaveOptions.DONOTSAVECHANGES);  
             tAB.remove();
        }
        var filePath = new File(outFolder.fsName+'/' + template.name.slice(0, -3) + '_' + (++suffix));   
        template.saveAs(filePath, saveAsEpsFile());  
        template.close(SaveOptions.DONOTSAVECHANGES);  
    }
     removeFolder(root_folders[b]);
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


function readNewRootFolders(rootFolder, newRootFoldersList){
      var fContent = rootFolder.getFiles();  
      for (var i=0;i<fContent.length;i++){   
            if (fContent[i] instanceof Folder )
                 if (!isFolderInList(fContent[i].parent, newRootFoldersList) && checkFolderHasFilesOnly(fContent[i]))
                     newRootFoldersList.push(fContent[i].parent);
                 else
                    readNewRootFolders(fContent[i], newRootFoldersList);
    }
}

function isFolderInList(folder, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].absoluteURI === folder.absoluteURI) {
            return true;
        }
    }

    return false;
}

function checkFolderHasFilesOnly(folder){
     var folderContent = folder.getFiles();   
     for (var i=0;i<folderContent.length;i++){   
            if (folderContent[i] instanceof Folder )
               return false;
            }
     return true;
    }


function removeFolder(folder){
    var removeFiles = folder.getFiles();  
        for(var a=0;a<removeFiles.length;a++){  
         if ((removeFiles[a] instanceof Folder ) && removeFiles[a].getFiles().length>0)
             removeFolder(removeFiles[a]);
         else   
            removeFiles[a].remove();  
        }  
        folder.remove();  
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