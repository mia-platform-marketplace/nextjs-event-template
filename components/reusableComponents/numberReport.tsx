import React from 'react'
import { NumberReportStyled } from '../styles/numberReportStyled';
import { Typography } from '@mui/material';
import Counter from './counter';

const NumberReport = ({ value, description, darkMode = false, animation = false }: { value: string | number, description: string, darkMode: boolean, animation: boolean }) => {

    return (
        <NumberReportStyled darkMode={darkMode}>
            <div className='first-child'>
                {animation ?  
                <Counter targetNumber={value} duration={2000} />:
                <Typography variant='bodyXXXL'>{value}</Typography> 
                }
            </div>
            <div className='second-child'>
                <Typography variant='bodyMBold'>{description}</Typography>
            </div>
        </NumberReportStyled>
    )
}

export default NumberReport;
