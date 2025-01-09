import React from 'react'
import { StickyNavBarStyled } from '../styles/stickyNavBarStyled';
import MenuDrawer from './menuDrawer';
import StickyNavBarRegisterButton from './buttons/stickyNavBarRegisterButton';
import StickyNavBarMenuButton from './buttons/stickyNavBarMenuButton';
import Link from 'next/link';

const StickyNavBar = async ({ selectedKey }: { selectedKey: string }) => {

    return (
        <StickyNavBarStyled>
            <Link href={'/'}
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                rel="preload"
            >
                <img
                    src="/assets/images/logo-onLight.png"
                    alt="logo"
                    className='event-logo'
                    style={{
                        maxHeight: '50px',
                        maxWidth: 'fit-content'
                    }}
                />
            </Link>
            <div className='desktop-navbar'>
                <StickyNavBarMenuButton route={'/about'} selected={selectedKey === 'about'} text={'About'} />
                <StickyNavBarMenuButton route={'/speakers-page'} selected={selectedKey === 'speakers'} text={'Speakers'} />
            </div>
            <div className='desktop-navbar-button'>
                <StickyNavBarRegisterButton />
            </div>
            <div className='mobile-navbar'>
                <MenuDrawer />
            </div>
        </StickyNavBarStyled>
    )
}

export default StickyNavBar;
