import Link from "next/link";

export default function MenuItem(props: any) {
	return <>
		<Link href={props.url} className="bg-zinc-600 hover:bg-zinc-800 cursor-pointer text-xl w-full rounded-md px-1 py-1">
			{props.texto}
		</Link>
	</>
};
