if (app.activeDocument.height > app.activeDocument.width) {
  var delta = (app.activeDocument.height - app.activeDocument.width) / 2
  app.activeDocument.crop([-delta, 0, app.activeDocument.width + delta, app.activeDocument.height])
}
else if (app.activeDocument.height < app.activeDocument.width) {
  var delta = (app.activeDocument.width - app.activeDocument.height) / 2
  app.activeDocument.crop([0, -delta, app.activeDocument.width, app.activeDocument.height + delta])
}
