'use client'
import React from 'react'
import { Typography } from '@mui/material';
import { TalkChipStyled } from '../styles/talksSectionsStyles/talkChipStyled';


const TalkChip = ({ title = '', subtitle = '' }: { title: string, subtitle: string }) => {

    return (
        <TalkChipStyled>
            <div className='talk-chip-content'>
                <div className='talk-chip-title'>
                    <Typography variant='bodyXSSemibold'>{title}</Typography>
                </div>
                <div className='talk-chip'>
                    <Typography variant='bodyXSAlt'>{subtitle}</Typography>
                </div>
            </div>
        </TalkChipStyled>
    )
}

export default TalkChip;
