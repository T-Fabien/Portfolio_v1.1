import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import CV from "../assets/other/CV_THIOT_Fabien.pdf";
import { duration } from "@mui/material";

function Intro() {

  const arrowTransition = {
    y: {
      type: "spring",
      stiffness: 100,
      duration: 1.5,
      delay: 3.5,
      repeat: Infinity,
      repeatType: "mirror"
    },
    opacity: {
      duration:2,
      delay: 3.5,
    },
  }


  return (
    <section className="intro" id="intro">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
      >
        Bonjour, je suis Fabien
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 1.5 }}
      >
        Je suis Développeur Front-end
      </motion.h1>
      <div className="icons">
        <motion.a
          href="https://www.linkedin.com/in/fabien-thiot/"
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 2.5,
          }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="mailto:fabienthiot@gmail.com"
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            delay: 2.75,
          }}
        >
          <EmailIcon />
        </motion.a>
        <motion.a
          href="https://github.com/T-Fabien"
          initial={{ y: 250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            delay: 3,
          }}
        >
          <GitHubIcon />
        </motion.a>
      </div>
      <div className="intro__contact">
        <motion.button
          className="intro__btn btn_primary"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 3,
            stiffness: 60
          }}
        >
          <a href={CV} download="CV_THIOT_Fabien.pdf">
            Télécharger le CV
          </a>
          <i></i>
        </motion.button>
        <motion.button
          className="intro__btn btn_primary"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 3,
            stiffness: 60
          }}
        >
          <a href="mailto:fabienthiot@gmail.com">Contactez moi</a> <i></i>
        </motion.button>
      </div>
      <motion.div
        className="intro__arrow"
        initial={{ y: -5, opacity:0}}
        animate={{y:[-5,0,-5], opacity:1}}
        transition={arrowTransition}
        whileHover={{scale:1.3}}
      >
        <HashLink to="#global__info">
          <DoubleArrowIcon />
        </HashLink>
      </motion.div>
    </section>
  );
}

export default Intro;
