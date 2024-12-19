import React from 'react'
import { Typography } from '@mui/material'
import { AboutImpactStyled } from '../styles/aboutSectionsStyles/aboutImpactStyled'
import AboutNumberReport from './aboutNumberReport'


const AboutImpact = () => {
    return (
        <>
            <AboutImpactStyled>
                <div className='title-impact'>
                    <Typography variant='h2'>REDUCING THE IMPACT</Typography>
                    <Typography variant='h3'>Key Numbers</Typography>
                </div>
                <AboutNumberReport />
            </AboutImpactStyled>
        </>
    )
}

export default AboutImpact;
