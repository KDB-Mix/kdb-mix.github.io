const canvas = document.getElementById("bg-video");
const ctx = canvas.getContext("2d");

let H, W, t = 0
function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize()
addEventListener("resize", resize);


function drawAurora() {
    ctx.clearRect(0, 0, W, H);
    const colors = ['#850000', '#853500', '#850045'];
    for (let l = 0; l < 3; l++) {
        const c = colors[l];
        const grad = ctx.createLinearGradient(0, H * .2, W, H * .8);
        grad.addColorStop(0, c + '00');
        grad.addColorStop(.5, c + 'cc');
        grad.addColorStop(1, c + '00');
        ctx.beginPath();
        ctx.moveTo(0, H * .5);
        for (let x = 0; x <= W; x += 4) {
            const y = H * .5
                + Math.sin(x * .006 + t * .4 + l * 1.2) * H * .12
                + Math.sin(x * .003 + t * .25 + l * .8) * H * .08;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.globalAlpha = .35;
        ctx.fill();
    }
    ctx.globalAlpha = 1;
    t += 0.012;
    requestAnimationFrame(drawAurora);
}
drawAurora();