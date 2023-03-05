import { Progress } from '@mantine/core';
import React from 'react'
import { SkillsData } from '../../utils/data';
import css from "./About.module.scss";
import {motion} from "framer-motion"
import { fadeIn, headerVariants, slideIn, staggerChildren } from '../../utils/motion';
const About = () => {
  return (
    <motion.section className={`paddings ${css.wrapper}`}
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0 }}
    >
      <a className='anchor' id='about'></a>
        <motion.h1 variants={slideIn("up", "tween", 0.1 ,.1)} className='primaryText'>About Me</motion.h1>
      <div className={`${css.aboutMe}`}>

        {/* description */}

        <motion.div variants={slideIn("up", "tween", 0.2 ,1.1)} className={css.description}>
          <span className='secondaryText'>I am a Frontend Web Developer who is passionate to learn coding. I can create the user friendly websites and hardworking person who always try to give his best in the team. I always love to learn new skills and modern technologies. Currently I am working on Frontend and I use React js for frontend. Moreover for the future my goal is to be a Full Stack Developer.  </span>
        </motion.div>

        {/* Skills */}

        <motion.div variants={fadeIn("left", "tween", 0.2, 2)} className={css.skills}>
          {SkillsData.map((item)=>(
            <div  key={item.id} className={css.skillsBar}>
              <span>{item.name}</span>
            <Progress
            size="xl"
            sections={[
              { value: item?.value, color: 'rgba(35,15,115,0.6615021008403361)', },
              { value: Math.floor(`${100% - item?.value}`), color: '#ddd', },
            
            ]}
            />
            </div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About