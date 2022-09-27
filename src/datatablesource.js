export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "Usuario",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="Avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "age",
    headerName: "Edad",
    width: 140,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    cellRender: (params) => {
      return (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Cecilia",
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "ceciliarodriguez@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Pamela",
    img: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "pame_35@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Julieta",
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "juligomez@gmail.com",
    age: 22,
  },
  {
    id: 4,
    username: "Natalia",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "natutidf@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Rocio",
    img: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "rochi_28@gmail.com",
    age: 28,
  },
  {
    id: 6,
    username: "Ailen",
    img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "ailenberdnardzuk@gmail.com",
    age: 38,
  },
  {
    id: 7,
    username: "Jimena",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "jimeperez@gmail.com",
    age: 24,
  },
  {
    id: 8,
    username: "Luana",
    img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "luanitaff@gmail.com",
    age: 27,
  },
  {
    id: 9,
    username: "Julia",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "Activo",
    email: "juliii@gmail.com",
    age: 33,
  },
];
