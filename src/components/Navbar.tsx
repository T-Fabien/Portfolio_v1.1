import React from "react";
import { NavLink } from "react-router-dom";

import {motion} from 'framer-motion'
import { duration } from "@mui/material";

function Navbar() {

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration:2
      },
    },
  }
  
  const item = {
    visible: { opacity: 1, y: 0},
    hidden: { opacity: 0, y: -50 },
  }


  return (
      <motion.nav id="navbar"
      initial="hidden"
      animate="visible"
      variants={list}
      >
        <motion.div variants={item}>
        <NavLink to="" end className="link">
          ACCEUIL
        </NavLink>
        </motion.div>
        <motion.div variants={item}>
        <NavLink to="/aboutme" end className="link">
          A PROPOS
        </NavLink>
        </motion.div>
        <motion.div variants={item}>
        <NavLink to="/projects" end className="link">
          PROJETS
        </NavLink>
        </motion.div>
      </motion.nav>
  );
}

export default Navbar;
