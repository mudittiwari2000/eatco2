import React from 'react'
import { Box, InputBase, useMediaQuery } from '@mui/material'
import {
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
import { ContainedInputField } from '../InputField'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStore } from '@app/store'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import logo from '@app/../public/static/logo.png'
import LanguageMenu from '../LanguageMenu/LanguageMenu'
import { toRem } from '@app/utils'

const Register = () => {
  const { registerStore } = useStore()
  const router = useRouter()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  const handleEmailField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    registerStore.setEmail(e.target.value)
  }

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/register/business')
  }

  return (
    <StyledRegister>
      <StyledRegisterLeftView>
        <StyledRegisterLeftViewLogoContainer>
          <Image
            quality={100}
            width={159}
            height={56}
            src={logo}
            placeholder="blur"
            alt="EATCO2 Logo"
          />
        </StyledRegisterLeftViewLogoContainer>
        <StyledRegisterLeftViewMainContainer>
          <StyledRegisterLeftViewMainContainerHeader>
            Sign Up
          </StyledRegisterLeftViewMainContainerHeader>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
            sx={{ width: '100%', mb: toRem('48px') }}
          >
            <StyledRegisterLeftViewMainContainerSubHeader>
              Get started for free
            </StyledRegisterLeftViewMainContainerSubHeader>
            {/* <RegisterSelect /> */}
            <LanguageMenu />
          </Box>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            sx={{ width: '100%' }}
            onSubmit={handleFormSubmit}
          >
            <StyledRegisterLeftViewFieldContainer>
              <StyledRegisterLeftViewFieldLabel htmlFor="sign-up--email">
                Create an account<span>*</span>
              </StyledRegisterLeftViewFieldLabel>
              <ContainedInputField
                required
                type="email"
                id="sign-up--email"
                placeholder="Your email"
                value={registerStore.email}
                onChange={handleEmailField}
              />
            </StyledRegisterLeftViewFieldContainer>
            <Box display="flex" sx={{ marginBottom: '25px', width: '100%' }}>
              <ContainedButton type="submit" sx={{ width: '100%' }}>
                JOIN US
              </ContainedButton>
            </Box>
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

export default observer(Register)
