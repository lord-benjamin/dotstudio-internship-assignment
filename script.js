const cards = document.querySelectorAll(".card");
const overlays = document.querySelectorAll(".overlay");
const contentTitle = document.querySelectorAll(".content h1");
const contentDesc = document.querySelectorAll(".content p");
const bottomText = document.querySelectorAll(".bottom h1");

for (let i = 0; i < cards.length; ++i) {
  cards[i].addEventListener("mouseover", () => {
    overlays[i].style.top = "0";
    overlays[i].style.left = "0";
    contentTitle[i].style.opacity = "1";
    contentTitle[i].style.transform = "translateY(0)";
    contentDesc[i].style.opacity = "1";
    contentDesc[i].style.transform = "translateY(0)";
    bottomText[i].style.opacity = "0";
    bottomText[i].style.transform = "translateY(-10px)";
  });
  cards[i].addEventListener("mouseleave", () => {
    overlays[i].style.top = "75%";
    overlays[i].style.left = "-100%";
    contentTitle[i].style.opacity = "0";
    contentTitle[i].style.transform = "translateY(10px)";
    contentDesc[i].style.opacity = "0";
    contentDesc[i].style.transform = "translateY(10px)";
    bottomText[i].style.opacity = "1";
    bottomText[i].style.transform = "translateY(0)";
  });
}
