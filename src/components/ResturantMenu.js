import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useResturantMenu from '../utils/hooks/useResturantMenu'
import Accordion from './Accordion';


const ResturantMenu = () => {

    const {resId} = useParams();
    const resInfo = useResturantMenu(resId);
    if(resInfo === null){
        return(
          <div className='res-container'>
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        )
    }

    const {name, city, cuisines, avgRating, costForTwoMessage,totalRatingsString, areaName
    } = resInfo?.cards[2]?.card?.card?.info
    const  { itemCards, title }  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return (
    <div className='menu-conatiner'>
      <div className='info'>
        <h1>{name}</h1>
        <div className='info-card'>
            <b><p><i class="ri-star-fill"></i> {avgRating+"  ("+totalRatingsString+")"} . {costForTwoMessage} </p></b>
            <p>{areaName}, {city}</p>
            <p>{resInfo?.cards[2]?.card?.card?.info.sla.slaString}</p>
        </div>
      </div>
      <hr></hr>
      <Accordion accordionData={categories}/>
    </div>
  )
}

export default ResturantMenu
