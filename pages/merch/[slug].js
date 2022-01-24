import { BaseLayout } from "@components/layout";
import { ProductDetails } from "@components/product";
import { Breadcrumb } from "@components/shared";
import { getAllMerch } from "@content/myMerch/fetcher";

export default function Product({ merch }) {
  return (
    <>
      <Breadcrumb />
      <ProductDetails
        title={merch.title}
        description={merch.description}
        image={merch.coverImage}
      />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllMerch();

  return {
    paths: data.map((m) => ({
      params: {
        slug: m.slug,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data, myMerchMap } = getAllMerch();
  const merch = data.filter((m) => m.slug === params.slug)[0];
  return {
    props: {
      merch,
    },
  };
}

Product.Layout = BaseLayout;
