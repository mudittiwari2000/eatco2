import React from 'react'
import {
  StyledActivation,
  StyledActivationCard,
  StyledActivationCardContent,
  StyledActivationCardHeader,
  StyledActivationNextButton,
  StyledActivationSuccessCircle,
} from './Activation.styled'
import PinInput from '../PinInput'
import { Code } from '../PinInput/PinInput'
import { Box } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import theme from '@app/theme'
import { useRouter } from 'next/router'

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

  const handleCodeChange = (
    otpNumber: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCode((prev) => ({ ...prev, [otpNumber]: event.target.value }))
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

  const checkCode = (code: Code) =>
    setCodeSuccess(Object.values(code).join('') === '111111')
  600

  return (
    <StyledActivation>
      <StyledActivationCard>
        <StyledActivationCardContent>
          <StyledActivationCardHeader>
            Activation code
          </StyledActivationCardHeader>
          {codeSuccess ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb="41px"
            >
              <StyledActivationSuccessCircle>
                <Box className="icon">
                  <CheckOutlinedIcon
                    sx={{ fill: theme.palette.primary.dark }}
                  />
                </Box>
              </StyledActivationSuccessCircle>
            </Box>
          ) : (
            <PinInput
              codes={code}
              handleChange={handleCodeChange}
              handleFocus={handleCodeFocus}
              success={codeSuccess}
            />
          )}
          <StyledActivationNextButton
            onClick={() =>
              !codeSuccess ? checkCode(code) : router.push('/register/password')
            }
          >
            {!codeSuccess ? 'SUBMIT' : 'CONTINUE'}
          </StyledActivationNextButton>
        </StyledActivationCardContent>
      </StyledActivationCard>
    </StyledActivation>
  )
}
export default Activation
