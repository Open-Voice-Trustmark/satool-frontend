/* SPDX-License-Identifier: Apache-2.0 */

import { FC, ReactNode } from 'react'
import s from './Page.module.scss'

type PageProps = {
  children: ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
  return <div className={s.page}>{children}</div>
}

export default Page
