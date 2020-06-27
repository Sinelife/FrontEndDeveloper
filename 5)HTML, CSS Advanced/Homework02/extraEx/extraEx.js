window.addEventListener("load", init, false);
function init() {
    let x = 40;
    let linesNum = 10;

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.translate(320, 320);
    ctx.lineWidth = 1;
    ctx.beginPath();
    drawHorizontalLines(ctx);
    drawVerticalLines(ctx);
    ctx.fill();
    ctx.stroke();
    ctx.restore();


    function drawHorizontalLines(context) {
        for (let i = 0, step = 0; step < linesNum; step++, i += x) {
            context.moveTo(-1 * x, i);
            context.lineTo(linesNum * x, i);
        }
    }

    function drawVerticalLines(context) {
        for (let i = 0, step = 0; step < linesNum; step++, i += x) {
            context.moveTo(i, -1 * x);
            context.lineTo(i, linesNum * x);
        }
    }
}