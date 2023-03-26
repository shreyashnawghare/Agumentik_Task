import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      <a className="anchor" id="footer"></a>
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>145, FL 5467, PUNE</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul><hr></hr>
          <br></br>
          <a className={css.email} href="https://www.linkedin.com/in/shreyash-nawghare1/">
          <SocialIcon url="https://linkedin.com/in/shreyash-nawghare1/" />
        </a>

        <a className={css.email} href="https://www.instagram.com/shreyash_nawghare/">
          <SocialIcon url="https://www.instagram.com/shreyash_nawghare/" />
        </a>
        <a className={css.email} href="https://www.facebook.com/ninad.nawghare.3">
          <SocialIcon url="https://www.facebook.com/ninad.nawghare.3" />
        </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
