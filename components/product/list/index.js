import Image from "next/image";
import Link from "next/link";

export default function List({ merch }) {
  return (
    <div>
      <div className="responsive-container">
        <div className="grid">
          {merch.map((m) => (
            <Link href={`/merch/${m.slug}`}>
              <a key={m.id} rel="noopener noreferrer" className="product">
                <div className="product-image">
                  <Image
                    src={m.coverImage}
                    alt={m.title}
                    width="400"
                    height="400"
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
          ))}
        </div>
      </div>
    </div>
  );
}
