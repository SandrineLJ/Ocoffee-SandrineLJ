import dataMapper from "../data-mapper.js";

const mainController = {

  async renderHomePage(req, res) {
    try {

      const products = await dataMapper.getLatestProducts();

      res.render("home", { products });

    } catch (error) {
      console.error(error);
      res.status(500).send("une erreur s'est produite");
    }
  }

}

export default mainController;