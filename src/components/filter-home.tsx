import { Separator } from "./ui/separator";

export function FilterHome() {
  return (
    <div className="inline-flex justify-center text-sm items-center space-x-4 lg:space-x-6 rounded-full bg-[#323232] p-2 w-[440px]">
      <div>
        Categoria
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div>
        Filtro
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div>
        Organizar
      </div>
      <Separator orientation='vertical' className="h-6" />
      <div>
        Procurar
      </div>
    </div>
  );
}
