interface BotoesProps {
	alterarNome(nome: string): void
}

export default function Botoes(props: BotoesProps) {
	return <>
		<div className="flex justify-center items-center gap-2">
			<button onClick={() => props.alterarNome("Maria")} className="botao">Maria</button>
			<button onClick={() => props.alterarNome("João")} className="botao botao-laranja">João</button>
			<button onClick={() => props.alterarNome("Pedro")} className="botao botao-azul">Pedro</button>
		</div>
	</>
};
