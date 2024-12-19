import React from 'react'
import { Typography } from '@mui/material';
import { HomeTracksStyled } from '../styles/homeSectionsStyles/homeTracksStyled';
import TracksCard from '../reusableComponents/tracksCard';
import getConfig from 'next/config';
import { TrackType } from '../../lib/types';
import Image from 'next/image';
import theme from '../../lib/MUIutils/theme';

const { publicRuntimeConfig } = getConfig()

const HomeTracks = ({ tracks = [] }: { tracks?: TrackType[] }) => {

    return (
        <HomeTracksStyled>
            <div className='title-tracks'>
                <div style={{ color: theme.palette.grey[600] }}><Typography variant='h2'>TRACKS & AGENDA</Typography></div>
                <Typography variant='h3'>What We Will Talk About</Typography>
            </div>
            <div className='tracks-grid-container'>
                <div className='tracks-grid'>
                    {tracks.map((track, index) => {
                        return <TracksCard
                            key={index}
                            image={
                                <Image
                                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${track?.backgroundImage?.file}`}
                                    alt='track'
                                    style={{ width: '100%', height: '100%' }}
                                    sizes="100vw"
                                    height={0}
                                    width={0}
                                />
                            }
                            backgroundColor={track?.backgroundColor}

                        >
                            <div className='tracks-title'>
                                <Typography variant='h4'>{track?.title}</Typography>
                            </div>
                            <div>
                                <Typography variant='bodyS'>
                                    {track?.content}
                                </Typography>
                            </div>
                        </TracksCard>
                    })}
                </div>
            </div>
        </HomeTracksStyled >
    )
}

export default HomeTracks