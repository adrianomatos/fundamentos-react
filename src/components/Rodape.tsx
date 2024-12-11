export default function Rodape(props: any) {
	return <>
		<div className={`flex justify-between items-center  text-white text-xl px-1 py-1 h-12 ${props.className} ?? ''`}>

			<div className="text-sm text-center">{props.msgA}<a className="text-cyan-500 hover:underline" target="_blank" href="https://github.com/adrianomatos">Adriano Matos</a></div>

			<div className="text-sm text-center">{props.msgB}</div>
		</div>
	</>

};
