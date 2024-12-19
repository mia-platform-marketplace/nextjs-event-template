'use client'
import React from 'react'
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import IconSvg from '../../reusableComponents/iconSvg';


const HomeGalleryButton = () => {
    const router = useRouter();

    return (
        <Button variant='contained' endIcon={<IconSvg name='arrow-right.svg' height={20} width={20} />} onClick={() => router.push('/gallery')} color='secondary'>Gallery 2024</Button>
    )
}

export default HomeGalleryButton;
