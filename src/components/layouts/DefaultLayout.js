// Default layout component
import './DefaultLayout.scss'
import logo from 'assets/img/logo-dark.svg'

const DefaultLayout = () => {

    return (
        <div className="layout-default">
            <header>
                <img className='logo' src={logo} />
                <input className='search-input' type='search' placeholder='Search for Planets'/>
            </header>
            
        </div>
    )
}

export { DefaultLayout }
export default DefaultLayout