/* ================= TERMINAL ================= */

const terminal = {
  element: document.getElementById("terminal"),
  output: document.querySelector(".terminal-output"),
  input: document.querySelector(".terminal-input"),

  commands: {
    help: `
about
role
skills
tools
projects
contact
clear
`,
    about: "Savinjaya H N\nCloud Engineer @ izmo Ltd",
    role: "Operating production Linux & cloud systems",
    skills: "AWS | Linux | Docker | Nginx | Security",
    tools: "AWS, Docker, Nginx, Burp Suite, Nmap",
    projects: "Projects under development",
    contact: "Email: me.savinjay.h.n@gmail.com",
    clear: "CLEAR"
  },

  init() {
    document.getElementById("terminal-btn").onclick = () =>
      this.element.classList.toggle("hidden");

    document.getElementById("close-terminal").onclick = () =>
      this.element.classList.add("hidden");

    this.input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        this.run(this.input.value.trim());
        this.input.value = "";
      }
    });

    this.print("CyberOS initialized");
    this.print("Type 'help'");
  },

  run(cmd) {
    this.print("$ " + cmd);
    if (cmd === "clear") this.output.innerHTML = "";
    else this.print(this.commands[cmd] || "Command not found");
  },

  print(text) {
    const p = document.createElement("p");
    p.textContent = text;
    this.output.appendChild(p);
    this.output.scrollTop = this.output.scrollHeight;
  }
};

/* ================= MATRIX ================= */

const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

const chars = "01";
const drops = [];

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ffaa";
  ctx.font = "16px monospace";

  for (let i = 0; i < canvas.width / 16; i++) {
    drops[i] = (drops[i] || 0) + 16;
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * 16, drops[i]);
    if (drops[i] > canvas.height) drops[i] = 0;
  }
}

setInterval(draw, 50);

document.addEventListener("DOMContentLoaded", () => terminal.init());
