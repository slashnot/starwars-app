// Serive for search functionality
import { config } from 'config'

let timeout = null;
const searchService = {

    /* Debounce the input before calling API
    ------------------------------------------------------------ */
    debounceInput(query, collection, callbackFn) {
        clearTimeout(timeout);
        const resultsPromise = new Promise((resolve, reject) => {
            timeout = setTimeout(() => {
                resolve(callbackFn(query, collection))
            }, config.searchDebounceTime);
        })
        return resultsPromise
    },

    /* Search collection from API
    ------------------------------------------------------------ */
    async searchCollection(query, collection) {
        const url = `${config.baseUrl}/${collection}/?search=${query}`;
        const response = await fetch(url);
        const results = await response.json();

        return results
    }
}

export { searchService }
export default searchService