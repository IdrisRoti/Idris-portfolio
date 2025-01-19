"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { motion, useMotionValue } from 'framer-motion'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

const DRAG_BUFFER = 20;
const SWIPE_AUTO_DELAY = 5000;

const ImageCarousel = ({images, name}:{images: string[], name: string}) => {

    const [slideIndex, setSlideIndex] = useState(0)
    const [dragging, setDragging] = useState(false)

    const dragX = useMotionValue(0);

    const onDragStart = () => {
        setDragging(true)
    }

    const onDragEnd = () => {
        setDragging(false)

        const x = dragX.get();

        if(x <= -DRAG_BUFFER && slideIndex < images.length - 1){
            setSlideIndex(prev => prev + 1)
        } else if(x >= DRAG_BUFFER && slideIndex > 0){
            setSlideIndex(prev => prev - 1)
        }
    }

    useEffect(() => {
      if(!dragging){
        const swipeInterval = setInterval(()=> {
            setSlideIndex(prev=> prev < images.length - 1 ? prev + 1 : 0)
          }, SWIPE_AUTO_DELAY)
        
          return () => {
            clearInterval(swipeInterval)
          }
      }
    }, [dragging, images.length])


  return (
    <motion.div 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: .5, delay: .6 }}
        onMouseEnter={()=> 
        setDragging(true)} 
        onMouseLeave={()=> 
        setDragging(false)} 
        className='w-full max-lg:sm:mx-auto relative group'>
        <div className="w-full overflow-hidden">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0
                }}
                animate={{
                    translateX: `-${slideIndex * 100}%`
                }}
                style={{
                    x: dragX
                }}
                transition={{
                    type: "spring",
                    mass: 3,
                    stiffness: 300,
                    damping: 50
                }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className='flex items-center h-[15rem] w-full cursor-grab active:cursor-grabbing'> 
                    {
                        images.map((url)=>(
                            <div className='h-full w-full shrink-0 scale-[98%]' key={url}>
                                <Image 
                                    className='object-cover pointer-events-none h-full w-full' 
                                    src={url} 
                                    width={400} 
                                    height={400} 
                                    alt={name} 
                                />
                            </div>
                        ))
                    }
            </motion.div>
        </div>
        {/* ********** CAROUSEL BUTTONS ************* */}
        <button 
            onClick={()=>{setSlideIndex(prev => prev >= 1 ? prev - 1 : 0)}}
            className='boxShadow z-[100] absolute -left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 hidden group-hover:flex items-center justify-center transition rounded-full w-10 aspect-square '>
            <CgChevronLeft />
        </button>
        <button 
            onClick={()=>{setSlideIndex(prev => prev < (images.length - 1) ? prev + 1 : images.length - 1)}}
            className='boxShadow z-[100] absolute -right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 hidden group-hover:flex  items-center justify-center transition rounded-full w-10 aspect-square'>
            <CgChevronRight />
        </button> 
            {/* ********** CAROUSEL PAGINATION ************* */}
        <div className='flex gap-3 h-1 px-4'>
            {images.map((url, i)=>(
                <div className='w-full h-full' key={url}>
                    <button        
                        onClick={()=> setSlideIndex(i)}
                        className={`w-full h-full relative rounded-full  bg-white shadow`} 
                    >                   
                        {slideIndex === i && (
                            <motion.span
                                layoutId='swiperPagination'
                                className='absolute bg-rose-400 inset-0 rounded-full z-10'></motion.span>
                        )}
                    </button>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default ImageCarousel