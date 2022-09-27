import React from 'react';
import './widget.css';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widgets = ({ type }) => {
  let data;

  switch(type) {
    case "user":
      data={
        title:"USUARIOS",
        isMoney: false,
        icon: <Person2OutlinedIcon 
        fontSize="medium" 
        className="icon-widget"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255,0,0,0.2)",
        }}
        />,
        amount: 50,
        diff: 20
      };
        break;
        case "order":
      data={
        title:"ORDENES",
        isMoney: false,
        icon: <ShoppingCartOutlinedIcon 
        fontSize="medium" 
        className="icon-widget"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218,165,32,0.2)",
        }}/>,
        amount: 70,
        diff: 35
      };
        break;
        case "earning":
      data={
        title:"GANANCIAS",
        isMoney: true,
        icon: <AccountBalanceWalletOutlinedIcon 
        fontSize="medium" 
        className="icon-widget"
        style={{
          color: "green",
          backgroundColor: "rgba(0,128,0,0.2)",
        }}/>,
        amount: `$256.000`,
        diff: 60
      };
        break;
        case "balance":
      data={
        title:"BALANCE",
        isMoney: true,
        icon: <MonetizationOnOutlinedIcon 
        fontSize="medium" 
        className="icon-widget"
        style={{
          color: "purple",
          backgroundColor: "rgba(128,0,128,0.2)",
        }}/>,
        amount: `$50.000`,
        diff: 55
      };
        break;
      default:
        break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title-widget">{data.title}</span>
        <span className="counter-widget">{data.isMoney} {data.amount}</span>
        <span className="link-widget">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon fontSize="large"/>
          {data.diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets