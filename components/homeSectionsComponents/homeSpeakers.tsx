import React from 'react'
import { Typography } from '@mui/material';
import { HomeSpeakersStyled } from '../styles/homeSectionsStyles/homeSpeakersStyled';
import SpeakerCard from '../reusableComponents/speakerCard';
import getConfig from 'next/config';
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import HomeSpeakersButton from './buttons/homeSpeakersButton';
import { SpeakerHomePageType, SpeakerType } from '../../lib/types';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const HomeSpeakers = async ({ speakersHomePage = [] }: { speakersHomePage?: SpeakerHomePageType[] }) => {

    let data: any
    let speakersWithPosition: SpeakerType[] = []
    try {
        const mongoQuery = {
            _id: { $in: speakersHomePage.map(({ speakerId }) => speakerId) }
        }

        const url = `${serverRuntimeConfig?.CRUD_PATH}/speakers?_q=${JSON.stringify(mongoQuery)}&_l=200`

        data = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        const speakers: SpeakerType[] = await data.json()
        speakersWithPosition = speakersHomePage.map(({ speakerId, position }) => {
            const speaker = speakers?.find(({ _id }) => _id === speakerId)
            if (!speaker) {
                return
            }
            return {
                ...speaker,
                position
            }
        }).filter(speaker => speaker) as SpeakerType[]

    } catch (error) {
        console.error("Error:", error);
    }

    return (
        <HomeSpeakersStyled>
            <div className='title-speakers'>
                <Typography variant='h3'> Inspiring Voices from <br /> our Previous Edition</Typography>
                <div className='speakers-button'>
                    <HomeSpeakersButton />
                </div>
            </div>
            <div className='speakers-grid-container'>
                <div className='speakers-grid'>
                    {
                        sortArrayByPosition(speakersWithPosition as any).map((speaker, index) => {
                            return <SpeakerCard
                                darkMode
                                key={index}
                                speaker={speaker as SpeakerType}
                                coverPhoto={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${speaker?.photo?.file}`}
                            />
                        })
                    }
                </div>
            </div>
        </HomeSpeakersStyled>
    )
}

export default HomeSpeakers