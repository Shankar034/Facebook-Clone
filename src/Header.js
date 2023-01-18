import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from "@material-ui/core";
import { Avatar } from '@material-ui/core'
import {useStateValue} from './StateProvider'



function Header() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" />

        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>
      
      <div className="header_center">   
        <div className="header_options header_options_active">
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
        {/* src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTTF25V8zJE5Xz9Wzk7q7ZFEVrV9DYO2hLQ&usqp=CAU' */}
        <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
