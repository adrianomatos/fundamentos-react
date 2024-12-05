export default function Cabecalho(props: any) {
	// console.log(props);	
	return <>
		<div className="flex flex-col justify-center items-center py-2 px-2 bg-amber-600 ">{/* rounded-lg */}
			<div className="text-2xl font-black">{props.titulo}</div>
			<div>{props.subtitulo}</div>
		</div>
	</>
};
