import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  //   const arr = useState(resList);
  //   const [listOfRestaurent, setListOfRestaurent] = arr;
  //it is actually a array desturncturing

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurent = listOfRestaurent.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            console.log('filteredListOfRestaurent', filteredListOfRestaurent);
            setListOfRestaurent(filteredListOfRestaurent);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurent.map((restaurant) => (
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
