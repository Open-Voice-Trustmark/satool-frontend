/* SPDX-License-Identifier: Apache-2.0 */

import Loader from 'components/Loader'
import { fetchSiteInfo } from 'features/questions/api'
import Layout from 'layout/Layout'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './PageInfo.module.scss'

const PageInfo = () => {
  const { infoSlug } = useParams()
  const [content, setContent] = useState('')
  const [hasChanges, setHasChanges] = useState(true)

  useEffect(() => setHasChanges(true), [infoSlug, setHasChanges])

  return (
    <Layout>
      <Loader
        changes={hasChanges}
        f={() => fetchSiteInfo(infoSlug || 'info')}
        r={(r) => {
          setContent(r.result)
          setHasChanges(false)
        }}
        render={() => (
          <div
            className={s.content}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
      />
    </Layout>
  )
}

export default PageInfo
