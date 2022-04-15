import React from 'react'
import {
  StyledActivation,
  StyledActivationCard,
  StyledActivationCardContent,
  StyledActivationCardHeader,
  StyledActivationNextButton,
} from './Activation.styled'
import PinInput from '../PinInput'
import { Code } from '../PinInput/PinInput'
import { Box, Checkbox, debounce, FormControlLabel } from '@mui/material'
import { StyledBusinessFormFieldLabel } from '../BusinessForm/BusinessForm.styled'
import { UnderlinedInputField } from '../InputField/InputField'
import { useRouter } from 'next/router'

const isDisabledSx = (disabled: boolean) => ({
  opacity: disabled ? 0.3 : 1,
  pointerEvents: disabled ? 'none' : 'all',
})

const Activation = () => {
  const router = useRouter()
  const [code, setCode] = React.useState<Code>({
    code1: '1',
    code2: '1',
    code3: '1',
    code4: '1',
    code5: '1',
    code6: '',
  })
  const [codeSuccess, setCodeSuccess] = React.useState<boolean | null>(null)

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    router.push('/dashboard')
  }

  const handleCodeChange = (
    otpNumber: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCode((prev) => {
      const newCode = { ...prev, [otpNumber]: event.target.value }
      checkCode(newCode)
      return newCode
    })
  }

  const handleCodeFocus = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Delete' || evt.key === 'Backspace') {
      const next = (evt.target as HTMLInputElement).tabIndex - 2
      if (next > -1) {
        ;(
          (evt.target as HTMLInputElement)?.form?.elements[next] as HTMLElement
        )?.focus()
      }
    } else if (evt.key === 'Tab' || (+evt.key >= 0 && +evt.key <= 9)) {
      const notTab = evt.key !== 'Tab'
      const next = (evt.target as HTMLInputElement).tabIndex
      if (next < Object.keys(code).length) {
        ;(
          (evt.target as HTMLInputElement)?.form?.elements[
            next - (notTab ? 0 : 1)
          ] as HTMLElement
        )?.focus()
      }
    }
  }

  const checkCode = debounce(
    (code: Code) => setCodeSuccess(Object.values(code).join('') === '111111'),
    600
  )

  const codeNotTrue = codeSuccess !== true

  return (
    <StyledActivation>
      <StyledActivationCard>
        <StyledActivationCardContent>
          <StyledActivationCardHeader>
            Activation code
          </StyledActivationCardHeader>
          <PinInput
            codes={code}
            handleChange={handleCodeChange}
            handleFocus={handleCodeFocus}
            success={codeSuccess}
          />
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            onSubmit={handleFormSubmit}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel isDisabled={codeNotTrue}>
                Password*
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                inputProps={{ minLength: 8, maxLength: 20 }}
                type="password"
                placeholder="********"
                sx={{
                  ...isDisabledSx(codeNotTrue),
                }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ marginBottom: '30px' }}
            >
              <StyledBusinessFormFieldLabel isDisabled={codeNotTrue}>
                Confirm Password*
              </StyledBusinessFormFieldLabel>
              <UnderlinedInputField
                required
                inputProps={{ minLength: 8, maxLength: 20 }}
                type="password"
                placeholder="********"
                sx={{
                  ...isDisabledSx(codeNotTrue),
                }}
              />
            </Box>
            <FormControlLabel
              control={
                <Checkbox sx={{ color: 'primary.light' }} defaultChecked />
              }
              label="Yes, I would like to receive the newsletter"
              sx={{
                ...isDisabledSx(codeNotTrue),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'primary.light',
                  }}
                  required
                />
              }
              label="I agree with the Terms and Conditions"
              sx={{
                ...isDisabledSx(codeNotTrue),
                mb: '60px',
              }}
            />
            <StyledActivationNextButton
              sx={{
                ...isDisabledSx(codeNotTrue),
              }}
              type="submit"
            >
              FINISH
            </StyledActivationNextButton>
          </Box>
        </StyledActivationCardContent>
      </StyledActivationCard>
    </StyledActivation>
  )
}
export default Activation
