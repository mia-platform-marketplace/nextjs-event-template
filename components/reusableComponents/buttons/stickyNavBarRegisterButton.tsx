'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import IconSvg from '../iconSvg';


const StickyNavBarRegisterButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push('/register-now')} variant="contained" color="primary" endIcon={<IconSvg name='arrow-right.svg' height={16} width={17} />}>
            Register
        </Button>
    )
}

export default StickyNavBarRegisterButton;
