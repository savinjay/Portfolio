const terminal = document.getElementById("terminal");
const output = document.querySelector(".output");
const input = document.querySelector(".terminal-body input");

document.getElementById("terminal-btn").onclick = () =>
  terminal.classList.toggle("hidden");

document.getElementById("close-terminal").onclick = () =>
  terminal.classList.add("hidden");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerHTML += `<div>$ ${cmd}</div>`;
    input.value = "";
  }
});
