const input = document.querySelector('input');

input.addEventListener('keypress', logKey);

function logKey(e) {
  if(e.code == "KeyA"){document.getElementById("student").src= "./image/angel.jpg";}
  if(e.code == "KeyE"){document.getElementById("student").src= "./image/emiliano.jpg";}
  if(e.code == "KeyG"){document.getElementById("student").src= "./image/gonzalez.jpg";}
  if(e.code == "KeyH"){document.getElementById("student").src= "./image/hadassah.jpg";}
  if(e.code == "KeyJ"){document.getElementById("student").src= "./image/jasym.jpg";}
  if(e.code == "KeyL"){document.getElementById("student").src= "./image/lucas.jpg";}
  if(e.code == "KeyM"){document.getElementById("student").src= "./image/messiah.jpg";}
  if(e.code == "KeyN"){document.getElementById("student").src= "./image/nate.jpg";}
  if(e.code == "KeyS"){document.getElementById("student").src= "./image/sophia.jpg";}
}