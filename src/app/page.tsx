import { IconBrandReactNative } from "@tabler/icons-react";
import "../app/globals.css"
import Pagina from "@/components/Pagina";

export default function Home() {
	const ano = new Date().getFullYear();
	return (

		<Pagina titulo="Pet Love" subtitulo="Adote o pet perfeito para você.">
			<IconBrandReactNative size={200} stroke={1}/>
			<span className="font-black">Conteudo Childrem principal</span>
			<span className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, ea!</span>


<div className="flex flex-col gap-2 pt-2">
				<button className="botao">CSS de Tailwind Apply</button>
				<button className="botao botao-laranja">CSS de Tailwind Apply</button>
				<button className="botao botao-azul">CSS de Tailwind Apply</button>
</div>
		</Pagina>

	);
}
