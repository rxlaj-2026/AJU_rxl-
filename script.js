const modal = document.getElementById("loginModal");
const openButtons = [
  document.getElementById("loginNav"),
  document.getElementById("loginHero"),
  document.getElementById("loginContact")
];
const closeButton = document.getElementById("closeModal");
const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

function openModal(){
  modal.classList.remove("hidden");
  document.getElementById("studentId").focus();
}
function closeModal(){
  modal.classList.add("hidden");
  message.textContent = "";
}
openButtons.forEach(btn => btn.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });

form.addEventListener("submit", e => {
  e.preventDefault();
  const id = document.getElementById("studentId").value.trim().toUpperCase();
  const password = document.getElementById("password").value;
  if(id === "EDU-001" && password === "1234"){
    message.textContent = "Login successful. Student dashboard will be connected in the next phase.";
    message.style.color = "#18845a";
  } else {
    message.textContent = "Invalid Student ID or password.";
    message.style.color = "#b42318";
  }
});