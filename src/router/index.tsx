import React, { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import Guard from '@/components/Guard'

import Redirect from './redirect'

const Auth = lazy(() => import('@/pages/auth'))

const Home = lazy(() => import('@/pages/home'))

const routes = [
  {
    path: '/',
    element: <Redirect to="/auth"></Redirect>,
  },
  {
    path: '/auth',
    meta: {
      title: '授权',
    },
    element: (
      <Suspense>
        <Auth />
      </Suspense>
    ),
  },

  {
    path: '/home',
    meta: {
      title: 'Home',
    },
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
]
export default function RouteElement() {
  routes.map((e) => {
    e.element = <Guard meta={e.meta}>{e.element}</Guard>
  })
  const element = useRoutes(routes)
  return element
}
