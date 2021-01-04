// Planet loader display component
import './PlanetLoader.scss'

const PlanetLoader = ({loadingText = "Loading..."}) => {
    return (
        <div class="content planet-loader">
            <div class="planet">
                <div class="ring"></div>
                <div class="cover-ring"></div>
                <div class="spots">
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