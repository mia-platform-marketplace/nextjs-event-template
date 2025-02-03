import React from 'react'
import { Typography } from '@mui/material';
import { SpeakerCardStyled } from '../styles/speakerCardStyled';
import { SpeakerType } from '../../lib/types';

const SpeakerCard = ({ speaker, coverPhoto, layout, darkMode }: { speaker: SpeakerType, coverPhoto: string, layout?: 'vertical' | 'horizontal', darkMode?: boolean }) => {
    return (
        <SpeakerCardStyled layout={layout} darkMode={darkMode}>
            <div className='speaker-image'>
                <img
                    src={coverPhoto}
                    alt="Speaker"
                    style={{ width: 'auto', height: '100%' }}
                />
            </div>
            <div className='speaker-text'>
                <div className='speaker'>
                    <Typography variant={layout === 'horizontal' ? 'bodyLSemibold' : 'bodyXSSemibold'}>{speaker?.firstName} {speaker?.lastName}</Typography>
                </div>
                <div>
                    <div className='speaker-subtitle'>
                        <Typography variant='bodyXSAlt'>{speaker?.role}</Typography>
                    </div>
                    <div className='speaker-subtitle'>
                        <Typography variant='bodyXSAlt'>@{speaker?.company}</Typography>
                    </div>
                </div>
            </div>
        </SpeakerCardStyled>
    )
}

export default SpeakerCard;
