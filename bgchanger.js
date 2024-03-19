let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let interval;

function random(num){
return Math.floor(Math.random() * (num + 1));
}


let starting = function(){
    start.addEventListener('click', function(){
         interval = setInterval(function(){
            let col = `rgb(${random(255)} ${random(255)} ${random(255)})`;
             document.body.style.backgroundColor = col;
        },1500)
    })
}

let stoping = function(){
    stop.addEventListener('click', function(){
        clearInterval(interval)
    })
}

starting();
stoping();