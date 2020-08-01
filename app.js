// simple code for color flipper
const script = document.querySelector("script");
const simple = document.querySelector(".simple");
const hex = document.querySelector('.hex');
simple.addEventListener("click",function(){   
    const color = document.documentElement;
    const colors= ["red","green","#ff5722","#ed6663","#ff2e63","#216583"];
    const button  = document.querySelector('button');
    const declare = document.querySelector('span');
    button.addEventListener("click",changeBackground);
    function changeBackground(){
        const randomColor = colors[Math.floor(Math.random() * 6)];
        color.style.setProperty("--mainColor",randomColor);
        declare.innerHTML = randomColor;
    }
});
hex.addEventListener("click",function(){
 document.querySelector('button').addEventListener("click",()=>{
        const root = document.documentElement;
        const parts  = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        const declare = document.querySelector("span");
        let newColor = "#";
        for(let i=0;i<6;i++){
            newColor += parts[Math.floor(Math.random() * 16)];
        }
        root.style.setProperty("--mainColor",newColor);
        declare.innerHTML = newColor;
    }); 
    });