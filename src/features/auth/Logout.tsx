/* SPDX-License-Identifier: Apache-2.0 */

import { useAuth } from '@spartanbits/react-auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    logout()
      .then((_r: any) => navigate('/'))
      .catch((_e: any) => navigate('/'))
  }, [])

  return null
}

export default Logout
