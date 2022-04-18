import styled from '@emotion/styled'
import { toRem } from '@app/utils'
import theme from '@app/theme'

export const StyledTopbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: ${toRem('32px')} ${toRem('30px')} ${toRem('30px')};
  background-color: #f4f6f8;
  z-index: 998;
`

export const StyledTopbarUserName = styled.h5`
  font-family: ${theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${toRem('18px')};
  line-height: ${toRem('24px')};
  color: #333333;
  margin-left: 10px;
`

export const StyledTopbarTitle = styled(StyledTopbarUserName)`
  font-weight: bold;
  font-size: ${toRem('26px')};
  line-height: ${toRem('36px')};
  color: ${theme.palette.primary.main};
  margin: 0;
`
