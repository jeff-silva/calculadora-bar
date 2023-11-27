// TODO: Create validation rules
export default class {
  static async required(value) {}
  static async email(value) {}
  static async emailExists(value) {}
  static async min(value, min = 3) {}
  static async max(value, min = 10) {}
  static async password(value) {}
  static async phone(value) {}
  static async cpf(value) {}
  static async cnpj(value) {}
  static async alphanumeric(value) {}
}
