import { Outlet } from "react-router-dom";
import logo from '@/assets/logo.png';

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div id="info" className="antialiased lg:w-1/4 h-full lg:border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between order-2 lg:order-1 max-h-[30%] lg:max-h-full lg:h-screen">
        <div className="flex items-center gap-3 text-lg text-foreground"> 
          <img src={logo} alt="Logo" width={60} height={40}/>
          <span className="font-semibold">
            Service Hub

          </span>
        </div>
        <footer className="text-sm">
          Service Hub &copy; Direitos Reservados - {new Date().getFullYear()}
        </footer>
      </div>
      <div id="content" className="lg:w-3/4 flex flex-col items-center justify-center order-1 lg:order-2 flex-grow lg:flex-grow-0 min-h-[70vh]">
        <Outlet/>
      </div>
    </div>
  );
}
