#target illustrator  


Main();  
  
function Main() {  

if (app.documents.length>0  && app.activeDocument.activeLayer) {  
var outFolder = Folder.selectDialog( 'Выберите папку куда сохранять' );
var countforeachswgroup = Number(prompt ("Введите количество вариантов для каждой группы цветов", 1, "Скрипт")); 
if ( outFolder &&  countforeachswgroup) {
var doc = app.activeDocument;
var fname = doc.name.slice(0, -3);

var cSets = getAllColorSets();
var items = extractPathItems2(doc.activeLayer.pageItems);
    
//Для каждой палитры
for (var i = 0; i < cSets.length; i++){
   //Заданное число раз
   for  (var j = 0; j < countforeachswgroup; j++){
       //Красим каждый элемент в свой цвет и сохраняем
       for (var k=0; k<items.length; k++) {
           items[k].fillColor = randomElement(cSets[i]);
           }
       filePath = new File(outFolder.fsName+'/' + fname + '_' + i + "_" + j);   
       doc.saveAs(filePath); 
       }
}
}
else 
 $.writeln("No Output Folder or variants count selected");
} 
else 
 $.writeln("No Document or Active layer");
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
    for (var i = 0; i < obj.length; i++) 
            extractPathItems4(obj[i], extractedItems);
	return extractedItems;
}

function extractPathItems3(obj, extractedItems) {
	for (var i = 0; i < obj.pageItems.length; i++) {
		//if (!checkActive(obj[i])) continue;
        var ooo= obj.pageItems[i];
        if (obj.pageItems[i].typename == "PathItem") {
            if (!obj.pageItems[i].clipping)
                extractedItems.push(obj.pageItems[i]);
		} else if (obj.pageItems[i].typename == "CompoundPathItem") {
			extractedItems.push(obj.pageItems[i].pathItems[0]);
		} else if (obj.pageItems[i].typename == "GroupItem") {
            extractPathItems3(obj.pageItems[i], extractedItems);
		}        
        
	}
	return extractedItems;
}


function extractPathItems4(obj, extractedItems) {
        if (obj.typename == "PathItem") {
            if (!obj.clipping)
                extractedItems.push(obj);
		} else if (obj.typename == "CompoundPathItem") {
			extractedItems.push(obj.pathItems[0]);
		} else if (obj.typename == "GroupItem") {
            for (var i = 0; i < obj.pageItems.length; i++) 
                extractPathItems4(obj.pageItems[i], extractedItems);
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
  