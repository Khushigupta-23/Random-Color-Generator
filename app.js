let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let p = document.querySelector("p");
    let randomColor = changeColor();
    p.innerText = randomColor;

    let h1 = document.querySelector("h1");
    h1.style.color = randomColor;

    let colorBox = document.querySelector(".colorBox");
    colorBox.style.backgroundColor = randomColor;
});

function changeColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

