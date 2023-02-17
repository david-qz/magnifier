import { ReactElement } from "react";

type Props = {
	text: string;
	didHoverIdx: (idx: number | undefined) => void;
};

export default function HoverableText({
	text,
	didHoverIdx,
}: Props): ReactElement {
	return (
		<span>
			{text.split("").map((char, idx) => (
				<span
					key={idx}
					onMouseEnter={() => didHoverIdx(idx)}
					onMouseLeave={() => didHoverIdx(undefined)}
				>
					{char}
				</span>
			))}
		</span>
	);
}
