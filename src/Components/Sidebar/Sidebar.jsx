import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration:"none" }}>
        <h1 className="logo">Juana's Bags</h1>
        </Link> 
      </div>
      <div className="middle">
        <ul>
          <p className="title">MENÚ</p>
          <Link to="/" style={{ textDecoration:"none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span className="span-title">Dashboard</span>
          </li>
          </Link>
          <p className="title">COMPRAS</p>
          <Link to="/users" style={{ textDecoration:"none" }}>
          <li>
            <Person2OutlinedIcon className="icon" />
            <span className="span-title">Usuarios</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration:"none" }}>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <span className="span-title">Productos</span>
          </li>
          </Link>
          
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span className="span-title">Ordenes</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <span className="span-title">Envíos</span>
          </li>
          <p className="title">DE UTILIDAD</p>
          <li>
            <AutoGraphOutlinedIcon className="icon" />
            <span className="span-title">Status</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span className="span-title">Notificaciones</span>
          </li>
          <p className="title">CONFIGURACIÓN</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span className="span-title">Logs</span>
          </li>
          <li>
            <SettingsSuggestOutlinedIcon className="icon" />
            <span className="span-title">Ajustes</span>
          </li>
          <p className="title">USUARIO</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span className="span-title">Perfil</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span className="span-title">Cerrar Sesión</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
