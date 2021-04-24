import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.products.map((product) => (
              <div className="col-xs-12 col-md-4 col-lg-3">
                <div className="card" style={{ width: 18 + "rem" }}>
                  <img
                    src={`/images/${product.image}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state,
  };
}
export default connect(mapStateToProps)(Home);