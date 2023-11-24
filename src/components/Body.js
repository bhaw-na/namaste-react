import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //   const arr = useState(resList);
  //   console.log(arr);
  //   const listOfRes = arr[0];
  //   const setListOfRes = arr[1];
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredListOfRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredListOfRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((res, index) => (
          <ResCard key={res.info.id} resInfo={res} />
          // No key(not recommended) << index as key << unique id as key(recommended)
        ))}
      </div>
    </div>
  );
};

export default Body;
