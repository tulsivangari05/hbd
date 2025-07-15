const question = document.getElementById("question");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  if (noClicks === 1) {
    response.textContent = "Wrong answer. Now you have to come!";
    response.classList.remove("hidden");

    noBtn.style.fontSize = "0.8rem";
    yesBtn.style.fontSize = "1.2rem";

  } else if (noClicks === 2) {
    response.textContent = "Dekisukii. This is not a democracy. You’re COMING.";
    response.classList.remove("hidden");

    yesBtn.classList.add("giant-yes");
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Thank you for accepting my invite❤️ Let’s meet soon!";
  document.getElementById("buttons").style.display = "none";
  response.classList.add("hidden");

  // Add "one more thing" message
  setTimeout(() => {
    const extraMsg = document.createElement("p");
    extraMsg.innerHTML = "Oh, and before you go... there’s one more thing 👀";
    extraMsg.style.marginTop = "30px";
    extraMsg.style.fontStyle = "italic";
    extraMsg.style.color = "#6a006a";
    document.getElementById("birthdaySection").appendChild(extraMsg);
  }, 1500);

  // Then show CA Portal
  setTimeout(() => {
    document.getElementById("caPortal").classList.remove("hidden");
  }, 3000);
});

function requestCertificate() {
  document.querySelector('.btn').style.display = 'none';
  document.getElementById('loader').style.display = 'block';

  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('certificate').style.display = 'block';
  }, 2500);
}
