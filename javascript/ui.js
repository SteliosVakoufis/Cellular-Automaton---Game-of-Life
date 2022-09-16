function run_UI() {
    let midX = width / 2 - 116;
    fill(100);
    noStroke();
    rect(midX, 0, 235, 65);
    fill(255);
    textSize(18);
    text("Spacebar: Pause/Unpause", midX + 5, 15);
    text("Left Click: Change Cell state", midX + 5, 30);
    text("C: Clear Cells", midX + 5, 45);
    text("R: Reset Cells", midX + 5, 60);
}