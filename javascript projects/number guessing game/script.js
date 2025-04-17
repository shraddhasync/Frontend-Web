const minnum=50;
const maxnum=55;
const answer=Math.floor(Math.random()*(maxnum-minnum +1)) + minnum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess = window.prompt(`guessa number btwn ${minnum} - ${maxnum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minnum || guess > maxnum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("too low,try again");
        }else if(guess > answer){
            window.alert("too high,ttry again");
        }
        else{
            window.alert(`correct! the answer is ${answer}, it took you ${attempts} attempts` );
            running=false;
        }
    }
    running=false;
}