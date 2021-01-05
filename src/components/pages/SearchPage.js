// Search Page
import { SearchResults } from 'components/ui-components'
import { useContext } from 'react'
import AppContext from 'store/AppContext'

const SearchPage = () => {
    const { appState } = useContext(AppContext)
    return (
        <>
            <SearchResults />
            {
                appState.globalErrors && <div className="global-errors">
                    {appState.globalErrors}
                </div>
            }
        </>
    )
}

export { SearchPage }
export default SearchPage