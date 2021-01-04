// Card component to display data in card
import './Card.scss'

const Card = ({ className, title, footer, children }) => {
    return (
        <div className={`${className} result-card`}>
            <div className='result-card-title'>
                {title}
            </div>
            <div className='result-card-content'>
                {children}
            </div>
            <div className='result-card-footer'>
                {footer}
            </div>
        </div>
    )
}

export { Card }
export default Card