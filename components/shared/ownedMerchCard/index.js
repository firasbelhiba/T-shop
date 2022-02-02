export default function OwnedMerchCard({ merch }) {
  return (
    <div className="col-12 ">
      <div className="single_product">
        <div className="product_thumb">
          <a className="primary_img" href={`/merch/${merch.slug}`}>
            <img src={merch.coverImage} alt="" />
          </a>
          <div className="label_product">
            <span className="label_sale">Owned</span>
          </div>
        </div>
        <div className="product_content list_content">
          <h4 className="product_name">
            <a href={`/merch/${merch.slug}`}>{merch.title}</a>
          </h4>
          <div className="price_box">
            <span className="current_price">
              Price in US Dollar : ${merch.price}
            </span>
            <br />
            <br />
            <span className="current_price">
              Price in Ether : {merch.priceInEther}
            </span>
          </div>
          Your zero Knowledge proof :  {merch.zkproof}
          <div className="product_desc">
            <p>{merch.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
