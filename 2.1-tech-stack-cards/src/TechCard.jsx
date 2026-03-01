
function TechCard({ image, placeholder, title, description }) {
    return (
        <div className="card">
            <div className="logo-container">
                <img src={image} alt={placeholder} className="card-image"></img>
            </div>
            <div className="text-container">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default TechCard
