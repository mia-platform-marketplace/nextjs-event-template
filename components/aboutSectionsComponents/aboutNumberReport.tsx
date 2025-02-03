import React from 'react'
import NumberReport from '../reusableComponents/numberReport'
import { AboutNumberReportStyled } from '../styles/aboutSectionsStyles/aboutNumberReportStyled'

const AboutNumberReport = () => {
    const reportNumber = {
        "1": '7.4M Ton',
        "2": '4.32K',
        "3": '1.37M',
        "4": '1.62M',
        "5": '75.1K'
    }

    return (
        <AboutNumberReportStyled>
            <NumberReport animation={false} darkMode={false} value={reportNumber[1]} description={'Placeholder'} />
            <NumberReport animation={false} darkMode={false} value={reportNumber[2]} description={'Placeholder'} />
            <NumberReport animation={false} darkMode={false} value={reportNumber[3]} description={'Placeholder'} />
            <NumberReport animation={false} darkMode={false} value={reportNumber[4]} description={'Placeholder'} />
            <NumberReport animation={false} darkMode={false} value={reportNumber[5]} description={'Placeholder'} />
        </AboutNumberReportStyled>
    )
}

export default AboutNumberReport
