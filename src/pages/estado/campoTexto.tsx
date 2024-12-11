import Pagina from "@/components/Pagina";
import { useState } from "react"

export default function PaginaCampoTexto() {
	const [nome, setNome] = useState("");

	return <>

		<Pagina titulo="Com estado" subtitulo="Inputs inteligentes com useState">
		<input onChange={e=>{setNome(e.target.value)}} type="text" className="inputTexto" /><br/><br />

		<span>Você digitou: {nome}</span>
	</Pagina>
	</>
};
