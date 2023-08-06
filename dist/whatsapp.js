const container = document.getElementById("norld-wa");
const containerNumber = document.getElementById("norld-wa-number");
const containerText = document.getElementById("norld-wa-text");
const textContentNumber = containerNumber.textContent;
const textContentText = containerText.textContent;

const imgButton = document.createElement("img");
imgButton.src = "https://cdn.jsdelivr.net/gh/norld/whatsapp-injector/dist/whatsapp.png";
imgButton.id = "whatsapp-button";
imgButton.style.position = "fixed";
imgButton.style.bottom = "40px";
imgButton.style.right = "40px";
imgButton.style.width = "40px";
imgButton.style.height = "40px";

containerNumber.style.display = "none";
containerText.style.display = "none";

container.appendChild(imgButton);

imgButton.addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone="+textContentNumber+"&text="+textContentText;
});
