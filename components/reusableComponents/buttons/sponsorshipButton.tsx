'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import TertiaryButton from '../../../lib/MUIutils/tertiaryButton';
import IconSvg from '../iconSvg';


const SponsorshipButton = () => {
    const router = useRouter();

    return (
        <TertiaryButton onClick={() => router.push('/become-a-sponsor')} endIcon={<IconSvg name='arrow-right.svg' />}>Become a sponsor</TertiaryButton>
    )
}

export default SponsorshipButton;
