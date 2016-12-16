var canvas = document.getElementById('canvas'),
 		context = canvas.getContext('2d'),
		colorPicker = document.querySelector(".jscolor"),
		pointsCountSelect = document.querySelector("#pointsCount"),
		btnClear = document.querySelector("#btnClear"),
		canvasContent = document.querySelector(".paint__content"),
		oldPoints = [];

context.lineWidth = 3;

canvas.onmousedown = function (e) {
	var x = e.pageX - canvasContent.offsetLeft,
			y = e.pageY - canvasContent.offsetTop,
			color = '#' + colorPicker.value,
			pointsCount = pointsCountSelect.value * (-1);

	currentPosition = { x: x, y: y };

	drawPoint(currentPosition, color);

	oldPoints.slice(pointsCount).forEach(function (point) {
		drawLine(point, currentPosition, color);
	});

	oldPoints.push(currentPosition);
};


function drawLine(start, end, color) {
	context.beginPath();
	context.strokeStyle = color;
	context.moveTo(start.x, start.y);
	context.lineTo(end.x, end.y);
	context.stroke();
	context.closePath();
}

function drawPoint(point, color) {
	context.beginPath();
	context.fillStyle = color;
	context.arc(point.x, point.y, 3, 0, 360);
	context.fill();
	context.closePath();
}

btnClear.onclick = function () {
	oldPoints = [];
	context.clearRect(0, 0, canvas.width, canvas.height);
}
