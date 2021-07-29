import React from 'react'
import { HeroContainer, HeroBtns } from './HeroSection'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <h1>Travel More</h1>
            <p>Plan your next trip today</p>
            <HeroBtns>
                <Button fontBig big primary >Get Started</Button>
            </HeroBtns>
        </HeroContainer>
    )
}

export default HeroSection