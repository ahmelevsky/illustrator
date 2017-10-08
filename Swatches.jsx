var doc = app.activeDocument;
if (doc.selection.length == 0) {
		for (i = 0; i < doc.pageItems.length; i++) {
			doc.pageItems[i].selected = true;
		}
	}
