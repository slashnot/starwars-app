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
    },

    /* Sort collection by operator
    ------------------------------------------------------------ */
    sortCollection(collection, operator) {
        const { filtered, rejected } = this.filterCollection(collection, operator)
        const results = filtered.sort((a, b) => {
            return b[operator] - a[operator]
        })

        return [...results, ...rejected]
    },

    /* filter collection for non numerical values
    ------------------------------------------------------------ */
    filterCollection(collection, operator) {
        const rejected = []
        const filtered = collection.filter(value => {
            if (value[operator] === 'unknown') {
                rejected.push(value)
                return null
            }
            else
                return value
        })
        console.log(filtered, rejected)
        return { filtered, rejected }
    },

    /* Get random array items
    ------------------------------------------------------------ */
    getRandomItem(arr) {
        return arr[Math.floor((Math.random() * arr.length))]
    },
}

export { searchService }
export default searchService