
class Order {

    static get MAX_PRODUCTS() {
      return 5;
    }
    static orderCount = 0;

    constructor() {
      this._orderId = ++Order.orderCount;
      this._products = [];
      this._productsCounter = 0;
    }

    get orderId(){
        return this._orderId;
    }

    addProducts(producto) {
      if (this._productsCounter <= 5) {
        this._products.push(producto);
        this._productsCounter++;
      }
      else{
        return;
      }
    }

    totalCalculate() {
      let total = 0;
      for (let i = 0; i < this._products.length; i++) {
        total += this._products[i].price;
      }
      return total;
    }

    viewOrder(){
      return `This order is number ${this._orderId}, contain: ${this._productsCounter} items
      Items: ${this._products}
      the total price is: ${this.totalCalculate()}`;
    }
  }