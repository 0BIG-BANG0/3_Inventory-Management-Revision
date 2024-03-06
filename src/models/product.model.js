//ChatGpt : https://chat.openai.com/share/d6196636-09ca-406b-a9f0-db25b926e6fa
export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
  }

  static add(productObj) {
    let newProduct = new ProductModel(
      products.length + 1,
      productObj.name,
      productObj.desc,
      productObj.price,
      productObj.imageUrl
    );
    products.push(newProduct);
  }

  static getByID(id) {
    // Define a static method named getByID which takes an 'id' parameter
    return products.find((p) => p.id == id); // Return the first product in the 'products' array that matches the given 'id'
  }

  static update(productObj) {
    //Find the index of Product
    const index = products.findIndex((p) => p.id == productObj.id);
    products[index] = productObj;
  }

  // Static method of ProductModel class responsible for deleting a product by its id
  static deleteById(id) {
    // Find the index of the product in the 'products' array based on the provided id
    const index = products.findIndex((p) => p.id == id);
    // Remove the product from the 'products' array at the found index
    // Splice is used to modify the original array and remove the specified element
    return products.splice(index, 1);
  }
  static searchByName(name){
    const searchPro = products.filter(p => 
      {
        if(p.name == name){
          return p;
        }
      }  );
    return searchPro;
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
