const RestaurentCards =(props)=>{
    const {resdata } = props;
    const{
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating,
    } = resdata?.info;

    return(
        <div className="resCards">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{costForTwo}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
        </div>
    )
}

export default RestaurentCards;