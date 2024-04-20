import React from 'react'
import { useEffect,useState } from 'react';
import { MENU_API_URL } from '../Url';
const useResturantMenu = (resId) => {
    
    useEffect(()=>{
        fetchMenu();
    }, []);

    const [ resInfo, setResInfo ] = useState(null)
    const fetchMenu = async()=>{
        const data = await fetch(MENU_API_URL+resId)
        const json = await data.json();
        // console.log(json.data)
        setResInfo(json.data)
    }
    return resInfo;
}

export default useResturantMenu;
