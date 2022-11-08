import React from "react";
import { HashLink } from "react-router-hash-link";


import GlobalInfoCard from "./GlobalInfoCard";

import { motion } from "framer-motion";

import Office from "../assets/images/office-building.png";
import Education from "../assets/images/education.png";
import Project from "../assets/images/data.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function CurriculumVitae() {
  const arrowTransition = {
    y: {
      type: "spring",
      stiffness: 100,
      duration: 2,
      delay: 0.5,
      repeat: Infinity,
      repeatType: "mirror"
    },
    opacity: {
      duration:1,
      delay: 2.5,
    },
  }

  return (
    <section className="global__info" id="global__info">
      <hr></hr>
      <motion.h3
        initial={{ opacity: 0, scale: 0, y: -42 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        Mes Informations
      </motion.h3>
      <motion.p
        className="global__info__resume"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay:0.5 }}
      >
        Passionné de développement depuis que j’ai 12 ans, j’ai commencé en
        modifiant des fichiers JSON qui changé les propriétés d’un serveur
        Minecraft. C’est en les modifiants, avoir quelque chose qui était selon
        ma vision ou mes envies, que cela a lancé ma passion pour le web. Je me
        suis donc orienté après le BAC dans un BTS orienté développement orienté
        objet (C#), puis une Licence Professionnelle et une formation
        Openclassrooms sur le développement web.
        </motion.p>
        <motion.p
        className="global__info__resume"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay:1 }}
      >
        Je suis désormais titulaire d’un double bac + 3 et à la recherche d’un
        emploi en tant que Développeur Frontend.
        </motion.p>
        <motion.p
        className="global__info__resume"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay:1.5 }}
      >
        J'ai des connaissances en React, React Router, Sass et Three.js. 
        J'apprends d'autres librairies pendant mon temps libre et développe un projet personnel en même temps.
        </motion.p>
      <motion.div
        className="global__info__cards"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay:2 }}
      >
        <GlobalInfoCard
          class="education"
          img={Education}
          imgclass="global__info__cards__education"
          title="Diplômes"
          text="Bac+3/4: Développeur JavaScript React"
          secondtext="Bac+3: Licence T2I"
        />
        <GlobalInfoCard
          class="office"
          img={Office}
          imgclass="global__info__cards__office"
          title="Expérience Pro"
          text="4 Mois d'éxpérience"
        />
        <GlobalInfoCard
          class="project"
          img={Project}
          imgclass="global__info__cards__projects"
          title="Projets"
          text="11+ Projets"
        />
      </motion.div>
      <motion.div
        className="intro__arrow"
        initial={{ y: -5, opacity:0, rotate:180}}
        whileInView={{y:[-5,0,-5], opacity:1}}
        viewport={{ once: true }}
        transition={arrowTransition}
        whileHover={{scale:1.3}}
      >
        <HashLink to="#navbar">
          <DoubleArrowIcon />
        </HashLink>
      </motion.div>
    </section>
  );
}

export default CurriculumVitae;
