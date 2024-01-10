import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/customHook/useOnlinestatus';

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  const [filteredRestaurent, setFilteredRestaurent] = useState(resList);
  const [searchText, setSearchText] = useState('');
  //   const arr = useState(resList);
  //   const [listOfRestaurent, setListOfRestaurent] = arr;
  //it is actually a array desturncturing

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5412712&lng=88.3875827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  //   );
  //   const dataJson = await data.json();
  //   // console.log(dataJson.data);
  //   // setListOfRestaurent(dataJson.data.cards);
  // };

  // if (listOfRestaurent.length === 0) {
  //   return <Shimmer />;
  // }

  //custom hook use--
  const onlineStatus = useOnlinestatus();
  if (onlineStatus === false)
    return <h1>Looks like you're offline!!! Please check your internet...</h1>;

  //COnditional Rendering
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border borde-solid border-black focus:ring-2 focus:ring-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurent = listOfRestaurent.filter((res) =>
                res.card.card.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              // console.log(filteredRestaurent);
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-1 bg-blue-100 m-4 rounded-lg"
            onClick={() => {
              const filteredListOfRestaurent = listOfRestaurent.filter(
                (res) => res.card.card.info.avgRating > 4.5
              );
              console.log('filteredListOfRestaurent', filteredListOfRestaurent);
              setFilteredRestaurent(filteredListOfRestaurent);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurent.map((restaurant) => (
          <Link
            to={
              '/restaurants/' +
              restaurant.card.card.info.name +
              '/' +
              restaurant.card.card.info.id
            }
            key={restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
//not using key(not acceptable) <<<< index as key <<<<<<<<<< unique id(best practice)
export default Body;
