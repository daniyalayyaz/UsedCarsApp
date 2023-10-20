import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useIsMobile } from "../../contexts/isMobile";

const CustomPrevArrow = (props) => {
  return (
    <ArrowBackIosNewIcon
      className="slick-prev"
      sx={{
        zIndex: 1,
        marginLeft: "1.5rem",
        color: "white",
        padding: "5px",
        height: "32px",
        width: "32px",
        background: "#4c545c",
        borderRadius: "100%",
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          background: "black", // Change color on hover
          color: "white",
        },
      }}
      onClick={props.onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  return (
    <ArrowForwardIosIcon
      className="slick-next"
      sx={{
        marginRight: " 1.5rem",
        color: "white",
        padding: "5px",
        height: "32px",
        width: "32px",
        background: "#4c545c",
        borderRadius: "100%",
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          background: "black", // Change color on hover
          color: "white",
        },
      }}
      onClick={props.onClick}
    />
  );
};

function ImageSlider({ data, MultiImages, coverImage }) {
  const isMobile = useIsMobile();
  const [settings] = useState({
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  });
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
      }}
    >
      {coverImage || data ? (
        <Slider {...settings}>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={`https://red-jolly-tortoise.cyclic.app/upload${coverImage}`}
                width="90%"
                height="300px"
                style={{ objectFit: "cover", borderRadius: "8px" }}
                alt=""
              />
            </div>
          </div>
          {MultiImages.map((item) => (
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={item}
                  width="90%"
                  height="300px"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={require(`../../assets/noImage.jpeg`)}
            width="90%"
            height="300px"
            style={{ objectFit: "cover", borderRadius: "8px" }}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
