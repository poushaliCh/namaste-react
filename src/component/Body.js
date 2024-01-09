import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  const [filteredRestaurent, setFilteredRestaurent] = useState(resList);
  const [searchText, setSearchText] = useState('');
  //   const arr = useState(resList);
  //   const [listOfRestaurent, setListOfRestaurent] = arr;
  //it is actually a array desturncturing

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5412712&lng=88.3875827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const dataJson = await data.json();
    // console.log(dataJson.data);
    // setListOfRestaurent(dataJson.data.cards);
  };

  // if (listOfRestaurent.length === 0) {
  //   return <Shimmer />;
  // }

  //COnditional Rendering
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBoxBtn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurent.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
//not using key(not acceptable) <<<< index as key <<<<<<<<<< unique id(best practice)
export default Body;
