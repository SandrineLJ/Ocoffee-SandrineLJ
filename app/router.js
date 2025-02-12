import { Router } from "express";
import mainController from "./controllers/mainController.js";
import catalogController from "./controllers/catalogController.js";

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalog", catalogController.renderCatalogPage);
router.get("/article/:id", catalogController.renderProductPage); 

export default router;