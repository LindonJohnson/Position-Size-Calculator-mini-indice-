const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputRisco = event.target.querySelector("#risc");
  const inputPontos = event.target.querySelector("#pts");

  const risco = Number(inputRisco.value);
  const pontos = Number(inputPontos.value);

  if (!risco) {
    set("ERRO", false);
    return;
  };

  if (!pontos) {
    set("ERRO", false);
    return;
  };

  const ps = getPs(risco, pontos);

  const msg = `${ps} C`;
  set(msg, true);
});

function getnivelps() {
  const nivel = [];
};

function getPs(risco, pontos) {
  const ps = risco / (pontos * 0.20);
  return parseInt(ps);
};

function pinnerhtml() {
  const p = document.createElement("p");
  return p;
};

function set(msg, isValid) {
  const result = document.querySelector("#resultado");

  result.innerHTML = "";

  const p = pinnerhtml();
  p.innerHTML = msg;
  result.appendChild(p);
};
