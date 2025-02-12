const catalogController = {

  renderCatalogPage(req, res) {
    res.render("catalog");
  },

  renderProductPage(req, res) {
    res.render("product");
  }

}

export default catalogController;