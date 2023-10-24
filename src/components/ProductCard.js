import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  
  return (
    <>
    <div
      className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="Wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="Product Image"
          />
          <img
            src="images/watch-1.jpg"
            className="img-fluid"
            alt="Product Image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 packmulti coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptates veniam mollitia iure. Suscipit vel eum nemo velit necessitatibus est. Ducimus eaque sit nobis dolore nostrum veniam autem consectetur dignissimos dolorum quisquam aliquam explicabo hic cumque, quia repellat veritatis eius, incidunt fugiat omnis velit. Nisi molestias dicta blanditiis aspernatur magni!</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/prodcompare.svg" alt="Compare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    <div
      className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="Wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="Product Image"
          />
          <img
            src="images/watch-1.jpg"
            className="img-fluid"
            alt="Product Image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 packmulti coloured for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid == 12 ? "d-block" : "d-none"}`} > Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptates veniam mollitia iure. Suscipit vel eum nemo velit necessitatibus est. Ducimus eaque sit nobis dolore nostrum veniam autem consectetur dignissimos dolorum quisquam aliquam explicabo hic cumque, quia repellat veritatis eius, incidunt fugiat omnis velit. Nisi molestias dicta blanditiis aspernatur magni!</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/prodcompare.svg" alt="Compare" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
