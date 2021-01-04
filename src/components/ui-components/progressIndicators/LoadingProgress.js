
// Component to display 
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import './LoadingProgress.scss'
import icon from 'assets/img/loading.gif'

const LoadingProgress = ({ loadingIcon = icon, text = 'Loading...', component }) => {
    const { appState } = useContext(AppContext)
    const { isApiLoading } = appState

    return (
        <>
            {isApiLoading ?
                (
                    <div className='loading-progress'>
                        <img src={loadingIcon} alt='loading' />
                        <h4>{text}</h4>
                    </div>
                ) : null
            }
        </>
    )
}

export { LoadingProgress }
export default LoadingProgress