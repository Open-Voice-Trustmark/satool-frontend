/* SPDX-License-Identifier: Apache-2.0 */

import { useAuth } from '@spartanbits/react-auth'
import { useEffect } from 'react'
import { useQuestionnaireStore } from 'store/store'

type Props = {
  fetch?: boolean
}

const useSections = ({ fetch = true }: Props) => {
  const { sections, fetchSections } = useQuestionnaireStore()
  const { get } = useAuth()

  useEffect(() => {
    if (sections.length === 0) {
      fetch && fetchSections(get)
    }
  }, [fetchSections, sections])

  return sections
}

export default useSections
