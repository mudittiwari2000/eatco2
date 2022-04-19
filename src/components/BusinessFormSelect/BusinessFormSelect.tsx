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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) => ({
  select: {
    color: theme.palette.common.black,
  },
  icon: { color: theme.palette.common.black },
  label: { color: theme.palette.common.black },
}))

const BusinessTypeSelect = (props: SelectProps) => {
  const classes = useStyles()

  return (
    <MuiSelect
      id="sign-up--business-form--business-type--select"
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
      <MenuItem value={'Caterer'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionText>Caterer</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
      <MenuItem value={'Private Company'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionText>Private Company</StyledSelectOptionText>
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
      {...selectProps}
    >
      <MenuItem value={'DA'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <Image
              src="/static/business-form--country-select--da.png"
              height={30}
              width={30}
              alt="Denmark Flag"
            />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>Denmark</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
      <MenuItem value={'SE'}>
        <StyledSelectOptionContainer>
          <StyledSelectOptionIconContainer>
            <Image
              src="/static/business-form--country-select--se.png"
              height={30}
              width={30}
              alt="Sweden Flag"
            />
          </StyledSelectOptionIconContainer>
          <StyledSelectOptionText>Sweden</StyledSelectOptionText>
        </StyledSelectOptionContainer>
      </MenuItem>
    </MuiSelect>
  )
}

export { BusinessTypeSelect, CountrySelect }
