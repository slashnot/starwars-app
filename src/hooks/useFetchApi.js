// Handles gloal fetch api requests

import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { config } from 'config'

const { baseUrl } = config
const useFetchApi = () => {
    const { appDispatch } = useContext(AppContext)

    return async (requestUrl, params) => {

        // Show Loading indicator
        appDispatch({ type: 'LOADING_START' })

        // API Request
        const api = await fetch(baseUrl + requestUrl)

        // Hide Loading Indicator
        appDispatch({ type: 'LOADING_DONE' })

        return api
    }
}

export { useFetchApi }
export default useFetchApi