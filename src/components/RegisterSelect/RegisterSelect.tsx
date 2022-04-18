import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import {
  CustomInput,
  StyledSelectOptionContainer,
  StyledSelectOptionIconContainer,
  StyledSelectOptionText,
} from './RegisterSelect.styled'
import { Theme, SelectProps, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ENFlag from '@app/assets/svg/flags/ENFlag'
import DAFlag from '@app/assets/svg/flags/DAFlag'
import SVFlag from '@app/assets/svg/flags/SVFlag'

const useStyles = makeStyles((theme: Theme) => ({
  select: {
    color: theme.palette.common.black,
  },
  icon: { color: theme.palette.common.black },
  label: { color: theme.palette.common.black },
}))

const RegisterSelect = (props: SelectProps) => {
  const classes = useStyles()

  const [country, setCountry] = React.useState('EN')
  const handleChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setCountry(value)
  }

  return (
    <MuiSelect
      id="sign-up--select"
      value={country}
      onChange={handleChange}
      input={<CustomInput />}
      classes={{
        select: classes.select,
        icon: classes.icon,
      }}
      sx={{ m: 0 }}
      {...props}
    >
      <MenuItem value={'EN'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <ENFlag sx={{ fontSize: 20 }} />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>EN</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
      <MenuItem value={'DA'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <DAFlag sx={{ fontSize: 20 }} />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>DA</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
      <MenuItem value={'SE'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <SVFlag sx={{ fontSize: 20 }} />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>SE</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
    </MuiSelect>
  )
}

export default RegisterSelect
