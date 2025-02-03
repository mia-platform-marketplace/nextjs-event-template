export type FileServiceFileType = {
    _id: string
    name: string
    file: string
    size: number
    location: string
}

export type EventLocationType = {
    eventLocation: string
    eventCity: string
    eventDate: string
}

export type SpeakerHomePageType = {
    speakerId: string,
    position: number
}

export type SponsorHomePageType = {
    sponsorId: string,
    position: number
}

export type MediaPartnerHomePageType = {
    partnerId: string
    position: number
}

export type KeywordType = {
    name: string,
    position: number
}

export type TrackType = {
    backgroundImage: FileServiceFileType
    backgroundColor: string
    highlightColor: string
    title: string
    content: string
}

export type HomePageType = {
    eventCity?: string
    eventLocation?: string
    eventDate?: string
    attendeesNumber?: number
    countriesNumber?: number
    speakersNumber?: number
    companiesNumber?: number
    keywords?: KeywordType[]
    galleryImage?: FileServiceFileType,
    speakers?: SpeakerHomePageType[],
    tracks?: TrackType[],
    teaserVideoUrl?: string,
    emotionalVideoUrl?: string,
    sponsors?: SponsorHomePageType[]
    partners?: MediaPartnerHomePageType[]
}

export type SpeakerType = {
    _id: string
    firstName: "string"
    lastName: "string"
    company: "string"
    role: "string"
    biography?: "string"
    photo: FileServiceFileType
    linkedinUrl: "string"
    githubUrl: "string"
    websiteUrl: "string"
    priority: "number"
    position?: number
    talks?: SpeakerTalkType[]
}


export type SpeakerTalkType = {
    title: "string",
    link: "string"
}


export type PartnerType = {
    _id: string
    name: string
    logo: FileServiceFileType
    url: string
}

export type TrackCardType = {
    children: React.ReactNode
    image: React.ReactNode,
    backgroundColor: string
}

export type SponsorSponsorsPageType = {
    sponsorId: string,
    position: number
}

export type MediaPartnerSponsorsPageType = {
    partnerId: string
    position: number
}

export type SponsorsPageType = {
    sponsors: SponsorSponsorsPageType[],
    partners: MediaPartnerSponsorsPageType[],
    sponsorshipLabel: string,
    sponsorsLabel: string,
    partnersLabel: string
}


export type TalkType = {
    _id: string,
    readablePathId: string,
    title: string,
    subtitle?: string,
    time: string,
    room: string,
    abstract: string,
    language: string,
    level: string,
    format?: string,
    trackId?: string
    speakers?: SpeakersTalksType[]
}

export type SpeakersTalksType = {
    speakerId: string,
    position: number
}


export type TalkTrackType = {
    _id: string,
    title: string,
    backgroundColor: string,
    textColor: string
}

export type InsideTheTalkBannerType = {
    track: TalkTrackType,
    title?: string,
    subtitle?: string,
    time?: string,
    room?: string,
}