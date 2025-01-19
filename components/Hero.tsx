"use client"

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { textVariant } from './animationVariants'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  })

  const heightValue = useTransform(scrollYProgress, [0, 1], [50, 100]);
  // const opacity = useTransform(scrollYProgress, [0, .5], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, .5], [0, 50]);

  const height = useMotionTemplate`${heightValue}vh`
  const y = useMotionTemplate`${yValue}%`

  return (
    <div ref={containerRef} className='max-w-[75rem] mx-auto px-4 lg:h-[200vh] pt-28'>
        <h1 className="text-[3rem] md:text-[9rem] leading-[1] flex flex-col justify-start uppercase tracking-wider">
            <motion.span className='flex overflow-hidden'>
              {
                "idris".split("").map((char, i) => (
                  <motion.span
                    custom={i*0.03} 
                    variants={textVariant} 
                    initial="exit" 
                    animate="enter" 
                    key={i}
                  >
                        {char}
                  </motion.span>
                ))
              }
            </motion.span>
            <span className='flex overflow-hidden'>
              {
                "omisakin".split("").map((char, i) => (
                  <motion.span  
                    custom={i*0.03} 
                    variants={textVariant} 
                    initial="exit" 
                    animate="enter" 
                    key={i}>{char}</motion.span>
                ))
              }
            </span>
        </h1>
        <motion.div
          style={{
            height,
            // opacity,
            y
          }}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ delay: .5, duration: .8}}
          className="relative mt-10 w-full hidden lg:block">
            <Image
                src="/code.jpg"
                alt="Photo showing code on screens and glasses on table"
                fill
                className='object-cover object-bottom'
            />
        </motion.div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ delay: .5, duration: .8}}
          className="relative mt-10 h-[50vh] w-full lg:hidden">
            <Image
                src="/code.jpg"
                alt="Photo showing code on screens and glasses on table"
                fill
                className='object-cover object-bottom'
            />
        </motion.div>
    </div>
  )
}

export default Hero