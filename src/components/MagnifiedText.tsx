import { ReactElement } from "react";

type Props = {
	text: string;
	fontSize: number;
};

export default function MagnifiedText({ text, fontSize }: Props): ReactElement {
	return <span style={{ fontSize }}>{text}</span>;
}
