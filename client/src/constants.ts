export const UNDEFINED_ERROR =
  "Упс... Какие-то проблемы с сервером, попробуйте позже.";
export const PHONE_MASK = "+7 (999) 999-99-99";

export const FULLNAME_REG_EXP = "[a-zA-Z]{3,30}\\s[a-zA-Z]{3,30}";
export const EMAIL_REG_EXP = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
export const PHONE_NUMBER_REG_EXP =
  "^(\\+7|7|8)?[\\s\\-]?\\(?[0-9]{3}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$";
export const DATE_REG_EXP =
  "^\\d{4}[\\/\\-](0?[1-9]|1[012])[\\/\\-](0?[1-9]|[12][0-9]|3[01])$";
export const MESSAGE_REG_EXP = "^\\b([a-zA-Z0-9_]|\\s){10,300}\\b";

export const SERVICE_URL = "http://localhost:3000";
