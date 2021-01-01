// Search Page
import { useContext } from 'react';
import TopNav from "components/ui-parts/TopNav";
import AppContext from 'store/AppContext';
import useAuth from 'hooks/useAuth'

const SearchPage = props => {
    const { appState } = useContext(AppContext)
    const { logout } = useAuth()

    return (
        <div className="search-page">
            <TopNav />
            <h1>{appState.user}</h1>
            <button onClick={()=>logout()}>Logout</button>
        </div>
    )
}

export { SearchPage }
export default SearchPage