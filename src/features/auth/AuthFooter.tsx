/* SPDX-License-Identifier: Apache-2.0 */

import { Link } from 'react-router-dom'
import sButton from '../../components/Button.module.scss'
import { useTranslation } from 'react-i18next'
import s from './AuthFooter.module.scss'
import LoadingRing from 'components/LoadingRing'

export default function AuthFooter({
  onActionClick,
  actionText,
  loading,
  showLogin = false,
}: any) {
  const { t } = useTranslation()
  const handleActionClick = (e: any) => {
    if (!onActionClick) return
    e.preventDefault()
    onActionClick(e)
  }

  const getSuggestion = () => {
    return !showLogin ? (
      <>
        {t('text_have_no_account')}
        <br /> <Link to="/register">{t('button_register')}</Link>
      </>
    ) : (
      <>
        {t('text_already_have_account')}
        <br /> <Link to="/login">{t('button_log_in')}</Link>
      </>
    )
  }

  return (
    <div className={s.authFooter}>
      {loading ? (
        <LoadingRing />
      ) : (
        <input
          className={sButton.button}
          type="submit"
          value={actionText}
          onClick={handleActionClick}
        />
      )}
      <p>
        {getSuggestion()} |{' '}
        <Link to="/accounts/password/reset">{t('link_forgot_password')}</Link>
      </p>
    </div>
  )
}
