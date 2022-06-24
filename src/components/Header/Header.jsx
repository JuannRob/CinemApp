import React from "react";
import { Navbar, Col } from "react-bootstrap";
import SearchBox from "./SearchBox";
import StarRating from "./StarRating";

const Header = (props) => {
  const { searchValue, setSearchValue, activeStar, setActiveStar } = props;

  return (
    <Navbar bg="dark">
      <Col xs={1} lg={6} className="logo">
        <img
          src={require("./logo.png")}
          height="50"
          alt="CinemApp logo"
          style={{ marginLeft: 30, cursor: "pointer" }}
          onClick={() => setSearchValue("")}
        />
      </Col>
      <Col xs={8} lg={3} className="star-rating d-flex justify-content-end" >
        <StarRating activeStar={activeStar} setActiveStar={setActiveStar} setSearchValue={setSearchValue} />
      </Col>
      <Col xs={3} lg={2} className="search-box">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Col>
    </Navbar>
  );
};

export default Header;
