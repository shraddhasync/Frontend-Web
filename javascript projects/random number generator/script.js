const mybutton=document.getElementById('mybutton');
const mylabel1=document.getElementById('mylabel1');
const mylabel2=document.getElementById('mylabel2');
const mylabel3=document.getElementById('mylabel3');

const min=1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;


mybutton.onclick=function(){
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;
    mylabel1.textContent=randomnum1;
    mylabel2.textContent=randomnum2;
    mylabel3.textContent=randomnum3;
}