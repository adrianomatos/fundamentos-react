export default function Funcoes() {

	function Titulo() {
		return <h1>Título</h1>
	}

	function Lista() {
		return <ul>
			<li>A</li>
			<li>B</li>
			<li>C</li>
		</ul>
	}

	return <>
		<div>
			Funções
			{Titulo()}
			{Lista()}
		</div>
	</>
};
