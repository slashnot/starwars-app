// Hook to provide live search functionality
import { useState } from 'react'
import { searchService } from 'services'

const baseUrl = 'https://swapi.dev/api'
const useSearch = (collection = 'planets') => {
    const [searchResults, setResults] = useState();

    const searchCollection = async (query) => {
        searchService.searchCollection(query)
        if (!query)
            return;

        const url = `${baseUrl}/${collection}/?search=${query}`;
        const response = await fetch(url);
        const results = await response.json();

        setResults(results);
    }
    return { searchCollection, searchResults }
}

export { useSearch };
export default useSearch;