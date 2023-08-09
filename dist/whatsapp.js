const container = document.getElementById("norld-wa");
const containerNumber = document.getElementById("norld-wa-number");
const containerText = document.getElementById("norld-wa-text");
const textContentNumber = containerNumber.textContent;
const textContentText = containerText.textContent;

container.style.zIndex = "99999999999999";
container.style.position = "fixed";
container.style.cursor = "pointer";
container.style.bottom = "40px";
container.style.right = "40px";

const flexContainer = document.createElement("div");
flexContainer.id = "whatsapp-flex";
flexContainer.style.display = "flex";
flexContainer.style.alignItems = "center";

flexContainer.style.backgroundColor = "#0A939E";
flexContainer.style.borderRadius = "12px";
flexContainer.style.paddingTop = "8px";
flexContainer.style.paddingBottom = "8px";
flexContainer.style.paddingRight = "12px";
flexContainer.style.paddingLeft = "12px";
flexContainer.style.color = "#fff";
flexContainer.style.fontFamily = "sans-serif";
flexContainer.style.transition = "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms";
flexContainer.addEventListener("mouseenter", function() {
  flexContainer.style.backgroundColor = "#09898c";
});

flexContainer.addEventListener("mouseleave", function() {
  flexContainer.style.backgroundColor = "#0A939E";
});

const imgButton = document.createElement("img");
imgButton.src = "https://cdn.jsdelivr.net/gh/norld/whatsapp-injector/dist/icon.png";
imgButton.id = "whatsapp-button";
imgButton.style.width = "24px";
imgButton.style.height = "24px";

const spanButton = document.createElement("span");
spanButton.innerText = "WhatsApp";
spanButton.id = "whatsapp-span";
spanButton.style.paddingLeft = "8px";
spanButton.style.fontSize = "16px";

containerNumber.style.display = "none";
containerText.style.display = "none";

container.appendChild(flexContainer);
flexContainer.appendChild(imgButton);
flexContainer.appendChild(spanButton);

flexContainer.addEventListener("click", function() {
  window.location.href = "https://api.whatsapp.com/send?phone="+textContentNumber+"&text="+textContentText;
});