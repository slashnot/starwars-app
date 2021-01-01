// Search Page
import TopNav from "components/ui-parts/TopNav";
import AppContext from 'store/AppContext';
import { useContext } from 'react';

const SearchPage = props => {
    const { appState } = useContext(AppContext)
    return (
        <div className="search-page">
            <TopNav />
            <h1>{appState.user}</h1>
        </div>
    )
}

export { SearchPage }
export default SearchPage