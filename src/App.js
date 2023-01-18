import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widget.js'
import  Login from './Login.js'
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (

    //BEM naming conviction
    <div className="app">

    {!user ? (
      <Login/>
    ): (
   
    <>
    {/* header */}
    <Header/>

    {/* App body */}
    <div className="app_body">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <Feed/>
      {/* Widgets */}
      <Widget/>

    </div>
    </>
    )};
    </div>
  );
}


export default App;
