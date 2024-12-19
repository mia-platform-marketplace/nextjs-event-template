import React from 'react'
import { Typography } from '@mui/material'
import theme from '../../lib/MUIutils/theme'
import { SimpleBannerStyled } from '../styles/simpleBannerStyled'


const SimpleBanner = ({
    title = '',
    subtitle = '',
    description = '',
    button = <></>
}: {
    title?: string,
    subtitle?: string,
    description?: string,
    button?: React.ReactNode,
}) => {
    return (
        <>
            <SimpleBannerStyled>
                <div className='title-banner'>
                    <Typography variant='h2' sx={{ color: theme.palette.grey[600] }}>{title}</Typography>
                    <Typography variant='h3' sx={{ letterSpacing: '0.1em' }}>{subtitle}</Typography>
                </div>
                <div className='banner'>
                    <Typography variant='bodyM'>
                        {description}
                    </Typography>
                    {button}
                </div>
            </SimpleBannerStyled>
        </>
    )
}

export default SimpleBanner;
