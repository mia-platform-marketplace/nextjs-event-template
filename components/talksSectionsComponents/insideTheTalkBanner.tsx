import React from 'react'
import { InsideTheTalkBannerStyled } from '../styles/talksSectionsStyles/insideTheTalkBannerStyled';
import { Typography } from '@mui/material';
import theme from '../../lib/MUIutils/theme';
import { InsideTheTalkBannerType } from '../../lib/types';
import AllSpeakersButton from './buttons/allSpeakersButton';
import SocialMediaIconButton from '../../lib/MUIutils/socialMediaIconButton';

const InsideTheTalkBanner = ({
    track,
    title = '',
    subtitle = '',
    time = '',
    room = '',
}: InsideTheTalkBannerType) => {

    return (
        <InsideTheTalkBannerStyled>
            <div className='go-back-button'>
                <AllSpeakersButton />
            </div>
            <div className='hero-container'>
                <div className='hero-grid-container'>
                    <div className='info-event-container' style={{ gridArea: 'info-event' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ color: theme.palette.grey[600] }}>
                                <Typography variant='bodyXSSemibold'>{time}</Typography>
                            </div>
                            <div style={{ color: theme.palette.grey[800] }}>
                                <Typography variant='bodyXSSemibold'>{room}</Typography>
                            </div>
                            <div
                                className='track-chip'
                                style={{ color: track?.textColor, background: track?.backgroundColor }}
                            >
                                <Typography variant='bodyXSSemibold'>{track?.title || ''}</Typography>
                            </div>
                        </div>
                        <div>
                            <SocialMediaIconButton lightMode socialMediaName='copy-link.svg' copyUrlOfPage />
                        </div>
                    </div>
                    <div style={{ gridArea: 'title-container' }} className='title-container'>
                        <div style={{ color: theme.palette.grey[600] }}>
                            <Typography variant='h1'>INSIDE THE TALK</Typography>
                        </div>
                        <div style={{ color: theme.palette.grey[800] }}>
                            <Typography variant='h4'>{title}</Typography>
                        </div>
                        {subtitle &&
                            <div style={{ color: theme.palette.grey[600] }}>
                                <Typography variant='bodyL'>{subtitle}</Typography>
                            </div>}
                    </div>
                </div>
            </div>
        </InsideTheTalkBannerStyled >
    )
}

export default InsideTheTalkBanner;
