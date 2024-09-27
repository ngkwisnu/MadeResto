import makeProductDb from "../../database/repositories/product/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import productDataValidation from "../../validations/product.validation.js";

const create_product_service_func = async (req) => {
  const validateDataProduct = (
    await productDataValidation(req.body)
  ).getValidateProductData();

  const Product = makeProductDb();
  const productIsExist = await Product.product_by_name_repository_func(
    validateDataProduct.product_name
  );
  if (productIsExist !== null)
    throw new ErrorHandler("product already exist! please update this data");
  const createDataProduct =
    await makeProductDb().create_product_repository_func(validateDataProduct);
  return createDataProduct;
};

export default create_product_service_func;
