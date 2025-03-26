const cursor = document.querySelector(".cursor");

let colors = [
    '#FF0000',
    '#FFA500',
    '#FFFF00',
    '#008000',
    '#0000FF',
    '#4B0082',
    '#EE82EE'
]

document.addEventListener("mousemove", function(event){
    movecursor(event.pageX, event.pageY);
});

function movecursor(pageX, pageY){
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";

    const color = colors[Math.floor(Math.random()* colors.length)];
    cursor.style.backgroundColor = color;
};


document.addEventListener("mouseout", function(event) {
    if (!event.relatedTarget) {
        cursor.style.backgroundColor = "transparent";
    }
});
