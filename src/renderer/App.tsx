import { ReactLocation, Router } from '@tanstack/react-location'
import type * as React from 'react'
import { motion } from 'framer-motion'
import TopBar from './components/top-bar'
import { routes } from './routes'

const containerMotion = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
}

const routerLocation = new ReactLocation()

export const App = () => {
  return (
    <div tw="h-screen w-screen flex flex-col pt-12">
      <TopBar />
      <motion.div tw="h-full" {...containerMotion}>
        <Router location={routerLocation} routes={routes} />
      </motion.div>
    </div>
  )
}
