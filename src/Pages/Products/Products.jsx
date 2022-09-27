import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./products.css";
import ProductItem from "../../Components/ProductItem/ProductItem";
import ProductData from "../../ProductData";

const Products = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="body-container">
        <Navbar />
        <div className="products-wrapper">
          <h1 className="products-title">Productos</h1>

          <div className="product-body">
            <div className="filter-widget-wrapper">
              <div className="filter-widget-01">
                <select>
                  <option value="New">Nuevo</option>
                  <option value="Popular">Popular</option>
                  <option value="Upcoming">Próximamente</option>
                </select>
              </div>

              <div className="filter-widget-02">
                <select>
                  <option value="carteras">Carteras</option>
                  <option value="mochilas">Mochilas</option>
                  <option value="accesorios">Accesorios</option>
                </select>
              </div>
            </div>

            <div className="products-list">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
