import { BaseLayout } from "@components/layout";
import { ProductDetails } from "@components/product";
import { Breadcrumb } from "@components/shared";

export default function Product() {
  return (
    <BaseLayout>
      <Breadcrumb />
      <ProductDetails />
    </BaseLayout>
  );
}
