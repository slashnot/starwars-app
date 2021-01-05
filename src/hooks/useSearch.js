// Hook to provide live search functionality
import { useState, useContext } from 'react'
import AppContext from 'store/AppContext'
import { searchService } from 'services'
import { useFetchApi } from 'hooks'

const useSearch = (collection = 'planets') => {
    const [searchResults, setResults] = useState([]);
    const { appDispatch } = useContext(AppContext)
    const fetchApi = useFetchApi()

    const searchCollectionApi = async (query, collection) => {
        const url = `/${collection}?name_like=${query}`;
        const response = await fetchApi(url);
        const results = await response.json();

        return results
    }

    const searchCollection = async (query) => {
        if (!query || query === '') {
            appDispatch({ type: 'CLEAR_SEARCH_MESSAGE', payload: `Search for ${collection}` })
            appDispatch({ type: 'CLEAR_SEARCH' })

            return null
        }
        searchService.debounceInput(query, collection, searchCollectionApi)
            .then(searchResponse => {
                // Set search result message
                if (!searchResponse.results.length)
                    appDispatch({ type: 'SEARCH_NO_RESULTS', payload: `No ${collection} found` })
                else
                    appDispatch({ type: 'CLEAR_SEARCH_MESSAGE', payload: `Search for ${collection}` })

                const sortedResults = searchService.sortCollection(searchResponse.results, 'population')
                setResults(sortedResults);
                appDispatch({ type: 'SEARCH_DONE', payload: sortedResults })
            })
    }
    return { searchCollection, searchResults }
}

export { useSearch };
export default useSearch;