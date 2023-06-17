import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './assets/scss/main.scss'
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import createCache from '@emotion/cache';
import { router } from './router'
import { store } from './store/index'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


const createApp = () => {
  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <RouterProvider router={router} />
      </CacheProvider>
    </Provider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(createApp())

