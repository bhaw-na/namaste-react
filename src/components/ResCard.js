import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resInfo } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resInfo?.info;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img className="card-image" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResCard;
