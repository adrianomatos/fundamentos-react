export default function Rodape(props: any) {
	return <>
		<div className="flex justify-between items-center h-14 bg-white text-black text-xl px-2">
			<div className="text-sm">{props.msgA}<a className="text-cyan-600" target="_blank" href="https://github.com/adrianomatos">@Adriano Matos</a></div>
			<div className="text-sm">{props.msgB}</div>
		</div>
	</>

};
