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
        const results =  filtered.sort((a, b) => {
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

    // sort_by(field, reverse, primer) {

    //     const key = primer ?
    //         function (x) {
    //             return primer(x[field])
    //         } :
    //         function (x) {
    //             return x[field]
    //         };

    //     reverse = !reverse ? 1 : -1;

    //     return function (a, b) {
    //         return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    //     }
    // }
}

export { searchService }
export default searchService