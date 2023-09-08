window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  bodyElement.dataset.theme = localTheme;
}
const localTheme = localStorage.getItem("theme");
localStorage.setItem("theme", "light");
let bodyElement = document.querySelector("body");
const selectTheme = document.querySelector("#changeTheme");
selectTheme.addEventListener("change", themeSwitch);

function themeSwitch() {
  console.log("skift tema", selectTheme.value);
  if (selectTheme.value === "hawaii") {
    bodyElement.dataset.theme = "hawaii";
    localStorage.setItem("theme", "hawaii");
  } else if (selectTheme.value === "dark") {
    bodyElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else if (selectTheme.value === "light") {
    bodyElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  } else if (selectTheme.value === "green") {
    bodyElement.dataset.theme = "green";
    localStorage.setItem("theme", "green");
  }
}
