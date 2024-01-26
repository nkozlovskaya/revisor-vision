import { MainPage } from '../pages/MainPage'
import { FavoritesPage } from '../pages/FavoritesPage'
import { RouteProps } from 'react-router-dom'


export type AppRoutesProps = RouteProps 

export enum AppRoutes {
  MAIN = 'main',
  FAVORITES = 'favorites'
//   NOT_FOUND = 'not_found',

}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FAVORITES]: '/favorites',
  
//   [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />
  },
  [AppRoutes.FAVORITES]: {
    path: RoutePaths.favorites,
    element: <FavoritesPage />
  },
  
//   [AppRoutes.NOT_FOUND]: {
//     path: RoutePaths.not_found,
//     element: <NotFoundPage className={''}/>
//   }
}