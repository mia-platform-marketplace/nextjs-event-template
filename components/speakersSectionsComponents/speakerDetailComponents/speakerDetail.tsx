'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import { SpeakerType } from '../../../lib/types';
import { SpeakerDetailStyled } from '../../styles/speakersSectionsStyles/swipableDrawerComponents/speakerDetailStyled';
import IconButton from '../../../lib/MUIutils/iconButton';
import { Divider, Link, Typography } from '@mui/material';
import theme from '../../../lib/MUIutils/theme';
import SocialMediaIconButton from '../../../lib/MUIutils/socialMediaIconButton';
import IconSvg from '../../reusableComponents/iconSvg';

export default function SpeakerDetail({ open, setOpen, speaker, coverPhoto }: { open: boolean, setOpen: any, speaker: SpeakerType, coverPhoto: string }) {
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };

    const content = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='card-main-content-container'>
                <div className='image-speaker'>
                    <img
                        src={coverPhoto}
                        alt="speaker image"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className='main-info'>
                    <div className='close-button-container'>
                        <IconButton lightMode onClick={toggleDrawer(false)} icon={<IconSvg name='x-menu.svg' />} />
                    </div>
                    <div className='info-container'>
                        <div className='speaker-info'>
                            <div>
                                <Typography variant='bodyLSemibold'>{`${speaker?.firstName} ${speaker?.lastName}`}</Typography>
                            </div>
                            <div>
                                <Typography variant='bodyXSAlt'>
                                    {speaker?.role}<br />
                                    {`@${speaker?.company}`}
                                </Typography>
                            </div>
                        </div>
                        <div className='socials-container'>
                            {speaker?.linkedinUrl && <SocialMediaIconButton lightMode socialMediaName='linkedin.svg' socialMediaUrl={speaker?.linkedinUrl} />}
                            {speaker?.githubUrl && <SocialMediaIconButton lightMode socialMediaName='git.svg' socialMediaUrl={speaker?.githubUrl} />}
                            {speaker?.websiteUrl && <SocialMediaIconButton lightMode socialMediaName='website.svg' socialMediaUrl={speaker?.websiteUrl} />}
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className='info-details-container'>
                {speaker?.biography &&
                    <div className='info-details-section'>
                        <div style={{ color: theme.palette.primary['200'] }}><Typography variant='h2'>BIO</Typography></div>
                        <div><Typography variant='bodyXS'>{speaker.biography}</Typography></div>
                    </div>
                }
                {Boolean(speaker?.talks?.length) &&
                    <div className='talk-details-section'>
                        <div style={{ color: theme.palette.primary['200'] }}><Typography variant='h2'>TALKS</Typography></div>
                        <div className='talks-list'>
                            {speaker?.talks?.map((talk: any, index: number) =>
                                <Link
                                    key={index}
                                    href={`/talks-info/${talk.link}`}
                                    underline="always"
                                    sx={{
                                        textDecoration: 'underline',
                                        textDecorationColor: theme.palette.primary[50],
                                        textDecorationThickness: '1px',
                                        textUnderlineOffset: '2px',
                                        '&:hover': {
                                            textDecorationColor: `${theme.palette.primary[100]}  !important`,
                                        },
                                    }}
                                >
                                    <Typography variant='bodyXSSemibold' sx={{
                                        color: theme.palette.primary[50],
                                        '&:hover': {
                                            color: theme.palette.primary[100]
                                        },
                                    }}>{talk.title}</Typography>
                                </Link>
                            )}
                        </div>
                    </div>
                }
            </div>

        </Box >
    );

    return (
        <div>
            <>
                <SpeakerDetailStyled
                    anchor={'right'}
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    slotProps={{
                        backdrop: {
                            sx: {
                                backgroundColor: 'rgba(11, 7, 26, 0.9)'
                            },
                        },
                    }}
                >
                    {content}
                </SpeakerDetailStyled>
            </>
        </div>
    );
}
