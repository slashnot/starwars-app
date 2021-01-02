// Hook to provide live search functionality
import { useState, useContext } from 'react'
import AppContext from 'store/AppContext';
import { searchService } from 'services'

const useSearch = (collection = 'planets') => {
    const [searchResults, setResults] = useState([]);
    const { appDispatch } = useContext(AppContext)

    const searchCollection = async (query) => {
        if (!query || query === '') {
            appDispatch({ type: 'CLEAR_SEARCH' })
            return
        }

        searchService.debounceInput(query, collection, searchService.searchCollection)
            .then(searchResponse => {
                const sortedResults = searchService.sortCollection(searchResponse.results, 'population')
                setResults(sortedResults);
                appDispatch({ type: 'SEARCH_DONE', payload: sortedResults })
            })

    }
    return { searchCollection, searchResults }
}

export { useSearch };
export default useSearch;