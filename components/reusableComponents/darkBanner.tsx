import React from 'react'
import { Typography } from '@mui/material';
import MultiLayerLayout from './multiLayerLayout';
import { DarkBannerStyled } from '../styles/darkBannerStyled';


const DarkBanner = ({ title, description, button }: { title: string, description: React.ReactNode, button: React.ReactNode }) => {

    return (
        <DarkBannerStyled>
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
                        childrenStyle={{ height: '100%' }}
                        secondLayerDiv={
                            <div style={{
                                height: '100%',
                                width: '100%',
                                background: `repeating-linear-gradient(
                                    -45deg,
                                    #047857,
                                    #047857 10px,
                                    #065F46 10px,
                                    #065F46 20px
                                )`,
                                backgroundSize: '20px 20px'
                            }} />}
                    >
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'end',
                            height: '100%',
                            alignItems: 'end'
                        }}>
                            <img
                                src={'/assets/images/balls-placeholder.png'}
                                alt='sphere'
                                className='image-balls'
                            />
                        </div>
                    </MultiLayerLayout >

                }
            >
                <div className='title-dark-banner'>
                    <div className='dark-banner-content-text'>
                        <Typography variant='h3'>{title}</Typography>
                        <div className='subtitle-dark-banner'>
                            <Typography variant='bodyM'>
                                {description}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        {button}
                    </div>
                </div>
            </MultiLayerLayout >
        </DarkBannerStyled >
    )
}

export default DarkBanner;