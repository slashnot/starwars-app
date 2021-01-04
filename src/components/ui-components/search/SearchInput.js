// Search Input Component to search for plantets, species etc..
import './SearchInput.scss'

const SearchInput = (props) => {

    return (
        <div className='search-box'>
            <input {...props} className='search-input' type='search' placeholder='Search for Planets' />
        </div>
    )
}

export { SearchInput }
export default SearchInput