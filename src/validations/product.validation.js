import ErrorHandler from "../utils/error.handler.js";
import { validateType } from "../utils/validator.handler.js";

const productDataValidation = async ({
  product_name,
  product_description,
  product_qty,
  product_price,
  is_active,
}) => {
  if (!product_name) throw new ErrorHandler("Product name must be filled!");
  if (!validateType(product_name, "string"))
    throw new ErrorHandler("Product name must be string");
  if (!product_description)
    throw new ErrorHandler("Product description must be filled!");
  if (!validateType(product_description, "string"))
    throw new ErrorHandler("Product description must be string");
  if (!product_price) throw new ErrorHandler("Product price must be filled!");
  if (!validateType(product_price, "number"))
    throw new ErrorHandler("Product price must be number");
  if (!product_qty) throw new ErrorHandler("Product quantity must be filled!");
  if (!validateType(product_qty, "number"))
    throw new ErrorHandler("Product quantity must be number");
  if (is_active === undefined)
    throw new ErrorHandler("Product active must be filled!");
  if (!validateType(is_active, "boolean"))
    throw new ErrorHandler("is active must be boolean");
  const dataProductIsValidate = {
    product_name,
    product_description,
    product_price,
    product_qty,
    is_active,
  };
  return {
    getValidateProductData: () => dataProductIsValidate,
  };
};

export default productDataValidation;
