import { IconBraces, IconCalculator, IconCat, IconCode, IconDog, IconEmergencyBed, IconForms, IconFunction, IconH1, IconHome, IconNumbers, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
	return <>
		<div className="flex flex-col justify-start items-start w-64 gap-2 p-2">

			<span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
			<MenuItem texto="Desafio Calculadora" url="/estado/calculadora" icone={<IconCalculator />} />
			<MenuItem texto="Componente Input" url="/estado/campoTexto" icone={<IconForms />} />
			<MenuItem texto="Componente c/ estado C" url="/estado/comC" icone={<IconNumbers />} />
			<MenuItem texto="Componente c/ estado B" url="/estado/comB" icone={<IconNumbers />} />
			<MenuItem texto="Componente c/ estado A" url="/estado/com" icone={<IconCode />} />
			<MenuItem texto="Componente s/ estado" url="/estado/sem" icone={<IconCode />} />

			{/* COMPONENTES */}
			<div>
				<span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
				<MenuItem texto="Home" url="/" icone={<IconHome />} />
				<MenuItem texto="Gatos" url="/Cats" icone={<IconCat />} />
				<MenuItem texto="Cachorros" url="/Dogs" icone={<IconDog />} />
				<MenuItem texto="PetShop" url="/PetShop" icone={<IconEmergencyBed />} />
			</div>

			{/* FUNDAMENTOS */}
			<div>
				{/* self-start se o item pai estivesse com items-center */}
				<span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
				<MenuItem texto="Teste" url="/Fundamentos/Teste" icone={<IconSitemap />} />
				<MenuItem texto="Titulo" url="/Fundamentos/Titulo" icone={<IconH1 />} />
				<MenuItem texto="Soma" url="/Fundamentos/Soma" icone={<IconBraces />} />
				<MenuItem texto="Funções" url="/Fundamentos/Funcoes" icone={<IconFunction />} />
			</div>
		</div>
	</>
};
