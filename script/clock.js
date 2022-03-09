const dateSpace = document.querySelector(".cat_say span:first-child");
// const dateSpace = document.createElement("span");
const clockSpace = document.querySelector(".cat_say span:last-child");
// const clockSpace = document.createElement("span");



function getDate(){
  const date = new Date();
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");

  dateSpace.innerText = `오늘은 ${month}월 ${day}일,`
}

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");

  clockSpace.innerText = `지금은 ${hours}시 ${min}분 ${sec}초입니다!`;
}

getDate();
setInterval(getDate, 1000);
getClock();
setInterval(getClock, 1000);


// document.catSay.appendChild(dateSpace,clockSpace);