console.log("Loaded !");

runStandard();

function runStandard() {
    const canvas = $("#tictactoeCanvas")[0];
    canvas.width = 600
    canvas.height = 600
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = 'rgb(0 0 0)'
        for(var i = 0; i < 2; i++){
            ctx.beginPath(); // Start a new path
            ctx.moveTo(200 + 200*i, 0); // Move the pen to (30, 50)
            ctx.lineTo(200 + 200*i, 600); // Draw a line to (150, 100)
            ctx.stroke(); // Render the path
            ctx.beginPath(); // Start a new path
            ctx.moveTo(0, 200 + 200*i); // Move the pen to (30, 50)
            ctx.lineTo(600, 200 + 200*i); // Draw a line to (150, 100)
            ctx.stroke(); // Render the path
        }
    } else {

    }
}
