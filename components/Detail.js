import { BiCategory } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { RiQuillPenLine } from "react-icons/ri";

const Detail = ({ details }) => {

    return (
        <div className="sm:w-3/5 w-full ml-2.5 sm:mr-0 mr-5">
            <h2 className="flex items-center justify-center h-16 mt-5 mb-5 text-3xl underline sm:mt-0 sm:mb-0">{details.title}</h2>
            <div className="flex items-center ">
                <BiCategory />
                <h4 className="text-base ml-2.5 font-mono font-semibold text-red-400">{details.categories[0].name}</h4>
            </div>
            <p className="flex items-center"><MdUpdate /> Ultima actualización: {details.modified}</p>
            <img className="imagen" src={details.featured_media?.medium_large} alt={details.title} />
            <div className="mr-5 sm:mr-0" dangerouslySetInnerHTML={{ __html: details.content }}></div>
            <div className="mb-5 border border-solid">
                <p className="flex items-center text-base ml-2.5 font-mono font-semibold"><RiQuillPenLine /> Autor: {details.author.name}</p>
                <div className="mr-5 sm:mr-0" dangerouslySetInnerHTML={{ __html: details.author.description }}></div>
            </div>
        </div>
    )
};

export default Detail;