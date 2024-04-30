/* SPDX-License-Identifier: Apache-2.0 */

import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { P } from './Text'
import { clsx as cn } from 'clsx'
import s from './Loading.module.scss'
import LoadingRing from './LoadingRing'

type LoadingProps = {
  styleType?: 'primary' | 'secondary'
}

const Loading: FC<LoadingProps> = ({ styleType = 'primary' }) => {
  const { t } = useTranslation()

  return (
    <div className={s.loading}>
      <div className={s.wrapper}>
        <LoadingRing styleType={styleType} />
        <P
          className={cn(
            styleType === 'primary' && s.primary,
            styleType === 'secondary' && s.secondary
          )}
        >
          {t('loading')}
        </P>
      </div>
    </div>
  )
}

export default Loading
