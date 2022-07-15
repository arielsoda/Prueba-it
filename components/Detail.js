import { BiCategory } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { RiQuillPenLine } from "react-icons/ri";

const Detail = ({ details }) => {

    return (
        <div className="w-3/5 ml-2.5">
            <h2 className="flex items-center justify-center h-16 text-3xl underline">{details.title}</h2>
            <div className="flex items-center ">
                <BiCategory />
                <h4 className="text-base ml-2.5 font-mono font-semibold text-red-400">{details.categories[0].name}</h4>
            </div>
            <p className="flex items-center"><MdUpdate /> Ultima actualización: {details.modified}</p>
            <img className="imagen" src={details.featured_media.medium_large} alt={details.title} />
            <div className="product-des" dangerouslySetInnerHTML={{ __html: details.content }}></div>
            <div className="mb-5 border border-solid">
                <p className="flex items-center text-base ml-2.5 font-mono font-semibold"><RiQuillPenLine /> Autor: {details.author.name}</p>
                <div className="product-des2" dangerouslySetInnerHTML={{ __html: details.author.description }}></div>
            </div>
        </div>
    )
};

export default Detail;