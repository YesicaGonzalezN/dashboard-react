import React from "react";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Buscar..." />
          <SearchOutlinedIcon className="icon-nav" />
        </div>
        <div className="items">      
          <div className="item-nav">
            <NotificationsNoneIcon className="icon-nav" />
            <div className="counter">1</div>
          </div>
          <div className="item-nav">
            <ModeCommentOutlinedIcon className="icon-nav" />
            <div className="counter">1</div>
          </div>
          <div className="item-nav">
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="icon-nav-user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
