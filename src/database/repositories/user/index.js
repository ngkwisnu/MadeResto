import { register_user_repository } from "./register.js";
import { get_list_user_repository } from "./list.js";
import { remove_user_repository } from "./remove.js";
import { update_user_repository } from "./update.js";
import { user_detail_by_email_repository } from "./detail_by_email.js";
import { user_detail_by_id_repository } from "./detail_by_id.js";
import { user_detail_by_username_repository } from "./detail_by_username.js";
import { create_user_repository } from "./create.js";

export function makeUserDb() {
  return Object.freeze({
    get_list_user_repository,
    register_user_repository,
    remove_user_repository,
    update_user_repository,
    user_detail_by_email_repository,
    user_detail_by_id_repository,
    user_detail_by_username_repository,
    create_user_repository,
  });
}
