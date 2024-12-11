import Pagina from "@/components/Pagina";
import { useState } from "react"

export default function PaginaComEstado() {

	const [numero, setNumero] = useState(0);

	function incrementarNumero() {
		setNumero(numero + 1);
	}

	return <>
		<Pagina titulo="Com estado" subtitulo="Capítulo estado">
			<span>Contador: </span>
			<button
				className="bg-blue-700 py-2 px-6 rounded-md"
				onClick={incrementarNumero}>
				{numero}
			</button>
		</Pagina>
	</>
};
