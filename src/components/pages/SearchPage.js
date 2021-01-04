// Search Page
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { useAuth } from 'hooks'

const SearchPage = () => {
    const { logout } = useAuth()
    const { appState } = useContext(AppContext)
    const { searchResults } = appState

    const renderSearchResults = (results) => {
        if (!results.length)
            return null
        return results.map(result => {
            return <li key={result.name}>{result.name} -- {result.population}</li>
        })
    }

    return (
        <div className="search-page">
            <ul>
                {renderSearchResults(searchResults)}
            </ul>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export { SearchPage }
export default SearchPage