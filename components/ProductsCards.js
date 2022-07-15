import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductsCards = ({ products }) => {

    const productos = products?.products;

    return (
        <div>
            <div className="grid content-center w-11/12 grid-cols-1 grid-rows-3 gap-5 m-auto sm:grid-cols-4 ">
                {productos?.data?.map((product) => {
                    return (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <a className="no-underline"> <ProductCard product={product} /> </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default ProductsCards;