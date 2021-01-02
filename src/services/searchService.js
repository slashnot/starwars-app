// Serive for search functionality
import { config } from 'config'

let timeout = null;
const searchService = {
    /* Search collection with debounce
    ------------------------------------------------------------ */
    searchCollection(query) {
        clearTimeout(timeout);
        // Make a new timeout set to go off in 1000ms (1 second)
        timeout = setTimeout(function () {
            console.log('Input Value:', query);
        }, 4000);
    },

    /* Search collection from API
    ------------------------------------------------------------ */
    searchApiCollection(query) {

    }
}

export { searchService }
export default searchService