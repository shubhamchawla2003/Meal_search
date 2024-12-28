//import React from 'react'
import { useParams } from "react-router-dom";

const Mealinfo = () => {
    const {mealid} = useParams();
    console.log(mealid);
    
  return (
    <div>
      Mealinfo
    </div>
  )
}

export default Mealinfo
