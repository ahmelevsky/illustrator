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
var isUnique = !confirm("Цвета могут повторяться?"); 
if ( inFolder != null ) {  
           subFiles = inFolder.getFiles( /\.ai$/i ) ;
           
for ( ii = 0; ii < subFiles.length; ii++ ) {  
 var doc = open(subFiles[ii]);
 var cSets = [];
 //Многомерный массив. Уровень 1: слои. Уровень 2: старшие группы внутри слоев. Уровень 3: элементы в группах для покраски.
 var itemSets = [];
 
for (var a = 0; a < doc.layers.length; a++){
        //$.writeln("Start layer " + a + "  "+ new Date().toString()); 
    var groupItems = extractGroupItems(doc.layers[a].pageItems);
        //$.writeln("Found groups " + groupItems.length + "  "+ new Date().toString()); 
    if (cSets.length ==0) {
        if (isUnique)
            cSets = getColorsSets(doc, groupItems.length, countforeachswgroup);
        else
            cSets = getColorsSetsAny(doc, groupItems.length, countforeachswgroup);
        }

    var iSet= [];
    for (var iii = 0; iii < groupItems.length; iii++) {
    //$.writeln("Start group " + iii + "  "+ new Date().toString()); 
       iSet.push(extractPathItems2(groupItems[iii].pageItems));
    //$.writeln("Found elements " + pitems.length + "  " + new Date().toString()); 
    }
    itemSets.push(iSet);
}   

app.doScript("Удалить неиспользуемые элементы палитры", "Операции по умолчанию", true);  
    
//Для каждого цветового сочетания
for (var i = 0; i < cSets.length; i++){
   //Для каждого слоя
   for  (var j = 0; j < itemSets.length; j++){
       //Красим в свой цвет...
       for (var k=0; k<itemSets[j].length; k++) {
           //...все элементы каждой группы
           for (var n=0; n<itemSets[j][k].length; n++) {
            itemSets[j][k][n].fillColor = cSets[i][k];
           }
        }
       }
       var epsOptions = saveAsEpsFile();  
       epsFilePath = new File(outFolder.fsName+'/' +subFiles[ii].name.slice(0, -3) + '_' + i);   
       doc.saveAs(epsFilePath , saveArtboardsAsEpsFile(doc));  
}
doc.close(SaveOptions.DONOTSAVECHANGES);  
}
}                           
}



// функция возвращает true, если объект не заблокирован или не скрыт
function checkActive(obj) {
	return !obj.locked && !obj.hidden;
}


//Выбирает несколько случайных цветов из группы цветов(используется для выбора цветов для групп объектов одного слоя)
function getColorsFor(groupNum, colorsCount, isUn) {
	var сolors = getColors(groupNum);
    var colorSet = [];
    for (var i = 0; i < colorsCount; i++) {
        if (isUn) colorSet.push(randomElementAndRemove(сolors));
        else colorSet.push(randomElement(сolors));
    }
    return colorSet;
}

//Выбирает цвета из каждой группы (заданное количество) причем несколько раз
function getColorsSets(docum, colorsCount, variantsCount) {
   var colorSets = [];
        for (var i = 1; i < docum.swatchGroups.length; i++) {
             for (var j = 0; j < variantsCount; j++) {
                colorSets.push(getColorsFor(i, colorsCount, true));
            }
            }
   return colorSets;    
}

function getColorsSetsAny(docum, colorsCount, variantsCount) {
   var colorSets = [];
        for (var i = 1; i < docum.swatchGroups.length; i++) {
             for (var j = 0; j < variantsCount; j++) {
           colorSets.push(getColorsFor(i, colorsCount, false));
       }
   }
   return colorSets;    
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
  