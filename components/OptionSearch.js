import { useState } from "react";
import { useRouter } from "next/router";

const OptionSearch = ({ products }) => {
    const router = useRouter();
    const productos = products?.products;
    const error = products?.error;
    const order = router.query.orderby;
    const search = router.query.search;
    const pag = parseInt(router.query.page);
    const [state, setState] = useState({
        checked: !!order
    })

    const handleChange = (e) => {
        if (e.target.checked) {
            router.push(`?search=${search}&page=${pag}&orderby=relevance`)
            setState({ checked: e.target.checked })
        } else {
            router.push(`?search=${search}&page=${pag}`)
            setState({ checked: e.target.checked })
        }
    }

    while (!search) {
        return (
            <div className="flex items-center justify-center h-12">
                <p className="text-2xl font-medium">Nuestas ultimas novedades!</p>
            </div>
        )
    }

    return (
        <div>
            {productos && error ?
                <div className="h-14 mt-2.5 flex content-center	justify-around" >
                    <p className="text-3xl">{products.error}</p>
                </div> : null}
            {productos && !error?.length ?
                <div className="flex h-14 mt-2.5">
                    <div>
                        <p className="text-4xl text-red-600 ml-2.5">{products?.products.size}</p>
                    </div>
                    <div>
                        <p className="text-3xl ml-2.5">Resultados para</p>
                    </div>
                    <div>
                        <p className="text-3xl ml-2.5 text-red-600">"{router.query.search}"</p>
                    </div>
                    <div className="flex flex-row items-center justify-end w-1/5">
                        <p className='mr-2.5'>"Más relevantes"</p>
                        <input type="checkbox" checked={state.checked} onChange={handleChange} />
                    </div>
                </div> : null}
        </div>
    )
};

export default OptionSearch;