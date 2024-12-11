interface CabecacloProps {
	titulo: string;
	subtitulo: string;
	// className opcional
	className?: string;
}
// export default function Cabecalho(props: CabecacloProps) {
export default function Cabecalho(props: any) {
	return <>
		<div className={`
			flex flex-col justify-center items-start py-1 px-1 bg-zinc-600 h-16
			${props.className} ?? ''`}>
			<h1 className="text-2xl font-black text-white">{props.titulo}</h1>
			<h2 className="text-white text-sm">{props.subtitulo}</h2>
		</div>
	</>
};
