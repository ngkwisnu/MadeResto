import create_product_function from "./create.js";
import list_product_function from "./list.js";
import update_product_function from "./update.js";
import remove_product_function from "./remove.js";
import detail_product_function from "./detail.js";
import {
  create_product_service_func,
  list_product_service_func,
  update_product_service_func,
  remove_product_service_func,
  find_by_id_service_func,
} from "../../services/index.js";
import { createResponse } from "../../utils/response.handler.js";

const create_product = create_product_function(
  create_product_service_func,
  createResponse
);

const list_product = list_product_function(
  list_product_service_func,
  createResponse
);

const update_product = update_product_function(
  update_product_service_func,
  createResponse
);

const remove_product = remove_product_function(
  remove_product_service_func,
  createResponse
);

const detail_product = detail_product_function(
  find_by_id_service_func,
  createResponse
);

export const product_controller = {
  create_product,
  list_product,
  update_product,
  remove_product,
  detail_product,
};
