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
   
  
  
 
main();  

  
  
  function main(){
    var templFolder = Folder.selectDialog( 'Выберите папку с фонами' );  
    var inFolder = Folder.selectDialog( 'Выберите папку с материалами' );    
    var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
    if (templFolder == null|| inFolder == null || outFolder == null ) {  
         alert ("Вы не выбрали папки");
        return;
        }
    
    var templFiles = templFolder.getFiles(/\.(ai|eps|pdf)$/i);   
    var pasteFiles = inFolder.getFiles(/\.(ai|eps|pdf)$/i);  
    var folderName = null;
  
  
    for (var i=0;i<templFiles.length;i++){
         
         templ = app.open(templFiles[i]);  
         folderName = getFileNameWithoutExtension(templFiles[i].name);
         var f = new Folder(outFolder.fsName+'/' + folderName);
         if (!f.exists)
             f.create();
             
          var places = getElementsWithGNum(templ, 50);
            
          for (var p=0;p<pasteFiles.length;p++){ 
              
          for (var a=0;a<places.length;a++){  
             
             
             var fname = getFileNameWithoutExtension(pasteFiles[p].name);
             var filePath = new File(outFolder.fsName+'/' + folderName + '/' + fname + '_' + pad(a+1, 2) + '.eps'); 
               if (filePath.exists) continue;
             
             templ.selection = null;
             places[a].selected = true;             
             
             app.copy();               
             var material  = app.open(pasteFiles[p]);
             app.paste();
             
             app.executeMenuCommand ('group');
             
              var group = material.selection[0];               
              group.name = "PlacedGroup";
              group.move(material,  ElementPlacement.PLACEATEND);
                    
             align();
                
             material.selection = null; 
                 
             material.saveAs(filePath , saveAsEpsFile());  
             material.close(SaveOptions.DONOTSAVECHANGES);   
                }        
            }    
          templ.close(SaveOptions.DONOTSAVECHANGES);  
    }
}
 
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
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
 
 
 function getFileNameWithoutExtension(filename){
 return filename.substring(0, filename.lastIndexOf('.'))
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