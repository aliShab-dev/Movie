import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import React from 'react'


const StyledIcon = styled(IconButton)(props => ({
  position: 'relative',
  borderRadius: '50%',
  width: props.width,
  height: props.height,
  backgroundColor: 'rgba(255, 255, 255, .15)',
  fontSize: 50,
  color: '#fff',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, .35)'
  }
}))

const Badge = styled.div({
  position: 'absolute',
  top: 2,
  right: 1,
  fontSize: 10,
  backgroundColor: '#EA9610',
  borderRadius: '50%',
  width: 13,
  height: 13,
})

const BadgeItem = styled.div({
  margin: 'auto',
  marginRight: 1,
  marginTop: 1
})


export const NavbarIcon = ({icon, width, height, radius, badge}) => {
  return (
    <StyledIcon width={width} height={height} radius={radius}>
        {icon}
        {
          badge && (
            <Badge>
              <BadgeItem>
                {badge}
              </BadgeItem>
              
            </Badge>
            )
        }
    </StyledIcon>
  )
}
