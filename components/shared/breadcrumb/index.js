import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="breadcrumbs_area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_content">
              <h3>Marketplace</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a rel="noopener noreferrer">home</a>
                  </Link>
                </li>
                <li>marketplace</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
