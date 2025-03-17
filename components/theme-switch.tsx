"use client";
import { useTheme } from '@/context/theme-context';
import { BsMoon, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <motion.button 
            className='fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
            border shadow-lg rounded-full flex items-center justify-center
            transition-all duration-300 ease-in-out
            dark:bg-gray-800 bg-white 
            dark:border-gray-600 border-gray-200
            hover:ring-2 hover:ring-offset-2 hover:ring-offset-transparent
            dark:hover:ring-blue-400 hover:ring-yellow-400
            z-10'
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        > 
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "light" ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {theme === "light" ? (
                    <BsSun className="text-yellow-500 text-xl absolute" />
                ) : (
                    <BsMoon className="text-blue-300 text-xl absolute" />
                )}
            </motion.div>
        </motion.button>
    );
}
