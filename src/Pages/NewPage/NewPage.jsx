import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./newpage.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="home">
      <Sidebar />
      <div className="body-container">
        <Navbar />
        <div className="newpage">
          <div className="new-container">
            <div className="top-new">
              <h1 className="title-new">{title}</h1>
            </div>
            <div className="bottom-new">
              <div className="left-new">
                <img
                  src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                  alt=""
                  className="img-new"
                />
              </div>
              <div className="right-new">
                <form>
                  <div className="form-input">
                    <label htmlFor="file">
                      Imágen: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  {inputs.map((input) => (
                    <div className="form-input" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))}

                  <button className="button-new">Guardar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
