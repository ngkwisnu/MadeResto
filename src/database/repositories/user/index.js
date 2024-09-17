import { get_detail_user_repository } from "./detail.js";
import { create_user_repository } from "./create.js";

export function makeUserDb() {
  return Object.freeze({
    get_detail_user_repository,
    create_user_repository,
  });
}
