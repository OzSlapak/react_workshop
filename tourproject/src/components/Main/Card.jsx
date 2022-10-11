

const Card =(data) => {
    const {title, image, desc} = data;
    return(
        <div className="cards">
            <div className="title">
                <h1>{title}</h1>
        </div>
    )
}
export default Card;
