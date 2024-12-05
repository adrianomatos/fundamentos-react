import MenuItem from "./MenuItem";

export default function Menu() {
	return <>
		<div className="bg-slate-500 flex flex-col justify-start items-start w-40 p-2 gap-2">
			<MenuItem texto="Home" url="/" />
			<MenuItem texto="Gatos" url="/Paginas/Cats" />
			<MenuItem texto="Cachorros" url="/Dogs" />
			<MenuItem texto="Clínica" url="/Clinica" />
		</div>
	</>
};
