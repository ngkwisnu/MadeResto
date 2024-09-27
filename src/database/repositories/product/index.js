import create_product_repository_func from "./create.js";
import list_product_repository_func from "./list.js";
import remove_product_repository_func from "./remove.js";
import update_product_repository_func from "./update.js";
import product_by_name_repository_func from "./get_by_name.js";
import product_by_id_repository_func from "./get_by_id.js";

export default function makeProductDb() {
  return Object.freeze({
    create_product_repository_func,
    list_product_repository_func,
    remove_product_repository_func,
    update_product_repository_func,
    product_by_name_repository_func,
    product_by_id_repository_func,
  });
}
