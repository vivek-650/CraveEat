import { CDN_URL } from "../utils/Url";

function ResCard(props){
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName, sla } = resData?.info;

    let cuisinesDisplay = cuisines.slice(0, 3).join(", ");
    if (cuisines.length > 3) {
        cuisinesDisplay += "...";
    }

    return(
        <div className="res-card">
            <div className="res-card-img">
                <img src={CDN_URL+cloudinaryImageId} />
            </div>
            <div className="res-card-desciption">
                <p><b>{name.length > 14 ? name.slice(0, 14) + "..." : name}</b></p>
                <p><b><i class="ri-star-fill"></i>{ avgRating} ({sla.slaString})</b></p>
                <br />
                <p>{cuisinesDisplay}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

export default ResCard;