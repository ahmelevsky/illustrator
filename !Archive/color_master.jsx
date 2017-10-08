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
                      
                   var clone = 1;
                   var palcount = 1;
                      
while (clone<=palcount) {
        
for ( cfeg = 1; cfeg <= countforeachswgroup; cfeg++ ) {  
    
 var doc = open(subFiles[ii]);
  palcount = doc.swatchGroups.length-1;
    
var pal = [] ;
var palette = getColors(clone);

for (var a = 0; a < doc.layers.length; a++){

var groupItems = extractGroupItems(doc.layers[a].pageItems);

if (pal.length ==0) {
for (var i = 0; i < groupItems.length; i++) {
pal.push(randomElementAndRemove(palette));
}
}
for (var iii = 0; iii < groupItems.length; iii++) {
    
    var pitems = extractPathItems2(groupItems[iii].pageItems);
     for (var j=0; j<pitems.length; j++) {
        pitems[j].fillColor = pal[iii];
        }
}
}
app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true);  
           var epsOptions = saveAsEpsFile();  
                             
                                                    
                           epsFilePath = new File(outFolder.fsName+'/' +subFiles[ii].name.slice(0, -3) + '_' + clone + '_' + cfeg);   
                             
                           doc.saveAs(epsFilePath , epsOptions);  
                             
                           //doc.redraw();  
                                                     
                           doc.close(SaveOptions.DONOTSAVECHANGES);  
                           
}
clone++;
}
}
}
}



// функция возвращает true, если объект не заблокирован или не скрыт
function checkActive(obj) {
	return !obj.locked && !obj.hidden;
}

// функция возвращает true, если цвет есть в массиве
function colorInArray(arr, col) {
	for (var i = 0; i < arr.length; i++) {
		if (equalColors(arr[i],col)) {
			return true;
		}
	}

	return false;
}

// функция получает массив с PathItems и возвращает массив с уникальными цветами
function getColorsFromPathItems(pathItemsArray) {
	var colorsArray = [];
	for (var i = 0; i < pathItemsArray.length; i++) {
		// если еще нет такого цвета
		var pathColor = pathItemsArray[i].fillColor;
		if (!colorInArray(colorsArray, pathColor)) {
			colorsArray.push(pathColor);
		}
	}

	return colorsArray;
}

// функция возвращает массив со всеми выделенными в палитре свотчами
function getSelectedColors() {
	var selectedColors = app.activeDocument.swatches.getSelected();
	var selectedPalette = [];
	
	for (var i = 0; i < selectedColors.length; i++) {
		selectedPalette.push(selectedColors[i].color);
	}
	
	return selectedPalette;
}

function getColors(num) {
	var selectedColors = app.activeDocument.swatchGroups[num].getAllSwatches();
	var selectedPalette = [];
	for (var i = 0; i < selectedColors.length; i++) {
		selectedPalette.push(selectedColors[i].color);
	}
	return selectedPalette;
}


// функция возвращает все PathItems и CompoundItems из объекта

function extractPathItems(obj) {
	var extractedItems = [];

	for (var i = 0; i < obj.length; i++) {
		if (!checkActive(obj[i])) continue;
		
		if (obj[i].typename == "PathItem") {
			extractedItems.push(obj[i]);
		} else if (obj[i].typename == "CompoundPathItem") {
			extractedItems.push(obj[i].pathItems[0]);
		} else if (obj[i].typename == "GroupItem") {
			extractedItems = extractedItems.concat(extractPathItems(obj[i].pageItems));
		}
	}

	return extractedItems;
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



function extractGroupItems(obj) {
	var extractedItems = [];

	for (var i = 0; i < obj.length; i++) {
		//if (!checkActive(obj[i])) continue;
		
		if (obj[i].typename == "GroupItem" && obj[i].parent.typename != "GroupItem") {
			extractedItems.push(obj[i]);
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



// функция возвращает true, если два объекта равны по всем свойствам
function equalObjects(firstObj, secondObj) {
	for (var k in firstObj) {
		if (firstObj[k] != secondObj[k]) {
			return false;
		}
	}
	return true;
}

// функция сравнивает два объекта типа color
function equalColors(colorA, colorB) {
	if (colorA.typename != colorB.typename) return false;
	switch (colorA.typename) {
		case "GradientColor": return equalGradientColors(colorA, colorB);
		case "PatternColor": return equalPatternColors(colorA, colorB);
		case "SpotColor": return equalSpotColors(colorA, colorB);
		case "RGBColor":
		case "CMYKColor":
		case "NoColor":
		case "GrayColor":
		case "LabColor":
		default: return equalObjects(colorA, colorB);
	}
}

// функция сравнивает два объекта типа GradientColor
function equalGradientColors(colorA, colorB) {
	return colorA.angle == colorB.angle &&
	equalObjects(colorA.gradient.gradientStops, colorB.gradient.gradientStops);
}

// функция сравнивает два объекта типа PatternColor
function equalPatternColors(colorA, colorB) {
	return colorA.pattern.name == colorB.pattern.name;
}

// функция сравнивает два объекта типа Spotcolor
function equalSpotColors(colorA, colorB) {
	return colorA.tint == colorB.tint &&
	equalObjects(colorA.spot.getInternalColor(), colorB.spot.getInternalColor());
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
  