const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700", "#8A2BE2", "#00CED1"];
let index = 0;

function toggleColor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}