import Pagina from "@/components/Pagina";
import { useState } from "react"

export default function Calculadora() {

	const [inputA, setInputA] = useState(0);
	const [inputB, setInputB] = useState(0);
	const [resultado, setResultado] = useState(0);

	function somar() {
		setResultado(inputA + inputB);
	}

	function subtrair() {
		setResultado(inputA - inputB);
	}

	function multiplicar() {
		setResultado(inputA * inputB);
	}

	function dividir() {
		setResultado(inputA / inputB);
	}

	function limpar() {
		setInputA(Number(0));
		setInputB(Number(0));
		setResultado(Number(0));
	}

	return <>
		<Pagina titulo="Com estado" subtitulo="Calculadora com useState">
			<div className="bg-gray-500 rounded-md flex flex-col justify-center items-center py-10">
				<h1>Calculadora React</h1>

				<div className="flex flex-row pt-5">
					<input className="inputTexto" onChange={e => { setInputA(Number(e.target.value)) }} type="number" value={inputA} />
					<input className="inputTexto" onChange={e => { setInputB(Number(e.target.value)) }} type="number" value={inputB} />
				</div>

				<div className="flex gap-5 py-5">
					<button onClick={somar} className="botao">Soma</button>
					<button onClick={subtrair} className="botao botao-azul">Subtração</button>
					<button onClick={multiplicar} className="botao botao-laranja">Multiplicação</button>
					<button onClick={dividir} className="botao botao-verde">Divisão</button>
				</div>

				<div className="flex gap-5 py-5">
					<button onClick={limpar} className="bg-yellow-500 rounded-md p-2">Limpar campos</button>
				</div>

				<div>Resultado: {resultado}</div>
			</div>
		</Pagina>
	</>
};
