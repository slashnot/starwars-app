
// Component to display 
import { useContext } from 'react'
import AppContext from 'store/AppContext'

const LoadingProgress = props => {
    const { appState } = useContext(AppContext)
    const { isApiLoading } = appState

    return (
        <h1>{isApiLoading ? "Loading..." : "Done."}</h1>
    )
}

export { LoadingProgress }
export default LoadingProgress