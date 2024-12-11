import Link from "next/link";

// Definindo tipos de props com typescript
// Neste caso sendo todos obrigatórios
interface MenuItemProps {
	texto: string
	url: string
	icone: any
}

// export default function MenuItem(props: any) {
export default function MenuItem(props: MenuItemProps) {
	return <>
		<Link href={props.url} className=" hover:bg-zinc-800 cursor-pointer text-base w-full rounded-md px-1 py-1 flex items-center gap-1">
			<span>{props.icone}</span>
			<span>{props.texto}</span>
		</Link>
	</>
};
