import client from './database.js';

const dataMapper = {
  
  async getAllProducts() {
    const result = await client.query(`SELECT * FROM "coffee"`);
    const products = result.rows;
    return products;
  },

  async getLatestProducts() {
    const result = await client.query(`SELECT * FROM "coffee" WHERE "available" = TRUE ORDER BY "id" DESC LIMIT 3`);

    const latestProducts = result.rows;

    return latestProducts;
  }

}

export default dataMapper; 