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

const Index = (props) => {

  return (
    <main>
      <Head>
        <title>{props.products.metas.title}</title>
        <meta name='description' content={props.products.metas.description} />
        <meta name="robots" content={props.products.metas.robots} />
        <meta property="og:locale" content={props.products.metas['og:locale']} />
        <meta property="og:type" content={props.products.metas['og:type']} />
        <meta property="og:site_name" content={props.products.metas['og:site_name']} />
        <meta name="twitter:card" content={props.products.metas['twitter:card']} />
        <meta name="twitter:site" content={props.products.metas['twitter:site']} />
        <meta name="twitter:creator" content={props.products.metas['twitter:creator']} />
        <meta name="google-site-verification" content={props.products.metas['google-site-verification']} />
      </Head>
      <Suspense fallback={<Loading />}>
        <DynamicOptionSearch products={props} />
        <DynamicProductsCards products={props} />
      </Suspense>
    </main>
  )
};

Index.getInitialProps = async (ctx) => {
  const { data } = await axios.get(`https://beta.mejorconsalud.com/wp-json/mc/v3/home`);
  return {
    products: {
      data: data.latest_posts,
      metas: data.metas
    }
  };
};

export default Index;