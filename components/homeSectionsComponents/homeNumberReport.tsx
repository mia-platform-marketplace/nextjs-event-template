import React from 'react'
import NumberReport from '../reusableComponents/numberReport'
import { HomeNumberReportStyled } from '../styles/homeSectionsStyles/homeNumberReportStyled'
import { Typography } from '@mui/material'
import HomeNumberComponent from './homeNumberComponent'

const HomeNumberReport = (
    {
        attendeesNumber = 0,
        countriesNumber = 0,
        speakersNumber = 0,
        companiesNumber = 0
    }: {
        attendeesNumber?: number
        countriesNumber?: number
        speakersNumber?: number
        companiesNumber?: number
    }
) => {

    return (
        <HomeNumberReportStyled>
            <div>
                <Typography variant='bodyXXLBlack'>
                    Description
                </Typography>
            </div>
            <HomeNumberComponent
                attendeesNumber={attendeesNumber}
                countriesNumber={countriesNumber}
                speakersNumber={speakersNumber}
                companiesNumber={companiesNumber}
            />
        </HomeNumberReportStyled>
    )
}

export default HomeNumberReport
