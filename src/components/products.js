import React from "react";

class Products extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        successMessage: ''
      };
  }

  componentDidMount(){
    if (this.props.location && this.props.location.state &&
      this.props.location.state.successMessage) {
      this.setState({successMessage: this.props.location.state.successMessage});
    }
    const { history } = this.props;
    history.replace('products', {});
  }

  render() {
    return (
      <div>
        <p>products</p>
        {
          this.state.successMessage && <p>{this.state.successMessage}</p>
        }
      </div>
    )
  }
}

export default Products;