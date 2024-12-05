import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Pagina(props: any) {
	console.log(props);

	const ano = new Date().getFullYear();
	return (
		<div className="flex flex-col h-screen">

			<Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />

			<div className="flex flex-1">
				<Menu />

				<Conteudo>
					{props.children}
				</Conteudo>
			</div>

			<Rodape msgA="Desenvolvido por " msgB={`Todos os direitos reservados ® ${ano}`} />
		</div>
	);
}
