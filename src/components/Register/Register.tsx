import React from 'react'
import { Box, InputBase, useMediaQuery } from '@mui/material'
import {
  StyledBrandLogo,
  StyledRegister,
  StyledRegisterLeftView,
  StyledRegisterLeftViewFieldContainer,
  StyledRegisterLeftViewFieldLabel,
  StyledRegisterLeftViewFooterContainer,
  StyledRegisterLeftViewLoginText,
  StyledRegisterLeftViewLogoContainer,
  StyledRegisterLeftViewMainContainer,
  StyledRegisterLeftViewMainContainerHeader,
  StyledRegisterLeftViewMainContainerSubHeader,
  StyledRegisterRightView,
} from './Register.styled'
import HelpIcon from '@mui/icons-material/HelpOutline'
import { OutlinedButton, ContainedButton } from '@app/components/Button'
import theme from '@app/theme'
import RegisterSelect from '../RegisterSelect'
import { ContainedInputField } from '../InputField'
import Link from 'next/link'

const Register = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <StyledRegister>
      <StyledRegisterLeftView>
        <StyledRegisterLeftViewLogoContainer>
          <StyledBrandLogo />
        </StyledRegisterLeftViewLogoContainer>
        <StyledRegisterLeftViewMainContainer>
          <StyledRegisterLeftViewMainContainerHeader>
            Sign Up
          </StyledRegisterLeftViewMainContainerHeader>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: '100%' }}
          >
            <StyledRegisterLeftViewMainContainerSubHeader>
              Get started for free
            </StyledRegisterLeftViewMainContainerSubHeader>
            <RegisterSelect />
          </Box>
          <StyledRegisterLeftViewFieldContainer>
            <StyledRegisterLeftViewFieldLabel htmlFor="sign-up--email">
              Create an account*
            </StyledRegisterLeftViewFieldLabel>
            <ContainedInputField id="sign-up--email" placeholder="Your email" />
          </StyledRegisterLeftViewFieldContainer>
          <Box display="flex" sx={{ marginBottom: '25px', width: '100%' }}>
            <ContainedButton sx={{ width: '100%' }}>JOIN US</ContainedButton>
          </Box>
          <StyledRegisterLeftViewLoginText>
            Already have an account?{' '}
            <Link passHref href="/login">
              <a>Log in</a>
            </Link>
          </StyledRegisterLeftViewLoginText>
        </StyledRegisterLeftViewMainContainer>
        <StyledRegisterLeftViewFooterContainer>
          <OutlinedButton
            startIcon={<HelpIcon sx={{ color: theme.palette.primary.main }} />}
          >
            Help
          </OutlinedButton>
          <InputBase sx={{ color: theme.palette.primary.main }} />
        </StyledRegisterLeftViewFooterContainer>
      </StyledRegisterLeftView>

      {isMdUp && (
        <StyledRegisterRightView bgImg="/static/sign-up__right-view.png" />
      )}
    </StyledRegister>
  )
}

export default Register