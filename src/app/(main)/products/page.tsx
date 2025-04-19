import Product from "@/components/product";
import { getProducts } from "@/lib/serverActions";

export interface ProductProps {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
}

const page = async () => {
  const products = await getProducts();
  return <Product products={products} />;
};

export default page;
