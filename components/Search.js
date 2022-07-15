import { useState } from "react";
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();
    const [state, setState] = useState({
        search: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/products?search=${state.search}&page=1`)
    }
    return (
        <div className='grid items-center w-full' >
            <label className='font-sans text-center h-28' >
                <input
                    className='rounded-full text-base mr-2.5 pl-2.5 border border-solid w-1/3 h-10 my-9 w-2/3'
                    id='search'
                    name='search'
                    placeholder='Buscar artículos, noticias, recetas, etc...'
                    value={state.search}
                    onChange={handleChange} />
                {state.search ? (
                    <button onClick={handleSearch} className='border border-solid w-10 h-10 rounded-full absolute pl-1.5 my-9 hover:bg-sky-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                ) : (
                    <button className='border border-solid w-10 h-10 rounded-full absolute pl-1.5 my-9 hover:bg-sky-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>)}
            </label>
        </div >
    );
};



export default Search;