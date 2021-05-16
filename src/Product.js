class Product {
  constructor(code, title, price, category) {
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = category;
  }
}
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    alert("p");
    this.state = { "products": this.props.products, "selectedCategory": null };
    if (this.props.forCategoryFilter) this.props.forCategoryFilter(this);
    this.onClickAddToCartButton = this.onClickAddToCartButton.bind(this);
  }
  selectCategory(category) {
    this.setState({ "selectedCategory": category });
  }
  onClickAddToCartButton() {
    alert("click kiya");
    if (this.props.onAddToCart) {
      var ppp = new Product();
      ppp.title = "LUX";
      ppp.code = 105;
      ppp.price = 600;
      ppp.category = new Category(100, "Soap");
      this.props.onAddToCart(ppp);
      alert("kam hua");
    }
  }
  render() {
    return React.createElement(
      "ul",
      null,
      this.state.products.map(product => {
        if (this.state.selectedCategory) {
          if (this.state.selectedCategory.code == product.category.code) {
            return React.createElement(
              "li",
              null,
              product.title,
              " (",
              product.price,
              ")",
              React.createElement(
                "button",
                { type: "button", onClick: this.onClickAddToCartButton },
                "Add to cart"
              )
            );
          } else {
            return null;
          }
        } else {
          return React.createElement(
            "li",
            null,
            product.title,
            " (",
            product.price,
            ")"
          );
        }
      })
    );
  }

}