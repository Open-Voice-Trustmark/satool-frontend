/* SPDX-License-Identifier: Apache-2.0 */

import { FC } from 'react'
import s from './Logo.module.scss'
import { clsx as cn } from 'clsx'

type LogoProps = {
  styleType?: 'regular' | 'white'
}

const Logo: FC<LogoProps> = ({ styleType }) => {
  return <div className={cn(s.logo, styleType === 'white' && s.white)}></div>
}

export default Logo
