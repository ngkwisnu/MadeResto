import makeProductDb from "../../database/repositories/product/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { validateId } from "../../utils/validator.handler.js";
import productDataValidation from "../../validations/product.validation.js";

const update_product_service_func = async ({ id, data }) => {
  const validateIdProduct = await validateId(id);
  if (!validateIdProduct) throw new ErrorHandler("id isnt validate!");
  const validateDataProduct = (
    await productDataValidation(data)
  ).getValidateProductData();
  if (!validateDataProduct) {
    throw new ErrorHandler("Data product not validate!");
  }
  const updateDataProduct =
    await makeProductDb().update_product_repository_func({
      id,
      data: validateDataProduct,
    });
  return updateDataProduct;
};

export default update_product_service_func;
