let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");
buttons.forEach(function (button){
    // console.log(button);

    button.addEventListener("click", function(e){
        body.style.backgroundColor = e.target.id;
    });
    
});     