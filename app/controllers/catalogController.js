import dataMapper from "../data-mapper.js";

const catalogController = {

  async renderCatalogPage(req, res) {
    try {

      const products = await dataMapper.getAllProducts();

      res.render("catalog", { products });

    } catch (error) {
      console.error(error);
      res.status(500).send("une erreur s'est produite");
    }
    
  },

  renderProductPage(req, res) {
    res.render("product");
  }

}

export default catalogController;