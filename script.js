let bodyElement = document.querySelector("body");
const selectTheme = document.querySelector("#changeTheme");
selectTheme.addEventListener("change", themeSwitch);

function themeSwitch() {
  console.log("skift tema", selectTheme.value);
  if (selectTheme.value === "hawaii") {
    bodyElement.dataset.theme = "hawaii";
  } else if (selectTheme.value === "dark") {
    bodyElement.dataset.theme = "dark";
  } else if (selectTheme.value === "light") {
    bodyElement.dataset.theme = "light";
  } else if (selectTheme.value === "green") {
    bodyElement.dataset.theme = "green";
  }
}
