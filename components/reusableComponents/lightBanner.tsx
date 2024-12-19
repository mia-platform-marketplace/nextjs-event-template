import React from 'react'
import { Typography } from '@mui/material';
import MultiLayerLayout from './multiLayerLayout';
import Image from 'next/image';
import theme from '../../lib/MUIutils/theme';
import { LightBannerStyled } from '../styles/lightBannerStyled';


const LightBanner = ({ supertitle = '', title = '', description = '', button }: { supertitle?: string, title?: string, description?: React.ReactNode, button: React.ReactNode }) => {

    return (
        <LightBannerStyled>
            <MultiLayerLayout
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                secondLayerDiv={
                    <MultiLayerLayout
                        containerStyle={{
                            width: '100%',
                            height: '100%',
                        }}
                        secondLayerDiv={
                            <div style={{
                                height: '100%',
                                width: '100%',
                                background: `repeating-linear-gradient(
                                    45deg,
                                    #E5E5E5,
                                    #E5E5E5 10px,
                                    #CCCCCC 10px,
                                    #CCCCCC 20px
                                )`,
                                backgroundSize: '20px 20px'
                            }} />}
                    >
                        <div style={{ width: '100%' }}>
                            <Image
                                alt='sphere'
                                src={'/assets/images/balls-placeholder.png'}
                                sizes="100vw"
                                height={0}
                                width={0}
                                className='image-balls'
                            />
                        </div>
                    </MultiLayerLayout >

                }
            >
                <div className='title-light-banner'>
                    <div style={{ color: theme.palette.grey[600] }}>
                        <Typography variant='h2'>{supertitle}</Typography>
                    </div>
                    <Typography variant='h3'>{title}</Typography>
                    <div className='subtitle-light-banner'>
                        <Typography variant='bodyM'>
                            {description}
                        </Typography>
                    </div>
                    <div className='light-banner-button-container'>
                        {button}
                    </div>
                </div>
            </MultiLayerLayout >
        </LightBannerStyled >
    )
}

export default LightBanner;