import classNames from 'classnames'
import React, { type FC } from 'react'

import config from '~config'

import styles from './LogoLockup.module.scss'

const { name, shortName } = config

type Props = { className?: string }

const LogoLockup: FC<Props> = ({ className }) => (
  <div className={classNames(styles.root, className)}>
    <span>{name}</span>
    <sup>{shortName}</sup>
  </div>
)

export default LogoLockup
export { LogoLockup }
