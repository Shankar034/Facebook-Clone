import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import { Avatar} from "material-ui/core"

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" />

        <div className="header_input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      
      <div className="header_middle">   
        <div className="header_options">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header_options">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header_options">
          <SubscriptionsIcon fontSize="large"/>
        </div>
        <div className="header_options">
          <StorefrontIcon fontSize="large"/>
        </div>
        <div className="header_options">
          <SupervisedUserCircleIcon fontSize="large"/>
        </div>

      </div>
      <div className="header_right">
        <div className="header_info">
            <Avatar alt="Remy Sharp" />
        </div>
      </div>
    </div>
  );
}

export default Header;
