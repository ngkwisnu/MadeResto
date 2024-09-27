import makeProductDb from "../../database/repositories/product/index.js";

const list_product_service_func = async ({ query }) => {
  const listProduct = await makeProductDb().list_product_repository_func(query);
  return listProduct;
};

export default list_product_service_func;
