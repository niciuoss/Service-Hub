import { Handshake } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { AccountMenu } from './account-menu'

export function Header(){
  return(
    <div className="border-b bg-[#323232]">
      <div className="flex h-16 items-center gap-6 px-6">
        <Handshake className='h-8 w-8 stroke-[2]'/>
        <h1 className='font-bold text-xl'>Service Hub</h1>

        <Separator orientation='vertical' className='h-6'/>

        <nav className='flex items-center space-x-4 lg:space-x-6'>
          <NavLink to="/">
            Home
          </NavLink>
          <Separator orientation='vertical' className='h-6'/>

          <NavLink to="/categories">
            Categorias
          </NavLink>
          <Separator orientation='vertical' className='h-6'/>

          <NavLink to="/services">
            Serviços
          </NavLink>
          <Separator orientation='vertical' className='h-6'/>

          <NavLink to="/explore">
            Explorar
          </NavLink>
          <Separator orientation='vertical' className='h-6'/>
        </nav>

        <div className='ml-auto flex items-center gap-2'>
          <ThemeToggle/>
          <AccountMenu/>
        </div>
      </div>
    </div>
  )
}