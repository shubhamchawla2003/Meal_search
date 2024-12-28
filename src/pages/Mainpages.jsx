/*import { useState } from "react";
//import Mealcards from "./Mealcards";

const Mainpages = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const getApiData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await res.json();
    //console.log(jsonData);
    setData(jsonData);
  };
  return (
    <div>
      <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl justify-center">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Article name or keyword..."
            onChange={handleInput}
          />
        </div>
        <div
          onClick={getApiData}
          className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        >
          <span>Search</span>
        </div>
      </div>

      <div>
        <div>
            {!data ? "" :data.map((currItem)=>{
                return<div key={currItem.idMeal}>
                    <img src={currItem.strMealThumb}/>
                    <p></p>
                    <button></button>
                    </div>
                
            })
            }
        </div>
      </div>
    </div>
  );
};

export default Mainpages; */

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Mainpages = () => {
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(""); 

  
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  
  const getApiData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await res.json();
      setData(jsonData.meals || []); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); 
    }
  };

  return (
    <div>
      
      <div className=" flex flex-col items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl justify-center mx-1 mt-2">
        <div className="flex bg-gray-100 p-4 gap-05   rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Meal name..."
            onChange={handleInput}
          />
        </div>
        <div
          onClick={getApiData}
          className="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer"
        >
          <span>Search</span>
        </div>
      </div>

     
      <div>
        {data.length === 0 ? (
          <p className="text-center mt-4">No meals found. Try a different search!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {data.map((currItem) => (
              <div
                key={currItem.idMeal}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={currItem.strMealThumb}
                  alt={`Image of ${currItem.strMeal}`}
                  className="rounded-t-lg w-full"
                />
                <p className="mt-2 font-semibold">{currItem.strMeal}</p>
                <NavLink to={`/${currItem.idMeal}`}>
                <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                  View Recipe
                </button>
                </NavLink>
                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mainpages;

