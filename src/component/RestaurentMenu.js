import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   const params = useParams();
  //   console.log(params);

  const { resId, resName } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData);
  };
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
