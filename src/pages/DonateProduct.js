import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const DonateProduct = () => {
  return (
    <>
      <Meta title={"DonateProduct"} />
      <BreadCrumb title="DonateProduct" />

      <div className="login.wrapper py-5 home-wrapper-2">
        <div className="row"></div>
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Login</h3>
            <form action="" className="d-flex flex-column gap-15">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-control"
                />
              </div>
              <div className="mt-1">
                <input
                  type="phoneno"
                  name="phonenumber"
                  placeholder="Enter Your Phone No."
                  className="form-control"
                />
              </div>
              <div className="mt-1 custom">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                  id="dropdownMenuButton1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="me-5 d-inline-block text-dark">
                    Donate Product
                  </span>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item text-dark" to="">
                      E-waste
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="">
                      Clothes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="">
                      Plastic Waste
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="mt-1">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter Quntity in KG"
                  className="form-control"
                />
              </div>
              <div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center"></div>
                <button className="button border-0" >Donate</button>
                <button className="button border-0 signup">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateProduct;
