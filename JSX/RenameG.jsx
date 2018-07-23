#target illustrator

main();  

  
  
  function main(){
    var inFolder = Folder.selectDialog( 'Выберите папку с файлами' );    
    
    var files = inFolder.getFiles(/\.(ai|eps|pdf)$/i);  
  
  
    for (var i=0;i<files.length;i++){ 
         var doc = app.open(files[i]);  
         var groupsCount = 50;
         var groups = 0;
         while (groups<=groupsCount) {
                   try {
                        var item = doc.pageItems.getByName("g"+groups);
                        item.name = 'group'  + groups;
                    }
                    catch (err) {
                        groups++;
                        continue;
                    }
                }
     
          doc.close(SaveOptions.SAVECHANGES);  
    }
}
 
