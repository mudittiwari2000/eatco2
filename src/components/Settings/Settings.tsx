import Link from 'next/link'
import React from 'react'
import {
  StyledSettings,
  StyledSettingsCard,
  StyledSettingsCardContent,
  StyledSettingsCardHeader,
  StyledSettingsGoBackButton,
} from './Settings.styled'

const Settings = () => {
  return (
    <StyledSettings>
      <StyledSettingsCard>
        <StyledSettingsCardContent>
          <StyledSettingsCardHeader>Settings</StyledSettingsCardHeader>
          <Link passHref href="/register">
            <StyledSettingsGoBackButton>
              Back to Sign up
            </StyledSettingsGoBackButton>
          </Link>
        </StyledSettingsCardContent>
      </StyledSettingsCard>
    </StyledSettings>
  )
}
export default Settings
