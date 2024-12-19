import React from 'react'
import { Typography } from '@mui/material';
import { HomeSponsorsStyled } from '../styles/homeSectionsStyles/homeSponsorsStyled';
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import getConfig from 'next/config';
import HomeSponsorsButton from './buttons/homeSponsorsButton';
import LogoCard from '../reusableComponents/logoCard';
import { PartnerType, SponsorHomePageType } from '../../lib/types';
import theme from '../../lib/MUIutils/theme';

const { serverRuntimeConfig } = getConfig()


const HomeSponsors = async ({ sponsorsHomePage = [] }: { sponsorsHomePage?: SponsorHomePageType[] }) => {

    let data: any
    let sponsorsWithPosition: PartnerType[] = []
    try {
        const mongoQuery = {
            _id: { $in: sponsorsHomePage.map(({ sponsorId }) => sponsorId) }
        }

        const url = `${serverRuntimeConfig?.CRUD_PATH}/sponsors?_q=${JSON.stringify(mongoQuery)}&_l=200`

        data = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        const sponsors: PartnerType[] = await data.json()

        sponsorsWithPosition = sponsorsHomePage.map(({ sponsorId, position }) => {
            const sponsor = sponsors?.find(({ _id }) => _id === sponsorId)
            if (!sponsor) {
                return
            }
            return {
                ...sponsor,
                position
            }
        }).filter(sponsor => sponsor) as PartnerType[]

    } catch (error) {
        console.error("Error:", error);
    }


    return (
        <HomeSponsorsStyled>
            <div className='meet-sponsors-container'>
                <div className='title-sponsors'>
                    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                        <div style={{ color: theme.palette.grey[600] }}>
                            <Typography variant='h2'>SPONSORSHIP 2024</Typography>
                        </div>
                        <Typography variant='h3'>Meet our <br /> Sponsors</Typography>
                    </div>
                    <div className='subtitle-sponsors'>
                        <Typography variant='bodyM'>
                            Our sponsors have played a vital role in making this event a reality,
                            with their brands contributing crucially to its success and impact.
                        </Typography>
                    </div>
                    <div className='sponsors-container'>
                        <HomeSponsorsButton />
                    </div>
                </div>
                <div className='sponsors-logos-container'>
                    <div className='sponsors-logos'>
                        {sortArrayByPosition(sponsorsWithPosition).map((sponsor, index) => {
                            return <LogoCard key={index} partner={sponsor as PartnerType} />
                        })}
                    </div>
                </div>
            </div>
        </HomeSponsorsStyled >
    )
}

export default HomeSponsors;