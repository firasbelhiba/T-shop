import { BaseLayout } from "@components/layout";
import { Breadcrumb } from "@components/shared";

export default function OwnedMerch() {
  return (
    <>
      <Breadcrumb />
      <div className="shop_area shop_fullwidth mb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row shop_wrapper">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                  <div className="single_product">
                    <div className="product_thumb">
                      <a className="primary_img" href="product-details.html">
                        <img src="assets/img/product/product1.jpg" alt="" />
                      </a>
                      <div className="label_product">
                        <span className="label_sale">Sale</span>
                      </div>
                    </div>
                    <div className="product_content grid_content">
                      <div className="product_content_inner">
                        <h4 className="product_name">
                          <a href="product-details.html">
                            Duis pulvinar obortis eleifend elementum
                          </a>
                        </h4>
                        <div className="price_box">
                          <span className="old_price">$84.00</span>
                          <span className="current_price">$79.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OwnedMerch.Layout = BaseLayout;
