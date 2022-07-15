import { BiCategory } from "react-icons/bi";

const ProductCard = ({product}) => {
    
    return (
        <div className='h-full border border-solid rounded-t-md rounded-b-md'>
            {product.featured_media ? <img className='w-full h-52 rounded-t-md' src={product.featured_media.medium} alt={product.title} />
            : <img className='w-full h-52 rounded-t-md' src='https://elektroinstrumentos.com/wp-content/uploads/2020/05/imagen-no-disponible.png' alt='image not found' />}
            <h4 className='text-base ml-2.5 font-mono font-semibold text-cyan-500 flex items-center'><BiCategory />{product.categories[0].name}</h4>
            <h2 className='m-1 font-sans text-2xl font-extrabold text-indigo-900'>{product.title}</h2>
            <div className="font-medium ml-0.5 text-base text-gray-500 mb-auto" dangerouslySetInnerHTML={{ __html: product.excerpt }}></div>
        </div>
    );
};

export default ProductCard;