import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react"

export default function PaginaComEstado() {

	const [numero, setNumero] = useState(0);

	function incrementarNumero() {
		setNumero(numero + 1);
	}

	function decrementarNumero() {
		setNumero(numero - 1)
	}

	return <>
		<Pagina titulo="Com estado e 2 botões" subtitulo="Capítulo estado">
			<div className="w-full h-full flex flex-col gap-2 justify-center items-center">
				<div className="text-2xl">Contador: {numero}</div>
				<div className="flex gap-2 ">
					<button className="bg-blue-700 py-3 px-3 rounded-full" onClick={decrementarNumero}>
						<IconMinus />
					</button>

					<button className="bg-blue-700 py-3 px-3 rounded-full" onClick={incrementarNumero}>
						<IconPlus />
					</button>
				</div>
			</div>
		</Pagina>
	</>
};
