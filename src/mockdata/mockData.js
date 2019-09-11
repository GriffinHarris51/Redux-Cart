class Product {
  constructor(id, name, price, description, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

export default [
  new Product(
    1,
    "Shoe",
    19.99,
    "This is a shoe we sell them individually",
    "https://source.unsplash.com/random"
  ),
  new Product(
    2,
    "Shirt",
    29.99,
    "This is a Shirt we sell them individually",
    "https://source.unsplash.com/random"
  ),
  new Product(
    3,
    "Hat",
    19.99,
    "This is a Hat we sell them individually",
    "https://source.unsplash.com/random"
  )
];
