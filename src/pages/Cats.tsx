import Pagina from "@/components/Pagina";

export default function Cats() {
	const ano = new Date().getFullYear();
	return <>
		<Pagina titulo="Gatos - Ótima escolha" subtitulo="Gatinhos são fofinhos.">
			<p className="flex justify-start items-start">Conteudo Cats Children</p>
		</Pagina>
	</>
}