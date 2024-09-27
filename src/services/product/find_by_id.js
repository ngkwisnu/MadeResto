import product_by_id_repository_func from "../../database/repositories/product/get_by_id.js";
import ErrorHandler from "../../utils/error.handler.js";
import { validateId } from "../../utils/validator.handler.js";

const find_by_id_service_func = async ({ id }) => {
  const idIsValidate = await validateId(id);
  if (!idIsValidate) throw new ErrorHandler("id is not validate!");
  const productDetail = await product_by_id_repository_func({ id });
  if (productDetail === null || productDetail === undefined)
    throw new ErrorHandler("cant find product!");
  return productDetail;
};

export default find_by_id_service_func;
