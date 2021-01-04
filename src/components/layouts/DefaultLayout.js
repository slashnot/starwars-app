// Default layout component
import { Header } from 'components/ui-components'
import './DefaultLayout.scss'

const DefaultLayout = () => {

    return (
        <div className="layout-default">
            <Header />
            <main className='search-container'>
                <section className='search-results'>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                    <h3>content</h3>
                </section>
            </main>

            <aside className='profile'>

            </aside>

        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout