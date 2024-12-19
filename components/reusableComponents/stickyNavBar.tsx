import React from 'react'
import { StickyNavBarStyled } from '../styles/stickyNavBarStyled';
import MenuDrawer from './menuDrawer';
import StickyNavBarRegisterButton from './buttons/stickyNavBarRegisterButton';
import StickyNavBarMenuButton from './buttons/stickyNavBarMenuButton';
import Link from 'next/link';
import Image from 'next/image';

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
                <Image
                    src="/assets/images/logo-onLight.png"
                    alt="logo"
                    sizes="100vw"
                    height={42}
                    width={230}
                    className='event-logo'
                    style={{
                        maxHeight: '50px',
                        maxWidth: 'fit-content'
                    }}
                />
            </Link>
            <div className='desktop-navbar'>
                <StickyNavBarMenuButton route={'/about'} selected={selectedKey === 'about'} text={'About'} />
                <StickyNavBarMenuButton route={'/speakers'} selected={selectedKey === 'speakers'} text={'Speakers'} />
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
