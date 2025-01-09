import React from 'react'
import SpeakerCard from '../reusableComponents/speakerCard';
import { SpeakersSpeakersStyled } from '../styles/speakersSectionsStyles/speakersSpeakersStyled';
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import SpeakerDetailWrapper from './speakerDetailComponents/speakerWrapper';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()


const SpeakersSpeakers = ({
    speakers = [],
    talks = [],
    tracks = [],
}: {
    speakers: any[] | undefined
    talks: any[] | undefined
    tracks: any[] | undefined
}) => {

    return (
        <SpeakersSpeakersStyled>
            <div className='speakers-grid-container'>
                <div className='speakers-grid'>
                    {speakers && sortArrayByPosition(speakers, 'priority').map(async (speaker: any, index: any) => {
                        const cover = `${publicRuntimeConfig?.PUBLIC_FILES_PATH}${speaker.photo.file}`
                        return <SpeakerDetailWrapper key={index} speaker={speaker} talks={talks} tracks={tracks} coverPhoto={cover}>
                            <SpeakerCard darkMode={false} speaker={speaker} coverPhoto={cover} layout='horizontal' />
                        </SpeakerDetailWrapper>
                    })}
                </div>
            </div>
        </SpeakersSpeakersStyled>
    )
}

export default SpeakersSpeakers