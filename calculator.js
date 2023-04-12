const bouttons = document.querySelectorAll(".btn");
const resultat = document.getElementById("resultat");
let powerOnOff = false;
resultat.value = "";

const stopMachine = () => {
  powerOnOff = false;
  power.textContent = "AC";
  resultat.style.textAlign = "center";
  resultat.style.fontSize = "10px";
  resultat.value = "Calculator V1.3.1 by Dev 205";
  resultat.style.background = "rgb(202, 202, 202)";
};

const startMachine = () => {
  powerOnOff = true;
  resultat.style.textAlign = "right";
  resultat.style.fontSize = "20px";
  resultat.value = 0;
  power.textContent = "C";
  resultat.style.background = "#fff";
};

power.addEventListener("click", () => {
  if (power.textContent === "C" && resultat.value != 0) {
    resultat.value = 0;
  } else if (resultat.value === "0") {
    stopMachine();
  } else {
    startMachine();
  }
});

bouttons.forEach((boutton) => {
  boutton.addEventListener("click", (e) => {
    if (powerOnOff === false) {
      alert("Appuyez sur la touche power (AC)");
    } else {
      if (resultat.value === "0") {
        resultat.value = "";
        resultat.value += e.target.id;
      } else {
        resultat.value += e.target.id;
      }
    }
  });
});

egal.addEventListener("click", () => {
  if (powerOnOff === false) {
    alert("Appuyez sur la touche power (AC)");
  } else {
    resultat.value = eval(resultat.value);
  }
});

// ************************** Personal Design**************************
const design = document.querySelector(".signature");
const spanName = document.querySelector(".span");

window.addEventListener("mousemove", (e) => {
  design.style.top = e.pageY + "px";
  design.style.left = e.pageX + "px";
});

window.addEventListener("mouseup", (e) => {
  design.style.transform = "scale(1)";
  design.classList.remove("classListe");
  design.style.width = "30px";
});

window.addEventListener("mousedown", (e) => {
  design.style.width = "360px";
  design.classList.add("classListe");
  // design.style.transform = "scale(0.9)";
});
