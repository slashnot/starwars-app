// Component that displays the search results

import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { searchService } from 'services'
import { LoadingProgress, Card, PlanetLoader } from 'components/ui-components'
import './SearchResults.scss'
import config from 'config'

const SearchResults = ({ results }) => {
    const { appState, appDispatch } = useContext(AppContext)
    const searchResults = results ? results : appState.searchResults


    // Template loop rendering function
    const renderSearchResults = (results) => {
        if (!results.length)
            return null
        return results.map(result => {
            return (
                <Card key={result.name} thumb={searchService.getRandomItem(config.planetImages)}>
                    <h5>{result.name}</h5>
                    <p className='info'>
                        <strong>
                            Population
                        </strong>
                        {parseFloat(result.population).toLocaleString('en-IN')}
                    </p>
                </Card>
            )
        })
    }

    const scrollHandler = (e) => {
        if (e.target.scrollTop) {
            appDispatch({ type: 'SHOW_HEADER', payload: 'on-scroll' })
        }
        else {
            appDispatch({ type: 'HIDE_HEADER' })
        }
    }

    return (
        <>
            <main className='search-container' onScroll={scrollHandler}>
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