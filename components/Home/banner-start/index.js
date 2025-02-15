import Link from "next/link";

export default function BannerStart() {
  return (
    <div className="banner_area mb-95">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-6">
            <div className="single_banner">
              <div className="banner_thumb">
                <Link href="/marketplace">
                  <a rel="noopener noreferrer">
                    <img src="assets/img/bg/banner1.jpg" alt="" />
                  </a>
                </Link>
                <div className="banner_text1">
                  <div className="banner_text1_inner">
                    <h3>
                      Men’s <br /> Collections
                    </h3>
                    <Link href="/marketplace">
                      <a rel="noopener noreferrer">shop now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single_banner">
              <div className="banner_thumb">
                <Link href="/marketplace">
                  <a rel="noopener noreferrer">
                    <img src="assets/img/bg/banner2.jpg" alt="" />
                  </a>
                </Link>
                <div className="banner_text1">
                  <div className="banner_text1_inner">
                    <h3>
                      Women’s <br /> Collections
                    </h3>
                    <Link href="/marketplace">
                      <a rel="noopener noreferrer">shop now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
