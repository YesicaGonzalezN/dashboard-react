import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar'
import NavBar from '../../Components/NavBar/Navbar'
import './list.css';
import Datatable from '../../Components/Datatable/Datatable';

const List = () => {
  return (
    <div className='home'> 
      <Sidebar/>
      <div className="body-container">
      <NavBar/>
      <Datatable/>
      </div>
    </div>
  )
}

export default List