import "../app/globals.css"
import Pagina from "@/components/Pagina";

export default function Clinica() {
	const ano = new Date().getFullYear();
	return <>

		<Pagina titulo="Clínica Dr Clayton" subtitulo="Consulta, Fisioterapia, Loja ortopédica e Academia">
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus consectetur ullam, perferendis doloremque quaerat atque, harum voluptatum maiores, sapiente numquam porro eum quas ad minima ipsam veniam aspernatur. Adipisci!</p>
		</Pagina>

	</>
};
