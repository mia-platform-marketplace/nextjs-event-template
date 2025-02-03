'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import TertiaryButton from '../../../lib/MUIutils/tertiaryButton';
import IconSvg from '../../reusableComponents/iconSvg';


const HomeHeroRegisterButton = () => {
    const router = useRouter();

    return (
        <TertiaryButton onClick={() => router.push('/register-now')} endIcon={<IconSvg name='arrow-right.svg' height={16} width={17} />}>Register</TertiaryButton>
    )
}

export default HomeHeroRegisterButton;
