var select = document.querySelectorAll('select');
console.log(select);
for(let i= 1; i <= 12; i++){
    if(i < 10){
        i = "0"+i;
    }
    let option = "<option value="+i+">"+i+"</option>";
    select[0].firstElementChild.insertAdjacentHTML("beforebegin", option);
}

console.log(select[1]);
for(let i = 0 ; i < 60; i++){
    if(i < 10){
        i = "0"+i;
    }
    let option = "<option value="+i+">"+i+"</option>";
    select[1].firstElementChild.insertAdjacentHTML("beforebegin", option);
}










let hrs = document.getElementById('hr');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');
let ampms = document.getElementById('ampm');


setInterval(function(){
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if(hr >= 12){
            hr = eval(hr-12);
            ampms.innerText = "PM";
        }

        if(hr < 10){
            hrs.innerText = "0"+ hr 
        }else{
            hrs.innerText = hr;
        }

        if(min < 10){
            mins.innerText = "0"+ min 
        }else{
            mins.innerText = min;
        }
        
        if(sec < 10){
            secs.innerText = "0"+ sec
        }else{
            secs.innerText = sec;
        }
  
    }, 1000);
