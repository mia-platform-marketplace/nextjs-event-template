import { fetchCrudCollection } from "../../../api/crud"
import StickyNavBar from "../../../components/reusableComponents/stickyNavBar"
import { SpeakerType, SpeakersTalksType, TalkTrackType, TalkType } from "../../../lib/types"
import InsideTheTalkBanner from "../../../components/talksSectionsComponents/insideTheTalkBanner"
import { Divider } from "@mui/material"
import MainContentContainer from "../../../components/talksSectionsComponents/mainContentContainer"
import { sortArrayByPosition } from "../../../lib/sortArrayByProp"
import Footer from "../../../components/reusableComponents/footer"
import { redirect } from "next/navigation"
import theme from "../../../lib/MUIutils/theme"

const Talks = async ({ params }: { params: { readablePathId: string } }) => {
    const { readablePathId } = params

    const talks: TalkType[] = await fetchCrudCollection({ endpoint: 'talks', query: '_l=200' })
    const talk = talks?.find((talkValues: TalkType) => readablePathId === talkValues?.readablePathId)

    if (!talk) {
        redirect('/speakers')
    }

    const speakersQuery = {
        _id: { $in: talk?.speakers?.map(({ speakerId }: SpeakersTalksType) => speakerId) || [] }
    }
    const speakers: SpeakerType[] = await fetchCrudCollection({ endpoint: 'speakers', query: `_q=${JSON.stringify(speakersQuery)}` })


    const speakersWithPosition = talk?.speakers?.map(({ speakerId, position }: SpeakersTalksType) => {
        const speaker = speakers?.find(({ _id }) => _id === speakerId)
        if (!speaker) {
            return
        }
        return {
            ...speaker,
            position
        }
    })?.filter((speaker) => speaker) as SpeakerType[]

    const tracks = await fetchCrudCollection({ endpoint: 'talk-tracks' })

    const track = tracks?.find(({ _id }: TalkTrackType) => talk?.trackId === _id)

    return (
        <>
            <StickyNavBar selectedKey='talks' />
            <InsideTheTalkBanner
                track={track}
                title={talk?.title}
                subtitle={talk?.subtitle}
                time={talk?.time}
                room={talk?.room}
            />
            <Divider sx={{
                background: theme.palette.gradient[50],
                height: '8px'
            }} />
            <MainContentContainer
                talks={talks}
                tracks={tracks}
                talk={talk}
                speakers={sortArrayByPosition(speakersWithPosition || []) as SpeakerType[] || []}
            />
            <Footer />
        </>
    )
}

export default Talks;