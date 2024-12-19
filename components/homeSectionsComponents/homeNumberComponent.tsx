import React from 'react'
import NumberReport from '../reusableComponents/numberReport'
import { HomeNumberComponentStyled } from '../styles/homeSectionsStyles/HomeNumberComponentStyled'

const HomeNumberComponent = (
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
        <HomeNumberComponentStyled>
            <NumberReport animation={true} darkMode value={attendeesNumber} description={'Attendees'} />
            <NumberReport animation={true} darkMode value={countriesNumber} description={'Countries represented by attendees'} />
            <NumberReport animation={true} darkMode value={speakersNumber} description={'International speakers'} />
            <NumberReport animation={true} darkMode value={companiesNumber} description={'Companies'} />
        </HomeNumberComponentStyled>
    )
}

export default HomeNumberComponent
