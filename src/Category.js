class Category {
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }
}
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "categories": this.props.categories };
  }
  render() {
    return React.createElement(
      "ul",
      null,
      this.state.categories.map(category => {
        if (this.props.onCategorySelected) {
          return React.createElement(
            "li",
            { onClick: () => {
                this.props.onCategorySelected(category);
              } },
            category.title
          );
        } else {
          return React.createElement(
            "li",
            null,
            category.title
          );
        }
      })
    );
  }

}