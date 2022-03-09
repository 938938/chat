const todoBtn = document.querySelector(".todo-btn");
const todo = document.querySelector(".todo");

const HIDDEN = "hidden";

let open = false;

function todoOpen(){
  if(open === false){
    todo.classList.remove(HIDDEN);
    todo.style.left = "-300px";
    open=true;
  } else {
    todo.classList.add(HIDDEN);
    todo.style.left = "0px";
    open=false;
  }
};

todoBtn.addEventListener("click",todoOpen);