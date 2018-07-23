#target illustrator

var actionStr = [ 
"/version 3",
"/name [ 2",
"6d79",
"]",
"/isOpen 1",
"/actionCount 1",
"/action-1 {",
"/name [ 24",
"d0b2d18bd180d0b0d0b2d0bdd0b8d0b2d0b0d0bdd0b8d0b5",
"]",
"/keyIndex 1",
"/colorIndex 0",
"/isOpen 1",
"/eventCount 2",
"/event-1 {",
"/useRulersIn1stQuadrant 0",
"/internalName (ai_plugin_alignPalette)",
"/localizedName [ 24",
"d092d18bd180d0b0d0b2d0bdd0b8d0b2d0b0d0bdd0b8d0b5",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 1",
"/parameter-1 {",
"/key 1954115685",
"/showInPalette -1",
"/type (enumerated)",
"/name [ 71",
"d093d0bed180d0b8d0b7d0bed0bdd182d0b0d0bbd18cd0bdd0bed0b520d0b2d1",
"8bd180d0b0d0b2d0bdd0b8d0b2d0b0d0bdd0b8d0b520d0bfd0be20d186d0b5d0",
"bdd182d180d183",
"]",
"/value 2",
"}",
"}",
"/event-2 {",
"/useRulersIn1stQuadrant 0",
"/internalName (ai_plugin_alignPalette)",
"/localizedName [ 24",
"d092d18bd180d0b0d0b2d0bdd0b8d0b2d0b0d0bdd0b8d0b5",
"]",
"/isOpen 0",
"/isOn 1",
"/hasDialog 0",
"/parameterCount 1",
"/parameter-1 {",
"/key 1954115685",
"/showInPalette -1",
"/type (enumerated)",
"/name [ 67",
"d092d0b5d180d182d0b8d0bad0b0d0bbd18cd0bdd0bed0b520d0b2d18bd180d0",
"b0d0b2d0bdd0b8d0b2d0b0d0bdd0b8d0b520d0bfd0be20d186d0b5d0bdd182d1",
"80d183",
"]",
"/value 5",
"}",
"}",
"}",
].join("\n");
   

 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  

main();  


  
  function main(){
      
    var suffix = 1;
      
    var baseFolder = Folder.selectDialog('Выберите папку с набором исходных материалов'); 
    var templFiles = baseFolder.getFiles(/\.(ai|eps)$/i);
    if (templFiles.length!=1){
        alert('В корне выбранной папки должен находиться один и только один файл с расширением .eps или .ai. \nСкрипт не может продолжать работу');
        return;
        }
    var templFile = templFiles[0];
    var isDelete = confirm('Удалять файлы материалов после использования? \n\nЭто может пригодиться, если вы планируете останавливать и снова запускать скрипт на тех же файлах. Убедитесь, что у вас есть копии.');
   
    var template = app.open(templFile);
    var places = [];
         for (g=1; g<100; g++) {
            try {
                places.push(template.pageItems.getByName("g" + g));
                }
            catch (exp){
                break;
                }    
            }
     if (places.length<1){
        alert('В файле шаблона должен быть, как минимум, элемент с именем "g1". \nСкрипт не может продолжать работу');
        return;
        }
    
    var materialFolders = getSubFolders(baseFolder);
    if (materialFolders.length!=places.length){
        alert('Число папок с материалами (' + materialFolders.length + ') должно соответствовать числу именнованых "gN" элементов в файле шаблона ('+places.length+'). \nСкрипт не может продолжать работу');
        return;
        }
     
     var items_packs = []
     var filescount = 10000000;
     for (var i=0;i<materialFolders.length;i++){
           var files = new Folder(materialFolders[i]).getFiles(/\.(ai|eps)$/i);
           if (files.length==0) {
               alert('Папка' + materialFolders[i] + ' не содержит файлов .eps или .ai \nСкрипт не может продолжать работу');
               return;
              }
          else{
              if (filescount>files.length)
                  filescount=files.length;
              items_packs.push(files);
              }
        }
    var outFolder = createFolder(baseFolder.fsName+'/results');

     //ОСНОВНОЙ ЦИКЛ ВСТАВКИ МАТЕРИАЛОВ
     for (fff=0;fff<filescount;fff++){
        var materialFiles = [];
         try{
                template.activate();
             }
             catch (exp) {
                 template = app.open(templFile);  
                 
                 template.activate();
                 
                 places = [];
                 for (g=1; g<100; g++) {
                 try {
                    places.push(template.pageItems.getByName("g" + g));
                 }
                 catch (exp){
                    break;
                 }    
              }
             }
        for (i=0; i<places.length; i++) {
            
             addFakeObjectAndAlign(template, places[i]);          
            
             template.activate();
             template.selection = null;
             places[i].selected = true;
             var tAB = template.artboards.add(places[i].geometricBounds);  
             var lastIndex = template.artboards.length-1;
             template.fitArtboardToSelectedArt(lastIndex); 
             template.selection = null;

             
             var materialFile = randomElementAndRemove(items_packs[i]);
             var material  = app.open(materialFile);
             materialFiles.push(material);
             app.executeMenuCommand("selectall");  
             app.copy();
             
             template.activate();
             app.paste();
            
             var group = template.groupItems.add();                
             group.name = "PlacedGroup" + i;
             for ( s = 0; s < template.selection.length; s++ ) 
                    template.selection[s].moveToEnd( group );             
             
             template.artboards.setActiveArtboardIndex(lastIndex);
             group.selected = true;
             align();
             tAB.remove();
            
        }
        var filePath = new File(outFolder.fsName+'/' + getFileNameWithoutExtension(template.name) + '_' + pad(suffix++, 4) + '.eps');  
        while (filePath.exists)
                          filePath = new File(outFolder.fsName+'/' + getFileNameWithoutExtension(template.name) + '_' + pad(suffix++, 4) + '.eps');  
        template.saveAs(filePath, saveAsEpsFile());
     //  changeClipboard();
   //  alighFake();
        template.close(SaveOptions.DONOTSAVECHANGES);  
        
        for (m=0; m<materialFiles.length; m++){
           materialFiles[m].close(SaveOptions.DONOTSAVECHANGES);  
           if (isDelete)
                 materialFiles[m].fullName.remove();
            }
       
 
    }
    
  }

