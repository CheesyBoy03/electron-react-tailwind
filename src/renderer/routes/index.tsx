import { Route } from '@tanstack/react-location'
import { Routes } from '../types/enums'
import { Home } from './home'

export const routes: Route[] = [
  {
    path: Routes.Home,
    element: <Home />
  }
]
