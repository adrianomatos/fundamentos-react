import Pagina from "@/components/Pagina";

export default function Clinica() {

	function Executar() {
		console.log("Botão pressionado!");

	}

	const ano = new Date().getFullYear();
	return <>

		<Pagina
			titulo="PetShop Pet Feliz"
			subtitulo="Consulta, Castração, Banho, Toza"
			// className=" bg-gradient-to-r from-blue-600 to-zinc-900"
			className="bg-blue-900"
		>
			{/* <!-- Estilo padrão do navegador (aplicando CSS personalizado) --> */}
			<h1>Serviços</h1>
			<p>Consulta, Vacinação, Castração, Banho e Toza</p><br />

			<h2>Sobre nós</h2>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam possimus consectetur ullam, perferendis doloremque quaerat atque, harum voluptatum maiores, sapiente numquam porro eum quas ad minima ipsam veniam aspernatur. Adipisci!</p><br />

			<button onClick={Executar} className="bg-blue-700 py-2 px-4 rounded-md" type="button">Teste</button>
		</Pagina>
	</>
};
