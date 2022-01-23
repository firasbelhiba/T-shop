export default function List({ merch }) {
  return (
    <div>
      <div className="responsive-container">
        <div className="grid">
          {merch.map((m) => (
            <a
              key={m.id}
              rel="noopener noreferrer"
              className="product"
              href="#"
            >
              <div className="product-image">
                <img
                  src={m.coverImage}
                  alt={m.title}
                />
              </div>
              <div className="product-content">
                <div className="product-info">
                  <h2 className="product-title">Cosmonaut</h2>
                  <p className="product-price">$ 10</p>
                </div>
                <button className="product-action">
                  <i className="material-icons-outlined">favorite_border</i>
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="credits">
        <div className="responsive-container">
          <h3>Illustrations by Freepik</h3>
          <a href="https://www.freepik.com/" target="_blank">
            Check out their amazing work - www.freepik.com
          </a>
        </div>
      </div>
    </div>
  );
}