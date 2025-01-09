import React from 'react'
import { Typography } from '@mui/material'
import { DarkHeaderStyled } from '../styles/darkHeaderStyled'
import MultiLayerLayout from './multiLayerLayout'

const DarkHeader = ({ supertitle, title, backgroundImageUrl }: { supertitle: string, title: any, backgroundImageUrl?: string }) => {
    return (
        <DarkHeaderStyled>
            <MultiLayerLayout
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                secondLayerDiv={
                    <div style={{ width: '100%' }}>
                        {backgroundImageUrl &&
                            <img
                                alt='sphere'
                                src={backgroundImageUrl}
                                className='image-sphere'
                            />}
                    </div>
                }
            >
                <div className='supertitle-header'>
                    <Typography variant='h1'>{supertitle}</Typography>
                    <div className='title-header'>
                        <Typography variant='h3'>
                            {title}
                        </Typography>
                    </div>
                </div>
            </MultiLayerLayout >
        </DarkHeaderStyled>
    )
}

export default DarkHeader
