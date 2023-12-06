"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { styles } from '../styles'
import { navLinks } from '../constants'
import logo from '../assets/logo_color.svg'
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
                }`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    href="/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image src={logo} alt='logo' width={36} height={36} className='object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Herbert &nbsp;
                        <span className='sm:block hidden'> | &nbsp;
                            Fullstack Web Portfolio</span>
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${active === Link.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Image src={toggle ? close : menu} alt='menu' width={28} height={28} className='object-contain' onClick={() => setToggle(!toggle)} />

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] text-green-400`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(Link.title);
                                    }}
                                >
                                    <a href={`#${Link.id}`}>{Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    )
}

export default Navbar;