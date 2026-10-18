
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  const login = document.getElementById("login");
  const question = document.getElementById("question");
  const success = document.getElementById("success");

  // 1. PASSWORD CHECK
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (passwordInput.value.trim() === "092409") {
      login.classList.add("hidden");
      question.classList.remove("hidden");
      message.textContent = "";
    } else {
      message.textContent = "Wrong password, baby. Try again ♡";
      passwordInput.value = "";
      passwordInput.focus();
    }
  });

  // 2. MOVING NO BUTTON
  const noButton = document.getElementById("no");
  const buttonArea = document.getElementById("buttonArea");

  function moveNoButton() {
    const areaWidth = buttonArea.clientWidth;
    const buttonWidth = noButton.offsetWidth;

    const maxX = Math.max(0, (areaWidth - buttonWidth) / 2 - 5);
    const x = (Math.random() * 2 - 1) * maxX;
    const y = Math.random() * 60 - 30;

    noButton.style.transform =
      "translate(" + x + "px, " + y + "px)";
  }

  // For computers
  noButton.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") {
      moveNoButton();
    }
  });

  // For phones
  noButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });

  noButton.addEventListener("click", function (event) {
    event.preventDefault();
    moveNoButton();
  });

  // 3. YES BUTTON
  document.getElementById("yes").addEventListener("click", function () {
    question.classList.add("hidden");
    success.classList.remove("hidden");

    // Green hearts celebration
    for (let i = 0; i < 35; i++) {
      const heart = document.createElement("span");

      heart.textContent = ["♡", "♥", "✦"][
        Math.floor(Math.random() * 3)
      ];

      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-30px";
      heart.style.color = "#a5d6a7";
      heart.style.fontSize = (18 + Math.random() * 14) + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "100";

      document.body.appendChild(heart);

      const distance = window.innerHeight + 60;

      heart.animate(
        [
          { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          {
            transform: "translateY(" + distance + "px) rotate(360deg)",
            opacity: 0
          }
        ],
        {
          duration: 3000 + Math.random() * 1500,
          easing: "linear"
        }
      );

      setTimeout(function () {
        heart.remove();
      }, 5000);
    }
  });
});
