import React from 'react'
import { useRouter } from 'next/router'
import {
  StyledSidebar,
  StyledSidebarBrandLogoContainer,
  StyledSidebarItem,
  StyledSidebarItemIcon,
  StyledSidebarItemList,
  StyledSidebarItemText,
  StyledSidebarLogoutButtonContainer,
} from './Sidebar.styled'
import { observer } from 'mobx-react-lite'
import { Icon as MuiIcon } from '@mui/material'
import Image from 'next/image'
import sidebarData from './Sidebar.data'
import LogoutIcon from '@app/assets/svg/LogoutIcon'

const Sidebar = () => {
  const router = useRouter()

  const handleNavigateToHomePage = () => router.push('/')

  const renderSidebarItem = (
    active: boolean,
    path: string,
    Icon: typeof MuiIcon,
    label: string
  ) => (
    <StyledSidebarItem
      active={active}
      onClick={() => router.push(path)}
      key={path}
    >
      <StyledSidebarItemIcon active={active}>
        <Icon />
      </StyledSidebarItemIcon>
      <StyledSidebarItemText active={active}>{label}</StyledSidebarItemText>
    </StyledSidebarItem>
  )

  return (
    <StyledSidebar>
      <StyledSidebarBrandLogoContainer onClick={handleNavigateToHomePage}>
        <Image
          quality={100}
          height={59}
          width={156}
          src="/static/logo.png"
          alt="Brand Logo"
        />
      </StyledSidebarBrandLogoContainer>
      <StyledSidebarItemList>
        {sidebarData.map((item) =>
          renderSidebarItem(
            item.path === router.pathname,
            item.path,
            item.Icon as typeof MuiIcon,
            item.title
          )
        )}
      </StyledSidebarItemList>
      <StyledSidebarLogoutButtonContainer onClick={() => router.push('/login')}>
        <StyledSidebarItemIcon>
          <LogoutIcon />
        </StyledSidebarItemIcon>
        <StyledSidebarItemText>Logout</StyledSidebarItemText>
      </StyledSidebarLogoutButtonContainer>
    </StyledSidebar>
  )
}

export default observer(Sidebar)
