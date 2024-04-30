/* SPDX-License-Identifier: Apache-2.0 */

import { FC } from 'react'
import s from './LoadingRing.module.scss'
import { clsx as cn } from 'clsx'

type LoadingRingProps = {
  styleType?: 'primary' | 'secondary'
}

const LoadingRing: FC<LoadingRingProps> = ({ styleType = 'primary' }) => {
  return (
    <div className={cn(s.ring, styleType === 'secondary' && s.secondary)}></div>
  )
}

export default LoadingRing
