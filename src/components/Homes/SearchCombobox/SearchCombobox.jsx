import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react';
import Link from 'next/link'

const SearchCombobox = ({ data }) => {
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? data
            : data.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className="">
            <div className='mb-4'>
                <label htmlFor='search' className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'>Search</label>
            </div>
            <Combobox >
                <div className="relative mt-1">
                    <div className="relative w-full overflow-hidden text-left shadow-md cursor-default dark:shadow-gray-800 focus:outline-none">
                        <Combobox.Input
                            id='search'
                            className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 border rounded-md dark:text-gray-200 dark:bg-transparent dark:border-gray-700 focus:outline-blue-400"
                            placeholder='Search'
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-[#434854] rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative px-4 py-2 text-gray-700 cursor-default select-none dark:text-gray-200">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person._id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-400 text-white dark:text-gray-200' : 'text-gray-900 dark:text-gray-200'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <Link href={`/profile/${person._id}`}>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                </Link>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}


export default SearchCombobox;