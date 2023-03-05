import React from 'react'
import {BsGithub} from "react-icons/bs"
import {GrLinkedinOption} from "react-icons/gr"
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import css from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter ${css.container}`}>
            <div className={css.icons}>

            
            <a href='#' className={css.icon}>
                <FaFacebookF/>
            </a>
            <a href='https://www.linkedin.com/in/sameer-ateeq-338407228' className={css.icon} target="_blank">
                <GrLinkedinOption/>
            </a>
            <a href='https://github.com/SameerAteeq' className={css.icon} target="_blank">
                <BsGithub/>
            </a>
            
            </div>
            <div className={css.name}>
                <span>Muhammad Sameer</span>
                <AiOutlineCopyrightCircle/>
                <span>2023</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer