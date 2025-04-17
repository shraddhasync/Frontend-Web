function rolldice(){
    const myinput=document.getElementById('myinput').value;
    const result=document.getElementById('result');
    const imageContainer=document.getElementById('image');

    let numbers=[];
    let images=[];

    for(let i=0;i<myinput;i++){
        const number=Math.floor(Math.random()*6)+1;
        numbers.push(number);
        images.push(`<img src="dice_images/img${number}.png" style="width:70px; height:70px; border:5px solid pink; border-radius:14px;">`)
    }
    result.textContent=`dice: ${numbers.join(', ')}`;
    imageContainer.innerHTML=images.join(' ');
}