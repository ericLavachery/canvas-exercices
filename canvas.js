var c = document.getElementById("jauliMaizon");
var ctx = c.getContext("2d");

// toît
ctx.beginPath();
ctx.moveTo(0, 120);
ctx.lineTo(150, 0);
ctx.lineTo(300, 120);
ctx.lineTo(0, 120);
ctx.fillStyle = '#f48825';
ctx.fill();
ctx.stroke();
ctx.closePath();

// maison
ctx.beginPath();
ctx.moveTo(40, 120);
ctx.lineTo(40, 300);
ctx.lineTo(260, 300);
ctx.lineTo(260, 120);
ctx.fillStyle = '#e4c419';
ctx.fill();
ctx.stroke();
ctx.closePath();

// porte
ctx.beginPath();
ctx.moveTo(65, 300);
ctx.lineTo(65, 230);
ctx.lineTo(120, 230);
ctx.lineTo(120, 300);
ctx.fillStyle = '#634848';
ctx.fill();
ctx.stroke();
ctx.closePath();

// grd fenêtre rez
ctx.beginPath();
ctx.moveTo(150, 230);
ctx.lineTo(235, 230);
ctx.lineTo(235, 275);
ctx.lineTo(150, 275);
ctx.lineTo(150, 230);
ctx.moveTo(193, 230);
ctx.lineTo(193, 275);
ctx.fillStyle = '#a1d7d1';
ctx.fill();
ctx.stroke();
ctx.closePath();

// grd fenêtre étage
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineTo(235, 150);
ctx.lineTo(235, 195);
ctx.lineTo(150, 195);
ctx.lineTo(150, 150);
ctx.moveTo(193, 150);
ctx.lineTo(193, 195);
ctx.fillStyle = '#a1d7d1';
ctx.fill();
ctx.stroke();
ctx.closePath();

// pt fenêtre étage
ctx.beginPath();
ctx.moveTo(65, 150);
ctx.lineTo(65, 195);
ctx.lineTo(120, 195);
ctx.lineTo(120, 150);
ctx.lineTo(65, 150);
ctx.fillStyle = '#d1f0ec';
ctx.fill();
ctx.stroke();
ctx.closePath();

// reflets pt fenêtre étage
ctx.beginPath();
ctx.moveTo(65, 195);
ctx.lineTo(120, 160);
ctx.lineTo(120, 195);
ctx.lineTo(65, 195);
ctx.fillStyle = '#a1d7d1';
ctx.fill();
ctx.stroke();
ctx.closePath();

// TEST ENTRE DEUX PIXELS

var c = document.getElementById("testPixels");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(6, 0);
ctx.lineTo(6, 6);
ctx.lineTo(0, 6);
ctx.lineTo(0, 0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(3, 0);
ctx.lineTo(3, 6);
ctx.stroke();
ctx.closePath();
