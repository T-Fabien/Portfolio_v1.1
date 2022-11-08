import React from "react";

function GlobalInfoCard(props) {
  return (
    <div className={"global__info__card card__" + props.class} >
      <div className="card__face1 face">
        <img src={props.img} alt="" className={props.imgclass} />
        <h4>{props.title}</h4>
      </div>
      <div className="card__face2 face">
        <p>{props.text}</p>
        {props.secondtext && <p>{props.secondtext}</p>}
      </div>
    </div>
  );
}

export default GlobalInfoCard;
