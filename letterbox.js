// letterbox an image to be square

var height = app.activeDocument.height;
var width = app.activeDocument.width;
var delta = Math.abs(height - width) / 2

if (height > width) {
  app.activeDocument.crop([-delta, 0, width + delta, height])
}
else if (height < width) {
  app.activeDocument.crop([0, -delta, width, height + delta])
}
