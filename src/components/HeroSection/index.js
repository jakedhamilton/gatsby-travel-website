import React from 'react'
import { HeroContainer, HeroBtns } from './HeroElements'
import { Button } from '../ButtonElements'
import {motion} from 'framer-motion';
import {titleAnim, fade} from '../../animation';

const HeroSection = () => {
    return (
        <HeroContainer>
            <motion.h1 variants={fade}>Travel More</motion.h1>
            <motion.p variants={fade}>Plan your next trip today</motion.p>
            <HeroBtns>
                <Button variants={fade} fontBig big primary >Get Started</Button>
            </HeroBtns>
        </HeroContainer>
    )
}

export default HeroSection