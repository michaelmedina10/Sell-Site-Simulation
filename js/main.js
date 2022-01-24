var img = "";
var urlToBuyPage = "";

function getElementCoordinates(element) {
  return element.getBoundingClientRect();
}

document.querySelectorAll(".main-menu .submenu li").forEach((listItem) => {
  listItem.onmouseover = (event) => {
    console.log(event.target.nextElementSibling);
    const body = document.querySelector("body");
    const bodyCoordinate = getElementCoordinates(body);
    if (event.target.nextElementSibling) {
      const ulChiild = event.target.nextElementSibling;
      const childCoordinates = getElementCoordinates(ulChiild);
      if (childCoordinates.x > bodyCoordinate.width) {
        ulChiild.style.marginLeft = "-100.5%";
      }
    }
  };
});

function ajaxNavigation(url, push = true) {
  const mainContent = document.querySelector(".content");
  fetch(url)
    .then((resp) => resp.text())
    .then((html) => (mainContent.innerHTML = html));

  // Adicionar a URL no Histórico de Navegação
  // if (push) {
  //   history.pushState({ url }, null, url);
  // }
}

document.querySelectorAll("[ajaxAttrib]").forEach((linkAjax) => {
  console.log(linkAjax);
  linkAjax.onclick = (event) => {
    event.preventDefault();
    const linkClicked = event.target;
    ajaxNavigation(linkClicked.getAttribute("href"));
  };
});

// Eliminar o último estado do histórico de navegação (Pilha)
// window.onpopstate = (event) => {
//   if (event.state) {
//     console.log(event);
//     ajaxNavigation(window.location.href, false);
//   }
//   if (event.state == null) {
//     console.log(event);
//     window.location.href = event.currentTarget.location.href;
//   }
// };
