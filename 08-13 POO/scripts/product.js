class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }
  get getSupplier() {
    return this._supplier;
  }

  set setSupplier(newName) {
    this._supplier = newName;
  }
}

const prod1 = new Product();
const prod2 = new Product("id1", "title1", 3);
const prod3 = new Product("id2", "title2", 4, 3, "images2", 5);
const prod4 = new Product();

prod4.setSupplier = "Lenin";

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod4.getSupplier);
