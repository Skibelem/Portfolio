import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
    {
        name: 'Home',
        to: '',
        active: 'home'
    },
    {
        name: 'About Me',
        to: 'about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: 'portfolio',
        active: 'Portfolio'
    }
]

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


export default function Navbar({ darkMode, handleClick, active, setActive }) {
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    const handleLinkClick = (linkActive) => {
        setActive(linkActive);
        setBurgerOpen(false);
    };

    return (
        <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode ? Style.dark : Style.light}>
            {/* Initials logo on small screens */}
            <Box className={Style.initialsLogo} sx={{ display: { xs: 'block', md: 'none' }, color: darkMode ? 'white' : 'black', fontWeight: 'bold', fontSize: '2.5rem', pl: 2, pt: 1 }}>
                <Link to={singlePage ? "#home" : "/"} scroll={el => scrollWidthOffset(el)} smooth style={{ textDecoration: 'none', color: darkMode ? 'white' : 'black' }}>
                    {info.initials}
                </Link>
            </Box>
            <Box className={Style.burgerMenuIcon}>
                <IconButton onClick={toggleBurger} aria-label="menu" size="large" sx={{ color: darkMode ? 'white' : 'black' }}>
                    {burgerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>
            <Box component={'ul'} className={`${Style.navLinks} ${burgerOpen ? Style.open : ''}`}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active) ? Style.active : ''} sx={{ borderImageSource: info.gradient, display: link.type === 'initials' ? { xs: 'none', md: 'block' } : 'block', fontWeight: link.type === 'initials' ? 'bold' : 'normal', fontSize: link.type === 'initials' ? '2.5rem' : '1rem' }}>
                        <Link to={singlePage ? `#${link.to}` : `/${link.to}`} scroll={el => scrollWidthOffset(el)} smooth onClick={() => handleLinkClick(link.active)} className={Style.link}>
                            <p style={{ padding: '0.5rem 0' }}>{link.name}</p>
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    );
}
