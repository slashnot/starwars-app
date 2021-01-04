// Default layout component
import { Header, SearchResults } from 'components/ui-components'
import { UserProfile } from 'components/ui-components'
import './DefaultLayout.scss'

const DefaultLayout = () => {
    const profileData = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    return (
        <div className="layout-default">
            <Header />
            <SearchResults />
            <aside className='profile'>
                <UserProfile profileData={profileData} />
            </aside>
        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout