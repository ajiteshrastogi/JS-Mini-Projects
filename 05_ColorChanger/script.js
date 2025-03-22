const color = () => {
    const hex = "0123456789ABCDEF";
    let out = "#";

    for(let i = 0; i<6;i++){
        out += hex[Math.floor(Math.random() *16)]
        console.log(out);
    }
    return out;
};

const body = document.querySelector('body');
let reference;
function startChanging(){
    body.style.backgroundColor = color();
};

document.querySelector('#start').addEventListener('click', function(){
    reference = setInterval(startChanging,1000);
});

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(reference);
    reference = null; //beacuse reference valiable is overwriting due to click on the start button many times
});
