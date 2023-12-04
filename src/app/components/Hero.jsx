"use client";

import React from 'react';
import { styles } from "../styles";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';

function Model(props) {
    const { scene } = useGLTF("/bmw.glb");
    return <primitive object={scene} {...props} />
  }

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            <section className={`relative w-full h-[325px] mx-auto`}>
                <div
                className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#25ada4]' />
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#25ada4] to-green-950' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm <span className='text-[#25ada4]'>Herbert</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I can help you empower <br className='sm:block hidden' />
                    your web identity !!
                    </p>
                </div>
                </div>
            </section>   
            {isMobile ?       
                <br /> 
                : 
                <section className={`relative w-[600px] h-[400px] lg:ml-[15%] sm:ml-[5%]`}>
                <Canvas dpr={[1,2]} shadows camera={{ fov: 45 }} style={{"position": "absolute"}}>
                    <color attach="background" args={["#101010"]} />
                    <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment={"sunset"}>
                        <Model scale={0.01} />
                        </Stage>
                    </PresentationControls>
                    </Canvas>
                </section>        
            }               
        </div>
        
    )
}

export default Hero;