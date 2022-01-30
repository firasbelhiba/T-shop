import Link from "next/link";

export default function DiscountPromotion() {
  return (
    <div className="discount_banner_area discount_banner2 mb-95">
      <div className="container-fluid">
        <div className="banner_thumb">
          <Link href="/marketplace">
            <a>
              <img src="assets/img/bg/banner9.jpg" alt="" />
            </a>
          </Link>
          <div className="banner_text3">
            <h3>Deuter &amp; Hiking Backpacks</h3>
            <h2>up to 20%</h2>
            <p>
              An exclusive selection of this season’s trends.{" "}
              <span>Exclusively online!</span>
            </p>
            <Link href="/marketplace">
              <a>shop now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
