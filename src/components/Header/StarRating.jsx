import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ activeStar, setActiveStar, setSearchValue }) => {
  const [lastClicked, setLastClicked] = useState(0);

  const handleClick = (index) => {
    setSearchValue("");
    
    if (index === lastClicked) {
      setActiveStar(0);
      setLastClicked(0);
    } else {
      setLastClicked(index);
      setActiveStar(index);
    }
    console.log("index:", index);
  };

  return (
    <>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            type="button"
            key={index}
            className={index <= activeStar ? "on" : "off"}
            onClick={() => handleClick(index)}
          >
            <FaStar size={30} />
          </span>
        );
      })}
    </>
  );
};

export default StarRating;
