import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer } from './InfoElements'
import {fade} from '../../animation'
import { useScroll } from '../useScroll'

const InfoSection = () => {
    const [element, controls] = useScroll();
    return (
        <InfoContainer variants={fade} animate={controls} initial="hidden" ref={element}>
            <h1>Information Section</h1>
            <p>This is another test section for the Hero page.</p>
            <Button fontBig big primary >Get Started</Button>
        </InfoContainer>
    )
}

export default InfoSection
