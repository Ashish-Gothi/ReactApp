

class Cart extends React.Component {
  constructor(props) {
    super(props);
    alert("Constructor invoked");
    if (this.props.forAddItemToCart) {
      this.props.forAddItemToCart(this);
    }
    let products = [];
    let sNo = 0;
    let productsMap = new Map();
    this.state = { "products": products, "sNo": sNo };
  }
  onItemAddToCart(product) {
    alert("On Item add To cart chala");
    let productTitle = product.title;
    alert("Product Name:" + productTitle);
    let productDetails;
    if (1) {
      productDetails = new ProductDetails();
      productDetails.quantity = 1;
      productDetails.product = product;

      this.state.products[this.state.sNo] = productDetails;

      this.state.sNo += 1;
    } else {
      productDetails = searchedProduct;
      productDetails.product = product;
      productDetails.quantity += 1;
      productDetails.amount = productDetails.quantity * productDetails.product.price;
    }
    this.setState({ "products": this.state.products });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "table",
        null,
        this.state.products.map(pd => {
          return React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              1
            ),
            React.createElement(
              "td",
              null,
              pd.product.title
            ),
            React.createElement(
              "td",
              null,
              pd.quantity
            ),
            React.createElement(
              "td",
              null,
              pd.product.price
            )
          );
        })
      )
    );
  }
}
class ProductDetails {
  constructor() {
    this.amount = 0;
    this.product = null;
    this.quantity = null;
  }
}