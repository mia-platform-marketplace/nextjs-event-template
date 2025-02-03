import React from 'react'
import { Typography } from '@mui/material';
import { HomeEmotionalVideoStyled } from '../styles/homeSectionsStyles/homeEmotionalVideoStyled';
import HomeEmotionalVideoButton from './buttons/homeEmotionalVideoButton';

const HomeEmotionalVideo = (
    {
        teaserVideoUrl = '',
        recapVideoUrl = ''
    }: {
        teaserVideoUrl?: string
        recapVideoUrl?: string
    }
) => {

    return (
        <HomeEmotionalVideoStyled>
            <div className='title-emotional-video'>
                <Typography variant='h3'>Video title</Typography>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <div style={{
                    position: 'relative',
                    maxWidth: '1176px',
                    width: '100%',
                    margin: '0 auto',
                    aspectRatio: '16/9',
                    objectFit: 'cover'
                }}>
                    {teaserVideoUrl ? <iframe
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            aspectRatio: '16/9',
                        }}
                        allow='fullscreen'
                        allowFullScreen
                        frameBorder='0'
                        src={teaserVideoUrl}
                        title={'Teaser video'}
                        loading="lazy"
                    /> :
                        <img
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                aspectRatio: '16/9',
                            }}
                            src={'/assets/images/video-placeholder.png'}
                        />}
                </div>
            </div>
            <div className='watch-recap-button-container'>
                <HomeEmotionalVideoButton recapVideoUrl={recapVideoUrl} />
            </div>
        </HomeEmotionalVideoStyled >
    )
}

export default HomeEmotionalVideo;
