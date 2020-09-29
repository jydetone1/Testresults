let canvas = document.querySelector("#canvasBig");
let ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
ctx.save();
ctx.beginPath();
ctx.translate(200, 100);

let R = 80;
let r = 30;
let x;
let y;

for (let i = 0; i < 5; i++) {
  x = Math.cos(((18 + 72 * i) / 180) * Math.PI) * R;
  y = -Math.sin(((18 + 72 * i) / 180) * Math.PI) * R;
  ctx.lineTo(x, y);
  x = Math.cos(((54 + 72 * i) / 180) * Math.PI) * r;

  y = -Math.sin(((54 + 72 * i) / 180) * Math.PI) * r;
  ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(400, 100);

for (let i = 0; i < 5; i++) {
  x = Math.cos(((18 + 72 * i) / 180) * Math.PI) * R;
  y = -Math.sin(((18 + 72 * i) / 180) * Math.PI) * R;
  ctx.lineTo(x, y);
  x = Math.cos(((54 + 72 * i) / 180) * Math.PI) * r;

  y = -Math.sin(((54 + 72 * i) / 180) * Math.PI) * r;
  ctx.lineTo(x, y);
}

ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(320, 300);
for (let i = 0; i < 5; i++) {
  x = Math.cos(((18 + 72 * i) / 180) * Math.PI) * R;
  y = -Math.sin(((18 + 72 * i) / 180) * Math.PI) * R;
  ctx.lineTo(x, y);
  x = Math.cos(((54 + 72 * i) / 180) * Math.PI) * r;

  y = -Math.sin(((54 + 72 * i) / 180) * Math.PI) * r;
  ctx.lineTo(x, y);
}

ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(200, 500);
for (let i = 0; i < 5; i++) {
  x = Math.cos(((18 + 72 * i) / 180) * Math.PI) * R;
  y = -Math.sin(((18 + 72 * i) / 180) * Math.PI) * R;
  ctx.lineTo(x, y);
  x = Math.cos(((54 + 72 * i) / 180) * Math.PI) * r;

  y = -Math.sin(((54 + 72 * i) / 180) * Math.PI) * r;
  ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.restore();

ctx.save();
ctx.beginPath();
ctx.translate(400, 500);
for (let i = 0; i < 5; i++) {
  x = Math.cos(((18 + 72 * i) / 180) * Math.PI) * R;
  y = -Math.sin(((18 + 72 * i) / 180) * Math.PI) * R;
  ctx.lineTo(x, y);
  x = Math.cos(((54 + 72 * i) / 180) * Math.PI) * r;

  y = -Math.sin(((54 + 72 * i) / 180) * Math.PI) * r;
  ctx.lineTo(x, y);
}
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();
ctx.restore();
