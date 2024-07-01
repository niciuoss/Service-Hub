import { ChevronDown, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AccountMenu(){
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          Perfil
          <ChevronDown className="w-4 h-4"/> 
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Vinicius Sales</span>
          <span className="text-xs font-normal text-muted-foreground">vinicius@email.com</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2"/>
          <span>Gerenciar Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="w-4 h-4 mr-2"/>
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}