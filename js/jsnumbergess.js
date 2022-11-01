//UI

const minnum = document.querySelector('.minnumber'),
maxnum = document.querySelector('.maxnumber'),
getinput = document.querySelector('#guessnumber'),
getbtn = document.querySelector('#btn'),
message1 = document.querySelector('.message1'),
message2 = document.querySelector('.message2'),
getgame = document.querySelector('#game');



let min = 1,
    max = 10,
    gameleft = 3,
    winningnum = randomnum(min,max);
    console.log(winningnum);

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener('click',function(){
//    console.log("hay");
// console.log(typeof getinput.value);
let guess = parseInt(getinput.value);
// console.log(typeof guess)
// console.log(guess);
   if(guess < min || guess > max || isNaN(guess)){
    //    console.log(`Please a number between ${min} to ${max}`);
       message2.textContent = `Please a number between ${min} to ${max}`;
       setmessage2(`Game Over , Your  lose , The correct number is ${winningnum}`,"red");
   };


   if(guess === winningnum){

    //Gameover Won

    //disable getinput
    // getinput.disabled = true;

    //getinput border color green;
    // getinput.style.borderColor = "green";

    //message 1
    // message1.textContent = `${winningnum} is correct!!! , You Won`;
    // message1.style.coloe = "green";

    // setmessage1(`${winningnum} is correct!!! , You Won`,"green");

    //play again ?
    // btn.value = "Play Again";

    gameover(true, `${winningnum} is correct!!! , You Won`);

   }else{
       //Wrong Number
    //    Gameover
    // gameleft --;
    gameleft -= 1;
    // console.log(gameleft);

    if(gameleft === 0){
        //Gameover LOSE
        //console.log(gameover);

        //disabled getinput
        // getinput.disabled = true;

        //border color red;
        // getinput.style.borderColor = "red";

        //message 2;
        // message2.textContent = `Game Over , Your  lose , The correct number is ${winningnum}`;
        // message2.style.color = "red";
        // setmessage1(`Game Over , Your  lose , The correct number is ${winningnum}`,"red");

       

        //play again ?
        // getbtn.value = "Play Again";

        gameover(false,`Game Over , Your  lose , The correct number is ${winningnum}`);
    }else{
        //Continue Game
        //border color red;
        getinput.style.borderColor = "red";

        //clear input value;

        getinput.value = "";

        //message 1;
        // message1.innerText = `${guess} is not correct , ${gameleft} guess left`;
        setmessage1(`${guess} is not correct , ${gameleft} guess left,`,"blue")
    }


   }
});

// message

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = "";

    },2000);
}
 
//gameover
function gameover(won,msg){
   let color;
   won === true ? color = "green" : color = "red";

//    disable input
getinput.disabled = true;

//getinput border color to  green or red;
  getinput.style.borderColor = "color";

//message 1
setmessage1(msg,color);

//playagain ?
 getbtn.value = "Play Again"

//    getbtn.className = 'playagain'
  getbtn.classList.add('playagain');


};

getgame.addEventListener('mouseup',(e)=>{
    // console.log(e.target);

    if(e.target.className === "btn playagain"){
        // console.log("i am play again");
        window.location.reload();
    }
});

//for winning number
function randomnum(minnum,maxnum){
                                            //10 - 1 +1
    let getrdm = Math.floor(Math.random()*(maxnum - minnum) + 1);
     return getrdm;
}

