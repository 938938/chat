// const login = document.querySelector(".login");
// const loginForm = document.querySelector(".login-form");
// const loginInput = document.querySelector(".login-form input");
// const reply = document.querySelector(".cat_say");

// const HIDDEN_CLASS = "hidden";
// const USERID_KEY = "userid";

// function onLogin(event){
//   event.preventDefault();
//   const userId = loginInput.value;
//   login.classList.add(HIDDEN_CLASS);
//   localStorage.setItem(USERID_KEY,userId);
//   console.log(userId);
//   setLogin(userId);
// }

// const typewriter = new Typewriter(reply, {
//   loop: false,
// });

// function setLogin(userid){
//   typewriter
//   .deleteAll()
//   .typeString(`안녕하세요, ${userid}님!`)
//   .pauseFor(500)
//   .start();
// }

// const savedUserName = localStorage.getItem(USERID_KEY);

// if(savedUserName===null){
//   login.classList.remove(HIDDEN_CLASS);
//   loginForm.addEventListener("submit",onLogin);
// } else {
//   setLogin(savedUserName);
// }