let product1 = new Product('dress', 45667);
let product2 = new Product('shoes', 456);
console.log(Product.productCount);


console.log(product1.toString());


order1 = new Order();
order1.addProducts(product1);
order1.addProducts(product2);
console.log(order1._productsCounter);
console.log(order1.totalCalculate());
console.log(order1.viewOrder());