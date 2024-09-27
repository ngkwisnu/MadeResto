import Product from "../../models/products.model.js";

const product_by_name_repository_func = async ({ name }) => {
  const productData = await Product.findOne({ product_name: name });
  return productData;
};

export default product_by_name_repository_func;
