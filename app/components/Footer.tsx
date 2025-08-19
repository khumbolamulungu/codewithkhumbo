import Link from "next/link";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-white dark:bg-dark border-t  border-gray-200 dark:border-gray-800">
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-bold text-primary">CodeWithKhumbo&trade;</Link>
                        <p className="text-sm text-secondary mt-2">@ {new Date().getFullYear()} CodeWithKhumbo. All rights reserved.</p>
                    </div>

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
                </div>
            </div>
        </footer>
    )
}