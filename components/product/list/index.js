import Image from "next/image";
import Link from "next/link";

export default function List({ merch }) {
  return (
    <div>
      <div className="responsive-container">
        <div className="grid">
          {merch.map((m) => (
            <div key={m.id}>
              <Link href={`/merch/${m.slug}`}>
                <a rel="noopener noreferrer" className="product">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
