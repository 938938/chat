function getWeather(){
  const API_KEY = "251d7389c51322971da347c975ef7afb";

  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        reply.innerText = `${data.name}의 날씨는 ${data.weather[0].main}입니다!`;
      });
  }
  function onGeoError() {
    reply.innerText="어디에 계신지 모르겠어요.";
  }

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

//---

let keyword = [
  {
    "question":"안녕?",
    "answer":"안녕하세요!"
  },
  {
    "question":"누구야?",
    "answer":"당신과 대화를 하기 위해 태어났어요."
  },
  {
    "question":"이름은?",
    "answer":"챗냥이라고 불러주세요!"
  }
]

let question = ""; // 질문 임시 저장 함수
let answer = ""; // 대답 임시 저장 함수

let dark = 0; //다크모드 판단
let key = 0; //말 가르쳐주기 판단

function catSay(){
  event.preventDefault();

  const input=document.querySelector(".input");
  const value=document.querySelector(".input").value;
  const reply=document.querySelector(".cat_say");

  const body = document.querySelector("body");

  for(let i = 0; i<keyword.length; i++){
    if(value==keyword[i].question){
      reply.innerText=keyword[i].answer;
      input.value=null;
      return;
    }
  };

  if(value.includes("날씨")){
    reply.innerText="잠시만 기다려주세요";
    getWeather();
    return;
  };

  if(value.includes("어둡게")){
    if(dark===0){
      body.style.backgroundColor="black";
      reply.innerText="불을 껐어요!";
      dark++;
    } else {
      reply.innerText="이미 어두운걸요?";
    }
    input.value=null;
  } else if(value.includes("밝게")){
    if(dark===1){
      body.style.backgroundColor="white";
      reply.innerText="불을 다시 켰어요!";
      dark=0;
    } else {
      reply.innerText="지금은 밝아요";
    }
    input.value=null;
  } else {
    if(key==0){
      reply.innerText="아직 모르는 말이에요";
      input.value=null;
      setTimeout(learning,2000);  
    }
    input.value=null;
  };

  function learning(){
    reply.innerText="가르쳐주실래요? (응 / 싫어)";
    question=value; //사용자 질문 미리 저장
    key=1; //조건문으로 진입하는 키 값 변경
    return;  
  }

  if(key==1){
    if(value==="응"){
      reply.innerText="뭐라고 대답하면 될까요?";
      key=2;
      // return;
    } else {
      reply.innerText="제가 몰라도 되는 이야기군요.";
      key=0;
    }
    return;
  };

  if(key==2){
    answer=value;
    push_json();
  };

  function push_json(){
    keyword.push({question: `${question}`, answer: `${answer}`});
    reply.innerText="기억했어요!";
    key = 0;
  };
};

document.querySelector(".chat-form").addEventListener("submit",catSay);