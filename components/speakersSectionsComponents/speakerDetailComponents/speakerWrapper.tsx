"use client"

import { useState } from 'react';
import { SpeakerTalkType, SpeakerType, SpeakersTalksType, TalkTrackType, TalkType } from '../../../lib/types';
import { useMediaQuery } from '@mui/material';
import SpeakerDetail from './speakerDetail';
import SpeakerDetailMobile from './speakerDetailMobile';


export default function SpeakerDetailWrapper({ children, speaker, coverPhoto, talks, tracks }: { children: React.ReactNode, speaker: SpeakerType, coverPhoto: string, talks: TalkType[], tracks: TalkTrackType[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [speakerWithTalk, setSpeakerWithTalk] = useState<SpeakerType>(speaker)

    const isMedium = useMediaQuery((theme: any) => theme.breakpoints.down('md'))

    const speakersTalks = () => {
        return talks
            .filter((talk: TalkType) =>
                talk.speakers?.some((talkSpeaker: SpeakersTalksType) => {
                    return talkSpeaker.speakerId === speaker._id
                }
                )
            )
            .map((talk: TalkType) => {
                const talkTrack = tracks.find((track: TalkTrackType) => track._id === talk.trackId);
                return {
                    title: `${talkTrack?.title || ""} : ${talk?.title || ""}`,
                    link: talk.readablePathId
                };

            })
    }

    const handleOnClick = () => {
        if (!isOpen) {
            setIsOpen(true)
            const foundedTalks = talks.length ? speakersTalks() : []
            setSpeakerWithTalk({
                ...speaker, talks: foundedTalks as SpeakerTalkType[]
            })

        }
    }

    return (
        <div onClick={handleOnClick} className="speaker-wrapper">
            {children}

            {isOpen && (
                !isMedium ?
                    <SpeakerDetail open={isOpen} setOpen={setIsOpen} speaker={speakerWithTalk} coverPhoto={coverPhoto} /> :
                    <SpeakerDetailMobile open={isOpen} setOpen={setIsOpen} speaker={speakerWithTalk} coverPhoto={coverPhoto} />
            )}
        </div>
    );
}