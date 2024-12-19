import React from 'react'
import { Typography } from '@mui/material'
import theme from '../../lib/MUIutils/theme'
import { AboutSustainabilityStyled } from '../styles/aboutSectionsStyles/aboutSustainabilityStyled'


const AboutSustainability = () => {
    return (
        <>
            <AboutSustainabilityStyled>
                <div className='title-sustainability'>
                    <Typography variant='h2' sx={{ color: theme.palette.grey[600], letterSpacing: '0.1em' }}>FOR SUSTAINABLE DEVELOPMENT</Typography>
                    <Typography variant='h3'>Placeholder</Typography>
                </div>
                <div className='sustainability-container'>
                    <div className='sustainability'>
                        <img src='/assets/images/sustainability-placeholder.png' alt='Sustainability Logo' style={{ width: '100%', paddingRight: '100px' }} />
                    </div>
                    <div className='sustainability'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </AboutSustainabilityStyled>

        </>
    )
}

export default AboutSustainability;
