"use client"

import {useEffect, useState} from "react";

export default function SearchPage() {
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>("")
    const [searchHistory, setSearchHistory] = useState<string[]>([])

    useEffect(() => {
        const searchHistory = localStorage.getItem("searchHistory")
        if(searchHistory) {
            setSearchHistory(JSON.parse(searchHistory))
        }
    }, [])

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        localStorage.setItem("searchHistory", JSON.stringify([...searchHistory, searchInput]))
        setIsSearching(true)
    }

    function quickSearch(searchInput: string) {
        setIsSearching(true)
        setSearchInput(searchInput)
    }

    function clearSearchHistory() {
        localStorage.removeItem("searchHistory")
        setSearchHistory([])
    }

    return <div className="w-full">
        <form className="flex space-x-1 p-2" onSubmit={handleSearch}>
            <input type="text" placeholder="Szukaj" value={searchInput} onChange={e => setSearchInput(e.target.value)} className="w-full h-12 rounded-full bg-slate-200 dark:bg-gray-950 px-4 text-lg outline-0"/>
            <button className="h-12 w-12 rounded-full bg-transparent hover:text-white hover:bg-orange-500 text-orange-500 border-2 border-orange-500">
                <span className="material-symbols-outlined leading-12 text-2xl">
                    search
                </span>
            </button>
        </form>
        { isSearching ?
            <div className="w-full h-96 bg-slate-200 dark:bg-gray-950 rounded-lg mt-4">Search Results</div>
            :
            <div className="w-full px-4 py-6">
                <div className="flex w-full justify-between">
                    <h3>Ostatnie wyszukiwania:</h3>
                    <button onClick={clearSearchHistory} className="bg-none font-bold rounded-lg px-2 py-1 hover:bg-slate-200 dark:hover:bg-gray-950">
                        Wyczyść historię
                    </button>
                </div>
                {
                    searchHistory.map((search, index) => {
                        return <div key={index} className="py-1">
                            <button onClick={() => quickSearch(search)} className="w-full px-2 py-4 hover:bg-slate-200 dark:hover:bg-gray-950 flex justify-between items-center">
                                <span>
                                    {search}
                                </span>
                                <span className="material-symbols-outlined">
                                    youtube_searched_for
                                </span>
                            </button>
                        </div>
                    })
                }
            </div>
        }
    </div>
}