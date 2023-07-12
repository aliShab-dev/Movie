import styled from '@emotion/styled'
import { Avatar } from '@mui/material'
import React from 'react'
import { PrimaryText } from '../fonts/PrimaryFonts'
import { SecondaryText } from '../fonts/SecondaryFonst'
import { BoxRow } from '../Navbar/Navbar'



export const BoxCol = styled.div(props=> ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: props.justify || 'center',
  gap: props.spacing ||'20px',
  width: props.width,
  margin: props.margin
})) 

export const UserAvatar = () => {
  return (
    <BoxRow spacing={'10px'}>
      <BoxCol spacing={'1px'}>
        <SecondaryText text={'سلام، خوش آمدی'}/>
        <PrimaryText text={'فاطمه کریمی'}/>
      </BoxCol>
      <Avatar alt="User Avatar" src="/favicon.ico" sx={{width: 45, height: 45, cursor: 'pointer'}}/>
    </BoxRow>
  )
}

