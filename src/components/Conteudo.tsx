export default function Conteudo(props: any) {
	// console.log(props);
	return <>
		<div className="flex flex-1 justify-center items-center text-2xl bg-green-700 px-2 py-2">
			{props.children}
		</div>
	</>
};
