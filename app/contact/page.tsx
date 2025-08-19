"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations';


// interface for the Formadata
interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage(){

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<FormStatus>("idle");


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw new Error("Failed to send message");
            }

            setStatus("success");

            setFormData({
                name:"",
                email:"",
                message:""
            })


        } catch (error) {
            setStatus("error");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData( prev =>  ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div className="container max-w-7xl mx-auto py-20">
            <motion.h1 {...fadeInUp} className="text-center text-4xl font-bold mb-20">Contact Me</motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* contact information */}
                <motion.div {...slideInLeft} className="space-y-8">
                    <motion.div  {...fadeInUp}>
                        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                        <p className="text-secondary md:w-2/3">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    </motion.div>


                    <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-4">

                        <motion.div variants={fadeInUp} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4">
                            <FaEnvelope className="h-6 w-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=khumboklein@gmail.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">khumboklein@gmail.com</Link>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4">
                            <FaPhone className="h-6 w-6 text-primary" />

                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <Link href="tel:+265997229558" target="_blank" className="text-secondary hover:text-primary">+265997229558</Link>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4">
                            <FaWhatsapp className="h-6 w-6 text-primary" />

                            <div>
                                <h3 className="font-semibold">Whatsapp</h3>
                                <Link href="https://wa.me/265882489518?text=Hello%20Khumbo%2C%20I%20want%20to%20connect!" target="_blank" className="text-secondary hover:text-primary">+265882489518</Link>
                            </div>
                        </motion.div>


                        <motion.div variants={fadeInUp} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center gap-4">
                            <FaMapMarkerAlt className="h-6 w-6 text-primary" />

                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-secondary">Blantyre, Malawi</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>



                {/* contact form */}
                <motion.div {...slideInRight} className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
                    <motion.form variants={fadeIn} initial="initial" animate="animate" onSubmit={handleSubmit} className="space-y-6">
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input required value={formData.name} onChange={handleChange} type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"/>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input required value={formData.email} onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"/>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <label htmlFor="messae" className="block text-sm font-medium mb-2">Message</label>
                            <textarea rows={5} required value={formData.message} onChange={handleChange} name="message" id="message" placeholder="Enter your message" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-none"/>
                        </motion.div>

                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-primary text-white py-2 rounded-md cursor-pointer">
                            { status === "loading" ? "Sending....": "Send Message" }
                        </motion.button>

                        {
                            status === "success" && (
                                <p className="text-green-500 text-center mt-4 text-">Message sent successfully!!!</p>
                            )
                        }

                        {
                            status === "error" && (
                                <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                            )
                        }
 
                    </motion.form>
                </motion.div>

            </div>
        </div>
    )
}