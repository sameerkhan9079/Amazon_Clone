// // for sign-in modal
// const signj = document.querySelector(".ac");
// const tri = document.querySelector(".triangle");
// const signin = document.querySelector(".hdn-sign");

// signj.addEventListener("click",()=>{
//     black.classList.toggle("active-1");
//     signin.classList.toggle("active");
//     tri.classList.toggle("active");
// })

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.getElementById("side");






sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
});

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
});

// smartphone section
const full = document.querySelector('.samsung');
const aside = document.querySelector('.sam-aside');
const container = document.querySelector('.sam-cont');
const check = document.querySelector('#sam-check');

const left =document.querySelector('.aside');
const right = document.querySelector('.container');
const applecont = document.querySelector('.full-container');
// check.addEventListener("click",()=>{
//     full.classList.add('active');
//     aside.classList.add('active');
//     container.classList.add('active');
//     applecont.classList.add('active');
//     left.classList.add('active');
//     right.classList.add('active');

   

// })

//header theme
// let panel = document.querySelectorAll(".panel");
let modebtn = document.querySelector(".panel");
let nav = document.querySelector('.nav1');
let panel = document.querySelector('.panel');
let curmode ="green";

modebtn.addEventListener("click",()=>{
    if(curmode === "green"){
    curmode = "blue";
    nav.classList.add("blue");
    nav.classList.remove("green");
    panel.classList.add("blue1");
    panel.classList.remove("panel-color");
    }
    else
    {
        curmode = "green";
        nav.classList.add("green");
        nav.classList.remove("blue");
        panel.classList.add("panel-color");
        panel.classList.remove("blue1");
        
    }
    console.log(curmode);
    


    
})
// .onclick=function(){
//     document.body.header.background='red';
//     alert('hello');
// }