
const HighlightCard = ({ icon, content, className }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="fs-2 feature-item me-2">
                {icon}
            </div>
            <div className={`feature-item text-body-emphasis ${className}`}>
                {content}
            </div>
        </div>
    )
}
export default HighlightCard;