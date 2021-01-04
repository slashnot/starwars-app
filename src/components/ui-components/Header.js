// TopNav UI Component
import { useSearch } from 'hooks'
import { SearchInput } from 'components/ui-components'
import logo from 'assets/img/logo-dark.svg'
import './Header.scss'

const Header = () => {
    const { searchCollection } = useSearch('planets')

    const handleSearch = (e) => {
        searchCollection(e.target.value)
    }

    return (
        <header className='header'>
            <img className='logo' src={logo} />
            <SearchInput onChange={e => console.log(e.target.value)} />
        </header>
    )
}

export { Header }
export default Header