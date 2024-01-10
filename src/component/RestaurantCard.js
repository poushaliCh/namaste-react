import { CDN_URL_CARD_LOGO } from '../utils/constant';

// const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.card.card.info;
  // console.log(resData.card);
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      // style={styleCard}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL_CARD_LOGO + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.card.card.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
