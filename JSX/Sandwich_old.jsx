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
    var templateFile = File.openDialog ('Выберите template' );  
    templ = app.open(templateFile);   
    var materialFolders = [];
    for (var i=templ.layers.length-1;i>=0;i--){
          materialFolders.push(Folder.selectDialog( 'Выберите папку с фонами для слоя ' + templ.layers[i].name));      
        }
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    var isRandom = confirm('Использовать случайный порядок материалов?');
    var isDelete = confirm('Удалять файлы материалов после использования?');
    
    var fname = getFileNameWithoutExtension(templateFile.name);
    var materials = [];
    var maxfiles = 0;
    for (var i=0; i<materialFolders.length; i++) {
         materials.push(materialFolders[i].getFiles(/\.(ai|eps)$/i));   
         if (maxfiles == 0 || materials[i].length < maxfiles) 
            maxfiles = materials[i].length;
        }
     
     for (var i=0; i<maxfiles; i++) {
          
          for (var j=templ.layers.length-1;j>=0;j--) {
                 var layerindex = templ.layers.length-1-j;
                 var mat = materials[layerindex][i];
                 if (isRandom)
                      mat = randomElementAndRemove(materials[layerindex]);
                 var material  = app.open(mat);     
                 app.executeMenuCommand ('selectall');
                 app.copy();
                 templ.activate();
                 templ.selection = null;
                 templ.activeLayer = templ.layers[j];
                 app.paste();
                 align();
                 material.close(SaveOptions.DONOTSAVECHANGES); 
                 if (isDelete)
                    mat.remove();
              }
           
           var filePath = new File(outFolder.fsName+'/' + fname + '_' + pad(i+1, 3) + '.eps'); 
           templ.saveAs(filePath , saveAsEpsFile());  
           templ.close(SaveOptions.DONOTSAVECHANGES);   
           if (i+1<maxfiles) 
             templ = app.open(templateFile);
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
    