import React, { useState } from 'react'
import css from "./header.module.scss";
import {motion} from "framer-motion"
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
const Header = () => {
  const[menuOpened,setMenuOpened]= useState(false);
  const headerShadow = useHeaderShadow()

  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false, amount:0.25}}
    className={`bg-primary paddings ${css.wrapper}`}
    style={{boxShadow:headerShadow}}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
          <div className={css.name}>
            <a href='#home'>
              Muhammad Sameer
            </a>
          </div>
          <ul 
          className={`flexCenter ${css.menu}`}
           style={getMenuStyles(menuOpened)}
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* For small and medium devices.. */}

          <div className={css.menuIcon}
          onClick={()=>setMenuOpened(!menuOpened)}
          >
            <BiMenuAltRight size={30}/>
          </div>

      </div>
    </motion.div>
  )
}

export default Header