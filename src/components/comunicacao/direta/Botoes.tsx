import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {

	const [nome, setNome] = useState('')

	return <>
		<div className="flex gap-5 bg-zinc-700 p-4 rounded-md flex-col items-center">
			<div className="flex gap-5">
				<button onClick={() => setNome("Maria")} className="botao">Maria</button>

				<button onClick={() => setNome("João")} className="botao botao-azul">João</button>
				
				<button onClick={() => setNome("Pedro")} className="botao botao-laranja">Pedro</button>
			</div>
			<Valor texto={nome} />
		</div>
	</>
};