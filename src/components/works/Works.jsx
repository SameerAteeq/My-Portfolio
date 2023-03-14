import React from 'react'
import css from "./work.module.scss";
import {motion} from "framer-motion"
import { chilrenVariant, fadeIn, staggerChildren } from '../../utils/motion';
import { worksData } from '../../utils/data';
import {AiOutlineEye} from "react-icons/ai"

const Works = () => {
  return (
    <motion.section variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount:0.12}}
    className={`paddings ${css.wrapper}`}>
        <a className='anchor' id='work'></a>
        <h1 className='primaryText'>My Latest Works</h1>
        <span className={css.thought}>Following projects showcases my skills and passion to learn coding. Each project is briefly described with demo links. </span>
        <motion.div variants={fadeIn("up","tween",0.4, 1)} className={`${css.showCase}`}>
        {worksData?.map((item,index)=>(
            <motion.div variants={chilrenVariant} custom={index} key={item.id} className={css.showCaseItem} >
              <div className={css.ImgContainer}>
                <img src={item.img} alt="project" />
              <a href={item.link} className={css.live} target="_blank">
                <button className={css.liveBtn}>Demo <AiOutlineEye size={20}/> </button>
              </a>
              </div>
              <h3 className={css.name}>{item.name}</h3>
              <h6 className={css.warning}>{item?.warning}</h6>
            <span className={css.description}>
              {item.description}
            </span>
          </motion.div>
          ))}
         </motion.div>
          
       

    </motion.section>
  )
}

export default Works