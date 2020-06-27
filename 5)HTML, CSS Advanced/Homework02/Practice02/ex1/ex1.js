window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.translate(300, 200);

    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.moveTo(-20, 260);
    ctx.lineTo(20, 260);
    ctx.lineTo(20, 330);
    ctx.lineTo(-20, 330);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "darkgreen";
    ctx.moveTo(0, 130);
    ctx.lineTo(160, 270);
    ctx.lineTo(-160, 270);
    ctx.lineTo(0, 130);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(0, 50);
    ctx.lineTo(120, 170);
    ctx.lineTo(-120, 170);
    ctx.lineTo(0, 50);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "rgb(99, 187, 11)";
    ctx.moveTo(0, 0);
    ctx.lineTo(80, 80);
    ctx.lineTo(-80, 80);
    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}