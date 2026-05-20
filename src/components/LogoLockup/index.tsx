import React, { type FC } from 'react'

import config from '~config'

import styles from './LogoLockup.module.scss'

const { name, shortName } = config

const LogoLockup: FC = () => (
  <div className={styles.root}>
    <span>{name}</span>
    <sup>{shortName}</sup>
  </div>
)

export default LogoLockup
