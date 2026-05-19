import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import LogoLockup from '~components/LogoLockup'

import styles from './Header.module.scss'

const Header: FC = () => (
  <>
    <HeaderContainer gutter theme={{ root: styles.root }}>
      <SmartLink href="/">
        <LogoLockup />
      </SmartLink>
    </HeaderContainer>
  </>
)

export default Header
export { Header }
