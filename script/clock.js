const dateSpace = document.querySelector(".cat_say .date");
const clockSpace = document.querySelector(".cat_say .clock");

function getDate(){
  const date = new Date();
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");

  dateSpace.innerText = `${month}월 ${day}일`
}

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");

  clockSpace.innerText = `${hours}시 ${min}분 ${sec}초`;
}

getDate();
setInterval(getDate, 1000);
getClock();
setInterval(getClock, 1000);