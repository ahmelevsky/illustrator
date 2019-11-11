#target Illustrator  

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
    //alert('О наборе исходных файлов. \n\nВ корне папки должен находиться один и только один .eps (либо .ai) файл, он станет шаблоном. Файл шаблона должен состоять из слоев, имя каждого слоя соответствует названию папки с картинками для этого слоя. \nВсе папки с картинками должны быть также внутри выбираемой вами папки. Одна из папок (и, соответственно, один из слоев в файле шаблона) должны начинаться с символа 0 (ноль) - это обозначение базового слоя, то есть слоя, в котором будут по очереди представлены все картинки из соответствующей папки - это определит число результирующих файлов. Картинки для всех остальных слоев выбираются из своих папок в случайном порядке и могут повторяться. В каждой папке должно быть не менее одного файла (.eps или .ai). \nКартинкой является либо файл целиком, либо его часть: объект с именем gN где N - любое число от 0 до 50. Если в файле нет никаких объектов с именем в формате gN, он будет браться целиком, если есть один или больше gN - будет браться случайный из них. '); 
    var baseFolder = Folder.selectDialog('Выберите базовую папку'); 
    var isDelete = confirm('Удалять файлы базового слоя после использования? \n\nЭто может пригодиться, если вы планируете останавливать и снова запускать скрипт на тех же файлах. Убедитесь, что у вас есть копии.');
    
    var workFolders = [];
    workFolders = getFoldersListRecursive(baseFolder, workFolders);  
    maincycle: for (var wF=0;wF<workFolders.length;wF++) {
    var suffix = 1;
    baseFolder =    workFolders[wF];
    
    var templFile = baseFolder.getFiles(/\.(ai|eps)$/i);
    if (templFile.length!=1){
        $.writeln('В корне выбранной папки должен находиться один и только один файл с расширением .eps или .ai. \nПапка будет пропущена: ' + baseFolder.name);
        continue;
        }
    var template = templFile[0];
    var templ = app.open(template);  
    if (templ.layers.length<2){
        $.writeln('В файле шаблона должно быть как минимум два слоя. \nПапка будет пропущена: ' + baseFolder.name);
         templ.close(SaveOptions.DONOTSAVECHANGES); 
        continue;
        }
    
    var materialFolders = getSubFolders(baseFolder);
    var baseLayerCount = 0;
    var baseFiles;
    for (var i=templ.layers.length-1;i>=0;i--){
          var folderWithName = getFolderByName(materialFolders, templ.layers[i].name);
          if (folderWithName == null) {
               $.writeln('Не найдена папка с именем как у слоя: ' + templ.layers[i].name + '\nПапка будет пропущена: ' + baseFolder.name);
                templ.close(SaveOptions.DONOTSAVECHANGES); 
               continue maincycle;
              }
           if (folderWithName.getFiles(/\.(ai|eps)$/i).length==0) {
               $.writeln('Папка' + templ.layers[i].name + ' не содержит файлов .eps или .ai \nПапка будет пропущена: ' + baseFolder.name);
                templ.close(SaveOptions.DONOTSAVECHANGES); 
               continue  maincycle;
              }
           if (templ.layers[i].name[0]=='0') {
            baseLayerCount++; 
            baseFiles = folderWithName.getFiles(/\.(ai|eps)$/i);
            }
        }
     if (baseLayerCount!=1) {
               $.writeln('Один и только один слой должен быть основным и иметь имя начинающееся с символа 0. \nПапка будет пропущена: ' + baseFolder.name);
                templ.close(SaveOptions.DONOTSAVECHANGES); 
               continue maincycle;
              }
    
    
    var outFolder = createFolder(baseFolder.fsName+'/results');
    
    var suffix = 1;     

     for (var b=0; b<baseFiles.length; b++) {
           var baseImage =  app.open(baseFiles[b]);  
           var baseImages = getElementsWithGNum(baseImage, 50);
          
           for (var bi=0;bi<baseImages.length;bi++){
                try{
                    templ.activate();
                    }
                catch (exp) {
                  templ = app.open(template);  
                  templ.activate();
                }
            
                 for (var i=templ.layers.length-1;i>=0;i--){             
                    if (templ.layers[i].name[0]=='0') {
                        baseImage.activate();
                        baseImage.selection = null;
                        baseImages[bi].selected = true;
                        app.copy();
                        templ.activate();
                        templ.selection = null;
                        templ.activeLayer = templ.layers[i];
                        app.paste();
                        align();
                        }
                    else {
                        var imageFile = randomElement(getFolderByName(materialFolders, templ.layers[i].name).getFiles(/\.(ai|eps)$/i));
                        var image = app.open(imageFile);
                        var imageElement = randomElement(getElementsWithGNum(image, 50));
                        image.selection = null;
                        imageElement.selected = true;
                        app.copy();
                        templ.activate();
                        templ.selection = null;
                        templ.activeLayer = templ.layers[i];
                        app.paste();
                        align();
                        image.close(SaveOptions.DONOTSAVECHANGES);
                        }
                 }
                 
                  var filePath = new File(outFolder.fsName+'/' + getFileNameWithoutExtension(template.name) + '_' + pad(suffix++, 4) + '.' + template.name.replace(/^.*\./,''));   
                  while (filePath.exists)
                          filePath = new File(outFolder.fsName+'/' + getFileNameWithoutExtension(template.name) + '_' + pad(suffix++, 4) + '.' + template.name.replace(/^.*\./,''));  
                  if (template.name.replace(/^.*\./,'')=='eps')
                      templ.saveAs(filePath, saveAsEpsFile());  
                  else 
                      templ.saveAs(filePath);  
                 templ.close(SaveOptions.DONOTSAVECHANGES); 
           }
           baseImage.close(SaveOptions.DONOTSAVECHANGES);
           if (isDelete)
             baseFiles[b].remove();
     }
    }
    }

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
} 

function randomElementAndRemove(arr) {
    var num = Math.floor(Math.random() * arr.length);
    var el = arr[num]; 
    arr.splice(num, 1);
	return el;
}

function randomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getFileNameWithoutExtension(filename){
 return filename.substring(0, filename.lastIndexOf('.'))
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

function getFolderByName(folders, name){
      for (var i = 0; i < folders.length; i++) {
            var f = new Folder(folders[i]);
            if (f.name == name)
                  return f;
                  }
      return null;   
     }
 
function getElementsWithGNum(docum, limit){
     var l=1;     
     var elements = []
     while (l<=limit) {
         try {
              elements.push(docum.pageItems.getByName("g" + l++));
              }
         catch (exp) {
              break;
              }
     }
    if (elements.length==0){
          var group = docum.groupItems.add();                
             group.name = "All";
             app.executeMenuCommand("selectall"); 
             group.selected = false;
             for ( s = 0; s < docum.selection.length; s++ ) {
                   try{
                    docum.selection[s].moveToEnd( group );      
                    }
                   catch  (exp)
                   {
                   }
               }
          elements.push(group);
        }
    return elements;
    }

function getFoldersListRecursive(f, result) {
     var templFiles = f.getFiles(/\.(ai|eps)$/i); 
     var allFiles = f.getFiles();
     for (var i = 0; i < allFiles.length; i++) {
           if (allFiles[i] instanceof Folder){ 
                if (templFiles.length == 1){ 
                      result.push(f);
                      break;
                      }
                else 
                   getFoldersListRecursive(allFiles[i], result);             
           }
     }
    return result;
}