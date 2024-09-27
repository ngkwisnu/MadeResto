import Product from "../../models/products.model.js";

const remove_product_repository_func = async ({ id }) => {
  const removeProduct = await Product.findOneAndUpdate(
    { _id: id },
    { deleted_at: new Date() },
    { new: true }
  );
  return removeProduct;
};

export default remove_product_repository_func;
