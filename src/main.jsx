import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './assets/scss/main.scss'
import { router } from './router'
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const createApp = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <RouterProvider router={router} />
    </CacheProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(createApp())

