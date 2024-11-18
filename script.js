let div = document.querySelector("#div");
let btn = document.querySelector("#btn");


function randomcolor(){
    let str="0123456789abcdef";
    let color='#';
    for(let i=0 ;i<6 ;i++){
        color += str[Math.floor(Math.random()*16)]
    }
    return color;
}
btn.addEventListener("click", function(){
    div.style.backgroundColor = randomcolor();
});
