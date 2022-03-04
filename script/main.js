let keyword = [
  {
    "question":"안녕?",
    "answer":"안녕하세요!"
  },
  {
    "question":"?",
    "answer":"대화, 숫자 맞추기 게임, 할 일, 등을 할 수 있어요."
  },
  {
    "question":"누구",
    "answer":"당신과 대화를 하기 위해 태어났어요."
  }
]

// const say = document.querySelector(".cay_say");
// const input = document.querySelector(".input");
// const value = document.querySelector(".input").value;

// let question = ""; // 질문 임시 저장 함수
// let answer = ""; // 대답 임시 저장 함수

function catSay(){
  event.preventDefault();

  const input=document.querySelector(".input");
  const value=document.querySelector(".input").value;
  const reply=document.querySelector(".cat_say");

  for(let i = 0; i<keyword.length; i++){
    if(value==keyword[i].question){
      reply.innerText=keyword[i].answer;
      input.value=null;
      return;
    } else {
      reply.innerText="아직 모르는 말이에요.";
      input.value=null;
      // return;
    }
  };
};

document.querySelector(".btn").addEventListener("click",catSay);
document.querySelector("form").addEventListener("submit",catSay);