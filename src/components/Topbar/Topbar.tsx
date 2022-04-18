import React from 'react'
import {
  StyledTopbar,
  StyledTopbarTitle,
  StyledTopbarUserName,
} from './Topbar.styled'
import { Avatar, Box, IconButton, Tooltip } from '@mui/material'
import theme from '@app/theme'

interface IProps {
  title: string
}

const Topbar: React.FC<IProps> = ({ title }) => {
  return (
    <StyledTopbar>
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledTopbarTitle>{title}</StyledTopbarTitle>
        <Box display="flex" alignItems="center">
          <Tooltip title="Account details">
            <IconButton size="small">
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  border: `1px solid ${theme.palette.primary.light}`,
                }}
                src="/static/topbar--john-doe-avatar.png"
              >
                JD
              </Avatar>
            </IconButton>
          </Tooltip>
          <StyledTopbarUserName>John Doe</StyledTopbarUserName>
        </Box>
      </Box>
    </StyledTopbar>
  )
}

export default Topbar
