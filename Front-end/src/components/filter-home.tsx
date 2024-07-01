import { Search } from "lucide-react";
import { Separator } from "./ui/separator";

export function FilterHome() {
  return (
    <div className="inline-flex justify-center text-sm items-center space-x-4 lg:space-x-6 rounded-full bg-[#323232] p-2 w-[700px]">
      <div className="pl-2">
        Categoria
        <div className="text-muted-foreground">
          Escolha uma categoria
        </div>
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div>
        Filtro
        <div className="text-muted-foreground">
          Selecionar filtros
        </div>
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div>
        Ordenar
        <div className="text-muted-foreground">
          Escolha uma opção
        </div>
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div className="">
        <div className="flex gap-2">
          Buscar
          <Search className="h-5 w-5"/>
        </div>
        <div className="text-muted-foreground">
          Nome do Serviço
        </div>
      </div>
    </div>
  );
}
