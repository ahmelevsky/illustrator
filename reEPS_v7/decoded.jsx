main();

function main() {
    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;
    try {
        main();
    } catch (exp) {
        alert("Случилась ошибка!: \n" + exp);
    }
    app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;
}

function main() {
    var slash = getDelimiter();
    var folderObj = new Folder();
    var folder = folderObj.selectDlg("Выбери папку в которой лежат файлы");
    if (!folder) {
        return null;
    }
    var files = folder.getFiles("*.eps");
    var eps10T_template = new File(files[0].path + slash + "template_for_reExport_EPS.eps");
    if (!eps10T_template.exists) {
        var eps10T_template = new File(Folder.desktop + slash + "template_for_reExport_EPS.eps");
    }
    if (!eps10T_template.exists) {
        alert("Файл-шаблон template_for_reExport_EPS.eps должен быть на рабочем столе или в папке с обрабатываемыми eps. Без этого работать не будет.");
        return null;
    }
    var target_MP = 1000000 * prompt("Подгонять размер под 4МП или больше?\n2000:2000 = 4МП, 5000:5000 = 25МП", 4, "Параметры ресайза");
    if (target_MP == 0) {
        return null;
    }
    if (target_MP > 128000000) {
        alert("Это уж слишком..");
        return null;
    }
    var targetFolder = folder.fsName + " RE-EXPORTED";
    tryFolder(targetFolder);
    var errors = 0;
    for (var i = 0; i < files.length; i += 1) {
        try {
            reExport(files[i], targetFolder, slash, target_MP, eps10T_template);
        } catch (exp) {
            alert(exp);
            errors++;
        }
    }
    if (errors > 0) {
        alert("Случилось " + errors + " ошибок (и столько файлов не пересохранено)")
    }
}

function reExport(fileName, targetFolder, slash, target_MP, eps10T_template) {
    if (fileName.name == "template_for_reExport_EPS.eps") {
        return null;
    }
    var thisDoc = app.open(fileName);
    for (var i = 0; i < thisDoc.layers.length; i += 1) {
        thisDoc.layers[i].locked = false;
    }
    var targetFile = new File(targetFolder + slash + fileName.name);
    eps10T_template.copy(targetFile);
    var epsDocFile = new File(targetFolder + slash + fileName.name);
    var title = ReadXMPMetadata("title");
    var description = ReadXMPMetadata("description");
    var keywords = ReadXMPMetadata("subject");
    if (title == "") {
        title = read_prop_from_file(fileName.fsName.replace(".eps", ".jpg"), "title")
    }
    if (description == "") {
        description = read_prop_from_file(fileName.fsName.replace(".eps", ".jpg"), "description")
    }
    if (keywords == "") {
        keywords = read_prop_from_file(fileName.fsName.replace(".eps", ".jpg"), "subject")
    }
    flattenArtwork_via_action(targetFolder, slash);
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("group");
    var ab = thisDoc.artboards[0].artboardRect;
    var clippath = thisDoc.layers[0].pathItems.rectangle(ab[1], ab[0], ab[2] - ab[0], ab[1] - ab[3]);
    clippath.stroked = false;
    clippath.filled = false;
    var zoom = Math.ceil(100 * Math.sqrt(target_MP / (clippath.width * clippath.height)));
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("makeMask");
    app.redraw();
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("copy");
    thisDoc.close(SaveOptions.DONOTSAVECHANGES);
    var epsDoc = app.open(epsDocFile);
    app.redraw();
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("clear");
    app.redraw();
    app.executeMenuCommand("pasteFront");
    zoom_via_action(zoom, targetFolder, slash);
    app.executeMenuCommand("Fit Artboard to selected Art");
    app.redraw();
    app.selection = null;
    app.redraw();
    if (keywords != "" || description != "" || title != "") {
        updateMetaData(keywords, description, title);
    }
    fitView();
    exportJPG(fileName.name, targetFolder, slash);
    epsDoc.close(SaveOptions.SAVECHANGES);
}

