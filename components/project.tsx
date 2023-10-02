"use client"
import {useScroll, motion, useTransform} from "framer-motion";
import React, { useRef } from 'react'
import { links, projectsData } from '@/lib/data'
import Image from 'next/image';
import Link from "next/link";

type ProjectProps = typeof projectsData[number];

function Project({
    title,
    description,
    tags,
    imageUrl,
    visit 
}:ProjectProps){

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);

    return(
        <motion.div 
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
            >
              <section
                className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]
                     sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                    <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full sm:group-even:ml-[18rem]'>

                        <h3 className='text-2xl font-semibold'>{title}</h3>

                         <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>

                         <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                             {tags.map((tag, index) =>(
                            <li className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white
                                    rounded-full dark:text-white/70" 
                                key={index}>{tag}
                                </li>
                                
                                ))}
                        </ul>
                        <ul className="mt-4">
                            {visit.map((data, index) =>(
                                <li key={index}><a href={data} target="blank"
                                className=" flex items-center justify-center  h-[3rem] w-[5rem] bg-gray-800 text-white rounded-full outline-none
                                transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 
                                dark:bg-white dark:bg-opacity-10"
                                >Live</a></li>
                            ))}
                        </ul>

                    </div>
           
                        <Image className=' hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                                group-even:right-[initial] group-even:-left-40 group-hover: -translate-x-3 group-hover:translate-y-3
                                group-hover:-rotate-2 transition group-hover:scale-[1.04] 
                                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
                                 group-even:group-hover:rotate-2'
                                src={imageUrl} alt="Project" quality={95}/>
                </section>
        </motion.div>
      
    )
}

export default Project;