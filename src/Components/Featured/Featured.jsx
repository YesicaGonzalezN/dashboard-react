import React from 'react';
import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Featured = () => {
  return (
    <div className="featured">
      <div className="top-featured">
        <h1 className="title-featured">
          Ingresos Totales
        </h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom-featured">
        <div className="featuredChart">
          <CircularProgressbar value={65} text={"65%"} strokeWidth={5}/>
        </div>
        <p className="title-featured-chart">Ventas realizadas hoy</p>
        <p className="amount-featured-chart">$1350</p>
        <p className="desc-featured-chart">Los últimos pagos pueden no estar incluidos.</p>
        <div className="summary">
          <div className="item-summary">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$17.3k</div>
            </div>
          </div>
          <div className="item-summary">
            <div className="itemTitle">Última semana</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$1.4k</div>
            </div>
          </div>
          <div className="item-summary">
            <div className="itemTitle">Último mes</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">$9.8k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured