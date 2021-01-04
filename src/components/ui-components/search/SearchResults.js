// Component that displays the search results
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { LoadingProgress, Card, PlanetLoader } from 'components/ui-components'
import './SearchResults.scss'

const SearchResults = ({ results }) => {
    const { appState } = useContext(AppContext)
    const searchResults = results ? results : appState.searchResults

    // Template loop rendering function
    const renderSearchResults = (results) => {
        if (!results.length)
            return null
        return results.map(result => {
            return (
                <Card key={result.name} title="Hello">
                    <h4>{result.name} -- {result.population}</h4>
                </Card>
            )
        })
    }

    return (
        <>
            <main className='search-container'>
                {searchResults.length ? (
                    <>
                        <h4 className='section-title'>Top Planets</h4>
                        <section className='search-results'>
                            {renderSearchResults(searchResults)}
                        </section>
                    </>
                ) :
                    <div className='search-msg'>
                        <PlanetLoader style={{ width: '100px', height: '100px' }} loadingText='Searching Planets' />
                        <h4>{appState.searchMessage}</h4>
                    </div>
                }
                <LoadingProgress />
            </main>
        </>
    )
}

export { SearchResults }
export default SearchResults