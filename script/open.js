const login = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const reply = document.querySelector(".cat_say");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLogin(event){
  event.preventDefault();
  const userName = loginInput.value;
  login.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY,userName);
  console.log(userName);
  setLogin(userName);
}

function setLogin(username){
  reply.innerText = `안녕하세요, ${username}님!`
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
  login.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit",onLogin);
} else {
  setLogin(savedUserName);
}