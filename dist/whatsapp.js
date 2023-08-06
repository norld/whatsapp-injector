const container = document.getElementById("norld-whatsapp");
const containerText = document.getElementById("norld-whatsapp-text");
const textContent = container.textContent;
const textContentMsg = containerText.textContent;

const imgButton = document.createElement("img");
imgButton.src = "https://cdn.jsdelivr.net/gh/norld/whatsapp-injector/dist/whatsapp.png";
imgButton.id = "whatsapp-button";
imgButton.style.position = "fixed";
imgButton.style.bottom = "40px";
imgButton.style.right = "40px";

container.style.display = "none";
containerText.style.display = "none";

container.appendChild(imgButton);

imgButton.addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone="+textContent+"&text="+textContentMsg;
});
