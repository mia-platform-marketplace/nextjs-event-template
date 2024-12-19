import React from 'react'
import { Typography } from '@mui/material';
import { HomeMediaPartnersStyled } from '../styles/homeSectionsStyles/homeMediaPartners';
import { sortArrayByPosition } from '../../lib/sortArrayByProp';
import getConfig from 'next/config';
import HomeMediaPartnersButton from './buttons/homeMediaPartnerButton';
import LogoCard from '../reusableComponents/logoCard';
import { MediaPartnerHomePageType, PartnerType } from '../../lib/types';
import theme from '../../lib/MUIutils/theme';

const { serverRuntimeConfig } = getConfig()


const HomeMediaPartners = async ({ partnersHomePage = [] }: { partnersHomePage?: MediaPartnerHomePageType[] }) => {

    let data: any
    let partnersWithPosition: PartnerType[] = []
    try {
        const mongoQuery = {
            _id: { $in: partnersHomePage.map(({ partnerId }) => partnerId) }
        }

        const url = `${serverRuntimeConfig?.CRUD_PATH}/media-partners?_q=${JSON.stringify(mongoQuery)}&_l=200`

        data = await fetch(url, {
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        const partners: PartnerType[] = await data.json()
        partnersWithPosition = partnersHomePage.map(({ partnerId, position }) => {
            const partner = partners?.find(({ _id }) => _id === partnerId)
            if (!partner) {
                return
            }
            return {
                ...partner,
                position
            }
        }).filter(partner => partner) as PartnerType[]

    } catch (error) {
        console.error("Error:", error);
    }

    return (
        <HomeMediaPartnersStyled>
            <div className='title-media-partners'>
                <div>
                    <Typography variant='h2' sx={{ color: theme.palette.grey[600] }}>MEDIA PARTNERS 2024</Typography>
                    <Typography variant='h3'>Our Media Partners</Typography>
                </div>
                <div className='media-partners-container'>
                    <HomeMediaPartnersButton />
                </div>
            </div>
            <div className='media-partners-logos-container'>
                <div className='media-partners-logos'>
                    {sortArrayByPosition(partnersWithPosition).map((partner, index: number) => {
                        return <LogoCard key={index} partner={partner as PartnerType} />
                    })}
                </div>
            </div>
        </HomeMediaPartnersStyled >
    )
}

export default HomeMediaPartners;