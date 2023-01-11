import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


function Sidebar() {
  return <div className="sidebar">
    <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTTF25V8zJE5Xz9Wzk7q7ZFEVrV9DYO2hLQ&usqp=CAU' title='Shankar'/>
    <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
    <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
    <SidebarRow Icon={PeopleIcon} title ='Friends'/>
    <SidebarRow Icon={ChatIcon} title='Messenger'/>
    <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
    <SidebarRow Icon={VideoLibraryIcon} title='videos'/>
    <SidebarRow Icon={ExpandMoreIcon} title='More'/>
    
  </div>
}

export default Sidebar