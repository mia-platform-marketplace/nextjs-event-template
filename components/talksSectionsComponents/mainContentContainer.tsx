import { Typography } from "@mui/material";
import { SpeakerType, TalkTrackType, TalkType } from "../../lib/types";
import { MainContentContainerStyled } from "../styles/talksSectionsStyles/mainContentContainerStyled";
import TalkChip from "./talkChip";
import SpeakerTalks from "./speakerTalks";

const MainContentContainer = ({ talk, speakers, talks, tracks }: { talk?: TalkType, speakers: SpeakerType[], talks: TalkType[], tracks: TalkTrackType[] }) => {

    return (
        <MainContentContainerStyled>
            <div className="main-content-text-grid">
                <div style={{ gridArea: 'abstract' }} className="main-content-text">
                    <div><Typography variant='bodyM'>{talk?.abstract || ''}</Typography></div>
                    <div className="talk-chip-container">
                        {talk?.language && <TalkChip title={'LANGUAGE'} subtitle={talk?.language || ''} />}
                        {talk?.level && <TalkChip title={'LEVEL'} subtitle={talk.level || ''} />}
                        {talk?.format && <TalkChip title={'FORMAT'} subtitle={talk.format} />}
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <Typography variant='h2'>SPEAKERS</Typography>
                    </div>
                </div>
            </div>
            <SpeakerTalks talks={talks} tracks={tracks} speakers={speakers} />
        </MainContentContainerStyled>
    )
}

export default MainContentContainer
