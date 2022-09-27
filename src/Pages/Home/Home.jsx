import React from 'react';
import Navbar from '../../Components/NavBar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Table from '../../Components/Table/Table';
import './home.css';


const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="body-container">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Últimas Transacciones</div>
          <Table/> 
        </div>
      </div>
    </div>
  )
}

export default Home;