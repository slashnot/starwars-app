import AppContext from './AppContext'
import useAppState from './useAppState'

// App wrapper that provides the context, state and dispatch to the app components
const AppStateProvider = ({ children }) => {
    return (
        <AppContext.Provider value={useAppState()}>
            {children}
        </AppContext.Provider>
    )
}

export default AppStateProvider