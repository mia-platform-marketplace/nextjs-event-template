import React from 'react'
import { Typography } from '@mui/material'
import { KeywordStyled } from '../styles/keywordStyled'
import IconSvg from './iconSvg'

const Keyword = ({ phrase }: { phrase: string }) => {
  return (
    <KeywordStyled>
      <Typography variant='h5'> {`${phrase.toUpperCase()}`}</Typography>
      <IconSvg name='grey-circle.svg' />
    </KeywordStyled>
  )
}

export default Keyword
