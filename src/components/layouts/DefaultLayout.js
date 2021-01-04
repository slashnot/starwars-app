// Default layout component
import './DefaultLayout.scss'
import logo from 'assets/img/logo-dark.svg'

const DefaultLayout = () => {

    return (
        <div className="layout-default">
            <header className='header'>
                <img className='logo' src={logo} />
                <input className='search-input' type='search' placeholder='Search for Planets' />
            </header>

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