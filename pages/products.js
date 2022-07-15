import axios from "axios";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from "../components/Loading";

const DynamicOptionSearch = dynamic(() => import('../components/OptionSearch'), {
    suspense: true,
});

const DynamicProductsCards = dynamic(() => import('../components/ProductsCards'), {
    suspense: true,
});

const DynamicPagination = dynamic(() => import('../components/Pagination'), {
    suspense: true,
});

const Products = (props) => {

    return (
        <div>
            <Head>
                <title>Productos</title>
                <meta name='description' content='esto es una descripcion' />
            </Head>
            <Suspense fallback={<Loading />}>
                <DynamicOptionSearch products={props} />
                <DynamicProductsCards products={props} />
                <DynamicPagination products={props.products} />
            </Suspense>
        </div>
    )
};


Products.getInitialProps = async (ctx) => {
    if (ctx.query.search && !ctx.query.orderby) {
        const { data } = await axios.get(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${ctx.query.search}&page=${ctx.query.page}`);
        if (data.size > 0) {
            return { products: data };
        } else {
            const { data } = await axios.get(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc&page=${ctx.query.page}`);
            return {
                products: data,
                error: '¡No hay artículos relacionados con el término de búsqueda!'
            };
        }
    }
    else if (ctx.query.search && ctx.query.orderby) {
        const { data } = await axios.get(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${ctx.query.search}&page=${ctx.query.page}&orderby=${ctx.query.orderby}`);
        return { products: data };
    }
    else {
        const data = {};
        return { products: data };
    }
};

export default Products;