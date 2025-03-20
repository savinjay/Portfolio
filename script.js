// Terminal functionality
const terminal = {
  element: document.getElementById('terminal'),
  output: document.querySelector('.terminal-output'),
  input: document.querySelector('.terminal-input'),
  commands: {
    help: 'Available commands: help, about, skills, projects, contact, clear\n',
    about: 'About Me : \nCybersecurity enthusiast and DevOps engineer with a passion for automation and secure infrastructure.\n',
    skills: `Skills:\n
- Languages: Python, Bash, JavaScript\n
- Security: Wireshark, Metasploit, Nmap\n
- DevOps: Docker, Kubernetes, CI/CD\n
- Cloud: AWS, Azure, GCP`,
    projects: `Projects:\n
1. Network Scanner\n
2. CI/CD Pipeline Automation\n
3. Security Lab Environment\n`,
    contact: 'Email: me.savinjay.h.n@gmail.com\nGitHub:https://github.com/savinjay\nLinkedIn:https://www.linkedin.com/in/savinjaya-h-n-82a38031a/\n',
    clear: 'CLEAR'
  },

  init() {
    // Terminal toggle
    document.getElementById('terminal-btn').addEventListener('click', () => {
      this.element.classList.toggle('hidden');
      if (!this.element.classList.contains('hidden')) {
        this.input.focus();
      }
    });

    // Close terminal
    document.getElementById('close-terminal').addEventListener('click', () => {
      this.element.classList.add('hidden');
    });

    // Handle commands
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = this.input.value.trim().toLowerCase();
        this.handleCommand(command);
        this.input.value = '';
      }
    });

    // Initial message
    this.addOutput('Welcome to CyberOS v1.0.0');
    this.addOutput('Type "help" for available commands');
  },
  handleCommand(command) {
    this.addOutput(`$ ${command}`);

    if (command === 'clear') {
      this.output.innerHTML = ''; // Clears terminal output
    } else if (this.commands[command]) {
      this.addOutput(this.commands[command]); // Displays the command output
    } else {
      this.addOutput('Command not found. Type "help" for available commands');
    }
  },

  addOutput(text) {
    const p = document.createElement('p');
    p.innerHTML = text.replace(/\n/g, '<br>'); // Converts \n into <br> for new lines
    this.output.appendChild(p);
    this.output.scrollTop = this.output.scrollHeight; // Auto-scroll to the latest command
  }
};
// Mobile menu functionality
const mobileMenu = {
  button: document.querySelector('.mobile-menu-btn'),
  nav: document.querySelector('.nav-links'),
  
  init() {
    this.button.addEventListener('click', () => {
      this.nav.style.display = this.nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close menu when clicking a link
    this.nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          this.nav.style.display = 'none';
        }
      });
    });
  }
};

// Form submission
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("m5PIHmPEfLaiQGHZK"); // Initialize EmailJS (Replace with your actual User ID)

  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    // Send email via EmailJS
    emailjs.send("service_xepivqg", "template_e8owbpn", templateParams)
      .then(function (response) {
        alert("Email sent successfully!");
        document.querySelector(".contact-form").reset(); // Reset form
      })
      .catch(function (error) {
        alert("Error sending email: " + error);
      });
  });
});

// Glitch effect for text
const glitchEffect = {
  elements: document.querySelectorAll('.glitch-text'),
  
  init() {
    this.elements.forEach(element => {
      setInterval(() => {
        element.style.animation = 'none';
        void element.offsetHeight;
        element.style.animation = null;
      }, 5000);
    });
  }
};



  
  // Matrix Effect for Home Page
  const matrixCanvas = document.getElementById("matrix-bg");
  const ctx = matrixCanvas.getContext("2d");
  
  // Resize the canvas to full screen
  function resizeCanvas() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
  }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  // Matrix characters and settings
  const letters = "01".split("");
  const fontSize = 16;
  const columns = Math.floor(matrixCanvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Dark fade for the background
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  
    ctx.fillStyle = "rgb(0, 255, 0)"; // Dull green matrix text
    ctx.font = `${fontSize}px monospace`;
  
    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      ctx.fillText(text, x, y);
  
      if (y > matrixCanvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      } else {
        drops[i] += fontSize;
      }
    });
  }
  
  setInterval(drawMatrix, 50);
  
// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  terminal.init();
  mobileMenu.init();
  glitchEffect.init();
});

  