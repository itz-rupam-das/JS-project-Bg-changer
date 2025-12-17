const btn = document.querySelectorAll(".button");
const screen = document.querySelector("body");
const container = document.querySelector(".container")
const buttons = document.querySelector(".buttons")

btn.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    console.log(e.target.id)
    if(e.target.id === "red"){
      screen.style.backgroundColor = e.target.id;
      container.style.backgroundColor = e.target.id;
      buttons.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "blue"){
      screen.style.backgroundColor = e.target.id;
      container.style.backgroundColor = e.target.id;
      buttons.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "green"){
      screen.style.backgroundColor = e.target.id;
      container.style.backgroundColor = e.target.id;
      buttons.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow"){
      screen.style.backgroundColor = "rgb(242, 185, 0)";
      container.style.backgroundColor = "rgb(242, 185, 0)";
      buttons.style.backgroundColor = "rgb(242, 185, 0)";
    }
  })
})