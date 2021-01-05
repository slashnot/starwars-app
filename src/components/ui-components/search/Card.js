// Card component to display data in card
import './Card.scss'

const Card = ({ className = 'null-class', thumb, children }) => {
    return (
        <div className={`${className} result-card`}>
            <div className='result-card-img-container'>
                <img alt='planet' src={thumb} className='result-card-img' />
            </div>
            <div className='result-card-content'>
                {children}
            </div>
        </div>
    )
}

export { Card }
export default Card