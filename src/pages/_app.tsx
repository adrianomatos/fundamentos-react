import "../app/globals.css";
import "../app/styles.css"

export default function App(props: any) {
	const { Component, pageProps } = props;
	return <Component{...pageProps} />
};
