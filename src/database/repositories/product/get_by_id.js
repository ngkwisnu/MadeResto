import Product from "../../models/products.model.js";

const product_by_id_repository_func = async ({ id }) => {
  const productData = await Product.findOne({ _id: id });
  return productData;
};

export default product_by_id_repository_func;
