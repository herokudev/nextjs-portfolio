"use client";

import React from "react";
import Image from "next/image";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { useMediaQuery } from 'react-responsive';

const Tech = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return ( 
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
                <Image src={technology.icon} alt='technology.name' width={96} height={96} className='object-contain' />
            </div>
            ))}
        </div>        
      );
}

export default SectionWrapper(Tech, "");