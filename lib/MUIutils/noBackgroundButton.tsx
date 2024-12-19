'use client'

import { Button } from "@mui/material";
import theme from "./theme";
import IconSvg from "../../components/reusableComponents/iconSvg";
import { useState } from "react";

const NoBackgroundButton = (props: any) => {
    return (
        <Button
            {...props}
            variant="contained"
            sx={{
                backgroundColor: 'transparent',
                color: props.darkMode ? theme.palette.primary[200] : theme.palette.primary[700],
                border: 'none',
                boxShadow: 'none',
                textDecoration: 'underline',
                padding: '0px !important',
                '&: hover': {
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    color: props.darkMode ? theme.palette.primary[300] : theme.palette.primary[900]
                }
            }}
        >
            {(props?.icon && props?.iconAtTheStart) && <IconSvg name={props?.icon} />}
            <div style={{
                marginRight: !props?.iconAtTheStart ? '8px' : '0px',
                marginLeft: props?.iconAtTheStart ? '8px' : '0px'
            }}>
                {props.children}
            </div>
            {(props?.icon && !props?.iconAtTheStart) && <IconSvg name={props?.icon} />}
        </Button >
    )
}

export default NoBackgroundButton