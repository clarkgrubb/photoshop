// crop an image to be square

var height = app.activeDocument.height;
var width = app.activeDocument.width;

if (height > width) {
  var delta = (height - width) / 2
  app.activeDocument.crop([0, delta, width, height - delta])
}
else if (height < width) {
  var delta = (width - height) / 2
  app.activeDocument.crop([delta, 0, width - delta, height])
}
