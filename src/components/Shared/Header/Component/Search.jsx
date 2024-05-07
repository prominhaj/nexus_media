"use client";
import { FaSearch } from "react-icons/fa";
import SearchModal from "../../Modal/SearchModal";

// face data for search
const people = [
    { _id: 1, name: 'Wade Cooper' },
    { _id: 2, name: 'Arlene Mccoy' },
    { _id: 3, name: 'Devon Webb' },
    { _id: 4, name: 'Tom Cook' },
    { _id: 5, name: 'Tanya Fox' },
    { _id: 6, name: 'Hellen Schmidt' },
]

const Search = ({ mobile }) => {

    // Search Button
    const search = <>
        <div className='flex items-center gap-2 px-3 rounded-md cursor-pointer bg-light-bg dark:bg-dark-bg hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover'>
            <FaSearch className="text-light-text dark:text-dark-text" />
            <input className='py-2 bg-transparent outline-none cursor-pointer' type="text" placeholder="Search" />
        </div>
    </>

    return (
        <div>
            <SearchModal search={!mobile && search} data={people} />
        </div>
    );
};

export default Search;