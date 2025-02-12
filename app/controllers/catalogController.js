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

  async renderProductPage(req, res) {
    try {

      const productId = parseInt(req.params.id);
      
      const product = await dataMapper.getOneProduct(productId);

      if (! product) {
        res.status(404).render('404');
        return;
      }

      res.render("product", { product });

    } catch (error) {
      console.error(error);
      res.status(500).send("une erreur s'est produite");
    }
  }

}

export default catalogController;