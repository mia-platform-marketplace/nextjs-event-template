'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import StickyNavBarButton from '../../../lib/MUIutils/stickyNavBarButton';
import TextHighlighted from '../textHighlighted';


const StickyNavBarMenuButton = ({ route = '', text, selected, externalRoute = false }: { route?: string, text: string, selected: boolean, externalRoute?: boolean }) => {
    const router = useRouter();

    return (
        <StickyNavBarButton onClick={() => externalRoute ? window.open(route, '_blank') : router.push(route)}>
            <TextHighlighted variant={selected ? 'bodyStickyNavBarSelected' : 'bodyStickyNavBar'} disableHighlight={!selected}>{text}</TextHighlighted>
        </StickyNavBarButton >
    )
}

export default StickyNavBarMenuButton;
