import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered!");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // optional chaining
    setListOfRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  return listOfRes.length === 0 ? (
    <div className="res-container">
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRes.map((res, index) => (
          <ResCard key={res.info.id} resInfo={res} />
          // No key(not recommended) << index as key << unique id as key(recommended)
        ))}
      </div>
    </div>
  );
};

export default Body;
