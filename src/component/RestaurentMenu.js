import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/customHook/useRestaurantMenu';

const RestaurentMenu = () => {
  //   const params = useParams();
  //   console.log(params);
  const { resId, resName } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="resMenu">{resName}</h1>
      <h2>Menu</h2>
      <ui>
        <li>Biryani</li>
        <li>Chicken</li>
      </ui>
    </div>
  );
};

export default RestaurentMenu;