function getDelimiter() {
    var pathDelimiter = "\\";
    var system = $.os;
    if (system.search("Windows") == -1) {
        pathDelimiter = "/"
    }
    return pathDelimiter;
}

function tryFolder(targetFolder) {
    var f = new Folder(targetFolder);
    if (!f.exists) {
        f.create()
    }
}

function fitView() {
    app.executeMenuCommand("fitall");
    app.executeMenuCommand("zoomout");
    app.redraw();
}

function flattenArtwork_via_action(targetFolder, slash) {
    var actionStr = ["/version 3", "/name [ 7", "\t466c617474656e", "]", "/isOpen 1", "/actionCount 1", "/action-1 {", "\t/name [ 15", "\t\t466c617474656e20417274776f726b", "\t]", "\t/keyIndex 0", "\t/colorIndex 0", "\t/isOpen 1", "\t/eventCount 1", "\t/event-1 {", "\t\t/useRulersIn1stQuadrant 0", "\t\t/internalName (ai_plugin_Layer)", "\t\t/localizedName [ 5", "\t\t\t4c61796572", "\t\t]", "\t\t/isOpen 0", "\t\t/isOn 1", "\t\t/hasDialog 0", "\t\t/parameterCount 2", "\t\t/parameter-1 {", "\t\t\t/key 1836411236", "\t\t\t/showInPalette 4294967295", "\t\t\t/type (integer)", "\t\t\t/value 14", "\t\t}", "\t\t/parameter-2 {", "\t\t\t/key 1851878757", "\t\t\t/showInPalette 4294967295", "\t\t\t/type (ustring)", "\t\t\t/value [ 15", "\t\t\t\t466c617474656e20417274776f726b", "\t\t\t]", "\t\t}", "\t}", "}"].join("\n");
    var actFileDestStr = targetFolder + slash + "ExpEPS_FlattenArtworkAction.aia";
    var f = new File(actFileDestStr);
    f.open("w");
    f.write(actionStr);
    f.close();
    app.loadAction(f);
    app.doScript("Flatten Artwork", "Flatten", true);
    app.unloadAction("Flatten", "");
    f.remove();
}

