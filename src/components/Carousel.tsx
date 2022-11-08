import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Carrousel(props) {
  return (
    <div className="modal">
      <span className="close-modal" onClick={() => props.setShow(false)}>
        X
      </span>
      <Carousel
        showArrows={true}
        showStatus={false}
        useKeyboardArrows={true}
        stopOnHover={true}
        autoFocus={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
      >
        {props.img_items.map((img, index) => {
          return (
            <div key={index}>
              <img
                className="modal__img"
                src={img}
                alt={"Image du site" + props.title}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Carrousel;
