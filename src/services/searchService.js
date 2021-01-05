// Serive for search functionality
import { config } from 'config'

let timeout = null;
let requestTimeout = null;
let requestCount = 0
const searchService = {

    /* Debounce the input before calling API
    ------------------------------------------------------------ */
    debounceInput(query, collection, callbackFn) {
        clearTimeout(timeout);
        const resultsPromise = new Promise((resolve, reject) => {
            timeout = setTimeout(() => {
                if (this.canSendRequest()) {
                    resolve(callbackFn(query, collection))
                }
                else {
                    console.log("MAX REACHD")
                    reject('Max reached')
                }
            }, config.searchDebounceTime);
        })
        return resultsPromise
    },

    /* Search collection from API
    ------------------------------------------------------------ */
    async searchCollection(query, collection) {
        if (this.canSendRequest()) {
            const url = `${config.baseUrl}/${collection}/?search=${query}`;
            const response = await fetch(url);
            const results = await response.json();

            return results
        }

        return []
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

    /* Check whether the max request is reached
    ------------------------------------------------------------ */
    canSendRequest() {
        const user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {}

        if (config.superUsers.includes(user.name))
            return true

        if (!requestTimeout) {
            requestTimeout = setTimeout(() => {
                requestTimeout = null
                requestCount = 0
            }, config.requestTimeOutDuration)
            requestCount++
            return true
        }

        if ((requestCount <= config.maxRequests - 1) && requestTimeout) {
            requestCount++
            return true
        }
        else {
            console.log('Max Reached')
            return false
        }
    },

    /* Get random array items
    ------------------------------------------------------------ */
    getRandomItem(arr) {
        return arr[Math.floor((Math.random() * arr.length))]
    },
}

export { searchService }
export default searchService