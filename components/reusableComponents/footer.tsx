import React from 'react'
import { Typography } from '@mui/material'
import { FooterStyled } from '../styles/footerStyled'
import Image from 'next/image'
import SocialMediaIconButton from '../../lib/MUIutils/socialMediaIconButton'
import CookieSettingsButton from './buttons/cookieSettingsButton'

const Footer = () => {
    return (
        <FooterStyled>
            <div className='references'>
                <div>
                    <Image src="/assets/images/logo-onDark.svg"
                        alt="logo"
                        sizes="100vw"
                        height={0}
                        width={0}
                        className='image-plarmosphere'
                        style={{
                            maxHeight: '50px',
                            maxWidth: 'fit-content'
                        }}
                    />
                </div>
                <div className='references-socials'>
                    <div className='logo'>
                        <Typography variant='bodyXSAlt'>AN EVENT BY</Typography>
                        <Image
                            src='/assets/images/logo-mia-platform.png'
                            alt='logo mia platform'
                            sizes="100vw"
                            height={0}
                            width={0}
                            style={{ width: 'auto', height: '45px' }}
                        />
                    </div>
                    <div className='social-media-container'>
                        <SocialMediaIconButton socialMediaName='x.svg' socialMediaUrl={'https://example.com/'} />
                        <SocialMediaIconButton socialMediaName='linkedin.svg' socialMediaUrl={'https://example.com/'} />
                        <SocialMediaIconButton socialMediaName='git.svg' socialMediaUrl={'https://example.com/'} />
                        <SocialMediaIconButton socialMediaName='instagram.svg' socialMediaUrl={'https://example.com/'} />
                        <SocialMediaIconButton socialMediaName='youtube.svg' socialMediaUrl={'https://example.com/'} />
                    </div>
                </div>
            </div>
            <div className='end-of-footer'>
                <div className='copyright'>
                    <Typography variant='bodyXS'>© Copyright</Typography>
                </div>
                <div>
                    <a href="/pdf/example.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'white' }}>
                        <Typography variant='bodyXS'>Privacy policy</Typography>
                    </a>
                </div>
                <div>
                    <div> <CookieSettingsButton /></div>
                </div>
                <div>
                    <a href="/pdf/example.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'white' }}>
                        <Typography variant='bodyXS'>Code of conduct</Typography>
                    </a>
                </div>
            </div>
        </FooterStyled>
    )
}

export default Footer
