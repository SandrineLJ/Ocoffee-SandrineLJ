const eventHandlers = {

  handleProductsList() {
    const button = document.querySelector('.catalogBtn');
    const catalogList = document.querySelector('.catalog-list');


    if (button && catalogList) {

      button.addEventListener('click', () => {
        catalogList.classList.toggle('only-display-3-articles');
        
        if (button.innerHTML === "Voir tous nos produits") {
          button.innerHTML = "Voir moins";
        } else {
          button.innerHTML = "Voir tous nos produits";
        }
      });
    }
    
  },
  initMenuBurger() {
    const menuButton = document.getElementById("menu-button");
    const navbar = document.querySelector('.navbar');

    menuButton.addEventListener('click', () => {
      navbar.classList.toggle('expanded');
    });
  }
}

eventHandlers.handleProductsList();
eventHandlers.initMenuBurger();
