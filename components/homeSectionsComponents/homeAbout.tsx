'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HomeAboutStyled } from '../styles/homeSectionsStyles/homeAboutStyled';
import { Typography } from '@mui/material';
import TextHighlighted from '../reusableComponents/textHighlighted';
import HomeAboutReadMoreButton from './buttons/homeAboutReadMoreButton';
import theme from '../../lib/MUIutils/theme';

const HomeAbout = () => {
    const [, setScrollProgress] = useState(0);
    const [visibleWordsPerLine, setVisibleWordsPerLine] = useState<number[]>([]);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const textLines = [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the <TextHighlighted>1960s</TextHighlighted> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ]

    const tagPattern = /<TextHighlighted>(.*?)<\/TextHighlighted>/g;

    useEffect(() => {
        const handleScroll = () => {
            if (!descriptionRef.current) return;
            const rect = descriptionRef.current.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            const percentageInView = Math.min(
                Math.max(0, (windowHeight - elementTop) / (elementHeight + windowHeight)),
                1
            );

            const scaledScrollProgress = percentageInView * 1.3;
            setScrollProgress(scaledScrollProgress);

            const wordsPerLine = textLines.map((line, index) => {
                const plainText = line.replace(tagPattern, "$1");
                const wordsInLine = plainText.split(" ").length;

                if (scaledScrollProgress > index) {
                    return Math.min(
                        Math.floor((scaledScrollProgress - index) * wordsInLine),
                        wordsInLine
                    );
                }
                return 0;
            });

            setVisibleWordsPerLine(wordsPerLine);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderLine = (line: string, visibleWords: number) => {
        const parts = line.split(tagPattern);
        let wordCount = 0;

        return parts.map((part, index) => {
            const isHighlighted = index % 2 === 1;
            const words = part.split(" ");

            return words.map((word, wordIndex) => {
                const inView = wordCount < visibleWords + 6;
                wordCount++;

                const commonStyle: any = {
                    color: inView
                        ? isHighlighted
                            ? theme.palette.primary[800]
                            : theme.palette.grey[800]
                        : theme.palette.grey[100],
                    padding: isHighlighted
                        ? '0px 4px'
                        : '0px',
                    fontWeight: isHighlighted ?? 900,
                    transition: "color 0.7s ease",
                };


                if (isHighlighted) {
                    return (
                        <TextHighlighted
                            key={`${index}-${wordIndex}`}
                            variant='bodyXLBlack'
                            containerStyle={commonStyle}
                            disableHighlight={!(inView && isHighlighted)}
                        >
                            {word}
                        </TextHighlighted>
                    );
                }

                return (
                    <span key={`${index}-${wordIndex}`} style={commonStyle}>
                        {word}{" "}
                    </span>
                );
            });
        });
    };

    return (
        <HomeAboutStyled>
            <div className="container">
                <div className="description-container" ref={descriptionRef}>
                    {textLines.map((line, index) => (
                        <Typography key={index} variant="bodyXLMedium">
                            {renderLine(line, visibleWordsPerLine[index] || 0)}
                        </Typography>
                    ))}
                </div>
                <HomeAboutReadMoreButton />
            </div>
        </HomeAboutStyled>
    );
};

export default HomeAbout;
