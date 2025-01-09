'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MenuDrawerStyled } from '../styles/menuDrawerStyled';
import IconButton from '../../lib/MUIutils/iconButton';
import TertiaryButton from '../../lib/MUIutils/tertiaryButton';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import IconSvg from './iconSvg';


export default function MenuDrawer() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open);
            };

    const list = (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='main-content'>
                <div className='close-button-container'>
                    <div className='close-button-border'>
                        <IconButton onClick={toggleDrawer(false)} icon={<IconSvg name='x-menu.svg' />} />
                    </div>
                </div>
                <List>
                    <ListItem key={'home'} disablePadding>
                        <ListItemButton onClick={() => router.push('/')}>
                            <ListItemText primary={<Typography variant='bodyXLMedium'>{'HOME'}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem key={'about'} disablePadding>
                        <ListItemButton onClick={() => router.push('/about')} >
                            <ListItemText primary={<Typography variant='bodyXLMedium'>{'About'}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem key={'speakers'} disablePadding>
                        <ListItemButton onClick={() => router.push('/speakers')} >
                            <ListItemText primary={<Typography variant='bodyXLMedium'>{'Speakers'}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
                <div className='register-button'>
                    <TertiaryButton onClick={() => router.push('/register-now')} fitAvailable endIcon={<IconSvg name='arrow-right.svg' />}>Register</TertiaryButton>
                </div>
            </div>
            <div className='mia-platform-logo'>
                <Typography variant='bodyXSAlt'>AN EVENT BY</Typography>
                <img
                    src='/assets/images/logo-mia-platform.png'
                    alt='logo mia platform'
                    style={{ width: 'auto', height: '45px' }}
                />
            </div>
        </Box >
    );

    return (
        <div>
            <>
                <IconButton onClick={toggleDrawer(true)} icon={<IconSvg name='menu.svg' />} />
                <MenuDrawerStyled
                    anchor={'right'}
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </MenuDrawerStyled>
            </>
        </div>
    );
}
