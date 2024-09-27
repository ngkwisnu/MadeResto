import Product from "../../models/products.model.js";

const create_product_repository_func = async (datas) => {
  const createProduct = await Product.create(datas);
  return createProduct;
};

export default create_product_repository_func;
