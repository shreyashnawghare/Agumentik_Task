import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Shreyash.
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="https://www.linkedin.com/in/shreyash-nawghare1/">
          <SocialIcon url="https://linkedin.com/in/shreyash-nawghare1/" />

        </a>

        <a className={css.email} href="https://www.instagram.com/shreyash_nawghare/">
          <SocialIcon url="https://www.instagram.com/shreyash_nawghare/" />
        </a>
        <a className={css.email} href="https://www.facebook.com/ninad.nawghare.3">
          <SocialIcon url="https://www.facebook.com/ninad.nawghare.3" />
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText"></div>
            <div className="secondaryText">
              <div>Fresher</div>
              <div>Developer</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED</span>
            <span>Frontend/Full Stack Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
