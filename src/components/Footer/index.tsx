import {
  FooterContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React, { type FC } from 'react'

import config from '~config'
import { ReactComponent as MagefayreSvg } from '~images/magefayre.svg'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const links = {
  Instagram: { icon: 'simple-icons:instagram' },
  Magefayre: {
    href: 'https://magefayre.com/',
    verb: '',
    preposition: 'built by',
    children: <MagefayreSvg />
  }
}

const Footer: FC = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Navigation
      inline
      links={Object.values(links)}
      renderLink={(
        { href, icon, verb = 'Follow', preposition = 'on', children, ...rest },
        index
      ) => {
        const key = Object.keys(links).at(index)

        return (
          <SmartLink href={href ?? socialLinks[key]} target="_blank" {...rest}>
            <Icon
              name={icon}
              theme={{ root: styles.icon }}
              alt={[verb, name, preposition, key].join(' ').trim()}
            >
              {children}
            </Icon>
          </SmartLink>
        )
      }}
      theme={{ link: styles.link }}
    />
  </FooterContainer>
)

export default Footer
export { Footer }
