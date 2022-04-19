import React from 'react'
import {
  StyledLanguageMenu,
  StyledLanguageMenuText,
  StyledMenu,
} from './LanguageMenu.styled'
import enLang from '@app/../public/static/register--en-lang.png'
import daLang from '@app/../public/static/register--da-lang.png'
import seLang from '@app/../public/static/register--se-lang.png'
import Image, { StaticImageData } from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Fade, MenuItem } from '@mui/material'

const langMap: Record<string, StaticImageData> = {
  en: enLang,
  da: daLang,
  se: seLang,
}

const LanguageMenu = () => {
  const [language, setLanguage] = React.useState('en')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('event', event)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = (lang: string) => {
    handleClose()
    setLanguage(lang)
  }

  return (
    <div>
      <StyledLanguageMenu
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        key={language}
      >
        <Image
          src={langMap[language]}
          width="40px"
          height="30px"
          alt={`${language} Lang`}
        />
        <StyledLanguageMenuText>{language}</StyledLanguageMenuText>
        <KeyboardArrowDownIcon
          sx={{ fontSize: 15, color: 'primary.dark' }}
          onMouseEnter={(e) => console.log(e)}
        />
      </StyledLanguageMenu>
      <StyledMenu
        id="language-menu"
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleMenuItemClick('en')}>
          <Image src={enLang} width={30} height={21} alt="EN lang" />
          <span>EN</span>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('da')}>
          <Image src={daLang} width={30} height={21} alt="DA lang" />
          <span>DA</span>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('se')}>
          <Image src={seLang} width={30} height={21} alt="SE lang" />
          <span>SE</span>
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

export default LanguageMenu
