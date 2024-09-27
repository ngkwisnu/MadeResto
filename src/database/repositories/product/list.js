import pagination from "../../../utils/pagination.js";
import Product from "../../models/products.model.js";

const list_product_repository_func = async (query) => {
  const listProduct = await pagination(Product, query);
  return listProduct;
};

export default list_product_repository_func;
