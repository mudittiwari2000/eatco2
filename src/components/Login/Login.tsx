import React from 'react'
import { Box, InputBase, useMediaQuery } from '@mui/material'
import {
  StyledBrandLogo,
  StyledLogin,
  StyledLoginLeftView,
  StyledLoginLeftViewFieldContainer,
  StyledLoginLeftViewFieldLabel,
  StyledLoginLeftViewFooterContainer,
  StyledLoginLeftViewTextButtons,
  StyledLoginLeftViewLogoContainer,
  StyledLoginLeftViewMainContainer,
  StyledLoginLeftViewMainContainerHeader,
  StyledLoginLeftViewMainContainerSubHeader,
  StyledLoginRightView,
} from './Login.styled'
import HelpIcon from '@mui/icons-material/HelpOutline'
import { OutlinedButton, ContainedButton } from '@app/components/Button'
import theme from '@app/theme'
import { ContainedInputField } from '../InputField'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/dashboard')
  }

  return (
    <StyledLogin>
      <StyledLoginLeftView>
        <StyledLoginLeftViewLogoContainer>
          <StyledBrandLogo />
        </StyledLoginLeftViewLogoContainer>
        <StyledLoginLeftViewMainContainer>
          <StyledLoginLeftViewMainContainerHeader>
            Welcome back
          </StyledLoginLeftViewMainContainerHeader>
          <StyledLoginLeftViewMainContainerSubHeader>
            Check in with your CO2 usage
          </StyledLoginLeftViewMainContainerSubHeader>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            sx={{ width: '100%' }}
            onSubmit={handleFormSubmit}
          >
            <StyledLoginLeftViewFieldContainer>
              <StyledLoginLeftViewFieldLabel htmlFor="sign-up--email">
                Email*
              </StyledLoginLeftViewFieldLabel>
              <ContainedInputField
                required
                type="email"
                id="sign-up--email"
                placeholder="Your email"
              />
            </StyledLoginLeftViewFieldContainer>
            <StyledLoginLeftViewFieldContainer password>
              <StyledLoginLeftViewFieldLabel htmlFor="sign-up--email">
                Password*
              </StyledLoginLeftViewFieldLabel>
              <ContainedInputField
                required
                type="password"
                inputProps={{ minLength: 8, maxLength: 24 }}
                id="sign-up--email"
                placeholder="Enter password"
              />
            </StyledLoginLeftViewFieldContainer>
            <Box display="flex" sx={{ marginBottom: '25px', width: '100%' }}>
              <ContainedButton sx={{ width: '100%' }} type="submit">
                SIGN IN
              </ContainedButton>
            </Box>
          </Box>
          <StyledLoginLeftViewTextButtons>
            <Link passHref href="/register/forgot-password">
              <a>Forgot password?</a>
            </Link>
          </StyledLoginLeftViewTextButtons>
          <StyledLoginLeftViewTextButtons>
            <Link passHref href="/register">
              <a>Create an account</a>
            </Link>
          </StyledLoginLeftViewTextButtons>
        </StyledLoginLeftViewMainContainer>
        <StyledLoginLeftViewFooterContainer>
          <OutlinedButton
            startIcon={<HelpIcon sx={{ color: theme.palette.primary.main }} />}
          >
            Help
          </OutlinedButton>
          <InputBase sx={{ color: theme.palette.primary.main }} />
        </StyledLoginLeftViewFooterContainer>
      </StyledLoginLeftView>

      {isMdUp && (
        <StyledLoginRightView bgImg="/static/sign-in__right-view.png" />
      )}
    </StyledLogin>
  )
}

export default Login
