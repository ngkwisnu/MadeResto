import makeProductDb from "../../database/repositories/product/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { validateId } from "../../utils/validator.handler.js";

const remove_product_service_func = async ({ id }) => {
  const idIsValidate = await validateId(id);
  if (!idIsValidate) throw new ErrorHandler("Id isnt validate!");
  const removeProduct = await makeProductDb().remove_product_repository_func({
    id,
  });
  console.log(removeProduct);
  return removeProduct;
};

export default remove_product_service_func;
