import React from 'react'
import { SpeakerType, TalkTrackType, TalkType } from '../../lib/types';
import SpeakerDetailWrapper from '../speakersSectionsComponents/speakerDetailComponents/speakerWrapper';
import SpeakerCard from '../reusableComponents/speakerCard';
import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig()


const SpeakerTalks = ({ speakers = [], talks, tracks }: { speakers: SpeakerType[], talks: TalkType[], tracks: TalkTrackType[] }) => {

    return (
        <div className='speakers-talks-container'>
            <div className='speakers-talks'>
                {speakers.map((speaker, index) => {
                    const cover = `${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${speaker.photo.file}`
                    return (
                        <SpeakerDetailWrapper tracks={tracks} talks={talks} key={index} speaker={speaker} coverPhoto={cover}>
                            <SpeakerCard speaker={speaker} coverPhoto={cover} layout='vertical' darkMode />
                        </SpeakerDetailWrapper>
                    )
                })}
            </div>
        </div>
    )
}

export default SpeakerTalks;
