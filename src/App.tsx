import { RouterProvider } from 'react-router-dom'
import igrejaLogo from './assets/igreja.svg'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {

  return (
  <HelmetProvider>
    <ThemeProvider storageKey='site-theme' defaultTheme='dark'>
      <Helmet titleTemplate='%s | Igreja Presbiteriana Central '/>
      <RouterProvider router={router} />
      </ThemeProvider>
  </HelmetProvider>  
  )
}