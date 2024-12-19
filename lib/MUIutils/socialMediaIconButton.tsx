'use client'

import { Button, Typography } from "@mui/material";
import theme from "./theme";
import { useState } from "react";
import IconSvg from "../../components/reusableComponents/iconSvg";

const SocialMediaIconButton = (props: any) => {
    const [isCopied, setIsCopied] = useState(false)
    return (
        <Button {...{ ...props, socialMediaName: undefined, socialMediaUrl: undefined, lightMode: undefined }}
            variant="contained"
            sx={{
                width: '38px',
                height: '38px',
                backgroundColor: isCopied ? theme.palette.primary['50'] : 'transparent',
                borderRadius: '19px',
                border: `1.5px solid ${theme.palette.primary['200']}`,
                padding: '7px',
                minWidth: 'auto',
                boxShadow: 'none',
                color: props?.lightMode ? theme.palette.primary['800'] : 'white',
                '&: hover': {
                    backgroundColor: props.lightMode ? theme.palette.primary['50'] : '#EFEBFC3D',
                    border: `3px solid ${theme.palette.primary[200]}`,
                },
                '@media (max-width:1200px)': {
                    padding: '7px',
                }
            }}
            onClick={async () => {
                if (props.copyUrlOfPage) {
                    await navigator.clipboard.writeText(location.href);
                    setIsCopied(true)
                } else {
                    window.open(props?.socialMediaUrl, '_blank')
                }
            }}
            onBlur={() => setIsCopied(false)}
        >
            <IconSvg name={`${props.socialMediaName}`} height={16} width={16} />
            {isCopied &&
                <div style={{ position: 'absolute', marginLeft: '132px', color: theme.palette.primary[800] }}>
                    <Typography variant='bodyXSAlt'>COPIED!</Typography>
                </div>
            }
        </Button >
    )
}

export default SocialMediaIconButton