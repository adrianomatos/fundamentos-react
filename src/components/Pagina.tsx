import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
	titulo: string
	subtitulo: string
	children: any
}

export default function Pagina(props: any) {
	console.log(props);

	const ano = new Date().getFullYear();
	return (
		<div className="flex h-screen">

			<AreaLateral className={props.className} />

			<div className="flex flex-col flex-1">
				<Cabecalho className={props.className} titulo={props.titulo} subtitulo={props.subtitulo} />

				<Conteudo className={props.className}>{props.children}</Conteudo>

				<Rodape className={props.className} msgA="Desenvolvido por " msgB={`Todos os direitos reservados ® ${ano}`} />
			</div>
		</div>
	);
}
