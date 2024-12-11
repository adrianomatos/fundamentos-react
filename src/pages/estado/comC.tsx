import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react"

export default function PaginaComEstado() {

	const [intervalo, setIntervalo] = useState(1);

	function incrementarIntervalo() {
		setIntervalo(intervalo + 1);
	}

	function decrementarIntervalo() {
		setIntervalo(intervalo - 1)
	}

	const [numero, setNumero] = useState(0);

	function incrementarNumero() {
		setNumero(numero + intervalo);
	}

	function decrementarNumero() {
		setNumero(numero - intervalo)
	}

	return <>
		<Pagina titulo="Com estado e com intervalo" subtitulo="Capítulo estado">
			<div className="w-full h-full flex flex-col gap-10 justify-center items-center">
				<div className="flex flex-col gap-2 justify-center items-center">

					<div className="">
						<div className="text-2xl">Intervalo: {intervalo}</div>
					</div>

					<div className="flex gap-2 ">
						<button className="bg-red-700 py-3 px-3 rounded-full" onClick={decrementarIntervalo}>
							<IconMinus />
						</button>

						<button className="bg-red-700 py-3 px-3 rounded-full" onClick={incrementarIntervalo}>
							<IconPlus />
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-2 justify-center items-center">

					<div className="">
						<div className="text-2xl">Contador: {numero}</div>
					</div>

					<div className="flex gap-2 ">
						<button className="bg-blue-700 py-3 px-3 rounded-full" onClick={decrementarNumero}>
							<IconMinus />
						</button>

						<button className="bg-blue-700 py-3 px-3 rounded-full" onClick={incrementarNumero}>
							<IconPlus />
						</button>
					</div>
				</div>
			</div>
		</Pagina>
	</>
};
