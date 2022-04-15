import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import {
  CustomInput,
  StyledSelectOptionContainer,
  StyledSelectOptionIconContainer,
  StyledSelectOptionText,
} from './BusinessFormSelect.styled'
import { Theme, SelectProps, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DAFlag from '@app/assets/svg/flags/DAFlag'
import SVFlag from '@app/assets/svg/flags/SVFlag'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const useStyles = makeStyles((theme: Theme) => ({
  select: {
    color: theme.palette.common.black,
  },
  icon: { color: theme.palette.common.black },
  label: { color: theme.palette.common.black },
}))

const BusinessTypeSelect = (props: SelectProps) => {
  const classes = useStyles()

  const [businessType, setBusinessType] = React.useState('Restaurant')
  const handleChange = (evt: SelectChangeEvent<unknown>) => {
    const { value } = evt.target as HTMLSelectElement
    setBusinessType(value)
  }

  return (
    <MuiSelect
      id="sign-up--business-form--business-type--select"
      value={businessType}
      onChange={handleChange}
      input={<CustomInput />}
      classes={{
        select: classes.select,
        icon: classes.icon,
      }}
      sx={{ m: 0 }}
      IconComponent={KeyboardArrowDownIcon}
      {...props}
    >
      <MenuItem value={'Restaurant'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionText>Restaurant</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
    </MuiSelect>
  )
}

interface CountrySelectProps extends SelectProps {
  country: string
  handleChange: (evt: SelectChangeEvent<unknown>) => void
}

const CountrySelect = (props: CountrySelectProps) => {
  const classes = useStyles()
  const { handleChange, ...selectProps } = props

  return (
    <MuiSelect
      id="sign-up--business-form--business-type--select"
      value={props.country}
      onChange={handleChange}
      input={<CustomInput />}
      classes={{
        select: classes.select,
        icon: classes.icon,
      }}
      sx={{ m: 0 }}
      IconComponent={KeyboardArrowDownIcon}
      displayEmpty
      {...selectProps}
    >
      <MenuItem value="">
        <StyledSelectOptionText>Select Country</StyledSelectOptionText>
      </MenuItem>
      <MenuItem value={'DA'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <DAFlag />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>Denmark</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
      <MenuItem value={'SV'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <SVFlag />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>Sweden</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
    </MuiSelect>
  )
}

export { BusinessTypeSelect, CountrySelect }
