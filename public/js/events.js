const eventHandlers = {

  showAllProducts() {
    const button = document.querySelector('.catalogBtn');
    const catalogList = document.querySelector('.catalog-list');

    button.addEventListener('click', () => {
      catalogList.classList.toggle('only-display-3-articles');
      
      if (button.innerHTML === "Voir tous nos produits") {
        button.innerHTML = "Voir moins";
      } else {
        button.innerHTML = "Voir tous nos produits";
      }
    });
    
  }
}

eventHandlers.showAllProducts();
