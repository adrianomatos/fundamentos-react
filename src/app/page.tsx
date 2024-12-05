import "../app/globals.css"
import Pagina from "@/components/Pagina";

export default function Home() {
	const ano = new Date().getFullYear();
	return (
		<Pagina titulo="Pet Love" subtitulo="Encontre o pet perfeito para você.">
			<p>Conteudo Childrem principal</p>
		</Pagina>
	);
}
