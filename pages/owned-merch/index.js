import { useAccount, useOwnedMerch } from "@components/hooks/web3";
import { BaseLayout } from "@components/layout";
import { Breadcrumb, OwnedMerchCard } from "@components/shared";
import { getAllMerch } from "@content/myMerch/fetcher";

export default function OwnedMerch({ merchs }) {
  const { account } = useAccount();
  const { ownedMerch } = useOwnedMerch(merchs, account.data);

  return (
    <>
      <Breadcrumb />

      <div className="shop_area mb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="row shop_wrapper grid_list">
                {ownedMerch.data?.map((merch) => (
                  <OwnedMerchCard key={merch.id} merch={merch} />
                ))}
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-12">
              <aside className="sidebar_widget">
                <div className="widget_inner">
                  <div className="widget_list widget_categories">
                    <h3>Women</h3>
                    <ul>
                      <li className="widget_sub_categories sub_categories1">
                        <a href="javascript:void(0)">Shoes</a>
                        <ul className="widget_dropdown_categories dropdown_categories1">
                          <li>
                            <a href="#">Document</a>
                          </li>
                          <li>
                            <a href="#">Dropcap</a>
                          </li>
                          <li>
                            <a href="#">Dummy Image</a>
                          </li>
                          <li>
                            <a href="#">Dummy Text</a>
                          </li>
                          <li>
                            <a href="#">Fancy Text</a>
                          </li>
                        </ul>
                      </li>
                      <li className="widget_sub_categories sub_categories2">
                        <a href="javascript:void(0)">Bags</a>
                        <ul className="widget_dropdown_categories dropdown_categories2">
                          <li>
                            <a href="#">Flickr</a>
                          </li>
                          <li>
                            <a href="#">Flip Box</a>
                          </li>
                          <li>
                            <a href="#">Cocktail</a>
                          </li>
                          <li>
                            <a href="#">Frame</a>
                          </li>
                          <li>
                            <a href="#">Flickrq</a>
                          </li>
                        </ul>
                      </li>
                      <li className="widget_sub_categories sub_categories3">
                        <a href="javascript:void(0)">Clothing</a>
                        <ul className="widget_dropdown_categories dropdown_categories3">
                          <li>
                            <a href="#">Platform Beds</a>
                          </li>
                          <li>
                            <a href="#">Storage Beds</a>
                          </li>
                          <li>
                            <a href="#">Regular Beds</a>
                          </li>
                          <li>
                            <a href="#">Sleigh Beds</a>
                          </li>
                          <li>
                            <a href="#">Laundry</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="widget_list widget_filter">
                    <h3>Filter by price</h3>
                    <form action="#">
                      <div id="slider-range" />
                      <button type="submit">Filter</button>
                      <input type="text" name="text" id="amount" />
                    </form>
                  </div>
                  <div className="widget_list widget_color">
                    <h3>Select By Color</h3>
                    <ul>
                      <li>
                        <a href="#">
                          Black <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          White <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          Blue <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          Green <span>(6)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget_list widget_color">
                    <h3>Select By SIze</h3>
                    <ul>
                      <li>
                        <a href="#">
                          S <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          M <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          L <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          XL <span>(6)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget_list widget_brand">
                    <h3>Brand</h3>
                    <ul>
                      <li>
                        <a href="#">
                          Studio Design <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          Graphic Corner<span>(5)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget_list widget_manu">
                    <h3>Manufacturer</h3>
                    <ul>
                      <li>
                        <a href="#">
                          Cotton <span>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Elastane <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Polyester <span>(4)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Wool <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Squarred <span>(3)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget_list tags_widget">
                    <h3>Product tags</h3>
                    <div className="tag_cloud">
                      <a href="#">Men</a>
                      <a href="#">Women</a>
                      <a href="#">Watches</a>
                      <a href="#">Bags</a>
                      <a href="#">Dress</a>
                    </div>
                  </div>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllMerch();
  return {
    props: {
      merchs: data,
    },
  };
}

OwnedMerch.Layout = BaseLayout;
