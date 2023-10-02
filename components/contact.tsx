"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    

  return (
    <motion.section id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true,
    }}
    ref={ref}
    > 
       
        <SectionHeading>Contact Me</SectionHeading>

        <p className='text-center text-gray-700 -mt-3 dark:text-white/80'>Contact me directly at{" "}
            <a className='underline' href='mailto:tenam2000@hotmail.com'>tenam2000@hotmail.com</a>
        </p>

        <form className="group mt-10 flex flex-col dark:text-black" action={async (formData) => {
           const{data, error} =  await sendEmail(formData);
           if(error){
            toast.error(error);
            return;
           }
           toast.success("Email sent successfully")
        }} >

            <input className="px-4 h-14 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" type='email'
            name='senderEmail'
            placeholder='Your Email' required
            maxLength={200}/>

            <textarea 
            name='message'
            placeholder='Your Message'
            className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
            required
            maxLength={1000}/>

            <SubmitBtn />
        </form>
    </motion.section> 
  )
}
