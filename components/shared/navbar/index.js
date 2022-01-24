import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="main_header sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 offset-md-4 offset-lg-0 col-5 offset-3 col-sm-5">
              <div className="logo">
                <a rel="noopener noreferrer" href="index.html">
                  <img src="/assets/img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              {/*main menu start*/}
              <div className="main_menu menu_position">
                <nav>
                  <ul>
                    <li>
                      <Link href="/">
                        <a rel="noopener noreferrer" className="active">
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="mega_items">
                      <Link href="/marketplace">
                        <a rel="noopener noreferrer">MarketPlace</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs">
                        <a rel="noopener noreferrer">Blogs</a>
                      </Link>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="contact.html">
                        {" "}
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="about.html">
                        {" "}
                        About us
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        pages <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub_menu pages">
                        <li>
                          <a rel="noopener noreferrer" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" href="services.html">
                            services
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" href="faq.html">
                            Frequently Questions
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" href="contact.html">
                            contact
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" href="login.html">
                            login
                          </a>
                        </li>
                        <li>
                          <a rel="noopener noreferrer" href="404.html">
                            Error 404
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*main menu end*/}
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4">
              <div className="header_account_area">
                <div className="header_account_list search_list">
                  <a rel="noopener noreferrer" href="javascript:void(0)">
                    <span className="pe-7s-search" />
                  </a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input
                        placeholder="Search entire store here ..."
                        type="text"
                      />
                      <button type="submit">
                        <span className="pe-7s-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="header_account_list  mini_cart_wrapper">
                  <a rel="noopener noreferrer" href="javascript:void(0)">
                    <span className="pe-7s-shopbag" />
                    <span className="item_count">2</span>
                  </a>
                </div>
                <div className="language_currency header_account_list ">
                  <a rel="noopener noreferrer" href="#">
                    {" "}
                    <span className="pe-7s-user" />
                  </a>
                  <ul className="dropdown_currency">
                    <li>
                      <a rel="noopener noreferrer" href="my-account.html">
                        My account
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Order History
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="wishlist.html">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="cart.html">
                        Shipping
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*mini cart*/}
      <div className="mini_cart">
        <div className="cart_gallery">
          <div className="cart_close">
            <div className="cart_text">
              <h3>cart</h3>
            </div>
            <div className="mini_cart_close">
              <a rel="noopener noreferrer" href="javascript:void(0)">
                <i className="ion-android-close" />
              </a>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_img">
              <a rel="noopener noreferrer" href="#">
                <img src="/assets/img/s-product/product.jpg" alt="" />
              </a>
            </div>
            <div className="cart_info">
              <a rel="noopener noreferrer" href="#">
                Juicy Couture Tricot
              </a>
              <p>
                1 x <span> $30.00 </span>
              </p>
            </div>
            <div className="cart_remove">
              <a rel="noopener noreferrer" href="#">
                <i className="ion-ios-close-outline" />
              </a>
            </div>
          </div>
          <div className="cart_item">
            <div className="cart_img">
              <a rel="noopener noreferrer" href="#">
                <img src="/assets/img/s-product/product2.jpg" alt="" />
              </a>
            </div>
            <div className="cart_info">
              <a rel="noopener noreferrer" href="#">
                Juicy Couture Juicy
              </a>
              <p>
                1 x <span> $29.00 </span>
              </p>
            </div>
            <div className="cart_remove">
              <a rel="noopener noreferrer" href="#">
                <i className="ion-ios-close-outline" />
              </a>
            </div>
          </div>
        </div>
        <div className="mini_cart_table">
          <div className="cart_table_border">
            <div className="cart_total">
              <span>Sub total:</span>
              <span className="price">$125.00</span>
            </div>
            <div className="cart_total mt-10">
              <span>total:</span>
              <span className="price">$125.00</span>
            </div>
          </div>
        </div>
        <div className="mini_cart_footer">
          <div className="cart_button">
            <a rel="noopener noreferrer" href="cart.html">
              <i className="fa fa-shopping-cart" /> View cart
            </a>
          </div>
          <div className="cart_button">
            <a href="checkout.html">
              <i className="fa fa-sign-in" /> Checkout
            </a>
          </div>
        </div>
      </div>
      {/*mini cart end*/}
    </header>
  );
}
