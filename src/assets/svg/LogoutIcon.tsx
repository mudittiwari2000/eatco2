import theme from '@app/theme'
import { SvgIcon, SvgIconProps } from '@mui/material'

const LogoutIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="21.656"
      height="16.5"
      viewBox="0 0 21.656 16.5"
      {...props}
    >
      <path
        id="Logout"
        d="M21.355-9.48a.994.994,0,0,1,.3.73.994.994,0,0,1-.3.73L14.137-.8a.994.994,0,0,1-.73.3.994.994,0,0,1-.73-.3.994.994,0,0,1-.3-.73V-5.656H6.531a1,1,0,0,1-.73-.3.994.994,0,0,1-.3-.73v-4.125a1,1,0,0,1,.3-.73,1,1,0,0,1,.73-.3h5.844v-4.125a.994.994,0,0,1,.3-.73.994.994,0,0,1,.73-.3.994.994,0,0,1,.73.3Zm-13.105-7a.5.5,0,0,0-.15-.365A.5.5,0,0,0,7.734-17H4.125A3.978,3.978,0,0,0,1.2-15.8,3.978,3.978,0,0,0,0-12.875v8.25A3.978,3.978,0,0,0,1.2-1.7,3.978,3.978,0,0,0,4.125-.5H7.734A.5.5,0,0,0,8.1-.65a.5.5,0,0,0,.15-.365V-2.734A.5.5,0,0,0,8.1-3.1a.5.5,0,0,0-.365-.15H4.125a1.321,1.321,0,0,1-.967-.408,1.321,1.321,0,0,1-.408-.967v-8.25a1.321,1.321,0,0,1,.408-.967,1.321,1.321,0,0,1,.967-.408H7.734A.5.5,0,0,0,8.1-14.4a.5.5,0,0,0,.15-.365Z"
        transform="translate(21.656 -0.5) rotate(180)"
        fill={theme.palette.grey[500]}
      />
    </SvgIcon>
  )
}

export default LogoutIcon