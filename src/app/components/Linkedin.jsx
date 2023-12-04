"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Linkedin = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
          <div
            className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
          >
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Chat with me through</p>
              <h2 className={styles.sectionHeadText}>Linkedin.</h2>
              <Link
              href='https://www.linkedin.com/in/herbert-orellana/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");            
              }}
            >
              <p className='text-[#25ada4] text-[18px] font-bold cursor-pointer flex '>
                Click on this Link &nbsp;
              </p>
            </Link>          
            </motion.div>
          </div>
    
        </div>
      );
}

export default SectionWrapper(Linkedin, "");