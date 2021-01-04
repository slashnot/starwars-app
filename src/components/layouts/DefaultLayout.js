// Default layout component
import { Header, SearchResults } from 'components/ui-components'
import './DefaultLayout.scss'

const DefaultLayout = () => {

    return (
        <div className="layout-default">
            <Header />
            <SearchResults />
            <aside className='profile'></aside>
        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout