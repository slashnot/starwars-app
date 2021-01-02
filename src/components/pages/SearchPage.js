// Search Page
import { useContext, useEffect } from 'react'
import { TopNav } from "components/ui-components"
import AppContext from 'store/AppContext'
import { useAuth, useSearch } from 'hooks'

const SearchPage = props => {
    const { appState } = useContext(AppContext)
    const { logout } = useAuth()
    const { searchResults, searchCollection } = useSearch('planets')

    // useEffect(() => {
    //     searchCollection("Tatoo")
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className="search-page">
            <TopNav />
            <h1>{appState.user}</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export { SearchPage }
export default SearchPage