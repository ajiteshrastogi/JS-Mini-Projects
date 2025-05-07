let btn = document.querySelector('.btn');
let imgContainer =  document.querySelector('.img-container');

btn.addEventListener("click", function(){
    for(let i=0;i<4;i++){
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        newImg.classList.add("fade-in"); // Optional: Smooth transition
        imgContainer.appendChild(newImg)
    }
});



let btn1 = document.querySelector('.btn1');

btn1.addEventListener("click", function() {
    // Clear the previous images before adding new ones
    imgContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
        imgContainer.appendChild(newImg);
    }
});