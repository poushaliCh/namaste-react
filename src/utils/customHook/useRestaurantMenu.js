import React, { useEffect, useState } from 'react';
import { MENU_API } from '../constant';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    // console.log(jsonData);
    setResInfo(jsonData);
  };

  return resInfo;
};

export default useRestaurantMenu;
