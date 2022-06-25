import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Col } from "react-bootstrap";
import SearchBox from "./SearchBox";
import StarRating from "./StarRating";

const Header = (props) => {
  const { searchValue, setSearchValue, activeStar, setActiveStar } = props;

  const location = useLocation();
  console.log(location.pathname)

  return (
    <Navbar bg="dark">
      <Col xs={1} lg={6} className="logo">
      <Link to='/'>
        <img
          src={require("./logo.png")}
          height="50"
          alt="CinemApp logo"
          style={{ marginLeft: 30, cursor: "pointer" }}
        />
        </Link>
      </Col>
      <Col xs={8} lg={3} className="star-rating d-flex justify-content-end" >
      {location.pathname === '/' ? <StarRating activeStar={activeStar} setActiveStar={setActiveStar} setSearchValue={setSearchValue} />
      :
      null}
        
      </Col>
      <Col xs={3} lg={2} className="search-box">
      {location.pathname === '/' ? <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      :
      null}
        
      </Col>
    </Navbar>
  );
};

export default Header;
