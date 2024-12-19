'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import NoBackgroundButton from '../../../lib/MUIutils/noBackgroundButton';
import IconSvg from '../../reusableComponents/iconSvg';


const HomeMediaPartnersButton = () => {
    const router = useRouter();

    return (
        <NoBackgroundButton darkMode={false} onClick={() => router.push('/become-a-sponsor')} icon='arrow-right.svg' height={20} width={20}>Become a media partner</NoBackgroundButton>
    )
}

export default HomeMediaPartnersButton;
