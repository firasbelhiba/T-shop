import Image from "next/image";
import Link from "next/link";

export default function Card({ merch, Footer }) {
  return (
    <div>
      <Link href={`/merch/${merch.slug}`}>
        <a rel="noopener noreferrer" className="product">
          <div className="product-image">
            <Image
              src={merch.coverImage}
              alt={merch.title}
              width="600"
              height="400"
            />
          </div>
        </a>
      </Link>
      <div className="product-content">
        <div className="product-info">
          <h2 className="product-title">{merch.title}</h2>
          <p className="product-price">$ {merch.price}</p>
        </div>
        {Footer && <Footer />}
      </div>
    </div>
  );
}
