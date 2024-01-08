import { CDN_URL_CARD_LOGO } from '../utils/constant';

const styleCard = {
  backgroundColor: '#f0f0f0',
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.card.card.info;
  // console.log(resData.card);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL_CARD_LOGO + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
