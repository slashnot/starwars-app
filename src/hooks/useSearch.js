// Hook to provide live search functionality
import { useState, useContext } from 'react'
import AppContext from 'store/AppContext';
import { searchService } from 'services'

const useSearch = (collection = 'planets') => {
    const [searchResults, setResults] = useState([]);
    const { appDispatch } = useContext(AppContext)

    const searchCollection = async (query) => {
        if (!query)
            return;

        searchService.debounceInput(query, collection, searchService.searchCollection)
            .then(searchResponse => {
                setResults(searchResponse.results);
                appDispatch({ type: 'SEARCH_DONE', payload: searchResponse.results })
            })

    }
    return { searchCollection, searchResults }
}

export { useSearch };
export default useSearch;