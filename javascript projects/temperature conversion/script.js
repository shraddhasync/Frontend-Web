let myinput=document.getElementById('myinput');
const ctof=document.getElementById('ctof');
const ftoc=document.getElementById('ftoc');
let result=document.getElementById('result');
let temp;

function convert(){
    if(ctof.checked){
        temp=Number(myinput.value);
        temp=Math.floor(temp * 9 / 5 + 32);
        result.textContent=temp.toFixed(1) + "°F";
    
    }else if(ftoc.checked){
        temp=Number(myinput.value);
        temp=Math.floor((temp - 32)*(5/9));
        result.textContent=temp.toFixed(1) + "°C";
        
    }else{
        result.textContent=`Select a unit`;
    }
    
}
