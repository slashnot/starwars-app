// Default layout component
import { Header } from 'components/ui-components'
import { SearchPage } from 'components/pages/SearchPage'
import { UserProfile } from 'components/ui-components'
import './DefaultLayout.scss'

const DefaultLayout = () => {
    const profileData = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    return (
        <div className="layout-default">
            <Header />
            <SearchPage />
            <aside className='profile'>
                <UserProfile profileData={profileData} />
            </aside>
        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout