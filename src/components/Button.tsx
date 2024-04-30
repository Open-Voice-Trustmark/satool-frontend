/* SPDX-License-Identifier: Apache-2.0 */

import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { clsx as cn } from 'clsx'
import s from './Button.module.scss'

type ButtonProps = {
  to?: string
  back?: boolean
  onClick?: () => void
  className?: string
  children: ReactNode
  styleType?: 'primary' | 'secondary' | 'red'
  variant?: 'regular' | 'inverted'
}

const Button: FC<ButtonProps> = ({
  to,
  back = false,
  onClick,
  styleType = 'primary',
  variant = 'regular',
  className,
  ...props
}) => {
  const cls = cn(
    className,
    s.button,
    to && s.link,
    styleType === 'secondary' && s.secondary,
    variant === 'inverted' && s.inverted,
    styleType === 'red' && s.red
  )
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {props.children}
      </Link>
    )
  }
  return (
    <button className={cls} onClick={onClick}>
      {props.children}
    </button>
  )
}

export default Button
