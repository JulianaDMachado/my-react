import RestaurantCardComponent from "./RestaurantCardComponent";
import resDataList from "./../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const BodyComponent = () => {
  // ----normal js variable-----
  let listOfRestaurantsJS = [
    {
      resName: "Meghana Foods",
      cuisine: "Biryanee, North Indian, Asian",
      ratings: "3.4",
      waitTime: "38 mins",
      id: 1,
    },
    {
      resName: "Paradise Biryani",
      cuisine: "Biryanee, North Indian, Asian",
      ratings: "4.4",
      waitTime: "38 mins",
      id: 2,
    },
    {
      resName: "KFC",
      cuisine: "Biryanee, North Indian, Asian",
      ratings: "2.4",
      waitTime: "38 mins",
      id: 3,
    },
    {
      resName: "Ruchee's Adda",
      cuisine: "Biryanee, North Indian, Asian",
      ratings: "4.4",
      waitTime: "38 mins",
      id: 4,
    },
  ];

  //----------use online custom hook---------
  const isOnline = useOnlineStatus();

  //-----useState variable-----
  //let [listOfRestaurants, setListOfRestaurants] = useState(resDataList);
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  


  // for serach purpose
  const [searchValue, setSearchValue] = useState("");
  originalListOfRestaurants = JSON.parse(JSON.stringify(listOfRestaurants));
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  //-----useEffect hook ----------
  useEffect(() => {
    console.log("useEffect called in body component");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    //console.log(response);
    setListOfRestaurants(response);
    setFilteredListOfRestaurants(response);
  };



  //--------------conditional rendering------
  // if(listOfRestaurants.length === 0) {
  //      return <Shimmer />;

  // }

  if(!isOnline) {
    return (
      <div>Looks like you are offline! Please check your internet connection.......</div>
    )
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              //console.log(searchValue);
            }}
          />
          <button
            onClick={() => {
              const serachedList = listOfRestaurants.filter((res) => {
                return res.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setFilteredListOfRestaurants(serachedList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => Number(res.ratings) > 4.0)
            );
            //listOfRestaurants = listOfRestaurants.filter((res) => Number(res.ratings) > 4.0);
            //console.log(listOfRestaurants);
          }}
        >
          Top rated restaurants
        </button>

        <button
          className="filter-btn"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestaurants);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.id} key={restaurant.id} ><RestaurantCardComponent resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
