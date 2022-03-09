const clockSpace = document.querySelector(".clock span");

function getClock(){
  const date = new Date();
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");

  clockSpace.innerText = `${month}월 ${day}일 ${hours}시 ${min}분 ${sec}초`;
}

getClock();
setInterval(getClock, 1000);

