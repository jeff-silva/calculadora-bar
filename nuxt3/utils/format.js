// TODO: Create format rules
export default class {
  static money(value, currency = "BRL", lang = "pt-BR") {
    if (typeof value == "string") {
      value = parseInt(value.replace(/[^0-9]/g, "")) / 100;
    }

    if (isNaN(value)) {
      value = 0;
    }

    return Intl.NumberFormat(lang, { style: "currency", currency }).format(value);
  }
  static date(value) {
    return value;
  }
  static timeago(value) {
    return value;
  }
}
