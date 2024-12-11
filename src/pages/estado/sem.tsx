import Pagina from "@/components/Pagina";

export default function PaginaSemEstado() {
	let numero = 0;

	function incrementarNumero() {
		numero += 1;
		console.log(numero);
	}

	return <>
		<Pagina titulo="Sem estado" subtitulo="Capítulo estado">
			<span>Valor: </span>
			<button className="bg-blue-700 py-2 px-6 rounded-md" onClick={incrementarNumero}>
				{numero}
			</button>
		</Pagina>
	</>
};
