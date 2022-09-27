import React from "react";
import "./table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1258,
      product: "Geriba",
      img: "https://i.ibb.co/k8n72mz/geriba.jpg",
      customer: "Natalia Gimenez",
      date: "2/2/2022",
      amount: 2,
      method: "Tarjeta de Crédito",
      status: "Aprobado",
    },
    {
      id: 1364,
      product: "Cozumel",
      img: "https://i.ibb.co/0VyFmZP/cozumel.jpg",
      customer: "Romina Montez",
      date: "5/2/2022",
      amount: 1,
      method: "Transferencia",
      status: "Aprobado",
    },
    {
      id: 153,
      product: "Olimpia",
      img: "https://i.ibb.co/HYH8wbJ/olimpia.jpg",
      customer: "Fernanda Perez",
      date: "15/2/2022",
      amount: 3,
      method: "Tarjeta de Crédito",
      status: "Aprobado",
    },
    {
      id: 1588,
      product: "Billetera Savage",
      img: "https://i.ibb.co/xLP32VN/savage.jpg",
      customer: "Nicole Sosa",
      date: "20/4/2022",
      amount: 1,
      method: "Transferencia",
      status: "Aprobado",
    },
    {
      id: 1558,
      product: "Berlin",
      img: "https://i.ibb.co/xCB9zbn/berlinpu.jpg",
      customer: "Clara Rowser",
      date: "13/4/2022",
      amount: 1,
      method: "Tarjeta de Crédito",
      status: "Aprobado",
    },
    {
        id: 1133,
        product: "Porto",
        img: "https://i.ibb.co/bb3V9Rk/porto.jpg",
        customer: "Micaela Rivera",
        date: "23/4/2022",
        amount: 1,
        method: "Tarjeta de Crédito",
        status: "Aprobado",
      },
      {
        id: 1333,
        product: "Botinero",
        img: "https://i.ibb.co/B2yVbfJ/botinero.jpg",
        customer: "Julieta Robles",
        date: "20/6/2022",
        amount: 2,
        method: "Tarjeta de Crédito",
        status: "Aprobado",
      },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Producto</TableCell>
            <TableCell className="tableCell">Cliente</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Cantidad</TableCell>
            <TableCell className="tableCell">Mñetodo de pago</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="img-list" />
                    {row.product}
                </div>
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>
                    {row.status}
                </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ); 
};

export default List;
