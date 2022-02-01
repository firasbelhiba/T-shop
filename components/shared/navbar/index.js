import { useWeb3 } from "@components/providers";
import Link from "next/link";
import { Button } from "@components/shared";
import { ProgressSpinner } from "primereact/progressspinner";
import { useAccount } from "@components/hooks/web3";

export default function Navbar() {
  const { connect, isLoading, requireInstallMetamask } = useWeb3();
  const { account } = useAccount();
  return (
    <header>
      <div className="main_header sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 offset-md-4 offset-lg-0 col-5 offset-3 col-sm-5">
              <div className="logo">
                <Link href="/">
                  <a rel="noopener noreferrer">
                    <img src="/assets/img/logo/logo.png" alt="" />
                  </a>
                </Link>
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
                      <Link href="/owned-merch">
                        <a rel="noopener noreferrer"> My purchase</a>
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
                      <Link href="/about-me">
                        <a rel="noopener noreferrer"> About me</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*main menu end*/}
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-4">
              <div className="header_account_area">
                {isLoading ? (
                  <div className="header_account_list  mini_cart_wrapper">
                    <ProgressSpinner
                      style={{ width: "50px", height: "50px" }}
                      strokeWidth="8"
                      fill="var(--surface-ground)"
                    />
                  </div>
                ) : account.data ? (
                  <div className="header_account_list  mini_cart_wrapper">
                    <Button className="cursor-default">
                      Hi There {account.isAdmin && "Admin"} !{" "}
                    </Button>
                  </div>
                ) : requireInstallMetamask ? (
                  <div className="header_account_list  mini_cart_wrapper">
                    <Button
                      onClick={() => {
                        window.open("https://metamask.io", "_blank");
                      }}
                    >
                      Intall Metamask
                    </Button>
                  </div>
                ) : (
                  <div className="header_account_list  mini_cart_wrapper">
                    <Button onClick={connect}>Connect</Button>
                  </div>
                )}

                <div className="header_account_list search_list">
                  <a rel="noopener noreferrer">
                    <span className="pe-7s-search" />
                  </a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input
                        placeholder="Search entire store here ..."
                        type="text"
                      />
                      <button>
                        <span className="pe-7s-search" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="header_account_list  mini_cart_wrapper">
                  <a rel="noopener noreferrer">
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
                      <a rel="noopener noreferrer" onClick={connect}>
                        Connect
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
              <a rel="noopener noreferrer">
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
