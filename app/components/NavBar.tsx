'use client';

import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"
import { useTheme } from "../context/ThemeContext";

export default function NavBar(){
    const {theme, toggleTheme} = useTheme();
    // const theme = "dark";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    } 

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ]

    return(
        <nav className="w-full bg-white dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="container max-w-7xl mx-auto px-4">
                {/* desktop */}
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl text-primary font-bold">CodeWithKhumbo&trade;</Link>

                    {/* desktop menu items */}
                    <div className="hidden md:flex items-center space-x-8">
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return(
                                    <Link className={`hover:text-primary transition-colors font-medium ${isActive ? 'text-primary' : ''}`} key={item.href} href={item.href}>{item.label}</Link>
                                )
                            })
                        }

                        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-600 dark:text-white dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            {
                                theme === "dark" ? (
                                    <SunIcon className="w-5 h-5" />
                                ) : (
                                    <MoonIcon className="w-5 h-5"/>
                                )
                            }
                        </button>
                    </div>

                    {/* mobile menu button */}
                    <button onClick={toggleMobileMenu} type="button" className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        {
                            isMobileMenuOpen ? (<XMarkIcon className="w-6 h-6"/>) : (<Bars3Icon className="w-6 h-6"/>)
                        }
                    </button>

                </div>

                {/* mobile */}
                {
                    isMobileMenuOpen && (
                        <div className="md:hidden">
                            <div className="py-4 space-y-4">
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={toggleMobileMenu}>
                                            <Link className="block py-2 hover:text-primary transition-colors" href={item.href}>{item.label}</Link>
                                        </div>
                                    ))
                                }

                                <div>
                                    <button onClick={toggleTheme} className="flex items-center py-2 hover:text-primary transition-colors">
                                        {
                                            theme === "dark" ? (
                                                <><SunIcon className="w-5 h-5 mr-2" />Light Mode</>
                                            ) : (
                                                <><MoonIcon className="w-5 h-5 mr-2"/>Dark Mode</>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}