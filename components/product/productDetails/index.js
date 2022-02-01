import Image from "next/image";

export default function ProductDetails({ title, description, image }) {
  return (
    <div className="product_details mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="product-details-tab">
              <div id="img-1" className="zoomWrapper single-zoom">
                <a rel="noopener noreferrer" href="#">
                  <Image
                    id="zoom1"
                    src={image}
                    alt={title}
                    width="900"
                    height="700"
                    />
                    {/* data-zoom-image={image} */}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="product_d_right">
              <form action="#">
                <div className="productd_title_nav">
                  <h1>
                    <a rel="noopener noreferrer" href="#">
                      {title}
                    </a>
                  </h1>
                  <div className="product_nav">
                    <ul>
                      <li className="prev">
                        <a
                          rel="noopener noreferrer"
                          href="product-details.html"
                        >
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li className="next">
                        <a
                          rel="noopener noreferrer"
                          href="variable-product.html"
                        >
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" product_ratting">
                  <ul>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        <i className="ion-android-star" />
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        <i className="ion-android-star" />
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        <i className="ion-android-star" />
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        <i className="ion-android-star" />
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        <i className="ion-android-star" />
                      </a>
                    </li>
                    <li className="review">
                      <a rel="noopener noreferrer" href="#">
                        {" "}
                        (customer review ){" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="price_box">
                  <span className="old_price">$56.00</span>
                  <span className="current_price">$48.00</span>
                </div>
                <div className="product_desc">
                  <p>{description} </p>
                </div>
                <div className="product_variant color">
                  <h3>Available Options</h3>
                  <label>color</label>
                  <ul>
                    <li className="color1">
                      <a rel="noopener noreferrer" href="#" />
                    </li>
                    <li className="color2">
                      <a rel="noopener noreferrer" href="#" />
                    </li>
                    <li className="color3">
                      <a rel="noopener noreferrer" href="#" />
                    </li>
                    <li className="color4">
                      <a rel="noopener noreferrer" href="#" />
                    </li>
                  </ul>
                </div>
                <div className="product_variant quantity">
                  <label>quantity</label>
                  <input min={1} max={100} defaultValue={1} />
                  <button className="button">add to cart</button>
                </div>
                <div className=" product_d_action">
                  <ul>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        title="Add to wishlist"
                      >
                        + Add to Wishlist
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        title="Add to wishlist"
                      >
                        + Compare
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product_meta">
                  <span>
                    Category:{" "}
                    <a rel="noopener noreferrer" href="#">
                      Clothing
                    </a>
                  </span>
                </div>
              </form>
              <div className="priduct_social">
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="facebook"
                      href="#"
                      title="facebook"
                    >
                      <i className="fa fa-facebook" /> Like
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="twitter"
                      href="#"
                      title="twitter"
                    >
                      <i className="fa fa-twitter" /> tweet
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="pinterest"
                      href="#"
                      title="pinterest"
                    >
                      <i className="fa fa-pinterest" /> save
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="google-plus"
                      href="#"
                      title="google +"
                    >
                      <i className="fa fa-google-plus" /> share
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      className="linkedin"
                      href="#"
                      title="linkedin"
                    >
                      <i className="fa fa-linkedin" /> linked
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
