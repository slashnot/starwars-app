// TopNav UI Component
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { useSearch } from 'hooks'
import { SearchInput } from 'components/ui-components'
import logo from 'assets/img/logo-dark.svg'
import './Header.scss'

const Header = () => {
    const { appState } = useContext(AppContext)
    const { searchCollection } = useSearch('planets')

    const handleSearch = (e) => {
        searchCollection(e.target.value)
    }

    return (
        <header className={`header ${appState.headerClass}`}>
            <img className='logo' alt='Sky Wars' src={logo} />
            <SearchInput onChange={handleSearch} />
        </header>
    )
}

export { Header }
export default Header