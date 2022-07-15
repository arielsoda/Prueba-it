import axios from 'axios';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from '../../components/Loading';

const DynamicDetail = dynamic(() => import('../../components/Detail'), {
    suspense: true,
});

const Details = ({ details }) => {
    
    return (
        <div>
            <Head>
                <title>{details.metas.title}</title>
                <meta name='description' content={details.metas.description} />
                <meta name="robots" content={details.metas.robots} />
                <meta name="atomik:ads-provider" content={details.metas['atomik:ads-provider']} />
                <meta property="article:publisher" content={details.metas['article:publisher']} />
                <meta property="article:section" content={details.metas['article:section']} />
                <meta property="article:published_time" content={details.metas['article:published_time']} />
                <meta property="article:modified_time" content={details.metas['article:modified_time']} />
                <meta property="og:locale" content={details.metas['og:locale']} />
                <meta property="og:type" content={details.metas['og:type']} />
                <meta property="og:title" content={details.metas['og:title']} />
                <meta property="og:description" content={details.metas['og:description']} />
                <meta property="og:site_name" content={details.metas['og:site_name']} />
                <meta property="og:image" content={details.metas['og:image']} />
                <meta property="og:image:alt" content={details.metas['og:image:alt']} />
                <meta property="og:image:width" content={details.metas['og:image:width']} />
                <meta property="og:image:height" content={details.metas['og:image:height']} />
                <meta property="og:image:secure_url" content={details.metas['og:image:secure_url']} />
                <meta name="twitter:card" content={details.metas['twitter:card']} />
                <meta property="twitter:title" content={details.metas['twitter:title']} />
                <meta property="twitter:description" content={details.metas['twitter:description']} />
                <meta name="google-site-verification" content={details.metas['google-site-verification']} />
                <meta name="twitter:site" content={details.metas['twitter:site']} />
                <meta name="twitter:image" content={details.metas['twitter:image']} />
                <meta name="twitter:creator" content={details.metas['twitter:creator']} />

            </Head>
            <Suspense fallback={<Loading />}>
                <DynamicDetail details={details} />
            </Suspense>
        </div>
    )
};

Details.getInitialProps = async (ctx) => {
    const { data } = await axios.get(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts/${ctx.query.id}`);
    return { details: data };
};

export default Details;