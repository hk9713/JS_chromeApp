const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

// 시간을 즉시 호출한 다음에 1초 단위로 인터벌 설정
getClock();
setInterval(getClock, 1000);