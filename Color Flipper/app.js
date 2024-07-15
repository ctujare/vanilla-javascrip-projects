function main() {
  let color_text_el = document.getElementsByClassName("color_text")[0];
  let body_el = document.querySelector("body");

  let button_el = document.querySelector("button");
  button_el.addEventListener("click", updateBackgroundColor);

  function updateBackgroundColor() {
    color = generateRandomColor();
    color_text_el.innerHTML = color;
    body_el.style.background = color;
  }

  function generateRandomColor() {
    let hexColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    console.log(hexColor);
    return `#${hexColor}`;
  }

  updateBackgroundColor();
}

main();
