import bcrypt from "bcrypt";
import ErrorHandler from "./error.handler.js";

const hash = (password) => {
  try {
    const hash = bcrypt.hashSync(password, 10);
    return hash;
  } catch (error) {
    throw new ErrorHandler(`Failed to hash password ${error.message}`);
  }
};

const compare = async (password, hash) => {
  const isMatch = await bcrypt.compareSync(password, hash);
  if (!isMatch) throw new ErrorHandler("Password is not match!");
  return isMatch;
};

export { hash, compare };
