﻿#target Illustrator  
 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  
    
          var fileList, i, inFolder, subFiles;  
          
          inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
  
          if ( inFolder != null ) {  
                    subFiles = inFolder.getFiles( /\.eps$/i ) ;
            for ( i = 0; i < subFiles.length; i++ ) {  
                   var doc = open(subFiles[i]);
         var layerCount=doc.layers.length;
for(k=layerCount-1;k>=0;k--){
	var currLayer=doc.layers[k];
	if(currLayer.layers.length>0){
		for(j=currLayer.layers.length-1;j>=0;j--){
           if (currLayer.layers[j].pageItems.length==0)
	         currLayer.layers[j].remove();
	}
	}
	}
        doc.close(SaveOptions.SAVECHANGES);  
          };                  
          };  
 }  

