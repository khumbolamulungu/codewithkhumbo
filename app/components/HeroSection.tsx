"use client";

import Image from "next/image";
import Link from "next/link";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";


const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05, // delay between each letter
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export default function HeroSection(){
    const text = "Hi, I'm Khumbo Klein Chilamwa";
    return(
        <section className="py-28 container max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                {/* image for hero section */}
                <motion.div
                    {...scaleIn}
                    transition={{delay: 0.2}}
                     className="flex flex-col items-center mb-4">
                    <Image src="/khumbo.png" alt="profile picture" height={100} width={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
                </motion.div>


                {/* h1 text */}
                {/* <motion.h1 {...fadeInUp} transition={{delay: 0.3}} className="text-4xl md:text-6xl font-bold mb-6">Hi, I&apos;m <span className="text-primary">Khumbo Klen Chilamwa</span></motion.h1> */}

                <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.9}}
                    className="text-4xl md:text-6xl font-bold mb-6"
                    >
                    {/* Intro text */}
                    {"Hi, I'm ".split("").map((char, i) => (
                        <motion.span key={i} variants={letter}>
                        {char}
                        </motion.span>
                    ))}

                    {/* Highlighted name */}
                    <span className="text-primary">
                        {"Khumbo Klein Chilamwa".split("").map((char, i) => (
                        <motion.span key={`name-${i}`} variants={letter}>
                            {char}
                        </motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.p {...fadeInUp} transition={{delay: 0.5}} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">Full-Stack Developer | UI/UX Specialist | Content Writing Enthusiast</motion.p>

                {/* social handler links with icons*/}
                <div className="flex justify-center space-x-4 mb-8">
                    {/* github link */}
                    <Link href="https://github.com/khumbolamulungu" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                        <FaGithub />
                    </Link>

                    {/* linkedin link */}
                    <Link href="https://www.linkedin.com/in/khumbo-klein-chilamwa-968028140/" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                        <FaLinkedin />
                    </Link>

                    {/* twitter/x link */}
                    <Link href="https://x.com/adha_chilamwa" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                        <FaTwitter />
                    </Link>

                    {/* dev link */}
                    <Link href="https://dev.to/khumbolamulungu/" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300">
                        <FaDev />
                    </Link>
                </div>

                {/* links */}
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link href="/projects" className="bg-primary rounded-lg px-8 py-3 inline-block text-white w-full md:w-auto hover:bg-primary/80 transition-colors">View Projects</Link>
                    <Link href="/contact" className="bg-gray-500 rounded-lg px-8 py-3 inline-block text-white w-full md:w-auto hover:text-gray-500 hover:bg-gray-300 transition-colors">Contact Me</Link>
                </div>


            </div>
        </section>
    )
}