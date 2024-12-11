export default function Conteudo(props: any) {
	// console.log(props);
	return <>
		<div className={`flex flex-col flex-1 justify-start items-center bg-green-700 px-2 py-2 text-justify`} >
			{props.children}
		</div>
	</>
};