function zoom_via_action(zoom, targetFolder, slash) {
    var actionStr = ["/version 3 ", "/name [ 4 ", "\t7a6f6f6d ", "] ", "/isOpen 1 ", "/actionCount 1 ", "/action-1 { ", "\t/name [ 4 ", "\t\t7a6f6f6d ", "\t] ", "\t/keyIndex 0 ", "\t/colorIndex 0 ", "\t/isOpen 1 ", "\t/eventCount 1 ", "\t/event-1 { ", "\t\t/useRulersIn1stQuadrant 0 ", "\t\t/internalName (ai_plugin_TransformEach) ", "\t\t/localizedName [ 14 ", "\t\t\t5472616e73666f726d2045616368 ", "\t\t] ", "\t\t/isOpen 0 ", "\t\t/isOn 1 ", "\t\t/hasDialog 1 ", "\t\t/showDialog 0 ", "\t\t/parameterCount 13 ", "\t\t/parameter-1 { ", "\t\t\t/key 1936224890 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (unit real) ", "\t\t\t/value _ZOOM_.0 ", "\t\t\t/unit 592474723 ", "\t\t} ", "\t\t/parameter-2 { ", "\t\t\t/key 1937142388 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (unit real) ", "\t\t\t/value _ZOOM_.0 ", "\t\t\t/unit 592474723 ", "\t\t} ", "\t\t/parameter-3 { ", "\t\t\t/key 1835561594 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (unit real) ", "\t\t\t/value 0.0 ", "\t\t\t/unit 592476268 ", "\t\t} ", "\t\t/parameter-4 { ", "\t\t\t/key 1836479092 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (unit real) ", "\t\t\t/value 0.0 ", "\t\t\t/unit 592476268 ", "\t\t} ", "\t\t/parameter-5 { ", "\t\t\t/key 1634625388 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (unit real) ", "\t\t\t/value 0.0 ", "\t\t\t/unit 591490663 ", "\t\t} ", "\t\t/parameter-6 { ", "\t\t\t/key 1668247673 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 0 ", "\t\t} ", "\t\t/parameter-7 { ", "\t\t\t/key 1919837293 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 0 ", "\t\t} ", "\t\t/parameter-8 { ", "\t\t\t/key 1818848869 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 1 ", "\t\t} ", "\t\t/parameter-9 { ", "\t\t\t/key 1868720756 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 1 ", "\t\t} ", "\t\t/parameter-10 { ", "\t\t\t/key 1885434990 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 1 ", "\t\t} ", "\t\t/parameter-11 { ", "\t\t\t/key 1919247980 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 0 ", "\t\t} ", "\t\t/parameter-12 { ", "\t\t\t/key 1919247993 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (boolean) ", "\t\t\t/value 0 ", "\t\t} ", "\t\t/parameter-13 { ", "\t\t\t/key 1885957744 ", "\t\t\t/showInPalette 4294967295 ", "\t\t\t/type (enumerated) ", "\t\t\t/name [ 6 ", "\t\t\t\t63656e746572 ", "\t\t\t] ", "\t\t\t/value 4 ", "\t\t} ", "\t} ", "} "].join("\n");
    var actFileDestStr = targetFolder + slash + "ExpEPS_ZoomAction.aia";
    actionStr = actionStr.replace("_ZOOM_", zoom).replace("_ZOOM_", zoom);
    var f = new File(actFileDestStr);
    f.open("w");
    f.write(actionStr);
    f.close();
    app.loadAction(f);
    app.doScript("zoom", "zoom", true);
    app.unloadAction("zoom", "");
    f.remove();
}

function exportJPG(fileN, folderConst, slash) {
    var thisDoc = app.activeDocument;
    var exportJPGName = new File(folderConst + slash + fileN.replace(".eps", ".jpg"));
    var exportOptions = new ExportOptionsJPEG();
    exportOptions.optimization = true;
    exportOptions.antiAliasing = true;
    var biggest = 416,
        667;
    if (thisDoc.width > thisDoc.height) {
        biggest = thisDoc.width
    } else {
        biggest = thisDoc.height
    }
    var scale500 = (500 / biggest) * 100;
    exportOptions.verticalScale = scale500;
    exportOptions.horizontalScale = scale500;
    exportOptions.qualitySetting = 100;
    exportOptions.artBoardClipping = true;
    thisDoc.exportFile(exportJPGName, ExportType.JPEG, exportOptions);
}

function loadXMPLibrary() {
    try {
        if (ExternalObject.AdobeXMPScript == undefined) {
            ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
        }
        return true;
    } catch (e) {
        return false;
    }
}

function ReadXMPMetadata(prop) {
    var PropText = "";
    var Doc = app.activeDocument;
    if (loadXMPLibrary() == true) {
        Xmp = new XMPMeta(Doc.XMPString);
        switch (prop) {
            case "creator":
                num = Xmp.countArrayItems(XMPConst.NS_DC, "creator");
                for (var i = 1; i <= num; i += 1) {
                    PropText += Xmp.getArrayItem(XMPConst.NS_DC, "creator", i);
                    if (i <= (num - 1)) {
                        PropText += ", ";
                    }
                }
                break;
            case "title":
                PropText += Xmp.getArrayItem(XMPConst.NS_DC, "title", XMPConst.ARRAY_LAST_ITEM);
                break;
            case "description":
                PropText += Xmp.getArrayItem(XMPConst.NS_DC, "description", XMPConst.ARRAY_LAST_ITEM);
                break;
            case "subject":
                num = Xmp.countArrayItems(XMPConst.NS_DC, "subject");
                for (var i = 1; i <= num; i += 1) {
                    PropText += Xmp.getArrayItem(XMPConst.NS_DC, "subject", i);
                    if (i <= (num - 1)) {
                        PropText += ", ";
                    }
                }
                break;
        }
    }
    return PropText;
}

