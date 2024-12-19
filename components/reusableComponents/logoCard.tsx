import React from 'react'
import { LogoCardStyled } from '../styles/logoCardStyles';
import getConfig from 'next/config';
import Link from 'next/link';
import { FileServiceFileType, PartnerType } from '../../lib/types';
import { headers } from 'next/headers';
import Image from 'next/image';

const { publicRuntimeConfig } = getConfig()



const LogoCard = ({ partner }: { partner: PartnerType }) => {

    return (
        <LogoCardStyled>
            <a href={partner?.url} target="_blank" rel="noopener noreferrer" style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    src={`${publicRuntimeConfig?.PUBLIC_FILES_PATH}/download/${partner?.logo?.file}`}
                    alt={partner?.name}
                    style={{
                        width: 'auto',
                        height: '44px',
                        padding: '8px'
                    }}
                    sizes="100vw"
                    height={0}
                    width={0}
                />
            </a>
        </LogoCardStyled>
    )
}

export default LogoCard
