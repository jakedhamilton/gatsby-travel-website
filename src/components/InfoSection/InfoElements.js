import styled from 'styled-components'
import {motion} from 'framer-motion';

export const InfoContainer = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 100px;
        margin-top: 0px;
        color: #000;
    }

    p {
        margin-top: 8px;
        color: #000;
        font-size: 32px;
    }
`