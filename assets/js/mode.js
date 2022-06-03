const main = () => {
  let body = document.getElementById("body_section");
};

const ejecutar = () => {
  let opcion = document.getElementById("mode");
  switch (opcion.value) {
    case "1":
      let element = document.getElementById("body_section");
      if (element.classList.value) {
        if (element.classList.value == "red_color") {
          element.classList.remove("red_color");
        } else if (element.classList.value == "purple_color") {
          element.classList.remove("purple_color");
        }
      }
      element.classList.add("blue_color");
      break;
    case "2":
      let element2 = document.getElementById("body_section");
      if (element2.classList.value) {
        if (element2.classList.value === "blue_color") {
          element2.classList.remove("blue_color");
        } else if (element2.classList.value == "purple_color") {
          element2.classList.remove("purple_color");
        }
      }
      element2.classList.add("red_color");
      break;
    case "3":
      let element3 = document.getElementById("body_section");
      if (element3.classList.value) {
        if (element3.classList.value == "red_color") {
          element3.classList.remove("red_color");
        } else if (element3.classList.value == "blue_color") {
          element3.classList.remove("blue_color");
        }
      }
      element3.classList.add("purple_color");
      break;
    case "4":
      let element4 = document.getElementById("body_section");
      element4.classList.remove("blue_color");
      element4.classList.remove("red_color");
      element4.classList.remove("purple_color");
  }
};
