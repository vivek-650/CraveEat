import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import CuisinesSlider from "./CuisinesSlider";
function Body(){
    const [ info, setInfo ] = useState(null)
    const [ listOfRes, setListOfRes ] = useState([]);
    const [ filteredlistOfRes, setFilteredListOfRes ] = useState([]);
    const [ searchText,setSearchText ] = useState("");
    const [cuisinesCarosalData, setCuisinesCarosalData ] = useState([]);
    
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setCuisinesCarosalData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        setInfo(json?.data?.cards[1]?.card?.card)
    }
    // console.log(info)
    useEffect(()=>{
        fetchData();
    }, []);

    if(listOfRes.length === 0){
        return(
            <div className="shimmer-container">
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

    return(
        <div className="body">
            <div className="search">
                <input  placeholder="Search by Restaurants" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                <button onClick={()=>{
                    const filterRes = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredListOfRes(filterRes);
                }}
                ><i class="ri-search-2-line"></i></button>
            </div>
            <CuisinesSlider cusData={cuisinesCarosalData}/>
            <h1>{info?.header?.title}</h1>
            <div className="res-container">
                {
                    filteredlistOfRes.map((elem) =>(<Link to={"/resturants/"+elem.info.id} key={elem.info.id} className="link-style"><ResCard  resData={elem} /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;