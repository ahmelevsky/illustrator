#target illustrator  


 while (app.documents.length) {  
  app.activeDocument.close(SaveOptions.PROMPTTOSAVECHANGES);  
}  
Main();  
  
function Main() {  

var fileList, i, inFolder, subFiles;  
                             
inFolder = Folder.selectDialog( 'Выберите исходную папку с файлами' ); 
outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
var countforeachswgroup = Number(prompt ("Введите количество вариантов для каждой группы цветов", 1, "Скрипт")); 
if ( inFolder != null ) {  
           subFiles = inFolder.getFiles( /\.ai$/i ) ;
           
for ( ii = 0; ii < subFiles.length; ii++ ) {  
 var doc = open(subFiles[ii]);
 var cSets = getAllColorSets();
 var items = extractPathItems2(doc.pageItems);
 var epsOptions = saveAsEpsFile();  
//app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true);  
    
//Для каждой палитры
for (var i = 0; i < cSets.length; i++){
   //Заданное число раз
   for  (var j = 0; j < countforeachswgroup; j++){
       //Красим каждый элемент в свой цвет и сохраняем
       for (var k=0; k<items.length; k++) {
           items[k].fillColor = randomElement(cSets[i]);
           }
       var epsFilePath = new File(outFolder.fsName+'/' +subFiles[ii].name.slice(0, -3) + '_' + i + '_' + j);   
       doc.saveAs(epsFilePath , saveArtboardsAsEpsFile(doc));  
       }
}
doc.close(SaveOptions.DONOTSAVECHANGES);  
}
}                           
}



// функция возвращает true, если объект не заблокирован или не скрыт
function checkActive(obj) {
	return !obj.locked && !obj.hidden;
}


//Получает все цвета из группы под номером
function getColors(num) {
	var сolors = app.activeDocument.swatchGroups[num].getAllSwatches();
	var selectedPalette = [];
	for (var i = 0; i < сolors.length; i++) {
		selectedPalette.push(сolors[i].color);
	}
	return selectedPalette;
}

//Получает все цвета из группы под номером
function getAllColorSets() {
    var colorSets = [];
    for (var i = 1; i < app.activeDocument.swatchGroups.length; i++){
	colorSets.push(getColors(i));
    }
	return colorSets;
}


function extractPathItems2(obj) {
    var extractedItems = [];
	for (var i = 0; i < obj.length; i++) {
		//if (!checkActive(obj[i])) continue;
			
		if (obj[i].typename == "GroupItem") {
			extractPathItems3(obj[i], extractedItems);
		}
        else{
            extractedItems.push(obj[i]);
            }
	}

	return extractedItems;
}

function extractPathItems3(obj, extractedItems) {
	for (var i = 0; i < obj.pageItems.length; i++) {
		//if (!checkActive(obj[i])) continue;
        
        if (obj.pageItems[i].typename == "PathItem") {
			extractedItems.push(obj.pageItems[i]);
		} else if (obj.pageItems[i].typename == "CompoundPathItem") {
			extractedItems.push(obj.pageItems[i].pathItems[0]);
		} else if (obj.pageItems[i].typename == "GroupItem") {
            extractPathItems3(obj.pageItems[i], extractedItems);
		}        
        
	}
	return extractedItems;
}




// функция возвращает случайный элемент массива
function randomElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomElementAndRemove(arr) {
    var num = Math.floor(Math.random() * arr.length);
    var el = arr[num]; 
    arr.splice(num, 1);
	return el;
}




function saveAsEpsFile() {  
     var epsOptions = new EPSSaveOptions();  
     with (epsOptions) {  
         
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
  