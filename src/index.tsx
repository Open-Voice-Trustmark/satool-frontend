/* SPDX-License-Identifier: Apache-2.0 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import './i18n'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
