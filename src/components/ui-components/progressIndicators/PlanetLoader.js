// Planet loader display component
import './PlanetLoader.scss'

const PlanetLoader = ({loadingText = "Loading..."}) => {
    return (
        <div className="content planet-loader">
            <div className="planet">
                <div className="ring"></div>
                <div className="cover-ring"></div>
                <div className="spots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>
            <h4>{loadingText}</h4>
        </div>
    )
}

export { PlanetLoader }
export default PlanetLoader