function updateMetaData(keys, desc, title) {
    var Doc = app.activeDocument;
    var metaDescription = desc;
    var metaKeywords = keys;
    var metaTitle = title;
    if (metaTitle == "") {
        metaTitle = metaDescription
    }
    UpdateXMPMetadata();

    function UpdateXMPMetadata(targetFile) {
        app.synchronousMode = true;
        if (loadXMPLibrary() == true) {
            if (targetFile != undefined) {
                var xmpFile = new XMPFile(targetFile.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE);
                Xmp = xmpFile.getXMP();
            } else {
                Xmp = new XMPMeta(Doc.XMPString);
            }
            dateTime = new XMPDateTime(new Date());
            Xmp.setProperty(XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate");
            Xmp.deleteProperty(XMPConst.NS_DC, "title");
            Xmp.appendArrayItem(XMPConst.NS_DC, "title", metaTitle, 0, XMPConst.ALIAS_TO_ALT_ARRAY);
            Xmp.deleteProperty(XMPConst.NS_DC, "description");
            Xmp.appendArrayItem(XMPConst.NS_DC, "description", metaDescription, 0, XMPConst.ALIAS_TO_ALT_ARRAY);
            arKey = new Array();
            arKey = metaKeywords.split(", ");
            Xmp.deleteProperty(XMPConst.NS_DC, "subject");
            for (var i = 0; i <= arKey.length - 1; i += 1) {
                Xmp.appendArrayItem(XMPConst.NS_DC, "subject", arKey[i], 0, XMPConst.ALIAS_TO_ARRAY);
            }
            if (targetFile != undefined) {
                if (xmpFile.canPutXMP(Xmp)) {
                    xmpFile.putXMP(Xmp);
                }
                xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
            } else {
                xmpNewStr = Xmp.serialize(XMPConst.SERIALIZE_USE_COMPACT_FORMAT);
                Doc.XMPString = xmpNewStr;
            }
        }
    }
}

function read_prop_from_file(file, prop) {
    var jpgFile = new File(file);
    if (!jpgFile.exists) {
        return "";
    }
    if (ExternalObject.AdobeXMPScript == undefined) {
        ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
    }
    var xmpFile = new XMPFile(file, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE);
    var Xmp = xmpFile.getXMP();
    var PropText = "";
    switch (prop) {
        case "creator":
            var num = Xmp.countArrayItems(XMPConst.NS_DC, "creator");
            for (var i = 1; i <= num; i += 1) {
                PropText += Xmp.getArrayItem(XMPConst.NS_DC, "creator", i);
                if (i <= (num - 1)) {
                    PropText += ", ";
                }
            }
            break;
        case "title":
            PropText += Xmp.getArrayItem(XMPConst.NS_DC, "title", XMPConst.ARRAY_LAST_ITEM);
            break;
        case "description":
            PropText += Xmp.getArrayItem(XMPConst.NS_DC, "description", XMPConst.ARRAY_LAST_ITEM);
            break;
        case "subject":
            var num = Xmp.countArrayItems(XMPConst.NS_DC, "subject");
            for (var i = 1; i <= num; i += 1) {
                PropText += Xmp.getArrayItem(XMPConst.NS_DC, "subject", i);
                if (i <= (num - 1)) {
                    PropText += ", ";
                }
            }
            break;
    }
    return PropText;
}

function epsExport() {
    app.coordinateSystem = CoordinateSystem.ARTBOARDCOORDINATESYSTEM;
    var epsDoc = app.activeDocument;
    var exportEPSName = new File("auto.eps");
    var saveOpts = new EPSSaveOptions();
    saveOpts.compatibility = Compatibility.ILLUSTRATOR10;
    app.activeDocument.saveAs(exportEPSName, saveOpts);
}