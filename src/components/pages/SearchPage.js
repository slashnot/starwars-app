// Search Page
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { TopNav } from "components/ui-components"
import { useAuth } from 'hooks'

const SearchPage = () => {
    const { logout } = useAuth()
    const { appState } = useContext(AppContext)
    const searchResults = appState.searchResults

    const renderSearchResults = (results) => {
        if (!results.length)
            return null
        return results.map(result => {
            return <li key={result.id}>{result.name}</li>
        })
    }

    return (
        <div className="search-page">
            <TopNav />
            <ul>
                {renderSearchResults(searchResults)}
            </ul>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export { SearchPage }
export default SearchPage