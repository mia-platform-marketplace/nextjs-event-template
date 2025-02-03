import React from 'react'
import Keyword from '../reusableComponents/keyword';
import Marquee from "react-fast-marquee";
import { HomeKeywordsStyled } from '../styles/homeSectionsStyles/homeKeywordsStyled';
import { sortArrayByPosition } from '../../lib/sortArrayByProp'
import { KeywordType } from '../../lib/types';


const HomeKeywords = ({ keywords = [] }: { keywords?: KeywordType[] }) => {
    const keywords5Times = [].concat(...Array(5).fill(sortArrayByPosition(keywords))) as KeywordType[]

    return (
        <HomeKeywordsStyled>
            <Marquee>
                {keywords5Times.map((keyword, index) => {
                    return <Keyword key={index} phrase={keyword.name} />
                })}
            </Marquee>
        </HomeKeywordsStyled>
    )
}

export default HomeKeywords;
