import { useState } from "react"
import Botoes from "./Botoes"

export default function Valor() {

	const [nome, setNome] = useState('');

	function alterar(nome: string) {
		// console.log(`Executada: ${nome}`);
		console.log("Executada:", nome);
		setNome(nome)
	}

	return <div className="flex flex-col gap-5 bg-zinc-700 p-4 rounded-md">
		<div className="text-8xl font-black">{nome}</div>
		<Botoes alterarNome={alterar} />
	</div>
};