import { useReducer } from 'react'
import reducer from './AppReducer'
import store from './AppStore'

// Hook to use AppContext and AppStore globally across the app
const useAppState = () => {
    const [appState, appDispatch] = useReducer(reducer, store)
    return { appState, appDispatch }
}

export default useAppState
