import theme from '@app/theme'
import { toRem } from '@app/utils'
import styled from '@emotion/styled'
import { Menu, MenuProps } from '@mui/material'
import { styled as muiStyled, alpha } from '@mui/material/styles'

export const StyledLanguageMenu = styled.div`
  padding: ${toRem('10px')};
  border-radius: ${toRem('25px')};
  border: 1px solid ${theme.palette.primary.main};
  display: flex;
  align-items: center;
`

export const StyledLanguageMenuText = styled.p`
  font-family: ${theme.typography.fontFamily};
  font-weight: normal;
  font-size: ${toRem('14px')};
  line-height: ${toRem('19px')};
  color: ${theme.palette.primary.main};
  text-transform: uppercase;
  margin-left: ${toRem('10px')};
  margin-right: ${toRem('6px')};
`

export const StyledMenu = muiStyled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: toRem('10px'),
    marginTop: toRem('5px'),
    color: theme.palette.primary.dark,
    boxShadow: '0px 3px 20px #0000001A',
    '& .MuiMenu-list': {
      padding: '10px 20px 10px 20px',
    },
    '& .MuiMenuItem-root': {
      padding: '10px',
      '& span': {
        color: theme.palette.primary.dark,
        marginLeft: toRem('15px'),
        fontFamily: theme.typography.fontFamily,
        fontWeight: 'normal',
        fontSize: toRem('14px'),
        lineHeight: toRem('19px'),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))
