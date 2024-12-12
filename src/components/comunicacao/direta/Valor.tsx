interface ValorProps {
	texto: string
}

export default function Valor(props: ValorProps) {
	return <>
		<div className="bg-yellow-900 text-8xl font-black rounded-md p-4">
			{props.texto}
		</div>
	</>
};