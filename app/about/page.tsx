"use client";

import Link from "next/link";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations';


export default function AboutPage(){
    return(
        <div className="container max-w-7xl mx-auto py-20">
            <motion.h1 {...fadeInDown} className="text-4xl font-bold mb-8 text-center">About Me</motion.h1>

            <motion.section {...fadeInUp} className="mb-16">
                <p className="text-secondary text-lg max-w-3xl mx-auto text-center">I&apos;m a passionate Full Stack Developer with expertise in building modern web and mobile applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>
            </motion.section>

            {/* skills  section*/}
            <motion.section {...fadeIn} transition={{delay: 0.2}} className="mb-16">
                <motion.h2 {...fadeInUp} className="section-title">Skills</motion.h2>
                <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <motion.div variants={fadeInUp} {...cardHover} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaCode className="h-8 w-8 text-primary mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>JavaScript | NextJS</li>
                            <li>Tailwind CSS | Bootstrap</li>
                            <li>HTML5 | CSS3</li>
                            <li>Figma</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} {...cardHover} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaLaptopCode className="h-8 w-8 text-primary mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Backend</h3>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Python | Django | Flask</li>
                            <li>C#</li>
                            <li>PostgreSQL | MySQL | SQLite3</li>
                            <li>APIs</li>
                        </ul>
                    </motion.div>


                    <motion.div variants={fadeInUp} {...cardHover} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <FaGraduationCap className="h-8 w-8 text-primary mb-4"/>
                        <h3 className="text-xl font-semibold mb-2">Tools and Others</h3>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Git</li>
                            <li>Linux | Windows</li>
                            <li>ReacNative | Lynx</li>
                            <li>Photoshop | Canva</li>
                        </ul>
                    </motion.div>

                    
                </motion.div>
            </motion.section>

            {/* experience section */}
            <motion.section {...fadeIn} transition={{ delay: 0.4 }} className="mb-16">
                <motion.h2 {...fadeInUp} className="section-title">Experience</motion.h2>

                <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-3xl mx-auto space-y-8">
                    <motion.div variants={fadeInUp} {...cardHoverSmall} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Lead Software Engineer</h3>
                        <Link href="" target="_blank"><p className="text-primary mb-2">Associatech Digital Solutions | 2023 - Present</p></Link>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Design and develop fintech software solutions.</li>
                            <li>Lead technical teams and provide guidance on complex projects.</li>
                            <li>Collaborate with stakeholders to deliver tailored solutions.</li>
                            <li>Ensure quality through rigorous testing and assurance processes.</li>
                            <li>Create and maintain comprehensive software documentation.</li>
                            <li>Train staff and provide support after successful project implementation.</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} {...cardHoverSmall} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Technical Content Writer - REMOTE</h3>
                        <Link href="" target="_blank"><p className="text-primary mb-2">Pythonguis.com | 2022 - 2024</p></Link>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Conducting thorough research on assigned topics to ensure accuracy and depth in content</li>
                            <li>Review and edit content for clarity, grammar, and coherence before submission</li>
                            <li>Working with editors to come up with the most comprehensive tutorials</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} {...cardHoverSmall} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Junior Developer and IT Specialist - INTERNSHIP</h3>
                        <Link href="" target="_blank"><p className="text-primary mb-2">Kamuzu University of Health Sciences | September 2019 - December 2019</p></Link>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Building websites (was part of the team that developed a website for the finance department)</li>
                            <li>Data administration (was a data admin for the Curriculum Management System for the institution)</li>
                            <li>Assembling computer machines in offices and different academic facilities and installing necessary softwares</li>
                            <li>Upgrading and updating desktop machines and laptops in designated areas</li>
                            <li>Network troubleshooting</li>
                        </ul>
                    </motion.div>
                </motion.div>

            </motion.section>

            {/* education skills */}
            <section className="mb-16">
                <h2 className="section-title">Education</h2>

                <motion.div variants={fadeInUp} {...cardHoverSmall} className="max-w-3xl mx-auto space-y-8">

                    <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Systems and Security</h3>
                        <Link href="" target="_blank"><p className="text-primary mb-2">Malawi University of Science and Technology | 2016 - 2021</p></Link>
                        <p className="text-secondary">With focus in:</p>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <li>Software Engineering</li>
                            <li>Web Development</li>
                            <li>Cyber and Information Security</li>
                            <li>Database Design and Administration</li>
                            <li>Etc</li>
                        </ul>
                    </div>
                </motion.div>

            </section>


            {/* published articles */}
            <section className="mb-6">
                <h2 className="section-title">Published Articles</h2>

                <motion.div variants={fadeInUp} {...cardHoverSmall} className="max-w-3xl mx-auto space-y-8">

                    <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                        
                        
                        <p className="text-secondary">Here are the links:</p>
                        <ul className="text-secondary space-y-2 list-disc list-inside">
                            <Link className="hover:text-primary" href="https://www.pythonguis.com/authors/khumbo-klein/" target="_blank"><li>pythonguis.com</li></Link>
                            <Link className="hover:text-primary" href="https://thepythoncode.com/author/khumbo-klein" target="_blank"><li>thepythoncode.com</li></Link>
                            <Link className="hover:text-primary" href="https://dev.to/khumbolamulungu/" target="_blank"><li>dev.to</li></Link>
                            <Link className="hover:text-primary" href="https://sparkbyexamples.com/author/khumbokleingmail-com/" target="_blank"><li>SparkByExamples.com</li></Link>
                            <Link className="hover:text-primary" href="https://www.sitepoint.com/author/kchilamwa/" target="_blank"><li>SitePoint.com</li></Link>
                            <Link className="hover:text-primary" href="https://soshace.com/the-ultimate-guide-to-pip/" target="_blank"><li>Soshace.com</li></Link>
                        </ul>
                    </div>
                </motion.div>

            </section>

        </div>
    )
}