class Product {

  static productCount = 0;

  constructor(name, price) {
    this._productId = ++Product.productCount;
    this._name = name;
    this._price = price;
  }

  get productId() {
    return this._productId;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this.name = name;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }

  toString() {
    return this.productId + ' ' + this.name + ' ' + this.price;
  }
}