const btn = document.querySelectorAll(".button");
const screen = document.querySelector("body");
const container = document.querySelector(".container")

btn.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    console.log(e.target.id)
    if(e.target.id === "red"){
      screen.style.backgroundColor = e.target.id;
      container.style.backgroundColor = e.target.id;
    }
  })
})