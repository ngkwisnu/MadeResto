import {
  user_list_service_func,
  detail_user_service_func,
  create_user_service_func,
  update_user_sevices_func,
  remove_user_service_func,
} from "../../services/index.js";
import { createResponse } from "../../utils/response.handler.js";
import { get_user_list_function } from "./list.js";
import { get_user_detail_func } from "./detail.js";
import { create_user_function } from "./create.js";
import { update_user_function } from "./update.js";
import { remove_user_function } from "./remove.js";

const list_user = get_user_list_function(
  user_list_service_func,
  createResponse
);

const detail_user = get_user_detail_func(
  detail_user_service_func,
  createResponse
);

const create_user = create_user_function(
  create_user_service_func,
  createResponse
);

const update_user = update_user_function(
  update_user_sevices_func,
  createResponse
);

const remove_user = remove_user_function(
  remove_user_service_func,
  createResponse
);

export { list_user, detail_user, create_user, update_user, remove_user };
