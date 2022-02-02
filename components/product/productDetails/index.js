import Image from "next/image";

export default function ProductDetails({
  title,
  description,
  image,
  price,
  type,
}) {
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
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="product_d_right">
              <form action="#">
                <div className="productd_title_nav">
                  <h1>{title}</h1>
                </div>
                <div className="price_box">
                  <span className="current_price">${price}</span>
                </div>
                <div className="product_desc">
                  <p>{description} </p>
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
                      {type}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
