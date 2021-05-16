class Shop extends React.Component {
  constructor(props) {
    super(props);
    let categories = [new Category(1, "Soap"), new Category(2, "PC"), new Category(3, "Programming language")];
    let products = [new Product(101, "Lux", 20, categories[0]), new Product(102, "Pears", 30, categories[0]), new Product(103, "Dell i7", 70000, categories[1]), new Product(104, "HP", 40000, categories[1]), new Product(105, "Lenovo", 30000, categories[1]), new Product(106, "C", 2000, categories[2]), new Product(107, "C++", 3000, categories[2])];
    this.state = { "categories": categories, "products": products };
    this.categorySelected = this.categorySelected.bind(this);
    this.registerProductList = this.registerProductList.bind(this);
    this.registerCart = this.registerCart.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }
  categorySelected(category) {
    alert("Selected Category:" + category.title);
    this.productList.selectCategory(category);
  }
  registerProductList(productList) {
    alert("register Product list chala");
    this.productList = productList;
  }
  registerCart(cart) {
    alert("register Cart chala");
    this.cart = cart;
  }

  addItemToCart() {
    alert("Add Item to cart event chala");
    this.cart.onItemAddToCart(this.state.products[0]);
    alert("Success");
  }

  render() {
    return React.createElement(
      "ul",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Categories"
        ),
        React.createElement(CategoryList, { categories: this.state.categories, onCategorySelected: this.categorySelected }),
        React.createElement(
          "h1",
          null,
          "Products"
        ),
        React.createElement(ProductList, { products: this.state.products, forCategoryFilter: this.registerProductList, onAddToCart: this.addItemToCart }),
        React.createElement(
          "h1",
          null,
          "Cart"
        ),
        React.createElement(Cart, { forAddItemToCart: this.registerCart })
      )
    );
  }

}