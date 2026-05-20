import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import LogoLockup from '~components/LogoLockup'

const Header: FC = () => (
  <HeaderContainer gutter>
    <SmartLink href="/">
      <LogoLockup />
    </SmartLink>
  </HeaderContainer>
)

export default Header
export { Header }
