import React from 'react'
import { Typography } from '@mui/material';
import { EventLocationType, PartnerType, SponsorsPageType } from '../../lib/types';
import { SponsorsTextSectionStyled } from '../styles/sponsorsStyles/sponsorsTextSectionStyled';
import getConfig from 'next/config';
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import theme from '../../lib/MUIutils/theme';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const SponsorsTextSection = async ({
    location,
    config = {
        sponsors: [], partners: [], sponsorshipLabel: '', sponsorsLabel: '', partnersLabel: ''
    }
}: { location: EventLocationType, config: SponsorsPageType }) => {

    let dataSponsors: any
    let sponsorsWithPosition: PartnerType[] = []
    try {
        const mongoQuery = {
            _id: { $in: config?.sponsors?.map(({ sponsorId }) => sponsorId) }
        }

        const url = `${serverRuntimeConfig?.CRUD_PATH}/sponsors?_q=${JSON.stringify(mongoQuery)}&_l=200`

        dataSponsors = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        const sponsors: PartnerType[] = await dataSponsors.json()

        sponsorsWithPosition = config?.sponsors?.map(({ sponsorId, position }) => {
            const sponsor = sponsors?.find(({ _id }) => _id === sponsorId)
            if (!sponsor) {
                return
            }
            return {
                ...sponsor,
                position
            }
        })?.filter(sponsor => sponsor) as PartnerType[]

    } catch (error) {
        console.error("Error:", error);
    }

    let dataPartners: any
    let partnersWithPosition: PartnerType[] = []
    try {
        const mongoQuery = {
            _id: { $in: config?.partners?.map(({ partnerId }) => partnerId) }
        }

        const url = `${serverRuntimeConfig?.CRUD_PATH}/media-partners?_q=${JSON.stringify(mongoQuery)}&_l=200`

        dataPartners = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        const partners: PartnerType[] = await dataPartners.json()
        partnersWithPosition = config?.partners?.map(({ partnerId, position }) => {
            const partner = partners?.find(({ _id }) => _id === partnerId)
            if (!partner) {
                return
            }
            return {
                ...partner,
                position
            }
        })?.filter(partner => partner) as PartnerType[]

    } catch (error) {
        console.error("Error:", error);
    }

    return (
        <SponsorsTextSectionStyled>
            <div className='text-info-sponsors'>
                <div style={{ color: theme.palette.grey[600] }}>
                    <Typography variant='h2'><b>{config.sponsorshipLabel}</b></Typography>
                </div>
                <div>
                    <Typography variant='h3' sx={{ color: theme.palette.grey[900], letterSpacing: '0.1em' }}>Join the<br /> Sponsors<br /> Club</Typography>
                </div>
                <div style={{ color: theme.palette.grey[600] }}>
                    <Typography variant='bodyM'><b>{location?.eventDate}</b>· {location?.eventCity}, {location?.eventLocation}</Typography>
                </div>
            </div>
            <div>
                <div className='sponsors-logos-container'>
                    <div> <Typography variant='h2' sx={{ color: theme.palette.grey[600] }}>{config.sponsorsLabel}</Typography></div>
                    <div className='sponsors-logos'>
                        {sortArrayByPosition(sponsorsWithPosition || []).map((sponsor, index: number) => {
                            return <div className='logo' key={index}>
                                <img
                                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}${sponsor?.logo?.file}`}
                                    alt={sponsor?.name}
                                    style={{ width: 'auto', height: '70%' }}
                                />
                            </div>
                        })}
                    </div>
                </div>
                <div className='sponsors-logos-container'>
                    <div> <Typography variant='h2' sx={{ color: theme.palette.grey[600] }}>{config.partnersLabel}</Typography></div>
                    <div className='sponsors-logos'>
                        {sortArrayByPosition(partnersWithPosition || []).map((partner, index: number) => {
                            return <div className='logo' key={index}>
                                <img
                                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}${partner?.logo?.file}`}
                                    alt={partner?.name}
                                    style={{ width: 'auto', height: '70%' }}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </SponsorsTextSectionStyled>
    )
}

export default SponsorsTextSection;
