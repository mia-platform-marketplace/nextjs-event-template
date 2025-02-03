import React from 'react'
import { Typography } from '@mui/material';
import theme from '../../lib/MUIutils/theme';


const RegisterTextSection = ({ location }: { location: { eventCity: string, eventDate: string, eventLocation: string } }) => {

    return (
        <>
            <div>
                <Typography variant='h3'>Join us</Typography>
            </div>
            <div>
                <Typography variant='bodyM'><b>{location?.eventDate || ''}</b>· {location?.eventCity || ''}, {location?.eventLocation || ''}</Typography>
            </div>
            <div style={{ color: theme.palette.grey[600] }}>
                <Typography variant='bodyM'>
                    Lorem Ipsum is simply dummy text of the printing and typesettin
                    g industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                </Typography>
            </div>
        </>
    )
}

export default RegisterTextSection;
