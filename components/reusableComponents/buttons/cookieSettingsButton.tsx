'use client'

import { Typography } from "@mui/material";


const CookieSettingsButton = () => {
    const handleClick = () => {
    }

    return (
        <button
            style={{
                background: 'transparent',
                color: 'white',
                textDecoration: 'underline',
                border: 'none',
                cursor: 'pointer',
                padding: 0
            }}
            onClick={handleClick}
            type="button"
        >
            <Typography variant='bodyXS'>
                Cookie settings
            </Typography>
        </button >
    )
}

export default CookieSettingsButton;
