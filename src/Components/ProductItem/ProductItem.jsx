import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

const ProductItem = (props) => {
  const { category, color, priceProduct, productImg, nameProduct, groupSize } =
    props.item;

  return (
    <div className="product-item">
      <div className="product-item-top">
        <div className="product-item-title">
          <h3>{nameProduct}</h3>
          <span>
            <FavoriteBorderIcon className="icon-product" />
          </span>
        </div>
        <p>{category}</p>
      </div>
      <div className="product-img">
        <img src={productImg} alt="" />
      </div>
      <div className="product-item-bottom">
        <div className="product-bottom-left">
          <p>
            <PersonOutlineOutlinedIcon className="icon-color" /> {groupSize}
          </p>
          <p>
            <ColorLensOutlinedIcon className="icon-color" /> {color}
          </p>
        </div>
        <p className="price-product">${priceProduct}</p>
      </div>
    </div>
  );
};

export default ProductItem;
