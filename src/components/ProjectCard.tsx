import React, { useState } from "react";
import ModalCarroussel from "./Carousel";

function ProjectCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Sumbit the Form
  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <div className="project__grid__card">
      <button className="project__grid__card__container"onClick={openModal}>
        <img src={props.img} alt="" />
        <p className="project__grid__card__title">{props.title} </p>
        <div className="project__grid__card__tags">
          <p className="html">HTML / CSS</p>
          {props.langage && <p className="langage">{props.langage}</p>}
          {props.framework && <p className="framework">{props.framework}</p>}
          {props.library && <p className="library">{props.library}</p>}
          {props.option && <p className="option">{props.option}</p>}
        </div>
      </button>
      <div className="project__grid__card__links">
        <button className="btn_primary">
          <a href={props.link}>Lien GitHub</a> <i></i>
        </button>
        {props.hebergement && (
          <button className="btn_primary">
            <a href={props.hebergement}>Lien vers le site</a> <i></i>
          </button>
        )}
      </div>
      <div>
        {modalIsOpen && (
          <ModalCarroussel
            setShow={setModalIsOpen}
            img_items={props.items}
            title={props.title}
            langage={props.langage}
            framework={props.framework}
            library={props.library}
            option={props.option}
            link={props.link}
            hebergement={props.hebergement}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
