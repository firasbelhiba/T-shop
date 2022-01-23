export default function Footer() {
  return (
    <footer className="footer_widgets">
      <div className="container">
        <div className="footer_top">
          <div className="row">
            <div className="col-12">
              <div className="newsletter_area">
                <div className="section_title">
                  <h2>Keep Connected</h2>
                </div>
                <div className="newsletter_desc">
                  <p>Get updates by subscribe our weekly newsletter</p>
                </div>
                <div className="subscribe_form">
                  <form id="mc-form" className="mc-form footer-newsletter">
                    <input
                      id="mc-email"
                      type="email"
                      autoComplete="off"
                      placeholder="Your email address"
                    />
                    <button id="mc-submit">Subscribe</button>
                  </form>
                  {/* mailchimp-alerts Start */}
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting" />
                    {/* mailchimp-submitting end */}
                    <div className="mailchimp-success" />
                    {/* mailchimp-success end */}
                    <div className="mailchimp-error" />
                    {/* mailchimp-error end */}
                  </div>
                  {/* mailchimp-alerts end */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_middle">
          <div className="row">
            <div className="col-12">
              <div className="footer_social">
                <ul>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      <i className="fa fa-google" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="footer_bottom_left">
                <div className="footer_logo">
                  <a rel="noopener noreferrer" href="index.html">
                    <img src="assets/img/logo/logo2.png" alt="" />
                  </a>
                </div>
                <div className="copyright_area">
                  <p>
                    Copyright © 2021{" "}
                    <a rel="noopener noreferrer" href="index.html">
                      Braga
                    </a>
                    .{" "}
                    <a
                      rel="noopener noreferrer"
                      href="https://hasthemes.com/"
                      target="_blank"
                    >
                      All rights reserved.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="footer_paypal text-right">
                <a rel="noopener noreferrer" href="#">
                  <img src="assets/img/icon/payment.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