function addFakeObjectAndAlign(maindoc, place){
      maindoc.activate();
      maindoc.selection = null;
      place.selected = true;
      var tAB = maindoc.artboards.add(place.geometricBounds);  
      var lastIndex = maindoc.artboards.length-1;
      maindoc.fitArtboardToSelectedArt(lastIndex); 
      maindoc.selection = null;
      var newDoc = app.documents.add();
      var rect = newDoc.pathItems.rectangle(1,1,100,100);
      newDoc.activate();
      app.executeMenuCommand("selectall");  
      app.copy();     
      maindoc.activate();
      app.paste();
      var group = maindoc.groupItems.add();                
      group.name = "FakeGroup";
      for ( s = 0; s < maindoc.selection.length; s++ ) 
                 maindoc.selection[s].moveToEnd( group );             
      maindoc.artboards.setActiveArtboardIndex(lastIndex);
      group.selected = true;
      align();
      tAB.remove();     
      group.remove();
      newDoc.close(SaveOptions.DONOTSAVECHANGES);  
    }

function changeClipboard(){
   app.activeDocument.selection = null;
   var rect = app.activeDocument.pathItems.rectangle(1,1,1,1);
   rect.selected = true;
   app.copy();
   //rect.remove();
   app.paste();
    }

function alighFake(){
    for (af=0; af<5; af++){
    app.activeDocument.selection = null;
    var rect = app.activeDocument.pathItems.rectangle(1,1,1,1);
    rect.selected = true;
    align();
    rect.remove();
    }
    }


function align(){
    
    var actFileDestStr = Folder.desktop  + "/AlignAction.aia";  
                                var f = new File(actFileDestStr);
                                    f.open('w');
                                    f.write(this.actionStr);
                                    f.close();
                                app.loadAction(f);  
    app.doScript("выравнивание", "my",true);  
    app.unloadAction("my", ''); 
                                f.remove();   
    }

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
} 
 
 function getFileNameWithoutExtension(filename){
 return filename.substring(0, filename.lastIndexOf('.'))
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

function getSubFolders(theFolder) {
     var result = []
      var myFileList = theFolder.getFiles();
      for (var i = 0; i < myFileList.length; i++) {
            var myFile = myFileList[i];
            if (myFile instanceof Folder && myFile.name !='results'){
                  result.push(myFile.absoluteURI);                 
            }
      }
      return result;
}

function createFolder(folderpath){
     var f = new Folder(folderpath);
    if (!f.exists)
        f.create();    
     return f;
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