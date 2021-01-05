// Component that displays the search results

import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { LoadingProgress, Card, PlanetLoader } from 'components/ui-components'
import './SearchResults.scss'
import config from 'config'

// Shuffle planet images randomly
const shuffleImages = config.planetImages.sort(() => Math.random() - 0.5);

//---------------------------------------------------------------------------

const SearchResults = ({ results }) => {
    const { appState, appDispatch } = useContext(AppContext)
    const searchResults = results ? results : appState.searchResults


    /* Template loop rendering function
    ----------------------------------------------------------------------- */
    const renderSearchResults = (results) => {
        if (!results.length)
            return null
        return results.map((result, i) => {
            return (
                <Card key={result.id} thumb={shuffleImages[i]}>
                    <h5>{result.name}</h5>
                    <div className='card-info'>
                        <div className='info-col'>
                            <p className='info'>{parseFloat(result.population).toLocaleString('en-IN')}</p>
                            <h6>Population</h6>
                        </div>

                        <div className='info-col'>
                            <p className='info'>{result.gravity}</p>
                            <h6>Gravity</h6>
                        </div>

                        <div className='info-col'>
                            <p className='info'>{result.diameter}</p>
                            <h6>Diameter</h6>
                        </div>

                        <div className='info-col'>
                            <p className='info'>{result.orbital_period}</p>
                            <h6>Orbit Time</h6>
                        </div>
                    </div>

                    <div className='card-info-footer'>
                        <div className='info-col'>
                            <h6>Terrain:</h6>
                            <p className='info'>{result.terrain}</p>
                        </div>
                        <div className='info-col'>
                            <h6>Climate:</h6>
                            <p className='info'>{result.climate}</p>
                        </div>
                        {/* <div className='info-col'>
                            <h6>Water:</h6>
                            <p className='info'>{result.surface_water}</p>
                        </div> */}
                    </div>
                </Card>
            )
        })
    }

    /* Handles the scroll and adds dynamic header styles
     ----------------------------------------------------------------------- */
    const scrollHandler = (e) => {
        if (e.target.scrollTop > 46) {
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