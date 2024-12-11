import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral(props: any) {
	return (
		<div className={props.className}>
			<Logo />
			<Menu />
		</div>
	);
}
