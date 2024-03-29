import {  Suspense, memo, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from './routeConfig'

import { Loader } from '../components/UI/Loader/Loader'

const AppRouter = () => {

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<Loader />}>
            {route.element}
        </Suspense>)
      return (
        <Route
            key={route.path}
            path={route.path}
            element={ element} />
    )
  }, [])
  return (
      <Routes>
          {Object.values(routeConfig).map(renderWithWrapper)} 
      </Routes>
  )
}

export default memo(AppRouter)