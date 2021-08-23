/* const logo = document.getElementById("logo");
let value = 0;
function animLogo() {
  if (value < 240) {
    value++;
    console.log(value);
  
  }
}
function animBack() {
  if (value > 0) {
    value--;
    logo.style.width = value + "px";
    logo.style.height = value + "px";
    logo.style.fontSize = value + "%";
  }
} */

const logo = document.getElementById("logo");
let value = 0;
function animLogo() {
  // Votre code ici
  if (value < 240) {
    value++;
    logo.style.width = value + "px";
    logo.style.height = value + "px";
    logo.style.fontSize = value + "%";
    console.log("if " + value);
  } else {
    for (let i = 0; i < 240; i++) {
      animBack();
    }
  }
}
function animBack() {
  if (value < 240) {
    value--;
    logo.style.width = value + "px";
    logo.style.height = value + "px";
    logo.style.fontSize = value + "%";
    setInterval(animBack, 20);
    console.log("if " + value);
  }
}
setInterval(animLogo, 20);
