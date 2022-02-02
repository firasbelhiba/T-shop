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
                    <img src="/assets/img/logo/logo3.jpg" alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
