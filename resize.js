// letterbox an image to be square

var INCHES = 6;
var RESOLUTION = 144;

app.activeDocument.resizeImage(UnitValue(INCHES, "inch"),
			       UnitValue(INCHES, "inch"),
			       RESOLUTION,
			       ResampleMethod.BILINEAR);
