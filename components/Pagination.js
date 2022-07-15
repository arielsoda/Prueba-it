import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pagination = ({ products }) => {
    const { pages } = products;

    const router = useRouter();
    const search = router.query.search;
    const orderby = router.query.orderby;
    const pag = parseInt(router.query.page);
    const [page, setPage] = useState(pag);

    useEffect(() => {
        setPage(pag);
    }
        , [pag]);

    const handlePrev = () => {
        if (page > 1) {
            if (!orderby) {
                router.push(`?search=${search}&page=${page - 1}`)
                setPage(page - 1)
            } else {
                router.push(`?search=${search}&page=${page - 1}&orderby=${orderby}`)
                setPage(page - 1)
            }
        }
    };
    const handleNext = () => {
        if (page < pages) {
            if (!orderby) {
                router.push(`?search=${search}&page=${page + 1}`)
                setPage(page + 1)
            } else {
                router.push(`?search=${search}&page=${page + 1}&orderby=${orderby}`)
                setPage(page + 1)
            }
        }
    };
    return (
        <div className="flex items-center justify-center h-20">
            {page > 1 ? <button className="mr-1.5" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </button> : null}
            <p className="text-2xl font-medium">Página {page} de {pages}</p>
            {page < pages ? <button className="ml-1.5" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </button> : null}
        </div>
    )
};

export default Pagination;