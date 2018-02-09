#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var  i, inFolder;  
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
  
          if ( inFolder != null ) {  
              var  subFiles = [];
              fileListRecursive(subFiles, inFolder, /\.eps$/i ) ;
            for ( i = 0; i < subFiles.length; i++ ) {  
                   var doc = open(subFiles[i]);
         var layerCount=doc.layers.length;
for(k=layerCount-1;k>=0;k--){
	var currLayer=doc.layers[k];
    try{
	if(currLayer.layers.length>0){
		for(j=currLayer.layers.length-1;j>=0;j--){
           if (currLayer.layers[j].pageItems.length==0)
	         currLayer.layers[j].remove();
	}
	}
}
catch(exp) {
   $.writeln(subFiles[i].fsName);    
	}
}

        doc.close(SaveOptions.SAVECHANGES);  
          };                  
          };  
 }  

function fileListRecursive(fileList, f, exp) {          
     var t = Folder(f).getFiles();
     for (var i = 0; i < t.length; i++) {
          if (t[i] instanceof File && RegExp(exp).test(t[i].fsName)) fileList.push(t[i]);
          if (t[i] instanceof Folder) fileListRecursive(fileList, t[i].fsName, exp);
     }
 }