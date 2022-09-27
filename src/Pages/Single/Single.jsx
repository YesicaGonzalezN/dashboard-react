import React from "react";
import "./single.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

const Single = () => {
  return (
    <div className="home">
      <div className="single">
        <Sidebar />
        <div className="body-container">
          <NavBar />
          <div className="single-container">
            <div className="top-single">
              <div className="left-single">
                <div className="editButton">Editar</div>
                <h1 className="title-single">Información</h1>
                <div className="item-single">
                  <img
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="item-title">Cecilia</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">
                        ceciliarodriguez@gmail.com
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Teléfono:</span>
                      <span className="itemValue">+54 1123885566</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Domicilio:</span>
                      <span className="itemValue">San Juan 552</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">País:</span>
                      <span className="itemValue">Argentina</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-single">
                <Chart aspect={4 / 1} />
              </div>
            </div>
            <div className="bottom-single">
              <h1 className="title-single">Últimas transacciones</h1>
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
