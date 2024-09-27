import Product from "../../models/products.model.js";

const update_product_repository_func = async ({ id, data }) => {
  const updateProduct = await Product.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return updateProduct;
};

export default update_product_repository_func;
